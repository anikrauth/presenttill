import GiftIdeasSection from '@/components/GiftIdeasSection'
import HeroSection from '@/components/HeroSection'
import UpCommingSection from '@/components/UpcommingSection'
import Image from 'next/image'
import GiftIdeasProductSection from "@/components/GiftIdeasProductSection";
import HomeTextSection from "@/components/HomeTextSection";
import { GET_HOME_DATA} from '@/lib/Query'
import client from "@/lib/ApolloClient";
interface Props {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params: { slug } }: Props): Promise<any> {
    const data: any = await client.request(
        GET_HOME_DATA,
    )
    return {
        title: `Home - Presenttill`,
        description: data?.homePage?.seo?.metaDesc,
        alternates: {
            canonical: `https://presenttill.nu`,
            languages: {
                'sv_SE': '/sv_SE',
            },
        },
        openGraph: {
            title: `${data?.butik?.title} - Presenttill`,
            description: data?.homePage?.seo?.metaDesc,
            images: [
                {
                    url: data?.homePage?.seo?.opengraphImage?.sourceUrl,
                    width: 800,
                    height: 800
                }
            ],
        },
    }
}
export default function Home() {
  return (
    <main>
      <HeroSection />
        <UpCommingSection />
      <GiftIdeasSection />
        <div className=" py-[40px] md:py-[60px] lg:py-[100px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] md:flex justify-center items-center">
            <div className=" w-full md:w-[40%] flex justify-center md:justify-end pr-0 md:pr-20">
                <Image className="object-cover" src="/target.png" width="250" height="250" alt="mission"/>
            </div>
            <div className="w-full md:w-[60%] pt-[30px]">
                <h3 className="text-[24px] md:text-[32px] font-bold text-primary_color">Vårt uppdrag</h3>
                <h4 className="text-[18px] md:text-[24px] font-semibold text-primary_color pt-[15px]">Vår målsättning att kunna presentera omkring  <span className="text-heading_2nd_color">1000 presenttips!</span></h4>
                <p className="text-[16px] font-normal pt-[10px]">Nya butiker och samarbeten kommer in löpande. Fokus ligger på gåvor vid speciella tillfällen, men bland våra presenttips ska du också kunna hitta annorlunda och udda presentförslag. Vi räds inte att ta ut svängarna när det handlar om presenter i alla de slag.</p>
            </div>
        </div>
        <GiftIdeasProductSection />
        <HomeTextSection />
    </main>
  )
}
