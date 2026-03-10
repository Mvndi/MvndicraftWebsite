import { StaticImageData } from "next/image";

export type Post = {
    id: number;
    title: string;
    category: 'Update' | 'Event' | 'News';
    date: string;
    content: string;
    image?: StaticImageData;
};

export const POSTS: Post[] = [
    {
        id: 1, 
        title: "Update..", 
        category: "Update", 
        date: "10 march 2026", 
        content: "..." 
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