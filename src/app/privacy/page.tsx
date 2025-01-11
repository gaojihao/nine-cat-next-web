import './style.css';

// 修改页面参数的类型定义
type PageProps = {
    searchParams: Promise<{ type?: string }>;
};

// 修改页面组件的定义
export default async function PrivacyPage({ searchParams }: PageProps) {
    // 获取 URL query 参数 type，默认为 user
    const type = (await searchParams).type || 'user';

    // 从服务端获取隐私政策内容
    const response = await fetch(`https://e08trip.cn/api/privacy/getContent?privacyType=${type}`);
    const { data } = await response.json();

    return (
        <div style={{ padding: '1rem' }}>
            <div className="html-body" dangerouslySetInnerHTML={{ __html: data ?? '' }}>
            </div>
        </div>
    )
}