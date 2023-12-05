'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { AppContext } from '@/utils/AppContext'
import { useState,useContext } from "react";
export default function HeroSection() {
    const {openSearchbar, setOpenSearchbar} = useContext(AppContext)



    return (
        <div className="Hero_wraper py-[40px] md:py-[60px] lg:py-[80px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] grid grid-cols-1 lg:grid-cols-2 place-items-center gap-20">
            <div className="info_wraper">
                <h1 className="text-[42px] md:text-[52px] text-primary_color font-[800]">
                    Present tips för <span className="text-heading_2nd_color">alla</span>
                </h1>
                <p className="pt-5  text-[16px] text-gray-500 leading-[28px]">
                    Året är kantat av speciella tillfällen där vi visar uppskattning till de vi håller kära genom omtänksamma gåvor. Varje present ska vara minnesvärd, men att välja rätt gåva för Mors Dag, en väns födelsedag, eller en annan kär person kan ofta vara en utmaning. På nätet finns en uppsjö av butiker och resurser för presentidéer, men vi strävar efter att göra det enklare för dig. Här har vi sammanställt de allra bästa presenttipsen för varje år, med en bred variation från prisvärda till exklusiva alternativ.
                </p>
                <p className="pt-[10px] text-gray-500 text-[16px] leading-[28px] ">
                    Med en omfattande samling av toppvalda gåvor från hundratals nätbutiker, ger Presenttill.nu dig möjlighet att enkelt hitta den perfekta presenten för varje person och tillfälle. Oavsett om du söker en unik gåva för en speciell person eller behöver inspiration för en viss händelse, är det här du kommer hitta årets mest eftertraktade presenter!
                </p>

                <button onClick={() => setOpenSearchbar(!openSearchbar)} className=" bg-primary_color flex items-center mt-[30px] px-[20px] py-[10px]">
                    <BiSearch className="w-7 h-7 text-secondary_color" />
                    <span className="text-white_color text-[16px] md:text-[18px] font-semibold pl-2">Hitta dina nuvarande tips.</span>
                </button>

            </div>
            <div className="gift_box">
                <motion.div
                    initial={{
                        transform: "translateZ(10px) translateY(-4px)",
                    }}
                    animate={{
                        transform: "translateZ(34px) translateY(-10px)",
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 2,
                        ease: "easeInOut",
                    }}
                >

                    <Image src="/banner-main-img.png" width="600" height="600" alt="present" />

                </motion.div>

            </div>
        </div>
    )
}