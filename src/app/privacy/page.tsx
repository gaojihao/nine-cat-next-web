export default async function Privacy({
    searchParams,
}: {
    searchParams: { type?: string }
}) {
    // 获取 URL query 参数 type，默认为 user
    const type = searchParams.type || 'user';

    // 从服务端获取隐私政策内容
    const response = await fetch(`https://e08trip.cn/api/privacy/getContent?privacyType=${type}`);
    const { data } = await response.json();

    return (
        <div style={{ padding: '1rem' }}>
            <div dangerouslySetInnerHTML={{ __html: data ?? '' }}>
            </div>
        </div>
    )
}