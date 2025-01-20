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
export const News = async () => {
    const response = await fetch(`https://e08trip.cn/api/news/list?pageNo=${1}&pageLimitNum=8`);
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
        <div className="flex flex-row flex-wrap gap-2">
            {data.list.map(item => (
                <Link href={`/news/${item.newsNo}`} key={item.newsNo} className=" w-full flex flex-col mt-1 bg-slate-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <Image src={item.coverImage} alt={item.title} width={160} height={90} className="w-full aspect-video object-cover" />
                    <div className="p-4">
                        <h2 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h2>
                        <p className="mt-1 text-sm text-gray-500">{item.summary}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}