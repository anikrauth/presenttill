import ValgorenhetSection from "@/components/ValgorenhetSection";
import client from "@/lib/ApolloClient";
import {GET_VALGORENHET} from "@/lib/Query";
interface Props {
    params: {
        slug: string
    }
}


export async function generateMetadata({ params: { slug } }: Props): Promise<any> {
    const data: any = await client.request(
        GET_VALGORENHET,
        // variables are type-checked too!
        {id: slug}
    )
    return {
        title: `${data?.vLgRenhet?.title} - Presenttill`,
        description: data?.vLgRenhet?.seo?.metaDesc,
        alternates: {
            canonical: `https://presenttill.nu/valgorenhet/${slug}`,
            languages: {
                'sv_SE': '/sv_SE',
            },
        },
        openGraph: {
            title: `${data?.vLgRenhet?.title} - Presenttill`,
            description: data?.vLgRenhet?.seo?.metaDesc,
            images: [
                {
                    url: data?.vLgRenhet?.featuredImage?.node?.sourceUrl,
                    width: 800,
                    height: 800
                }
            ],
        },
    }
}
export default function ValgorenhetSingle({ params: { slug } }: Props){
    return(
        <main>
            <ValgorenhetSection slug={slug} />
        </main>
    )
}