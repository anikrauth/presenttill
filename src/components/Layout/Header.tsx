import Image from "next/image";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { BiLogoFacebookCircle, BiSearch } from "react-icons/bi";
import Link from "next/link";
import SidebarOverlay from "./SidebarOverlay";
import Logo from "../Logo";
import { useState } from "react";
import SearchModal from "./SearchModal";

export default function Header() {
    const [openSidebar, setOpenSidebar] = useState(false)
    const [openSearchbar, setOpenSearchbar] = useState(false)
    return (
        <header className="px-[40px] md:px-[100px] h-[85px] shadow-sm flex items-center justify-between bg-primary_color">
            <button onClick={() => setOpenSidebar(!openSidebar)} className="flex items-center">
                <span className="md:block hidden pr-2 font-[400] text-[13px] text-white_color">Present ideér:</span>
                <HiMiniBars3BottomLeft className="w-7 h-7 text-secondary_color" />
            </button>
            <SidebarOverlay openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
            <Logo />
            <div className="flex items-center">
                <button onClick={() => setOpenSearchbar(!openSearchbar)} className="search_wraper flex items-center">
                    <BiSearch className="w-6 h-6 text-secondary_color" />
                    <span className="md:block hidden text-white_color text-[16px] pl-[5px]">Search</span>
                </button>

               {openSearchbar && <SearchModal openSearchbar={openSearchbar} setOpenSearchbar={setOpenSearchbar} />} 

                <ul className="social_handels flex items-center pl-[40px]">
                    <li>
                        <Link href="/">
                            <BiLogoFacebookCircle className="w-6 h-6 text-secondary_color hover:text-white_color" />
                        </Link>
                    </li>
                </ul>
            </div>

        </header>
    )
}