import Image from "next/image";
interface INews {
    id: number
    createTime: string
    newsNo: string
    title: string
    summary: string
    category: string
    content: string
    coverImage: string
    auditStatus: string
    reason: string
}

export default async function Page({
    params,
}: {
    params: Promise<{ newsNo: string }>
}) {
    const newsNo = (await params).newsNo
    const response = await fetch(`https://e08trip.cn/api/news/detail/${newsNo}`);
    const { data } = await response.json() as { data: INews };

    console.log(data);

    return (
        <div>
            <div className='mx-auto max-w-4xl bg-white px-4 sm:px-6 lg:px-8 mt-4'>
                <h1>{data.title}</h1>
                <Image src={data.coverImage} alt={data.title} width={160} height={90} className="w-full my-3 aspect-video object-cover rounded-t-lg" />
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
        </div>
    )
}