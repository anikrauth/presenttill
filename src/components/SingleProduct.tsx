'use client'
import Image from "next/image";
import {useQuery} from "@tanstack/react-query";
import client from "@/lib/ApolloClient";
import {GET_PRODUCT} from "@/lib/Query";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { IoShareSocialSharp } from "react-icons/io5";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon, LinkedinShareButton, LinkedinIcon
} from 'next-share'
export default function SingleProduct(props: any){
    const {slug} = props;
    const { data, isLoading } = useQuery<any>({
        queryKey: [`product-${slug}`],
        queryFn: async () =>
            await client.request(
                GET_PRODUCT,
                {id: slug}
            ),
    });


    // console.log(data?.produkt)



    return(
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 pb-10">
            <div className="image_wraper px-0 md:p-5">
                <Image src={data?.produkt?.featuredImage?.node?.sourceUrl} alt={data?.produkt?.title} width="600" height="600" />
            </div>
            <div className="shadow py-5 px-0 md:px-[40px]">
                <ul className="grid grid-cols-3 gap-5 pb-[30px]">
                    {
                        data?.produkt?.categories?.nodes?.map((item: any) => {
                            return(
                                <li className="flex justify-center items-center p-2 border border-primary_color  text-[14px] font-medium bg-primary_color text-secondary_color transition-all cursor-pointer" key={item?.id}>{item?.name}</li>
                            )
                        })
                    }
                </ul>

                <h1 className="text-[28px] md:text-[38px] font-semibold">{data?.produkt?.title}</h1>


                <ul className="grid grid-cols-2 gap-5 pt-[30px] pb-[40px]">
                    {
                        data?.produkt?.tags?.nodes?.map((item: any) => {
                            return(
                                <li className="flex justify-center items-center p-2 border border-primary_color text-primary_color text-[14px] font-medium hover:bg-primary_color hover:text-secondary_color transition-all cursor-pointer" key={item?.id}>#{item?.name}</li>
                            )
                        })
                    }
                </ul>

                <Link className="w-full h-[55px] bg-primary_color text-secondary_color flex justify-center items-center text-[18px] font-medium uppercase" href="/">
                    <span className="pr-2">Buy Now</span> <span><FiArrowUpRight className="w-6 h-6" /></span>
                </Link>

                <ul className="flex items-center pt-[40px]">
                    <li className="flex items-center text-[17px] font-medium text-gray-600"><span className="pr-2"><IoShareSocialSharp className="w-6 h-6" /></span> <span>Share</span> </li>
                    <li className="pl-3">
                        <FacebookShareButton
                            url={`/produkt/${slug}`}
                            quote={data?.produkt?.title}
                            hashtag={data?.produkt?.tags?.nodes}
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                    </li>
                    <li className="pl-3">
                        <TwitterShareButton
                            url={`/produkt/${slug}`}
                            title={data?.produkt?.title}
                        >
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                    </li>
                    <li className="pl-3">
                        <LinkedinShareButton
                            url={`/produkt/${slug}`}
                        >
                            <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                    </li>
                </ul>
            </div>
            </div>
            <div className="product_content border-t-2 pt-10" dangerouslySetInnerHTML={{__html: `${data?.produkt?.content}`}} />
        </>
    )
}