import Image from "next/image";

export default function Breadcumb(props: {title: string, logo: string}){
    return(
        <div className="py-[40px] md:py-[60px] lg:py-[100px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] h-[250px] flex justify-center items-center bg-2nd_section_color text-secondary_color">
            {
                props?.logo === '' ? (
                    <></>
                ):(
                    <Image className=" rounded-lg mr-5" src={props?.logo} alt="store logo" width="150" height="150" />
                )
            }

            <h1 className="text-[32px] md:text-[42px] lg:text-[52px] font-bold capitalize">{props?.title}</h1>
        </div>
    )
}