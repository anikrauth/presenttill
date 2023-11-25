'use client'
import {GET_SPECIAL_DAYS} from '@/lib/Query';
import {useQuery} from "@tanstack/react-query";
import client from "@/lib/ApolloClient";
import Link from "next/link";
import CountDown from "@/components/CountDown";

export default function UpCommingSection(){

    const { data, isLoading } = useQuery<any>({
        queryKey: [`special-days`],
        queryFn: async () =>
            await client.request(
                GET_SPECIAL_DAYS,
            ),
    });




    return(
        <div className="py-[40px] md:py-[60px] lg:py-[100px] px-5 md:px-[60px] lg:px-[100px] bg-2nd_section_color grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[12px] md:gap-10">
            {
                data?.specialDays?.nodes?.map((item: any) => {
                    return(
                        <div key={item?.id} className="item bg-secondary_color p-5 text-center rounded-lg" >
                            <h3 className="pb-[10px] text-[18px] md:text-[28px] font-semibold">{item?.title}</h3>
                            <CountDown Endate={item?.specialDyas?.pickSpecialDayDate}/>
                            <Link className="pt-[20px] block text-primary_color font-medium text-[14px] md:text-[16px]" href={`${item?.url ? item?.url : '/'}`}>{item?.specialDyas?.linkLabel ? item?.specialDyas?.linkLabel : `Se ${item?.title}`}</Link>
                        </div>
                    )
                })
            }

        </div>
    )
}