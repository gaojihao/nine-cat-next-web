import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
export default async function Page({
    params,
}: {
    params: Promise<{ petNo: string }>
}) {
    const petNo = (await params).petNo
    const response = await fetch(`https://e08trip.cn/api/pet/queryPetWeeklyReport?petNo=${petNo}`);
    const { data } = await response.json();

    return (
        <div>
            <div className='mx-auto max-w-4xl bg-white px-4 sm:px-6 lg:px-8 mt-4'>
                <Markdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>{data?.summary.replace('markdown\n', '').replace('```', '')}</Markdown>
            </div>
        </div>
    )
}