export default async function Page({
    params,
}: {
    params: Promise<{ activityNo: string }>
}) {
    const activityNo = (await params).activityNo
    const response = await fetch(`https://e08trip.cn/api/activity/getContent/${activityNo}`);
    const { data } = await response.json();

    return (
        <div style={{ padding: '1rem' }}>
            <div dangerouslySetInnerHTML={{ __html: data ?? '' }}>
            </div>
        </div>
    )
}