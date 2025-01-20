import Image from "next/image";
import Link from "next/link";

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
    searchParams,
}: {
    searchParams: Promise<{ pageNo: number }>
}) {
    const pageNo = (await searchParams).pageNo || 1;
    const response = await fetch(`https://e08trip.cn/api/news/list?pageNo=${pageNo}&pageLimitNum=10`);
    const { data } = await response.json() as {
        data: {
            totalCount: number,
            pageNo: number,
            pageLimitNum: number
            list: INews[]
        }
    };

    console.log(data)

    return (
        <div>
            <div className='mx-auto max-w-4xl bg-white px-4 sm:px-6 lg:px-8 mt-4'>
                {
                    data.list.map(item => (
                        <Link href={`/news/${item.newsNo}`} key={item.newsNo} className="w-full flex flex-row items-center mt-1 bg-slate-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                            <Image src={item.coverImage} alt={item.title} width={160} height={90} className="aspect-video object-cover rounded-t-lg" />
                            <div className="h-full  flex flex-col justify-between px-4">
                                <h2 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h2>
                                <p className="mt-1 text-sm text-gray-500">{item.summary}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}