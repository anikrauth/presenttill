import {Metadata} from "next";
import BlogsGrid from "@/components/BlogsComponents/BlogsGrid";


export const metadata: Metadata = {
    title: 'Presenttips - Present till',
    description: 'All Presenttips - Present till',
    alternates: {
        canonical: `https://presenttill.nu/presenttips`,
    },

}


export default function Blogs(){
    return(
        <main>
            <BlogsGrid />
        </main>
    )
}