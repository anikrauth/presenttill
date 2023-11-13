import Link from "next/link";
import {FiMinus, FiPlus} from "react-icons/fi";
export default function GiftIdeasProductSection(){
    return(
        <div className=" py-[100px]  px-[100px]">
            <div className="sec_header flex justify-between items-center text-white_color">
                <div>
                    <h2 className="text-[32px] font-bold text-primary_color">Popular <span className="text-secondary_color">gift ideas</span></h2>
                </div>
                <Link className="text-[18px] font-semibold text-secondary_color" href="/">
                    View All
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-[40px]">
                <div className="productCard_wraper shadow-md bg-white rounded-[12px] overflow-hidden relative">
                    <Link href="/" className=" overflow-hidden relative w-full block">
                        {/*<Image objectFit="cover" className="product_image transition-all rounded-t-[12px]" src="" alt="product" width="600" height="600" />*/}
                        <div
                            className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-300">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600"
                                 aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 16 20">
                                <path
                                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                                <path
                                    d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                            </svg>
                        </div>
                        <div className="top_info absolute top-[8px] md:top-[15px] w-full">
                            <div className="flex-col md:flex-row flex justify-between items-start px-[5px] md:px-[15px]">
                                <div className=" flex flex-col ">
                                    <button type="button" className="mb-[5px] inline-block badges uppercase px-[10px] py-[2px] text-[12px] md:text-[15px] bg-[#964A2A] text-white rounded-[6px]">
                                        Best seller
                                    </button>

                                </div>

                            </div>
                        </div>
                    </Link>
                    <div className="product_info p-[10px] md:p-[20px] ">
                        <div className=" line-clamp-2">
                            <Link className="text-[15px] md:text-[17px] block pb-[0px] font-normal text-primary_color tracking-[1.5px]" href="/">asdfsefsdfgds</Link>
                        </div>

                        <div className="bottom_wraper  border-t-2 pt-2 md:pt-3 mt-2 md:mt-3">
                            <button  type="button" className="flex items-center text-[13px] font-bold uppercase py-[0px] pl-0 md:pl-[10px] rounded-full border-0 md:border-2 border-buy_button_border bg-transparent md:bg-buy_button_bg">
                                <span className="md:block hidden">See current price</span> <span className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-buy_icon_bg border-secondary_color border-2 ml-[5px]"><FiPlus className="w-4 h-4 md:w-6 md:h-6" /></span>
                            </button>

                            <button  type="button" className="mt-2 flex items-center text-[13px] font-bold uppercase py-[0px] pl-0 md:pl-[10px] rounded-full border-0 md:border-2 border-buy_button_border bg-transparent md:bg-buy_button_bg">
                                <span className="md:block hidden">See more about the store</span> <span className="w-[32px] h-[32px] flex items-center justify-center rounded-full bg-buy_icon_bg border-secondary_color border-2 ml-[5px]"><FiPlus className="w-4 h-4 md:w-6 md:h-6" /></span>
                            </button>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}