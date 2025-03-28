'use client';

import Script from 'next/script';
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
    const initialized = useRef(false);

    useEffect(() => {
        const initAd = () => {
            if (!initialized.current) {
                initialized.current = true;

                // 确保 TencentGDT 已经初始化
                if (typeof window !== 'undefined') {
                    window.TencentGDT = window.TencentGDT || [];
                }

                // 等待一小段时间确保脚本完全加载
                setTimeout(() => {
                    if (window.TencentGDT) {
                        window.TencentGDT.push({
                            app_id: appId,
                            placement_id: placementId,
                            type: type,
                            count: count,
                            onComplete: function (res: any) {
                                if (res && Array.isArray(res)) {
                                    try {
                                        window.TencentGDT.NATIVE.renderAd(res[0], containerId);
                                    } catch (error) {
                                        console.error('Failed to render ad:', error);
                                    }
                                } else {
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

        // 监听脚本加载完成事件
        const script = document.querySelector('#tencent-gdt-script');
        if (script) {
            script.addEventListener('load', initAd);
        }

        return () => {
            if (script) {
                script.removeEventListener('load', initAd);
            }
        };
    }, [appId, placementId, containerId, type, count]);

    return (
        <>
            <Script
                id="tencent-gdt-script"
                src="//qzs.qq.com/qzone/biz/res/i.js"
                strategy="beforeInteractive"
                onLoad={() => {
                    if (typeof window !== 'undefined') {
                        window.TencentGDT = window.TencentGDT || [];
                    }
                }}
                onError={(e) => {
                    console.error('Failed to load TencentGDT script:', e);
                }}
            />
            <div id={containerId}></div>
        </>
    );
};

export default TencentAd;