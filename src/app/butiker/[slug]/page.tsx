import Breadcumb from "@/components/common/Breadcumb";
import ButikerSection from "@/components/ButikerSection";
import client from "@/lib/ApolloClient";
import {GET_BUTIK} from "@/lib/Query";


interface Props {
    params: {
        slug: string
    }
}
export async function generateMetadata({ params: { slug } }: Props): Promise<any> {
    const data: any = await client.request(
        GET_BUTIK,
        // variables are type-checked too!
        {id: slug}
    )
    return {
        title: `${data?.butik?.title} - Presenttill`,
        description: data?.butik?.seo?.metaDesc,
        alternates: {
            canonical: `https://presenttill.nu/butiker/${slug}`,
            languages: {
                'sv_SE': '/sv_SE',
            },
        },
        openGraph: {
            title: `${data?.butik?.title} - Presenttill`,
            description: data?.butik?.seo?.metaDesc,
            images: [
                {
                    url: data?.butik?.featuredImage?.node?.sourceUrl,
                    width: 800,
                    height: 800
                }
            ],
        },
    }
}

export default function Product({ params: { slug } }: Props){
    // py-[40px] md:py-[60px] lg:py-[100px] px-5 md:px-[40px] lg:px-[60px] xl:px-[150px]

    return(
        <main className=" ">
            <ButikerSection slug={slug} />
        </main>
    )
}