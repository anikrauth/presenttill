import Link from "next/link";
import { FiMail, FiFacebook  } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
export default function Footer() {
    return(
        <footer className="py-[40px] md:py-[60px] lg:py-[100px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] bg-primary_color grid grid-cols-1 md:grid-cols-3 gap-10  text-white_color justify-center ">
            <div className="footer_item  ">
                <h3 className="text-[18px]  uppercase font-medium pb-3">KONTAKTA OSS</h3>
                <p>Vill du ge presenttips, ris eller ros, eller annonsera så går det bra att kontakta ossE-post:</p>
                <Link className="flex items-center text-[17px] font-normal pt-5 pb-3" href="/">
                    <span><FiMail className="w-5 h-5 text-secondary_color" /></span>
                    <span className="pl-2">hej@presenttill.nu</span>
                </Link>
                <Link className="flex items-center text-[17px] font-normal " href="https://www.facebook.com/presenttill">
                    <span><FiFacebook  className="w-5 h-5 text-secondary_color" /></span>
                    <span className="pl-2">Facebook</span>
                </Link>

            </div>
            <div className="footer_item ">
                <h3 className="text-[18px]  uppercase font-medium pb-3">COPYRIGHT</h3>
                <p className="pb-3">Copyright © 2020 Presenttill.nu
                    Alla rättigheter reserverade</p>
                <p>
                    Presenttill.nu drivs av Itbyggare i Mölndal och AK Hansson Solutions. Allt material är copyright-skyddat och du får inte använda dig av texterna utan lov från utgivaren.
                </p>

            </div>
            <div className="footer_item	">
                <h3 className="text-[18px]  uppercase font-medium pb-3">FÖLJ OSS</h3>
                <Link className="flex items-center text-[17px] font-normal " href="https://www.facebook.com/presenttill">
                    <span><FaFacebook  className="w-5 h-5 text-secondary_color" /></span>
                    <span className="pl-2">Facebook</span>
                </Link>

            </div>

        </footer>
    )
}