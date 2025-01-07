import Image from "next/image";

export default async function Partner() {
    return (
        <div>
            <div className='bg-black py-4'>
                <div className="mx-auto max-w-6xl flex flex-row items-center flex-wrap">
                    <div className='w-full flex items-center flex-col justify-center md:w-1/2 py-8'>
                        <h2 className='text-2xl text-white font-extrabold mb-3'>科学养宠尽在九猫</h2>
                        <p className='text-white text-sm'>新应用，新玩法</p>
                    </div>
                    <div className='w-full flex items-center justify-center py-8 md:w-1/2'>
                        <Image src='/intro-pc.png' alt="File icon" width={0} height={0} sizes="100vw" className='w-9/12 h-auto object-cover' priority />
                    </div>
                </div>
            </div>
            <div className='bg-[#F3F5FC] py-4'>
                <div className="mx-auto max-w-6xl flex flex-row items-center flex-wrap">
                    <div className='w-full flex items-center justify-center py-8 md:w-1/2'>
                        <Image src='/dangan.png' alt="File icon" width={0} height={0} sizes="100vw" className='w-9/12 h-auto object-cover' priority />
                    </div>
                    <div className='w-full flex items-center flex-col justify-center md:w-1/2 py-8'>
                        <h2 className='text-2xl text-[#191E24] font-extrabold mb-3'>猫咪档案</h2>
                        <p className='text-[#191E24] text-sm'>随时随地跟踪猫咪状态</p>
                    </div>
                </div>
            </div>
            <Image src='/honer.jpeg' alt="File icon" width={0} height={0} sizes="100vw" className='w-full h-full' priority />
        </div>
    )
}