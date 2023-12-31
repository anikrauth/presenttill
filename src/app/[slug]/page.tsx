import PageContent from "@/components/PageContent";
import client from "@/lib/ApolloClient";
import {GET_PAGE} from "@/lib/Query";

interface Props {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params: { slug } }: Props): Promise<any> {
    const data: any = await client.request(
        GET_PAGE,
        // variables are type-checked too!
        {id: slug}
    )
    return {
        title: `${data?.page?.title} - Presenttill`,
        description: data?.page?.seo?.metaDesc,
        alternates: {
            canonical: `https://presenttill.nu/${slug}`,
            languages: {
                'sv_SE': '/sv_SE',
            },
        },
        openGraph: {
            title: `${data?.page?.title} - Presenttill`,
            description: data?.page?.seo?.metaDesc,
            images: [
                {
                    url: data?.page?.featuredImage?.node?.sourceUrl,
                    width: 800,
                    height: 800
                }
            ],
        },
    }
}


export default function Pages ({ params: { slug } }: Props) {



    return(
        <main className="">
            <PageContent slug={slug} />
        </main>
    )
}