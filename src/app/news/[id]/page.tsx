import { POSTS } from "@/app/data/posts";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Post } from "@/app/data/posts";
import { Metadata } from "next";
import { StaticImageData } from "next/image";

const getRawImageUrl = (src: string | StaticImageData): string => {
    if (typeof src === 'string') return src;
    return src.src;
};

const renderMedia = (media: NonNullable<Post['media']>[number], title: string, index?: number, priority?: boolean) => {
    if (media.type === 'image') {
        return (
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden" role="img" aria-label={media.alt || `${title} - Image ${index ? index + 1 : 1}`}>
                <Image
                    src={media.src}
                    alt={media.alt || title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority={priority}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14141B] via-transparent to-transparent" aria-hidden="true" />
            </div>
        );
    }

    return (
        <div className="relative">
            <video
                src={media.src as string}
                controls
                className="w-full rounded-xl"
                aria-label={`${title} - Video`}
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const post = POSTS.find((p) => p.id.toString() === id);

    if (!post) {
        return {
            title: "News Not Found | Mvndicraft",
        };
    }

    const imageUrl = post.media && post.media[0]?.type === 'image'
        ? getRawImageUrl(post.media[0].src)
        : '/image/mvndilogo.png';

    return {
        title: `${post.title} | Mvndicraft News`,
        description: post.content.substring(0, 160) + '...',
        openGraph: {
            title: `${post.title} | Mvndicraft News`,
            description: post.content.substring(0, 160) + '...',
            type: 'article',
            publishedTime: post.date,
            authors: ['Mvndicraft Team'],
            images: [{
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: post.title
            }]
        },
        twitter: {
            card: 'summary_large_image',
            title: `${post.title} | Mvndicraft News`,
            description: post.content.substring(0, 160) + '...',
            images: [imageUrl]
        }
    };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = POSTS.find((p) => p.id.toString() === id);

    if (!post) notFound();

    return (
        <main className="relative min-h-screen" role="main" aria-label={`News Article: ${post.title}`}>
            {post.media && post.media[0]?.type === 'image' && (
                <div className="fixed inset-0 -z-10" aria-hidden="true">
                    <Image
                        src={post.media[0].src}
                        alt=""
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#14141B] via-[#14141B]/95 to-[#14141B]" aria-hidden="true" />
                </div>
            )}

            <article className="relative max-w-4xl mx-auto py-20 px-5">
                {post.media && post.media.length > 0 && (
                    <div className="mb-8 rounded-xl overflow-hidden border border-[#2a2a2e] shadow-2xl" aria-label="Article Media">
                        {post.media.map((media, index) => (
                            <div key={index} className="relative">
                                {renderMedia(media, post.title, index + 1, index === 0)}
                            </div>
                        ))}
                    </div>
                )}

                <div className="bg-[#1E1E24]/90 backdrop-blur-sm rounded-xl border border-[#2a2a2e] p-8 shadow-2xl">
                    <header className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#0266c4] px-4 py-2 rounded-full shadow-lg">
                            {post.category}
                        </span>
                        <time className="text-sm text-[#888] font-mono bg-[#1E1E24] px-3 py-1 rounded-full border border-[#2a2a2e]">
                            {post.date}
                        </time>
                    </header>

                    <h1 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="prose prose-invert max-w-none" role="article">
                        <div className="text-gray-300 leading-relaxed whitespace-pre-wrap text-lg">
                            {post.content}
                        </div>
                    </div>

                    <footer className="mt-8 pt-8 border-t border-[#2a2a2e]">
                        <div className="flex items-center gap-4 text-sm text-[#888]">
                            <span>Published in {post.category}</span>
                            <span>•</span>
                            <span>Reading time: {Math.ceil(post.content.split(' ').length / 200)} min</span>
                        </div>
                    </footer>
                </div>
            </article>
        </main>
    );
}

export async function generateStaticParams() {
    return POSTS.map((post) => ({
        id: post.id.toString(),
    }));
}
