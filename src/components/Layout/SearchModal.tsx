import { BiSearch } from "react-icons/bi";
import { HiXMark } from "react-icons/hi2";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
export default function SearchModal(props: any) {

    const { setOpenSearchbar, openSearchbar } = props;

    const Router = useRouter();
    const [searchInput, setSearchInput] = useState("");
    const [placeHolder, setPlaceHolder] = useState("Search what are you looking for?");
    const [focused, setFocused] = useState(false)
    const handleSubmitSearch = (e: any) => {
        e.preventDefault();
        if (searchInput.replaceAll(' ', '').length > 0) {
            Router.push(`/search?q=${searchInput}`);
        }
        else {
            setSearchInput('')
            setPlaceHolder('Please type something..')

        }
    };

    useEffect(() => {
        if(searchInput.replaceAll(' ', '').length > 0){
            setFocused(false)
        }else {
            setFocused(true)
        }
        if(searchInput.replaceAll(' ', '').length > 0){
            Router.push(`/search?q=${searchInput}`);
        }
    }, [searchInput])



    return (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm ">
            <div className="w-full h-full flex justify-center items-center relative">
            <button onClick={() => setOpenSearchbar(!openSearchbar)} className=" absolute right-[10%] top-[15%]">
                <HiXMark className="w-[50px] h-[50px] text-secondary_color" />
            </button>
                <form autoComplete="off" onSubmit={handleSubmitSearch} className="Search_input rounded border-none w-[600px] flex items-center h-[55px] px-5 bg-white">
                    <input
                        onClick={() => setFocused(!focused)}
                        minLength={1} type="search" onChange={(e) => setSearchInput(e.target.value)} name="search" aria-label='search'
                        placeholder={placeHolder}
                        className="w-full border-none focus:outline-none h-full"  />
                    <button type="submit">
                        <BiSearch className="w-7 h-7 text-secondary_color" />
                    </button>
                </form>
            </div>
        </div>
    )
}