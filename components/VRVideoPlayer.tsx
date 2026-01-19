import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Props {
    url: string;
}

const VRVideoPlayer = ({ url }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const sphereRef = useRef<THREE.Mesh | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (!containerRef.current) return;

        // Создаём видео элемент
        const video = document.createElement("video");
        video.src = url;
        video.crossOrigin = "anonymous";
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.preload = "auto";
        videoRef.current = video;

        // Ждём загрузки видео
        video.addEventListener("loadeddata", () => {
            console.log("Video loaded and ready");
        });

        video.addEventListener("canplay", () => {
            console.log("Video can play");
        });

        // Three.js сцена
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Камера
        const camera = new THREE.PerspectiveCamera(
            75,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 0.1);
        cameraRef.current = camera;

        // Рендерер
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Создаём сферу для 360° видео
        const geometry = new THREE.SphereGeometry(500, 60, 40);
        geometry.scale(-1, 1, 1); // Инвертируем для просмотра изнутри

        // Текстура из видео
        const texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.format = THREE.RGBFormat;
        texture.generateMipmaps = false;
        texture.needsUpdate = true;

        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
        sphereRef.current = sphere;

        // Управление мышью
        let isMouseDown = false;
        let mouseX = 0, mouseY = 0;
        let lon = 0, lat = 0;
        let phi = 0, theta = 0;

        const onMouseDown = (e: MouseEvent) => {
            isMouseDown = true;
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isMouseDown) return;

            const deltaX = e.clientX - mouseX;
            const deltaY = e.clientY - mouseY;

            mouseX = e.clientX;
            mouseY = e.clientY;

            lon -= deltaX * 0.1;
            lat += deltaY * 0.1;
            lat = Math.max(-85, Math.min(85, lat));
        };

        const onMouseUp = () => {
            isMouseDown = false;
        };

        // Управление касанием (мобильные)
        let touchX = 0, touchY = 0;

        const onTouchStart = (e: TouchEvent) => {
            touchX = e.touches[0].clientX;
            touchY = e.touches[0].clientY;
        };

        const onTouchMove = (e: TouchEvent) => {
            e.preventDefault();
            const deltaX = e.touches[0].clientX - touchX;
            const deltaY = e.touches[0].clientY - touchY;

            touchX = e.touches[0].clientX;
            touchY = e.touches[0].clientY;

            lon -= deltaX * 0.1;
            lat += deltaY * 0.1;
            lat = Math.max(-85, Math.min(85, lat));
        };

        renderer.domElement.addEventListener("mousedown", onMouseDown);
        renderer.domElement.addEventListener("mousemove", onMouseMove);
        renderer.domElement.addEventListener("mouseup", onMouseUp);
        renderer.domElement.addEventListener("touchstart", onTouchStart);
        renderer.domElement.addEventListener("touchmove", onTouchMove, { passive: false });

        // Анимация
        const animate = () => {
            requestAnimationFrame(animate);

            // Обновляем текстуру видео каждый кадр
            if (video.readyState >= video.HAVE_CURRENT_DATA) {
                texture.needsUpdate = true;
            }

            phi = THREE.MathUtils.degToRad(90 - lat);
            theta = THREE.MathUtils.degToRad(lon);

            camera.position.x = 0.1 * Math.sin(phi) * Math.cos(theta);
            camera.position.y = 0.1 * Math.cos(phi);
            camera.position.z = 0.1 * Math.sin(phi) * Math.sin(theta);

            camera.lookAt(scene.position);
            renderer.render(scene, camera);
        };
        animate();

        // Адаптивность
        const handleResize = () => {
            if (!containerRef.current || !camera || !renderer) return;
            camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            renderer.domElement.removeEventListener("mousedown", onMouseDown);
            renderer.domElement.removeEventListener("mousemove", onMouseMove);
            renderer.domElement.removeEventListener("mouseup", onMouseUp);
            renderer.domElement.removeEventListener("touchstart", onTouchStart);
            renderer.domElement.removeEventListener("touchmove", onTouchMove);

            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current = null;
            }
            renderer.dispose();
            geometry.dispose();
            material.dispose();
            texture.dispose();
        };
    }, [url]);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    return (
        <div className="w-full aspect-video bg-black rounded-lg shadow-2xl overflow-hidden relative">
            <div ref={containerRef} className="w-full h-full" />

            {/* Контролы */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 bg-black bg-opacity-60 px-6 py-3 rounded-full">
                <button
                    onClick={togglePlay}
                    className="text-white hover:text-gray-300 transition-colors px-3 py-1 text-sm font-medium"
                >
                    {isPlaying ? "⏸ Pause" : "▶ Play"}
                </button>
                <button
                    onClick={toggleMute}
                    className="text-white hover:text-gray-300 transition-colors px-3 py-1 text-sm font-medium"
                >
                    {isMuted ? "🔇 Unmute" : "🔊 Mute"}
                </button>
            </div>

            {/* Подсказка */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-xs">
                Перетаскивайте мышью для просмотра 360°
            </div>
        </div>
    );
};

export default VRVideoPlayer;