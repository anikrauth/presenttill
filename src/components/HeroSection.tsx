'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
export default function HeroSection() {
    return (
        <div className="Hero_wraper py-[80px] px-[100px] grid grid-cols-2 place-items-center gap-20">
            <div className="info_wraper">
                <h1 className="text-[52px] text-primary_color font-[800]">
                    Present tips för <span className="text-secondary_color">alla</span>
                </h1>
                <p className="pt-5 text-primary_color text-[17px]"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat eum quisquam, at et culpa odio doloremque incidunt, itaque accusantium neque cumque harum rem, eius sapiente accusamus voluptate necessitatibus porro ea.</p>
                <button className=" bg-primary_color flex items-center mt-[40px] px-[20px] py-[10px]">
                    <BiSearch className="w-7 h-7 text-secondary_color" />
                    <span className="text-white_color text-[18px] font-semibold pl-2">Hitta dina nuvarande tips.</span>
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