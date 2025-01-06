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

export default async function Partner() {
    const data = await fetch('https://e08trip.cn/api/appUpdateConfig/check?appId=com.earth08.tour')
    const res = await data.json() as { data: IAppInfo }

    console.log('res=======', res)

    const inWechat = window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)?.includes('micromessenger')

    return (
        <div>
            <div className="mx-auto max-w-2xl overflow-scroll">
                <Image
                    src="/partner.jpg"
                    alt="File icon"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className='w-full h-auto'
                    priority
                />
            </div>
            {inWechat && <p style={{
                fontSize: '16px',
                textAlign: 'center',
                marginTop: '30px',
                color: 'rgba(0, 0, 0, 0.4)'
            }}>
                点击右上方 <span style={{ color: '#000000' }}>...</span> 选择在浏览器打开
            </p>}
            <div className='w-full h-20 bg-transparent flex flex-row justify-center items-center'>
                <Link href={res.data.downloadUrl} target='_blank' className='bg-gradient-to-r from-amber-500 to-red-500 text-white px-6 py-2 rounded-md'>申请成为合伙人</Link>
            </div>
        </div>
    )
}