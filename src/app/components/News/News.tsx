import chivalry from "../../../public/image/chivalry.png";
import Image from "next/image";
import { NewsCard } from "@/app/components/News/NewsCard";
import { POSTS } from "@/app/data/posts";

export default function News() {
    return (
        <section className="w-full py-20">
            <div className="max-w-7xl mx-auto px-8">
                <h2 className="text-center text-5xl font-bold text-white mb-12 tracking-tight">
                    Latest News
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {POSTS.map((p) => (
                        <NewsCard key={p.id} post={p}/>
                    ))}
                </div>
            </div>
        </section>
    );
}
