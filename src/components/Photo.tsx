import Image from "next/image";

interface IPhoto {
    id: number
    createTime: string
    photoNo: string
    title: string
    imgUrl: string
}
export const Photo = async () => {
    const response = await fetch(`https://e08trip.cn/api/photo/list?pageNo=1&pageLimitNum=8`);
    const { data } = await response.json() as {
        data: {
            totalCount: number,
            pageNo: number,
            pageLimitNum: number
            list: IPhoto[]
        }
    };

    return (
        <>
            <h3 className=" text-2xl font-bold mb-2 text-[#333]">宠物相册</h3>
            <div className="flex flex-row flex-wrap w-full">
                {data.list.map(item => (
                    <div key={item.photoNo} className="w-1/4 aspect-square overflow-hidden p-2">
                        <div className="w-full h-full border-red-500 border-2 border-solid p-1 rounded-lg">
                            <div className="w-full h-full relative">
                                <Image
                                    src={item.imgUrl}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="hover:shadow-lg transition-shadow duration-300 ease-in-out"
                                    style={{ borderRadius: '8px' }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div></>
    )
}