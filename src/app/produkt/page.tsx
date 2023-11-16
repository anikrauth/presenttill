import Breadcumb from "@/components/common/Breadcumb";
import Link from "next/link";
import Image from "next/image";
import {FiArrowRight} from "react-icons/fi";
import ProductsPageSection from "@/components/ProductsPageSection";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'All products - Present till',
    description: 'All products - Present till',
    alternates: {
        canonical: `/produkt`,
        languages: {
            'en-US': '/en-US',
        },
    },
    openGraph: {
        images: '',
    },
}


export default function Products(){
    return(
        <main>
            <Breadcumb title="All Products" logo="" />
            <ProductsPageSection />
        </main>
    )
}