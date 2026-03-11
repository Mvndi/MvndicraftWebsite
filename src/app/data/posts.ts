import { StaticImageData } from "next/image";

export type Media = {
    type: 'image' | 'video';
    src: StaticImageData | string;
    alt?: string;
}

export type Post = {
    id: number;
    title: string;
    category: 'Update' | 'Event' | 'News';
    date: string;
    content: string;
    media?: Media[];
};

export const POSTS: Post[] = [
    {
        id: 1, 
        title: "Update..", 
        category: "Update", 
        date: "10 march 2026", 
        content: "...",
        media: [
            {
                type: 'image',
                src: 'https://media.tenor.com/hzHPH3TketMAAAAM/taco.gif',
                alt: "Description de l'image"
            }
        ]
    },
    {
        id: 2, 
        title: "Update...", 
        category: "Update", 
        date: "10 march 2026", 
        content: "..." 
    },    
    {
        id: 3, 
        title: "Update...", 
        category: "Update", 
        date: "10 march 2026", 
        content: "..." 
    }
];