'use client'
import {GET_PAGE} from "@/lib/Query";
import {useQuery} from "@tanstack/react-query";
import client from "@/lib/ApolloClient";
import Link from "next/link";
import Image from "next/image";
import {FiArrowRight} from "react-icons/fi";
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
                                <div key={item?.id} className="productCard_wraper shadow-md bg-white rounded-[12px] overflow-hidden relative">
                                    <Link href={`/produkt/${item?.slug}`} className=" overflow-hidden relative w-full block">
                                        {
                                            item?.featuredImage ? (
                                                <div className=" h-[160px] md:h-[280px] flex justify-center items-center">
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
                                            <Link className="text-[14px] md:text-[17px] block pb-[0px]  text-primary_color tracking-[1.5px] font-semibold" href="/">{item?.title}</Link>
                                        </div>

                                        <div className="bottom_wraper  border-t-2 pt-2 md:pt-3 mt-2 md:mt-3">
                                            <Link href={`/produkt/${item?.slug}`}  type="button" className="  justify-between flex items-center text-[10px] md:text-[13px] font-bold uppercase py-[0px] pl-2 md:pl-[10px] rounded-full border-0 md:border-2 border-buy_button_border bg-primary_color text-secondary_color">
                                                <span className="">SE AKTUELLT PRIS</span> <span className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-buy_icon_bg border-secondary_color border-2 ml-[5px]"><FiArrowRight className="w-4 h-4 md:w-5 md:h-5" /></span>
                                            </Link>

                                            <Link href={item?.productFiled?.storeLink ? item?.productFiled?.storeLink : '/'}  type="button" className=" justify-between mt-2 flex items-center text-[10px] md:text-[13px] font-bold uppercase py-[0px] pl-2 md:pl-[10px] rounded-full border-2 border-buy_button_border ">
                                                <span className="">SE MER OM BUTIKEN</span> <span className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-buy_icon_bg border-secondary_color border-2 ml-[5px]"><FiArrowRight className="w-4 h-4 md:w-5 md:h-5" /></span>
                                            </Link>

                                        </div>
                                    </div>


                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}