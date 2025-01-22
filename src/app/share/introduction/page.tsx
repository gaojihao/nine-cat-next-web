import Wechat from "@/components/share/introduction/Wechat";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
    return (
        <div className="bg-black">
            <div className="mx-auto max-w-2xl overflow-scroll bg-black">
                <Image
                    src="/introduct.jpg"
                    alt="File icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className='w-full h-full'
                    priority
                />
            </div>
            <div className="download-full">
                <Wechat />
                <p>开发者：九猫</p>
                <p>App隐私权限：访问网络、环境判断等</p>
                <p>
                    <Link href='//e08trip.cn/privacy?type=privacy' target='_blank' className=''>隐私协议</Link>
                    <Link style={{ marginLeft: '20px' }} href='//e08trip.cn/privacy?type=user' target='_blank' className=''>用户权限</Link>
                </p>
            </div>
        </div>
    )
}