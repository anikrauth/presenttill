import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { BiLogoFacebookCircle, BiSearch } from "react-icons/bi";
import Link from "next/link";
import SidebarOverlay from "./SidebarOverlay";
import Logo from "../Logo";
import { useState,useContext } from "react";
import SearchModal from "./SearchModal";
import { AppContext } from '@/utils/AppContext'
export default function Header() {
    const {openSearchbar, setOpenSearchbar} = useContext(AppContext)
    const [openSidebar, setOpenSidebar] = useState(false)
    return (
        <header className="px-[40px] md:px-[100px] h-[85px] shadow-sm flex items-center justify-between bg-primary_color">
            <button onClick={() => setOpenSidebar(!openSidebar)} className="flex items-center">
                <span className="md:block hidden pr-2 font-[400] text-[13px] text-white_color">Present ideér:</span>
                <HiMiniBars3BottomLeft className="w-7 h-7 text-secondary_color" />
            </button>
            <SidebarOverlay openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
            <Logo />
            <div className="flex items-center">
                <Link className=" md:block hidden text-[16px] hover:font-medium hover:text-secondary_color text-white_color font-normal pr-[40px]" href="/presenttips">
                    Present Tips
                </Link>
                <button onClick={() => setOpenSearchbar(!openSearchbar)} className="search_wraper flex items-center hover:font-medium hover:text-secondary_color text-white_color ">
                    <BiSearch className="w-6 h-6 text-secondary_color" />
                    <span className="md:block hidden text-[16px] pl-[5px]">Sök</span>
                </button>

               {openSearchbar && <SearchModal openSearchbar={openSearchbar} setOpenSearchbar={setOpenSearchbar} />} 

                <ul className="social_handels flex items-center pl-[40px]">
                    <li>
                        <Link href="https://www.facebook.com/presenttill">
                            <BiLogoFacebookCircle className="w-6 h-6 text-secondary_color hover:text-white_color" />
                        </Link>
                    </li>
                </ul>
            </div>

        </header>
    )
}