export interface ProjectStack {
    icon: 'monitor' | 'layers' | 'zap' | 'cpu'; // Строго ограничиваем иконки
    title: string;
    desc: string;
}

export interface ProjectRoadmap {
    step: string;
    task: string;
    res: string;
}

export interface ProjectMedia {
    type: 'image' | 'video' | 'text' | 'vr' | 'vr_video';
    url?: string;
    content?: string;
    layout?: 'full' | 'carousel';
}

export interface Project {
    id: string;
    title: string;
    tags: string[];
    category: string;
    year: string;
    description: string;
    thumbnail: string;
    software: string[];
    media: ProjectMedia[];
    stack?: ProjectStack[];
    roadmap?: ProjectRoadmap[];
}