'use client'


import Breadcumb from "@/components/common/Breadcumb";
import {useQuery} from "@tanstack/react-query";
import client from "@/lib/ApolloClient";
import {GET_POST} from "@/lib/Query";
import Image from "next/image";


export default function SingleBlogContent(props: any){

    const { slug} = props


    const { data, isLoading } = useQuery<any>({
        queryKey: [`post-${slug}`],
        queryFn: async () =>
            await client.request(
                GET_POST,
                {id: slug}
            ),
    });

    return(
        <>
            <Breadcumb title={data?.post?.title} logo="" />
            <div className="mx-[20px] md:mx-[100px] xl:mx-[200px] my-[60px] shadow-none md:shadow-lg p-02 md:p-10">
                <div className=" w-full image  overflow-hidden flex justify-center items-center">
                    <Image className=" object-cover" src={data?.post?.featuredImage?.node?.sourceUrl} width="400" height="400" alt={data?.post?.title} />
                </div>

                <div className="blog_content pt-[60px]" dangerouslySetInnerHTML={{__html: data?.post?.content}} />
            </div>
        </>
    )
}