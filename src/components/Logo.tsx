import Link from "next/link";

export default function Logo() {
    return (
        <div className="logo_wraper">
            <Link href="/">
                {/* <Image src="" width="200" height="200" alt="logo" /> */}
                <h3 className="text-[28px] md:text-[32px] font-bold text-white_color">Present<span className="text-secondary_color">till</span></h3>
            </Link>
        </div>
    )
}