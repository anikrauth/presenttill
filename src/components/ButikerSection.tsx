'use client'
import Breadcumb from "@/components/common/Breadcumb";
import {useQuery} from "@tanstack/react-query";
import client from "@/lib/ApolloClient";
import {GET_BUTIK} from "@/lib/Query";
import { FaGifts } from "react-icons/fa";
import Link from "next/link";
import {FiArrowUpRight} from "react-icons/fi";
import { MdStorefront } from "react-icons/md";
export default function ButikerSection(props: any){
    const {slug} = props;

    const { data, isLoading } = useQuery<any>({
        queryKey: [`butik-${slug}`],
        queryFn: async () =>
            await client.request(
                GET_BUTIK,
                {id: slug}
            ),
    });


    return(
        <>
            <Breadcumb title={data?.butik?.title} logo={data?.butik?.featuredImage?.node?.sourceUrl} />
            <div className="py-[40px] lg:py-[60px] px-5 md:px-[40px] lg:px-[60px] xl:px-[150px]">
                <div className="butiker_content text-primary_color" dangerouslySetInnerHTML={{__html: data?.butik?.content}} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-[40px] lg:py-[60px] px-5 md:px-[40px] lg:px-[60px] xl:px-[150px]">
                <div className="shadow p-5 text-primary_color text-center" >
                    <div className="pb-[15px]  flex justify-center items-center">
                        <FaGifts className="w-16 h-16 md:w-20 md:h-20 text-secondary_color" />
                    </div>
                    <h3 className="text-[22px] md:text-[32px] font-medium pb-[20px]">Butikens egna <span className="text-secondary_color font-semibold ">presenttips</span></h3>
                    <p className="text-[17px] font-normal pb-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    <Link className="w-full h-[55px] bg-primary_color text-secondary_color flex justify-center items-center text-[16px] md:text-[18px] font-medium uppercase" href={data?.butik?.butikerfields?.presenttipsLink ? data?.butik?.butikerfields?.presenttipsLink : '/'}>
                        <span className="pr-2">Besök {data?.butik?.title}</span> <span><FiArrowUpRight className="w-6 h-6" /></span>
                    </Link>

                </div>
                <div className="shadow p-5 text-primary_color text-center" >
                    <div className="pb-[15px]  flex justify-center items-center">
                        <MdStorefront className="w-16 h-16 md:w-20 md:h-20 text-secondary_color" />
                    </div>
                    <h3 className="text-[22px] md:text-[32px]text-[32px] font-medium pb-[20px]">Butikens <span className="text-secondary_color font-semibold ">kampanjer</span></h3>
                    <p className="text-[17px] font-normal pb-[30px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    <Link className="w-full h-[55px] bg-primary_color text-secondary_color flex justify-center items-center text-[16px] md:text-[18px] font-medium uppercase" href={data?.butik?.butikerfields?.kampanjerLink ? data?.butik?.butikerfields?.kampanjerLink : '/'}>
                        <span className="pr-2">Besök {data?.butik?.title}</span> <span><FiArrowUpRight className="w-6 h-6" /></span>
                    </Link>

                </div>
            </div>
        </>

    )
}