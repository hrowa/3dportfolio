export interface ProjectMedia {
    type: 'image' | 'video' | 'text'; // Добавили 'text'
    url?: string;                     // Опционально, т.к. у текста нет url
    content?: string;                 // Поле для самого текста
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
}