import { POSTS } from "@/app/data/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Post } from "@/app/data/posts";

const renderMedia = (media: NonNullable<Post['media']>[number], title: string, priority?: boolean) => {
    if (media.type === 'image') {
        return (
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
                <Image
                    src={media.src}
                    alt={media.alt || title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority={priority}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14141B] via-transparent to-transparent" />
            </div>
        );
    }

    return (
        <video
            src={media.src as string}
            controls
            className="w-full rounded-xl"
        />
    );
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = POSTS.find((p) => p.id.toString() === id);

    if (!post) notFound();

    return (
        <main className="relative min-h-screen">
            {post.media && post.media[0]?.type === 'image' && (
                <div className="fixed inset-0 -z-10">
                    <Image
                        src={post.media[0].src}
                        alt=""
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#14141B] via-[#14141B]/95 to-[#14141B]" />
                </div>
            )}

            <div className="relative max-w-4xl mx-auto py-20 px-5">
                {post.media && post.media.length > 0 && (
                    <div className="mb-8 rounded-xl overflow-hidden border border-[#2a2a2e] shadow-2xl">
                        {post.media.map((media, index) => (
                            <div key={index} className="relative">
                                {renderMedia(media, post.title, index === 0)}
                            </div>
                        ))}
                    </div>
                )}

                <div className="bg-[#1E1E24]/90 backdrop-blur-sm rounded-xl border border-[#2a2a2e] p-8 shadow-2xl">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#0266c4] px-4 py-2 rounded-full shadow-lg">
                            {post.category}
                        </span>
                        <time className="text-sm text-[#888] font-mono bg-[#1E1E24] px-3 py-1 rounded-full border border-[#2a2a2e]">
                            {post.date}
                        </time>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="prose prose-invert max-w-none">
                        <div className="text-gray-300 leading-relaxed whitespace-pre-wrap text-lg">
                            {post.content}
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-[#2a2a2e]">
                        <div className="flex items-center gap-4 text-sm text-[#888]">
                            <span>Publié dans {post.category}</span>
                            <span>•</span>
                            <span>Lecture: {Math.ceil(post.content.split(' ').length / 200)} min</span>
                        </div>
                    </div>
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