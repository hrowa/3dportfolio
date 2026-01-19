import { Project } from './types';

export const projects: Project[] = [
    {
        id: "manzherok",
        title: "Manzherok, \"Forest Of Wonders\"",
        tags: ["Environment", "Cinematic", "Unreal Engine"],
        category: "Interactive Installation / Unreal Engine",
        year: "2024",
        description: "Создание масштабной интерактивной экосистемы для одного из крупнейших фиджитал-парков. Проект объединяет физическую активность и генеративную графику в реальном времени.",
        thumbnail: "/projects/manzherok/images/img_1.png",
        software: ["UE5", "Houdini", "PCG", "Lidar"],
        stack: [
            { icon: "monitor", title: "360° Mapping", desc: "Сшивка нескольких 4K потоков в единое пространство." },
            { icon: "layers", title: "PCG Systems", desc: "Процедурная генерация лесных массивов в UE5." },
            { icon: "zap", title: "Lidar Sensors", desc: "Интеграция систем отслеживания для интерактива." },
            { icon: "cpu", title: "Optimization", desc: "Стабильные 60 FPS при масштабном рендеринге." }
        ],
        media: [
            {
                type: "text",
                content: "01. VISION & GOALS\n\n— IMMERSION 360°\nСоздание бесшовной визуальной среды без «слепых зон» для полного погружения.\n\n— REACTIVE FLOW\nМгновенный отклик среды на физические касания (Low Latency) через систему сенсоров.\n\n— GAMIFICATION\nПревращение физической активности детей в визуальное вознаграждение и магический опыт."
            },
            {
                type: "video",
                url: "/projects/manzherok/video/FinalShow.mp4"
            },
            {
                type: "text",
                content: "02. CONCEPT & INSPIRATION\n\n— NATURE & TECH SYNTHESIS\nВ основе визуального кода — «магический реализм»: знакомые формы леса, наделенные сверхъестественным свечением.\n\n— LIGHT NARRATIVE\nСвет и цвет являются главными рассказчиками, вдохновленными работами teamLab и Moment Factory."
            },
            {
                type: "video",
                url: "/projects/manzherok/video/Lake.mp4"
            },
            {
                type: "text",
                content: "03. TECHNICAL WORKFLOW\n\n— PRE-VISUALIZATION\nПостроение цифрового двойника помещения и расчет искажений проекторов на углах.\n\n— CONTENT PRODUCTION\nРендеринг в эквиректанглярной проекции (Equirectangular) и создание процедурных VFX в After Effects.\n\n— INTERACTION LOGIC\nСвязка Unreal Engine с датчиками LiDAR: каждое касание стены — это уникальное событие в коде."
            },
            {
                type: "image",
                url: "/projects/manzherok/images/alivepictures.jpg"
            },
            {
                type: "text",
                content: "04. THE RESULT\n\n— BEYOND THE SCREEN\nИнсталляция превратилась в портал: стены реагируют на касания, а лес меняется в зависимости от количества людей.\n\n— ENDLESS SPACE\nПространство ощущается бесконечным за счет выверенной геометрии контента и оптимизации в 60 FPS."
            },
            {
                type: "image",
                url: "/projects/manzherok/images/sandbox.jpg"
            }
        ]
    },
    {
        id: "dubaiFestival",
        title: "Dubai Music Festival",
        tags: ["VFX", "Cinematic", "Environment", "Unreal Engine"],
        category: "Music Video / Cinematic",
        year: "2023",
        description: "Создание процедурных визуальных эффектов и симуляций для масштабного музыкального шоу.",
        thumbnail: "/projects/dubai/images/logo_01.png",
        software: ["Houdini", "UE5", "After Effects"],
        stack: [
            { icon: "layers", title: "PCG Environments", desc: "Генерация ландшафтов для быстрого итерирования сцен." },
            { icon: "zap", title: "Custom Shaders", desc: "Имитация преломления света для ночных условий фестиваля." },
            { icon: "monitor", title: "Media Servers", desc: "Оптимизация контента под экраны сверхвысокого разрешения." }
        ],
        media: [

            {
                type: "video",
                url: "/projects/dubai/video/video_02.mp4", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "text",
                content: "01. VISION & GOALS\n\n— PCG Environments\nГенерация ландшафтов для быстрого итерирования сцен.\n\n— Custom Shaders\nИмитация преломления света для ночных условий фестиваля.\n\n— Media Servers\nОптимизация контента под экраны сверхвысокого разрешения."
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
                type: "image",
                url: "/projects/dubai/images/1.png",
            },
            {
                type: "image",
                url: "/projects/dubai/images/2.png",
            },
            {
                type: "image",
                url: "/projects/dubai/images/3.png",
            },
            {
                type: "image",
                url: "/projects/dubai/images/4.png",
            },
            {
                type: "image",
                url: "/projects/dubai/images/5.png",
            },
            {
                type: "image",
                url: "/projects/dubai/images/6.png",
            },
            {
                type: "image",
                url: "/projects/dubai/images/7.png",
            }
        ]
    },
    {
        id: "leoTig",
        title: "Animation series Leo & Tig",
        tags: ["Animation Series", "VFX"],
        category: "Animation, VFX",
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
        tags: ["UI", "C++", "Blueprints", "Unreal Engine"],
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
        stack: [
            { icon: "cpu", title: "C++ Logic", desc: "Foundation for input handling and state management." },
            { icon: "layers", title: "CommonUI", desc: "Cross-platform navigation framework integration." },
            { icon: "zap", title: "Blueprint Visuals", desc: "Dynamic UI animations and state transitions." }
        ],
        media: [
            {
                type: "video",
                url: "/projects/UI/video/video_ui.mp4", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "image",
                url: "/projects/UI/images/1.png",
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
    },
    {
        id: "houdini_envs",
        title: "Houdini To Unreal Procedural Environments",
        tags: ["Environment", "Houdini", "Procedural", "Unreal Engine"],
        category: "Environment / Houdini / Unreal Engine",
        year: "2021",
        description: `Procedural forest environment`,
        thumbnail: "/projects/houdini_env/temple.jpg",
        software: ["Unreal Engine", "C++"],
        media: [
            {
                type: "video",
                url: "/projects/houdini_env/temple.mp4", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "image",
                url: "/projects/houdini_env/temple.jpg",
            },
            {
                type: "video",
                url: "/projects/houdini_env/houdini_forest.mp4", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "image",
                url: "/projects/houdini_env/houdini-terrain.jpg",
            }
        ]
    },
    {
        id: "GameVFXs",
        title: "Unreal / Unity VFX's",
        tags: ["VFX", "Houdini", "Unreal Engine", "Unity"],
        category: "VFX / Houdini / Unreal Engine / Unity",
        year: "2021",
        description: `Various Unreal & Unity VFX's using Houdini Engine / Niagara`,
        thumbnail: "/projects/vfx/images/explosion.png",
        software: ["Unreal Engine", "Houdini", "Unity"],
        stack: [
            { icon: "layers", title: "Niagara", desc: "Создание эффектов внутри Unreal / Unity" },
            { icon: "zap", title: "Houdini Engine", desc: "Создание эффектов с помощью Houdini" },
            { icon: "monitor", title: "Optimization", desc: "Оптимизация контента под игровой движок" }
    ],
        media: [
            {
                type: "video",
                url: "/projects/vfx/video/explosion-2.mp4", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "video",
                url: "/projects/vfx/video/SwordTrail.mp4", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "video",
                url: "/projects/vfx/video/lighting-stirke.mp4", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "video",
                url: "/projects/vfx/video/energyshield.mp4", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "video",
                url: "/projects/vfx/video/energy-shield.mp4", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "text",
                content: "Unity game VFX Showreel",
            },
            {
                type: "video",
                url: "/projects/vfx/video/showrell_unity.mp4", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "text",
                content: "Houdini Engine to Unity",
            },
            {
                type: "video",
                url: "/projects/vfx/video/unity_01.mp4", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "video",
                url: "/projects/vfx/video/unity_02.mp4", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "video",
                url: "/projects/vfx/video/unity_03.mp4", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "video",
                url: "/projects/vfx/video/unity_04.mp4", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "video",
                url: "/projects/vfx/video/unity_05.mp4", // Внешнее видео (YouTube/Vimeo)

            }
        ]
    },
    {
        id: "FlyOverMoscow",
        title: "VR Instalation Fly Over Moscow",
        tags: ["Unreal Engine", "VR"],
        category: "VR / Cinematic / Unreal Engine",
        year: "2025",
        description: `VR Instalation Fly Over Moscow of The Future`,
        thumbnail: "/projects/flyovermoscow/logo.png",
        software: ["Unreal Engine", "AfterEffects"],
        media: [
            {
                type: "vr",
                url: "/projects/flyovermoscow/1.jpg", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "vr",
                url: "/projects/flyovermoscow/2.jpg", // Внешнее видео (YouTube/Vimeo)
            },
            {
                type: "vr",
                url: "/projects/flyovermoscow/7.jpg", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "vr",
                url: "/projects/flyovermoscow/3.jpg", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "vr",
                url: "/projects/flyovermoscow/4.jpg", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "vr",
                url: "/projects/flyovermoscow/5.jpg", // Внешнее видео (YouTube/Vimeo)

            },
            {
                type: "vr",
                url: "/projects/flyovermoscow/6.jpg", // Внешнее видео (YouTube/Vimeo)

            },
        ]
    }
];