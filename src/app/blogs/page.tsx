import {Metadata} from "next";
import BlogsGrid from "@/components/BlogsComponents/BlogsGrid";


export const metadata: Metadata = {
    title: 'Blogs - Present till',
    description: 'All Blogs - Present till',
    alternates: {
        canonical: `https://presenttill.nu/blogs`,
    },
    openGraph: {
        images: '',
    },
}


export default function Blogs(){
    return(
        <main>
            <BlogsGrid />
        </main>
    )
}