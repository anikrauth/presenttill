'use client'
import {GET_PAGE} from "@/lib/Query";
import {useQuery} from "@tanstack/react-query";
import client from "@/lib/ApolloClient";
import Link from "next/link";
import Image from "next/image";
import {FiArrowRight} from "react-icons/fi";

import '@wordpress/block-library/build-style/common.css'
import '@wordpress/block-library/build-style/elements.css'
import '@wordpress/block-library/build-style/columns/style.css'
import '@wordpress/block-library/build-style/theme.css'
import '@wordpress/block-library/build-style/style.css'
import ProductItem from "@/components/common/ProductItem";

export default function PageContent(props: any) {
    const {slug} = props;

    const { data, isLoading } = useQuery<any>({
        queryKey: [`page_content-${slug}`],
        queryFn: async () =>
            await client.request(
                GET_PAGE,
                {id: slug}
            ),
    });




    return(
        <>
            <div style={{backgroundImage:`url(${data?.page?.featuredImage?.node?.sourceUrl})`, backgroundSize:`cover`, backgroundPosition:`center`}} className=" relative breadcumb_page py-[40px] md:py-[60px] lg:py-[140px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] h-[250px] flex justify-center items-center bg-primary_color text-white_color">
                <h1 className=" shadow-sm relative z-10 text-[32px] md:text-[42px] lg:text-[52px] font-bold capitalize">{data?.page?.title} {new Date().getFullYear()}</h1>
            </div>
            <div className="py-[40px] lg:py-[60px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px]">

                <div className="content" dangerouslySetInnerHTML={{__html: `${data?.page?.content}`}} />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-5 pt-[40px]">

                    {
                        data?.page?.pagesProducts?.products?.map((item: any) => {
                            return(
                                <ProductItem key={item?.id} item={item} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}