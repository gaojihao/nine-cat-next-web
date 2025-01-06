import Wechat from "@/components/share/introduction/Wechat";
import Image from "next/image";
import Link from "next/link";

interface IAppInfo {
    id: number
    createTime: string
    appNo: string
    appVersion: string
    appUpdateInfo: string
    downloadUrl: string
    mode: string
    isForce: boolean
}

export default async function Page() {
    const data = await fetch('https://e08trip.cn/api/appUpdateConfig/check?appId=com.earth08.tour')
    const res = await data.json() as { data: IAppInfo }

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
                <Wechat downloadUrl={res.data.downloadUrl} />
                {/* {inWechat ? (
                    <p style={{
                        fontSize: '16px',
                        marginBottom: '10px',
                        color: 'rgba(0, 0, 0, 0.4)'
                    }}>
                        点击右上方 <span style={{ color: '#000000' }}>...</span> 选择在浏览器打开
                    </p>

                ) : (
                    <div className='w-full  bg-transparent flex flex-row justify-center items-center'>
                        <button onClick={onDownLoad} className='bg-gradient-to-r from-amber-500 to-red-500 text-white px-20 py-2 rounded-md'>下载App</button>
                    </div>
                )} */}
                <p>版本：{res?.data.appVersion}</p>
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