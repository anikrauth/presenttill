'use client'
import Breadcumb from "@/components/common/Breadcumb";
import {useQuery} from "@tanstack/react-query";
import client from "@/lib/ApolloClient";
import {GET_POSTS} from "@/lib/Query";
import Link from "next/link";
import Image from "next/image";
import {FiArrowRight} from "react-icons/fi";

export default function BlogsGrid(){

    const { data, isLoading } = useQuery<any>({
        queryKey: [`blogs-grid`],
        queryFn: async () =>
            await client.request(
                GET_POSTS,
            ),
    });

    return(
        <>
            <Breadcumb title="Presenttips" logo="" />
            <div className="columns-1 md:columns-3 lg:columns-4 gap-5  py-[40px] lg:py-[60px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px]">
                {
                    data?.posts?.nodes?.map((item: any) => {
                        return(
                            <div key={item?.id} className="mb-5 productCard_wraper shadow-md bg-white rounded-[12px] overflow-hidden relative">
                                <Link href={`/presenttips/${item?.slug}`} className=" overflow-hidden relative w-full block">
                                    {
                                        item?.featuredImage ? (
                                            <div className="  overflow-hidden flex justify-center items-center">
                                                <Image src={item?.featuredImage?.node?.sourceUrl} className="product_image transition-all rounded-t-[12px] object-contain" alt={item?.title} width="600" height="400" />
                                            </div>
                                        ): (
                                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-300">
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


                                    <div className="top_info absolute top-[8px] md:top-[15px] w-full">
                                        <div className="flex-col md:flex-row flex justify-between items-start px-[5px] md:px-[15px]">
                                            <div className=" flex flex-col ">
                                                <button type="button" className="mb-[5px] inline-block badges uppercase px-[10px] py-[2px] text-[12px] md:text-[15px] bg-primary_color text-secondary_color rounded-[6px]">
                                                    {item?.categories?.nodes?.map((item: any) => {
                                                        return(
                                                            <span key={item?.id}>{item?.name}</span>
                                                        )
                                                    })}
                                                </button>

                                            </div>

                                        </div>
                                    </div>
                                </Link>
                                <div className="product_info p-[10px] md:p-[20px] ">
                                    <div className=" line-clamp-2">
                                        <Link className="text-[14px] md:text-[17px] block pb-[0px]  text-primary_color tracking-[1.5px] font-semibold" href={`/blogs/${item?.slug}`}>{item?.title}</Link>
                                    </div>


                                </div>


                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}