'use client'
import Link from "next/link";
import {IoChevronDownOutline} from "react-icons/io5";
import {useState} from "react";

export  default function HomeTextSection(){
    const [openText, setOpenText] = useState(false);
    return(
        <div className={`border info_section py-[30px] px-5 md:mx-[40px] lg:mx-[60px] xl:mx-[100px] text-primary_color overflow-hidden mb-[60px] relative ${openText ? 'h-full' : ' h-[300px]'}`}>
            <div className="transition-all pb-[60px]">
                <p className="text-[17px] font-normal">
                    Vi försöker kategorisera upp alla presenttips med både kategorier och etiketter, så att de blir så smidiga som möjligt för er att hitta på vår webbplats.
                </p>
                <p className="text-[17px] font-normal py-2">Ser ni att vi nämner billiga presenter eller billiga julklappar så kan du räkna med att prislappen alltid är under 300 kr.</p>
                <p className="text-[17px] font-normal pb-[30px]">Om ni ser presenter märkta med billigaste julklapparna eller billigaste presenterna, så kan ni räkna med att prislappen alltid är under 100 kronor. Vissa av de här förslagen är så pass billiga att du kan få dem för under 20 lappen!!</p>

                <h4 className="text-[28px] font-medium pb-4">Butiker med Presenttips</h4>
                <p className="text-[17px] font-normal pb-[30px]" >Här finner du ett urval med butiker, några har redan skräddarsydda presenttips för olika högtider och händelser. Vid klick på butikens logo så kommer du in på Presenttills butiksida för butiken. Här kan du läsa mer om varje butik, se fraktuppgifter och se aktuel</p>

                <h4 className="text-[28px] font-medium pb-4">Presenttips kläder</h4>
                <p className="text-[17px] font-normal pb-[30px]">
                    Kläder är också en present som passar de flesta, oavsett ålder. Och det behöver inte enbart vara praktiskt och tråkigt – kläder med roliga motiv eller med motiv av favoritfigurerna uppskattas definitivt bland mindre barn, och coola kläder av äldre barn och tonåringar. Märkeskläder går definitivt hem hos den som föredrar det – och praktiska kläder uppskattas trots allt av de flesta vuxna. Varför inte köpa någonting annorlunda, eller något med roligt motiv? Eller något som man sällan tänker på att köpa själv – som riktigt praktiska skor, eller regnkläder? Eller finkläder, till den som behöver uppdatera den delen av garderoben. Eller snygga underkläder till partnern. <br />
                    Ja, här finns oändliga möjligheter, och det finns faktiskt kläder som alla kan uppskatta, även den som inte är så intresserad av sådant i vanliga fall.
                </p>

                <h4 className="text-[28px] font-medium pb-4">Presenttips elektronik</h4>
                <p className="text-[17px] font-normal pb-[30px]">
                    Dessa presenter passar till alla – från ung till gammal, och oavsett intressen. <br/> <br/>
                    Hur många barn och tonåringar älskar inte tv-spel, till exempel? Och vuxna också, för den delen. <br/><br/>
                    Mobiltelefoner och datorer är garanterat en uppskattat present till såväl yngre, som en del äldre personer. För att inte tala om tv, som nästan alla älskar att se på. Spelkonsoler, datorer, surfplattor och mobiltelefoner är utan tvekan populära presenter till den yngre generationen – och många gånger minst lika uppskattat bland äldre. <br/><br/>
                    Om inte något av det passar så kanske hörlurar, bluetooth högtalare, smartwatch eller något annat passar bättre.
                </p>

                <h4 className="text-[28px] font-medium pb-4">Presenttips elektronik</h4>
                <p className="text-[17px] font-normal pb-3">
                    Ett träningsredskap är en perfekt present till den som gillar att träna, eller den som vill komma igång att träna.
                </p>
                <p className="text-[17px] font-normal pb-3">
                    Ibland kan eller vill man inte riktigt ta sig till gymmet, och då är träningsredskap perfekt eftersom man istället kan träna hemma.
                </p>
                <p className="text-[17px] font-normal pb-3">
                    En motionscykel eller löpband passar perfekt för den som vill träna upp konditionen, och hantlar och skivstänger passar bra för den som är intresserad av styrketräning. Eller varför inte en <span><Link className="font-[600] hover:underline" href="https://xn--gneriviktsnabbt-hlb.com/basta-vibrationsplattan/">vibrationsplatta</Link></span> , som passar perfekt för den som vill ha en mer mångsidig och effektiv träning?
                </p>
                <p className="text-[17px] font-normal pb-[30px]">
                    Även så enkla träningsredskap som hopprep, träningsband och gymmatta kan erbjuda en effektiv och mångsidig träning. Välj det som passar mottagaren bäst, eller något som passar alla.
                </p>

                <h4 className="text-[28px] font-medium pb-4">Presenttips Upplevelser</h4>
                <p className="text-[17px] font-normal pb-3">
                    En upplevelse kan vara den perfekta presenten, och inte minst till den som redan har allt eller som det av andra anledningar är svårt att hit presenter till.
                </p>
                <p className="text-[17px] font-normal pb-3">
                    Det finns många olika upplevelser, vilket gör det enkelt att hitta något som passar.
                </p>
                <p className="text-[17px] font-normal pb-3">
                    Varför inte något lyxigt, som en spavistelse eller hotellövernattning?
                </p>
                <p className="text-[17px] font-normal pb-3">
                    Något spännande som att flyga helikopter eller köra bil?
                </p>
                <p className="text-[17px] font-normal pb-3">
                    Eller kanske något som passar hela familjen?
                </p>
                <p className="text-[17px] font-normal pb-3">
                    Oavsett vem presenten är till så finns det garanterat någonting som passar. Och om du har svårt att bestämma dig så kan du istället köpa ett presentkort och låta mottagaren själv välja upplevelse.
                </p>
                <p className="text-[17px] font-normal pb-[30px]">
                    En <span><Link className="font-[600] hover:underline" href="/upplevelsepresenter">upplevelsepresent</Link></span> passar även om mottagaren bor långt bort, och du behöver skicka presenten. Det är helt enkelt en stor present i en liten förpackning – som passar alla!
                </p>

                <h4 className="text-[28px] font-medium pb-4">Presentboxar</h4>
                <p className="text-[17px] font-normal pb-3">
                    Det finns <span><Link className="font-[600] hover:underline" href="/produkt/presentlada-pappa/">presentboxar</Link></span>  för alla – presentboxar med kaffe för kaffeälskaren, eller med te för den som föredrar det.
                </p>
                <p className="text-[17px] font-normal pb-3">
                    Eller varför inte en presentbox med ost och tillbehör, för den som inte kan få nog av fina ostar?
                </p>
                <p className="text-[17px] font-normal pb-3">
                    Kanske en delikatesslåda till finsmakaren, eller en godisbox för den sötsugna. Ja, det finns verkligen presentboxar för alla smakar.
                </p>
                <p className="text-[17px] font-normal pb-3">
                    En presentbox är en samling med flera presenter, och en stor fördel med det är att mottagaren med stor sannolikhet kommer att gilla något av allt i boxen. Ofta innehåller presentboxar både något ätbart och något drickbart, eller olika varianter av något – till exempel olika sorters ostar.
                </p>
                <p className="text-[17px] font-normal pb-3">
                    Dessutom är de ofta fint förpackade, och till den som verkligen är tokig i något – som kaffe eller godis – blir det definitivt en uppskattad present.
                </p>
            </div>

            <button onClick={() => setOpenText(!openText)} className="absolute left-0 text-heading_2nd_color  bottom-0 w-full py-[20px] bg-white_color flex items-center border-t justify-center text-[17px] font-medium  z-20">
                {
                    openText ? (
                        <>

                            <span>Hide Text</span> <span className="pl-1"><IoChevronDownOutline className="w-5 h-5" /></span>
                        </>
                    ): (
                        <>
                            <span>See More</span> <span className="pl-1"><IoChevronDownOutline className="w-5 h-5" /></span>
                        </>
                    )
                }

            </button>
        </div>
    )
}