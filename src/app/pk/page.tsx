// import TencentAd from "@/components/TencentAd";
'use client';
import dynamic from 'next/dynamic';
import Image from "next/image";
import './style.css';
const TencentAd = dynamic(() => import('@/components/TencentAd'), { ssr: false });

// 修改页面参数的类型定义
// type PageProps = {
//     searchParams: Promise<{ type?: string }>;
// };

// 修改页面组件的定义
export default function PK() {
    // 获取 URL query 参数 type，默认为 user
    // const type = (await searchParams).type || 'user';

    return (
        <div className='pk-container'>
            <div className='pk-header'>
                <div className='pk-header-title'>
                    <span>PK</span>
                </div>
            </div>
            <div className='pk-header-description'>
                <span>这是一段PK的描述</span>
            </div>
            <button className='pk-download'>
                <span>下载</span>
            </button>
            <div className="flex flex-row items-center justify-between w-full text-xs font-bold text-[#FFFFFF] mb-1 gap-1 ">
                <div>
                    <Image
                        aria-hidden
                        src="/logo.png"
                        alt="File icon"
                        width={150}
                        height={150}
                        className='w-40 h-40 rounded-lg'
                    />
                    <div className="mt-1 line-clamp-1"><span>PK选项一</span></div>
                </div>
                <div>
                    <Image
                        aria-hidden
                        src="/logo.png"
                        alt="File icon"
                        width={150}
                        height={150}
                        className='w-40 h-40 rounded-lg'
                    />
                    <div className="mt-1 line-clamp-1 text-right"><span>PK选项二</span></div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
                <div className="left">
                    <span>60
                        <span className="font-normal">%</span>
                    </span>
                    <Image
                        aria-hidden
                        src="/icon_p.png"
                        alt="File icon"
                        width={21}
                        height={21}
                        className='w-6 h-6'
                    />
                </div>
                <div className="right">
                    <Image
                        aria-hidden
                        src="/icon_k.png"
                        alt="File icon"
                        width={21}
                        height={21}
                        className='w-6 h-6'
                    />
                    <span>40
                        <span className="font-normal">%</span>
                    </span>
                </div>
            </div>
            <TencentAd
                appId="1210753373"
                placementId="5185723796142936"
                containerId="tencent-ad-container"
                type="native"
                count={1}
            />
        </div>
    )
}