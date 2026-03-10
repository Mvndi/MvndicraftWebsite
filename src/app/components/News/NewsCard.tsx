import Image from "next/image";
import { Post } from "../../data/posts";

interface NewsCardProps {
    post: Post;
}

export const NewsCard = ({ post }: NewsCardProps) => {
    return (
        <article className="group bg-[#111114] border border-[#2a2a2e] rounded-xl overflow-hidden hover:border-[#E2B714]/60 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(226,183,20,0.1)] transition-all duration-300 cursor-pointer flex flex-col">

            <div className="relative overflow-hidden h-48 bg-[#1e1e22]">
                {post.image ? (
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-[#444] text-xs uppercase tracking-widest">
                        No Image
                    </div>
                )}

                <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-[#0266c4] px-2 py-0.5 rounded shadow-sm">
                        {post.category}
                    </span>
                </div>
            </div>

            <div className="flex flex-col flex-1 px-5 py-4 gap-2">
                <h3 className="text-lg font-black text-white tracking-wide leading-tight group-hover:text-[#E2B714] transition-colors duration-200">
                    {post.title}
                </h3>

                <p className="text-xs text-[#555] font-mono">{post.date}</p>

                <p className="text-sm text-[#888] leading-relaxed line-clamp-2 mt-auto pt-2 border-t border-[#1e1e22]">
                    {post.content}
                </p>
            </div>
        </article>
    );
};