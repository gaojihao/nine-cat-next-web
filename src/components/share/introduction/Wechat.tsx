'use client'

import { HttpGet } from "@/utils/http"
import Link from "next/link"
import useSWR from 'swr'

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

export default function Wechat() {
    const { data } = useSWR<IAppInfo>('/api/appUpdateConfig/check?appId=com.earth08.tour', HttpGet)
    const inWechat = typeof window !== 'undefined' && window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)?.includes('micromessenger')
    if (inWechat) {
        return (
            <p style={{
                fontSize: '16px',
                textAlign: 'center',
                marginTop: '30px',
                color: 'rgba(0, 0, 0, 0.4)'
            }}>
                点击右上方 <span style={{ color: '#000000' }}>...</span> 选择在浏览器打开
            </p>
        )
    }
    return (
        <>
            <div className='w-full  bg-transparent flex flex-row justify-center items-center'>
                <Link href={data?.downloadUrl ?? ''} target='_blank' className='bg-gradient-to-r from-amber-500 to-red-500 text-white px-20 py-2 rounded-md'>下载App</Link>
            </div>
            <p>版本：{data?.appVersion}</p>
        </>
    )

}