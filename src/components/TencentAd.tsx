'use client';

import { useEffect, useRef } from 'react';

interface TencentAdProps {
    appId: string;
    placementId: string;
    containerId: string;
    type?: 'native' | 'banner' | 'interstitial';
    count?: number;
}

interface TencentGDT {
    push: (config: any) => void;
    NATIVE: {
        renderAd: (ad: any, containerId: string) => void;
        loadAd: (placementId: string) => void;
    };
}

declare global {
    interface Window {
        TencentGDT: TencentGDT;
    }
}

const TencentAd: React.FC<TencentAdProps> = ({
    appId,
    placementId,
    containerId,
    type = 'native',
    count = 1,
}) => {
    // 使用 useRef 来保存初始化状态
    const initialized = useRef(false);

    useEffect(() => {
        // 确保 TencentGDT 已经初始化
        if (typeof window !== 'undefined') {
            window.TencentGDT = window.TencentGDT || [];
        }

        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://qzs.gdtimg.com/union/res/union_sdk/page/h5_sdk/i.js';
        document.head.appendChild(script);

        console.log('script loaded');
        console.log("window=====", window.TencentGDT);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    useEffect(() => {
        // 定义初始化广告的方法
        const initAd = () => {
            // 如果已经初始化过，直接返回
            if (!initialized.current) {
                initialized.current = true;

                // 等待一小段时间确保脚本完全加载
                setTimeout(() => {
                    if (window.TencentGDT) {
                        window.TencentGDT.push({
                            app_id: appId,
                            placement_id: placementId,
                            type: type,
                            count: count,
                            onComplete: function (res: any) {
                                console.log('广告加载完成', res);
                                if (res && Array.isArray(res)) {
                                    try {
                                        // 渲染广告
                                        window.TencentGDT.NATIVE.renderAd(res[0], containerId);
                                    } catch (error) {
                                        console.error('Failed to render ad:', error);
                                    }
                                } else {
                                    // 如果没有广告，等待3秒后重新加载
                                    setTimeout(function () {
                                        window.TencentGDT.NATIVE.loadAd(placementId);
                                    }, 3000);
                                }
                            }
                        });
                    }
                }, 100);
            }
        };

        // 如果脚本已经加载完成，直接初始化
        if (window.TencentGDT) {
            initAd();
        }
    }, [appId, placementId, containerId, type, count]);

    return (
        <>
            <div style={{ width: '100%', height: '80px' }} id={containerId}></div>
        </>
    );
};

export default TencentAd;