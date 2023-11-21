'use client'
import Breadcumb from "@/components/common/Breadcumb";
import Image from "next/image";
import {useQuery} from "@tanstack/react-query";
import client from "@/lib/ApolloClient";
import {GET_VALGORENHET} from "@/lib/Query";

export default function ValgorenhetSection(props: any){
    const {slug} = props;

    const { data, isLoading } = useQuery<any>({
        queryKey: [`valgorenhet-${slug}`],
        queryFn: async () =>
            await client.request(
                GET_VALGORENHET,
                {id: slug}
            ),
    });



    return(
        <>
            <Breadcumb title={data?.vLgRenhet?.title} logo=""/>
            <div className="lg:flex justify-between py-[40px] md:py-[60px] lg:py-[100px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px]">
                <div className="w-full lg:w-[40%] ">

                    {
                        data?.vLgRenhet?.featuredImage?.node?.sourceUrl?(
                                <Image className="w-full object-cover rounded-lg shadow" src={data?.vLgRenhet?.featuredImage?.node?.sourceUrl} alt="asd" width="800" height="800" />
                            ):(
                                <div className="flex items-center justify-center h-[300px] mb-4 bg-gray-300 rounded dark:bg-gray-300">
                                <svg className="w-full h-10 text-gray-200 dark:text-gray-600"
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
                </div>
                <div className="w-full lg:w-[60%] pl-0 lg:pl-[40px] lg:pt-0 pt-[30px]">
                    {/*<h2>{data?.vLgRenhet?.title}</h2>*/}
                    <div className="valgo_content" dangerouslySetInnerHTML={{__html: data?.vLgRenhet?.content}} />

                </div>
            </div>
        </>
    )
}