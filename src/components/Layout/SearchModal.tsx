import { BiSearch } from "react-icons/bi";
import { HiXMark } from "react-icons/hi2";

export default function SearchModal(props: any) {

    const { setOpenSearchbar, openSearchbar } = props;

    return (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm ">
            <div className="w-full h-full flex justify-center items-center relative">
            <button onClick={() => setOpenSearchbar(!openSearchbar)} className=" absolute right-[10%] top-[15%]">
                <HiXMark className="w-[50px] h-[50px] text-primary_color" />
            </button>
                <div className="Search_input rounded border-none w-[600px] flex items-center h-[55px] px-5 bg-white">
                    <input className="w-full border-none focus:outline-none h-full" type="text" placeholder="Search" />
                    <button>
                        <BiSearch className="w-7 h-7 text-secondary_color" />
                    </button>
                </div>
            </div>
        </div>
    )
}