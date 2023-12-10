'use client'
import Link from "next/link";
import Image from "next/image";
import {FiArrowRight} from "react-icons/fi";
import {useQuery,keepPreviousData} from "@tanstack/react-query";
import client from "@/lib/ApolloClient";
import {GET_ALL_PRODUCTS} from "@/lib/Query";
import {useState} from "react";
import {arrayOutputType} from "zod";
import { HiArrowNarrowRight,HiArrowNarrowLeft } from "react-icons/hi";
import ProductItem from "@/components/common/ProductItem";
interface ProductsType{
    data:{
        produkter:{
            nodes: arrayOutputType<any>,
            pageInfo:{
                hasNextPage: boolean,
                endCursor: string
            }
        }
    }
}

export default function  ProductsPageSection(){
    const [page, setPage] = useState('')



    const { data, isLoading, isFetching, isPlaceholderData } = useQuery<any>({
        queryKey: [`all-products`, page],
        queryFn: async () =>
            await client.request(
                GET_ALL_PRODUCTS,
                // variables are type-checked too!
                {first: 12, after: page},
            ),
        placeholderData: keepPreviousData,
    })

    // const {endCursor,hasNextPage, hasPreviousPage, startCursor} = data?.produkter?.pageInfo;

    return(
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-5 py-[40px] lg:py-[60px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px]">
                {
                    data?.produkter?.nodes?.map((item: any) => {
                        return(
                            <ProductItem key={item?.id} item={item} />
                        )
                    })
                }
            </div>
            {
                data?.produkter?.pageInfo?.hasNextPage && (
                    <div className="flex justify-between items-center pt-5 py-[40px] lg:py-[60px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px]">
                        {
                            data?.produkter?.pageInfo?.hasPreviousPage && (
                                <button onClick={() => setPage(data?.produkter?.pageInfo?.startCursor)} type="button"  className=" uppercase font-medium text-[16px] rounded-lg flex items-center py-3 px-[20px] bg-primary_color text-gray-400">
                                    <span><HiArrowNarrowLeft className="w-6 h-6" /></span> <span className="pl-2">Previous</span>
                                </button>
                            )
                        }

                        <button onClick={() => setPage(data?.produkter?.pageInfo?.endCursor)} type="button"  className=" uppercase font-medium text-[16px] rounded-lg flex items-center py-3 px-[20px] bg-primary_color text-secondary_color">
                            <span className="pr-2">Next</span> <span><HiArrowNarrowRight className="w-6 h-6" /></span>
                        </button>
                    </div>
                )
            }


        </>
    )
}