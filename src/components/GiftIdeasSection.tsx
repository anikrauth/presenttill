'use client'
import Image from "next/image";
import Link from "next/link";
import {GET_HOME_DATA} from '@/lib/Query';
import { useQuery } from "@tanstack/react-query";
import client from "@/lib/ApolloClient";

interface homeDataType {
    homePage: {

    }
}

export default function GiftIdeasSection() {

    const { data, isLoading } = useQuery<any>({
        queryKey: [`home-data`],
        queryFn: async () =>
            await client.request(
                GET_HOME_DATA,
            ),
    });

    // const {homePage} = data?.homePage
    const homePage = data?.homePage?.homePage



    return (
        <>
            <div className=" bg-primary_color pb-[40px] md:pb-[80] lg:pb-[100px]">
                <div className="Section_one py-[40px] md:py-[60px] lg:py-[100px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px]">

                    <div className="sec_header flex justify-between items-center text-white_color">
                        <div>
                            <h2 className="text-[22px] md:text-[32px] font-bold">Olika typer av <span className="text-secondary_color">presenter</span></h2>
                            <p className=" text-[14px] md:text-[16px] font-normal pt-[10px]">Använd sidorna nedan när du vet vilken typ av present som du letar efter</p>
                        </div>
                        <Link className="md:block hidden text-[18px] font-semibold text-secondary_color" href="/produkt">
                            Visa alla
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-5 pt-[40px]">
                        {
                            homePage?.typesOfGifts?.map((item: any) => {
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
                {/* New section */}
                <div className="bg-[#EFB7B1] mx-5 md:mx-[60px] lg:mx-[100px] py-[40px] rounded px-5 md:px-[40px] md:flex justify-between items-center">
                    <div className="info text-white_color w-full md:w-[60%]">
                        <h4 className="text-secondary_color  bg-primary_color p-[5px] w-[140px] md:flex justify-center items-center text-[16px] font-normal rounded ">Presenttill.nu</h4>
                        <h2 className="py-[20px] text-[24px] md:text-[32px] font-bold ">Det lönar sig att besöka <span className="text-secondary_color">Presenttill.nu</span> ofta</h2>
                        <p className="text-[16px] font-[400] text-primary_color pb-[10px]">Sidan uppdateras varje dag med nya presenttips och   <span> <Link className="font-[600] hover:underline" href="/julklappar/">julklappstips</Link> </span> inför julen.</p>
                        <p className="text-[16px] font-[400] text-primary_color">Innan julafton 2021 kommer ni kunna se över 300 julklappstips här hos <span> <Link className="font-[600]  hover:underline" href="/">presenttill.nu</Link> </span> som ska bli den ledande presentsidan på nätet.</p>
                    </div>
                    <div >
                        <Image src="/giftbox.svg" width="300" height="200" alt="gift box" />
                    </div>
                </div>
            </div>
        {/*   end of 1st gift ideas showcase section */}

            {/* */}
            <div className=" bg-2nd_section_color ">
                <div className="Section_one py-[40px] md:py-[60px] lg:py-[100px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px]">

                    <div className="sec_header flex justify-between items-center text-white_color">
                        <div>
                            <h2 className="text-[22px] md:text-[32px] font-bold">Presenttips till olika <span className="text-secondary_color">tillfällen och högtider</span></h2>
                            <p className="text-[14px] md:text-[16px] font-normal pt-[10px]"> Här samlar vi olika speciella tillfällen och högtider och ger er lämpliga presenttips utifrån händelser</p>

                        </div>
                        <Link className="md:block hidden text-[18px] font-semibold text-secondary_color" href="/produkt">
                            Visa alla
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[10px] md:gap-5 pt-[40px]">
                        {
                            homePage?.occasionsAndHolidays?.map((item: any) => {
                                return(
                                    <Link href={`/${item?.slug}`} key={item?.id} className="overflow-hidden item bg-primary_color hover:bg-2nd_section_color hover:border-primary_color border-2 transition-all block border-primary_color p-2 md:p-5 text-white_color">
                                        {
                                            item?.featuredImage ? (
                                                <Image className=" h-[100px] md:h-[200px] object-cover" src={item?.featuredImage?.node?.sourceUrl} width="300" height="300" alt="card Image" />
                                            ): (
                                                <div
                                                    className="flex items-center justify-center h-48  bg-gray-300 rounded dark:bg-gray-700">
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

                                        <h3 className="text-[14px] md:text-[18px] font-medium pt-3">{item?.title}</h3>
                                    </Link>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>

    )
}