import PageContent from "@/components/PageContent";

interface Props {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params: { slug } }: Props): Promise<any> {

    return {
        title: `${slug} gift idea - Presenttill`,
        description: 'Presenttill',
        alternates: {
            canonical: `/${slug}`,
            languages: {
                'en-US': '/en-US',
            },
        },
        openGraph: {
            images: '',
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