import SearchResult from "@/components/SearchResult";

interface Props{
    params:{
        searchParams:{
            q:string
        }
    }
}

export async function generateMetadata(params: any): Promise<any> {

    return {
        title: `Searching for ${params?.searchParams?.q} - Presenttill`,
        description: 'Presenttill',
        alternates: {
            canonical: `https://presenttill.nu/search?q=${params?.searchParams?.q}`,
        },

    }
}
export default function SearchPage(params: any){

    // console.log(params?.searchParams)
    return(
        <main>
            <SearchResult q={params?.searchParams?.q} />
        </main>
    )
}
