import SingleProduct from "@/components/SingleProduct";

interface Props {
    params: {
        slug: string
    }
}


export async function generateMetadata({ params: { slug } }: Props): Promise<any> {

    return {
        title: `${slug.replace(/-/g, " ")} - Presenttill`,
        description: 'Presenttill',
        alternates: {
            canonical: `/produkt/${slug}`,
            languages: {
                'en-US': '/en-US',
            },
        },
        openGraph: {
            images: '',
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