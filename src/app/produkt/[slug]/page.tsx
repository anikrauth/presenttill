import SingleProduct from "@/components/SingleProduct";
import client from "@/lib/ApolloClient";
import {GET_PRODUCT} from "@/lib/Query";

interface Props {
    params: {
        slug: string
    }
}


export async function generateMetadata({ params: { slug } }: Props): Promise<any> {
    const data: any = await client.request(
        GET_PRODUCT,
        // variables are type-checked too!
        {id: slug}
    )
    return {
        title: `${data?.produkt?.title} - Presenttill`,
        description: data?.produkt?.seo?.metaDesc,
        alternates: {
            canonical: `https://presenttill.nu/produkt/${slug}`,
        },
        openGraph: {
            title: `${data?.produkt?.title} - Presenttill`,
            description: data?.produkt?.seo?.metaDesc,
            images: [
                {
                    url: data?.produkt?.featuredImage?.node?.sourceUrl,
                    width: 800,
                    height: 800
                }
            ],
        },
    }
}

export default function Product({ params: { slug } }: Props){


    return(
        <main className=" py-[40px] md:py-[60px] lg:py-[100px] px-5 md:px-[40px] lg:px-[60px] xl:px-[150px] ">
            <SingleProduct slug={slug} />
        </main>
    )
}