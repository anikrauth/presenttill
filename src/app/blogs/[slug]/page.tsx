import SingleBlogContent from "@/components/BlogsComponents/SingleBlogContent";
import client from "@/lib/ApolloClient";
import {GET_POST} from "@/lib/Query";


interface Props {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params: { slug } }: Props): Promise<any> {
    const data: any = await client.request(
        GET_POST,
        // variables are type-checked too!
        {id: slug}
    )
    return {
        title: `${data?.post?.title} - Presenttill`,
        description: data?.post?.seo?.metaDesc,
        alternates: {
            canonical: `https://presenttill.nu/blogs/${slug}`,
            languages: {
                'sv_SE': '/sv_SE',
            },
        },
        openGraph: {
            title: `${data?.post?.title} - Presenttill`,
            description: data?.post?.seo?.metaDesc,
            images: [
                {
                    url: data?.post?.featuredImage?.node?.sourceUrl,
                    width: 800,
                    height: 800
                }
            ],
        },
    }
}
export default function SingleBlog({ params: { slug } }: Props){

    return(
        <main >
            <SingleBlogContent  slug={slug}/>
        </main>
    )
}