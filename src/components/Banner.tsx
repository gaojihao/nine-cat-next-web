/* eslint-disable @next/next/no-img-element */
'use client'
import { Carousel } from "antd";

export const Banner = () => {
    const bannerImages = [
        'https://static.e08trip.cn/upload/resource/1726714899/banner_share.jpg',
        'https://static.e08trip.cn/upload/resource/1726714909/banner_file.jpg',
        'https://static.e08trip.cn/upload/resource/1726714915/banner_health.jpg',
        'https://static.e08trip.cn/upload/resource/1726714888/banner_maochumo.jpg'
    ];
    return (
        <div style={{ width: '100vw', height: '42.8vw', position: 'relative' }}>
            <Carousel autoplay style={{ height: '42.8vw' }}>
                {bannerImages?.map(item => (
                    <div key={item} style={{ width: '100vw', height: '42.8vw', position: 'relative' }}>
                        <img alt="img" style={{ width: '100vw', height: '42.8vw', objectFit: 'cover' }} src={item} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}