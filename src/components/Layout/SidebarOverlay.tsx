'use client'
import { HiXMark, HiMiniChevronRight, HiMiniChevronDown } from "react-icons/hi2";
import { useQuery } from "@tanstack/react-query";
import client from "@/lib/ApolloClient";
import { GET_SIDEBAR_MENU } from '@/lib/Query';
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface menuDataType {
    menu: {
        menuItems: {
            nodes: []
        }
    }
}

const framerSidebarPanel = {
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '-100%' },
    transition: { duration: 0.3 },
}

const framerSidebarBackground = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.2 },
}

export default function SidebarOverlay(props: { setOpenSidebar: any, openSidebar: any }) {
    const { setOpenSidebar, openSidebar } = props;

    const [subMenu, setSubMenu] = useState(null);

    const { data, isLoading } = useQuery<menuDataType>({
        queryKey: [`gift-tips-sidebar-menu`],
        queryFn: async () =>
            await client.request(
                GET_SIDEBAR_MENU,
            ),
    });



    return (
        <AnimatePresence mode="wait" initial={false}>

            {
                openSidebar && (
                    <>
                        <motion.div
                            {...framerSidebarBackground}
                            aria-hidden="true"
                            className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
                            onClick={() => setOpenSidebar(false)}
                        ></motion.div>
                        <motion.div
                            {...framerSidebarPanel}
                            className={`sidebar_wraper h-full transition-all z-[100] w-[300px] bg-primary_color fixed  top-0 left-0`}>
                            <div className="sidebar_header px-5 h-[75px]  flex justify-between items-center">
                                <p className="text-white_color text-[16px] font-normal">All gift ideas.</p>
                                <button onClick={() => setOpenSidebar(false)}>
                                    <HiXMark className="w-7 h-7 text-secondary_color" />
                                </button>
                            </div>
                            {/* overflow-y-scroll overflow-x-hidden */}
                            <div className="text-white_color pt-[20px] text-[16px] font-[400] h-full overflow-y-scroll overflow-x-hidden">
                                {
                                    data?.menu?.menuItems?.nodes?.map((item: any) => {
                                        return (
                                            <div className="pb-[25px] relative px-5 " key={item?.id}>
                                                <div className={`flex items-center justify-between ${subMenu === item?.id ? 'text-secondary_colo' : null}`}>
                                                    <Link className={`w-full ${subMenu === item?.id ? 'text-secondary_color font-[600]' : null} hover:text-secondary_color`} href={item?.path}>
                                                        {item?.label}
                                                    </Link>
                                                    {
                                                        item?.childItems?.nodes?.length ?
                                                            <>
                                                                {
                                                                    subMenu === item?.id ? (
                                                                        <button onClick={() => setSubMenu(null)}>
                                                                            <HiMiniChevronDown className={`w-6 h-6 ${subMenu === item?.id ? 'text-secondary_color font-[600]' : null}`} />
                                                                        </button>
                                                                    ) : (
                                                                        <button onClick={() => setSubMenu(item?.id)}>
                                                                            <HiMiniChevronRight className="w-6 h-6" />
                                                                        </button>

                                                                    )
                                                                }


                                                            </>

                                                            : null
                                                    }
                                                </div>
                                                {
                                                    subMenu === item?.id &&
                                                        item?.childItems?.nodes?.length ? (
                                                        <div className=" rounded p-5 bg-primary_color">

                                                            {

                                                                item?.childItems?.nodes?.map((item: any) => {
                                                                    return (
                                                                        <div key={item?.id} >
                                                                            <Link className="pb-[20px] block w-full hover:text-secondary_color" href={item?.path}>
                                                                                {item?.label}
                                                                            </Link>
                                                                        </div>
                                                                    )
                                                                })

                                                            }

                                                        </div>
                                                    ) : null
                                                }

                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </motion.div>

                    </>
                )
            }

        </AnimatePresence>
    )
}