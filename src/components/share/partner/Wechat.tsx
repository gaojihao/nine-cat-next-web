'use client'
export default function Wechat() {
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
    return null

}