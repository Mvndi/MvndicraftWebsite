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
        content: "Lorem ipsum dolor",
        media: [
            {
                type: 'image',
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOuppI_GgYbojbAgsQ8Ghw8EC4tjdEXimFQ&s',
                alt: "Image description"
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