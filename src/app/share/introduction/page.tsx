import Wechat from "@/components/share/introduction/Wechat";
import { query } from "@/utils/mysql";
import Image from "next/image";
import Link from "next/link";

interface IAppInfo {
    app_version: string
    download_url: string
}

export default async function Page() {
    const rows = await query<IAppInfo[]>('SELECT * FROM et_app_version where app_no = "EQI-MTgxNzQzMzY4NjI3MDgwODA2NA==" order by id desc limit 1');
    const appInfo = rows[0];
    return (
        <div className="bg-black">
            <div className="relative w-full h-screen bg-black">
                <Image
                    src="/introduct.jpg"
                    alt="File icon"
                    fill
                    sizes="100vw"
                    className='object-cover'
                    priority
                />
            </div>
            <div className="download-full">
                <Wechat appVersion={appInfo.app_version} downloadUrl={appInfo.download_url} />
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