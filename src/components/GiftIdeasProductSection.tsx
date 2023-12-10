'use client'
import Link from "next/link";
import {FiMinus, FiPlus, FiArrowRight } from "react-icons/fi";
import {GET_HOME_PRODUCTS} from '@/lib/Query'
import { useQuery } from "@tanstack/react-query";
import client from "@/lib/ApolloClient";
import Image from "next/image";
import ProductItem from "@/components/common/ProductItem";
export default function GiftIdeasProductSection(){

    const { data, isLoading } = useQuery<any>({
        queryKey: [`home-products`],
        queryFn: async () =>
            await client.request(
                GET_HOME_PRODUCTS,
            ),
    });

    const homePage = data?.homePage?.homePage


    return(
        <div className=" py-[40px] md:py-[60px] lg:py-[100px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px]">
            <div className="sec_header flex justify-between items-center text-white_color">
                <div>
                    <h2 className="text-[22px] md:text-[32px] font-bold text-primary_color">Populära <span className="text-heading_2nd_color">presenttips</span></h2>
                </div>
                <Link className="md:block hidden text-[18px] font-semibold text-heading_2nd_color" href="/produkt">
                    Visa alla
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-5 pt-[40px]">
                {
                    homePage?.suggestingProducts?.map((item: any) => {
                        return(
                            <ProductItem key={item?.id} item={item} />
                        )
                    })
                }

            </div>
        </div>
    )
}