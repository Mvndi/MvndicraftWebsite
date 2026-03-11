import { POSTS } from "@/app/data/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Post } from "@/app/data/posts";

const renderMedia = (media: NonNullable<Post['media']>[number], title: string, priority?: boolean) => {
    if (media.type === 'image') {
        return (
            <div className="relative w-full h-[400px]">
                <Image
                    src={media.src}
                    alt={media.alt || title}
                    fill
                    className="object-contain rounded-lg"
                    priority={priority}
                />
            </div>
        );
    }
    
    return (
        <video 
            src={media.src as string}
            controls
            className="w-full rounded-lg"
        />
    );
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = POSTS.find((p) => p.id.toString() === id);

    if (!post) notFound();

    return (
        <main className="max-w-4xl mx-auto py-20 px-5">
            {post.media && post.media.length > 0 && (
                <div className="mb-8">
                    {post.media.map((media, index) => (
                        <div key={index} className="mb-4 last:mb-0">
                            {renderMedia(media, post.title, index === 0)}
                        </div>
                    ))}
                </div>
            )}

            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#0266c4] px-3 py-1 rounded shadow-sm">
                        {post.category}
                    </span>
                    <time className="text-sm text-[#888] font-mono">{post.date}</time>
                </div>
                <h1 className="text-5xl font-black text-white mb-4">{post.title}</h1>
            </div>

            <div className="prose prose-invert max-w-none">
                <div className="text-white leading-relaxed whitespace-pre-wrap">
                    {post.content}
                </div>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
    return POSTS.map((post) => ({
        id: post.id.toString(),
    }));
}