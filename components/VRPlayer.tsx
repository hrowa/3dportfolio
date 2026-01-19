"use client";

import { useEffect, useRef } from "react";
import "@photo-sphere-viewer/core/index.css";

interface VRPlayerProps {
    url: string;
}

export default function VRPlayer({ url }: VRPlayerProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const viewerRef = useRef<any>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let destroyed = false;

        const initViewer = async () => {
            const { Viewer } = await import("@photo-sphere-viewer/core");

            if (destroyed || !containerRef.current) return;

            viewerRef.current = new Viewer({
                container: containerRef.current,
                panorama: url,
                navbar: ["autorotate", "zoom", "fullscreen"],
                mousewheel: true,
                touchmoveTwoFingers: false,
                defaultZoomLvl: 0,
            });


        };

        initViewer();

        return () => {
            destroyed = true;
            if (viewerRef.current) {
                viewerRef.current.destroy();
                viewerRef.current = null;
            }
        };
    }, [url]);

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div
                ref={containerRef}
                className="w-full h-[450px] bg-black rounded-md overflow-hidden"
            />
        </div>
    );
}
