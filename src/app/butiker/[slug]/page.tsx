import Breadcumb from "@/components/common/Breadcumb";
import ButikerSection from "@/components/ButikerSection";


interface Props {
    params: {
        slug: string
    }
}
export async function generateMetadata({ params: { slug } }: Props): Promise<any> {

    return {
        title: `${slug} Store - Presenttill`,
        description: 'Presenttill',
        alternates: {
            canonical: `/butiker/${slug}`,
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
    // py-[40px] md:py-[60px] lg:py-[100px] px-5 md:px-[40px] lg:px-[60px] xl:px-[150px]

    return(
        <main className=" ">
            <ButikerSection slug={slug} />
        </main>
    )
}