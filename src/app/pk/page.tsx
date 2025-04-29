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
                    <span>助力出道，由你掌握</span>
                </div>
            </div>
            <div className='pk-header-description'>
                <span>家人们，咱的广告超有创意！动动手指投一票，助力它 C 位出道，感谢大家支持～</span>
            </div>
            <button className='pk-download'>
                <span>下载</span>
            </button>
            <TencentAd
                appId="1210753373"
                placementId="5185723796142936"
                type="native"
                count={2}
            />
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
            <div className="flex flex-row items-center justify-between w-full text-xs font-bold text-[#FFFFFF] mb-1 gap-1 ">
                <div className='w-1/2 flex flex-row items-center  justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 rounded-md'>
                    <div className="mt-1 line-clamp-1"><span>投票给TA</span></div>
                </div>
                <div className='w-1/2 flex flex-row items-center  justify-center bg-gradient-to-r from-sky-500 to-indigo-500 py-2 rounded-md'>
                    <div className="mt-1 line-clamp-1"><span>投票给TA</span></div>
                </div>
            </div>
        </div>
    )
}