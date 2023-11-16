'use client'
import { GET_SEARCH_RESULT} from "@/lib/Query";
import {useQuery} from "@tanstack/react-query";
import client from "@/lib/ApolloClient";
import Link from "next/link";
import Image from "next/image";

export default function SearchResult(props: any) {
    const {q} = props;

    const { data, isLoading } = useQuery<any>({
        queryKey: [`search-result-${q}`],
        queryFn: async () =>
            await client.request(
                GET_SEARCH_RESULT,
                {search: q}
            ),
    });



    return(
        <div className="pb-[40px] md:pb-[60px] lg:pb-[100px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] bg-primary_color">
            <div className="heading py-[40px] text-white_color">
                <h3 className="text-[20px] md:text-[28px] font-normal"><span className="text-secondary_color font-semibold">{ data?.pages?.nodes?.length}</span> Search result found on <span className="text-secondary_color font-semibold">{q}</span> keyword!</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-5 ">
                {
                    data?.pages?.nodes?.map((item: any) => {
                        return(
                            <Link href={`/${item?.slug}`} key={item?.id} className="overflow-hidden item bg-2nd_section_color hover:bg-primary_color hover:border-2nd_section_color border-2 transition-all block border-2nd_section_color p-2 md:p-5 text-white_color">
                                {
                                    item?.featuredImage ? (
                                        <Image className="h-[100px] md:h-[200px] object-cover" src={item?.featuredImage?.node?.sourceUrl} width="300" height="300" alt="card Image" />
                                    ): (
                                        <div
                                            className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600"
                                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                 fill="currentColor" viewBox="0 0 16 20">
                                                <path
                                                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                                                <path
                                                    d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                                            </svg>
                                        </div>
                                    )
                                }

                                <h3 className="text-[14px] md:text-[18px] font-medium pt-0 md:pt-3 ">{item?.title}</h3>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}