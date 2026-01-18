import { Project } from './types';

export const projects: Project[] = [
    {
        id: "manzherok",
        title: "Manzherok, \"Forest Of Wonders\"",
        tags: ["Environment", "Cinematic"],
        category: "Interactive Installation / Unreal Engine",
        year: "2024",
        description: "Интерактивный фиджитал-парк. Разработка процедурных систем окружения и оптимизация реального времени.",
        thumbnail: "/projects/manzherok/images/img_1.png",
        software: ["UE5", "Houdini", "PCG"],
        media: [
            {
                type: "video",
                url: "/projects/manzherok/video/FinalShow.mp4"
            },
            {
                type: "video",
                url: "/projects/manzherok/video/Lake.mp4"
            },
            {
                type: "image",
                url: "/projects/manzherok/images/alivepictures.jpg"
            },
            {
                type: "image",
                url: "/projects/manzherok/images/sandbox.jpg"
            },
        ]
    },
    {
        id: "dubai-festival",
        title: "Dubai Music Festival",
        tags: ["VFX", "Cinematic", "Environment"],
        category: "VFX / Music Video",
        year: "2023",
        description: "Создание процедурных визуальных эффектов и симуляций для масштабного музыкального шоу.",
        thumbnail: "/projects/dubai/images/logo_01.png",
        software: ["Houdini", "UE5", "After Effects"],
        media: [
            {
                type: "video",
                url: "/projects/dubai/video/video.mp4", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "image",
                url: "/projects/dubai/images/logo_01.png",
            },
            {
                type: "image",
                url: "/projects/dubai/images/logo_02.png",
            },
            {
                type: "text",
                content: "Работа над проектом включала создание оптимизированных ассетов для воспроизведения на медиасерверах высокого разрешения. Мы использовали систему PCG (Procedural Content Generation) в UE5 для быстрого итерирования ландшафтов, а также кастомные шейдеры для имитации преломления света и свечения в условиях ночного фестиваля"
            },
            {
                type: "image",
                url: "/projects/dubai/images/1.png",
                layout: "carousel"
            },
            {
                type: "image",
                url: "/projects/dubai/images/2.png",
                layout: "carousel",
            },
            {
                type: "image",
                url: "/projects/dubai/images/3.png",
                layout: "carousel"
            },
            {
                type: "image",
                url: "/projects/dubai/images/4.png",
                layout: "carousel"
            },
            {
                type: "image",
                url: "/projects/dubai/images/5.png",
                layout: "carousel"
            },
            {
                type: "image",
                url: "/projects/dubai/images/6.png",
                layout: "carousel"
            },
            {
                type: "image",
                url: "/projects/dubai/images/7.png",
                layout: "carousel"
            },
            {
                type: "image",
                url: "/projects/dubai/images/8.png",
                layout: "carousel"
            },
        ]
    },
    {
        id: "leo-tig",
        title: "Animation series Leo & Tig",
        tags: ["VFX", "Animation", "Environment"],
        category: "VFX / Animation",
        year: "2017-2022",
        description: "Создание анимационного сериала Лео и Тиг",
        thumbnail: "/projects/leotig/images/poster.jpg",
        software: ["Houdini", "Maya", "Arnold"],
        media: [
            {
                type: "image",
                url: "/projects/leotig/images/poster.jpg",
            },
            {
                type: "video",
                url: "/projects/leotig/video/leotig.mp4", // Внешнее видео (YouTube/Vimeo)

            }
        ]
    },
    {
        id: "ui-mainmenu",
        title: "Main Menu UI",
        tags: ["UI", "C++", "Blueprints"],
        category: "UI / C++",
        year: "2025",
        description: `This project showcases a custom main menu system built entirely with Unreal Engine’s CommonUI framework, combining C++ logic and Blueprint-driven visuals.

The menu features:
🎮 Fully functional UI navigation (Story / Options / Credits / Quit)
⚙️ C++ foundation for input handling, transitions, and state management
🧩 Blueprints for visual logic and animation control

The goal was to create a stylish, responsive main menu for a narrative sci-fi game prototype, demonstrating how CommonUI can be seamlessly integrated into custom game interfaces using a hybrid C++ and Blueprint workflow.`,
        thumbnail: "/projects/UI/images/1.png",
        software: ["Unreal Engine", "C++"],
        media: [
            {
                type: "image",
                url: "/projects/UI/images/1.png",
            },
            {
                type: "video",
                url: "/projects/UI/video/video_ui.mp4", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "image",
                url: "/projects/UI/images/2.png",
            },
            {
                type: "image",
                url: "/projects/UI/images/3.png",
            },
            {
                type: "image",
                url: "/projects/UI/images/4.png",
            },
            {
                type: "image",
                url: "/projects/UI/images/5.png",
            },
        ]
    }
];