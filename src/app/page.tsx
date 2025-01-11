import { Banner } from "@/components/Banner";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-full w-full flex-col">
      <div className='fixed left-0 top-0 w-full h-16 shadow-lg z-50 bg-gray-100 opacity-80 px-6 backdrop-blur-sm'>
        <input type="checkbox" id="nav-toggle" className="hidden peer" />

        <div className='mx-auto flex flex-row justify-between items-center h-16'>
          <Link className='flex flex-row items-center text-[#111111] font-bold text-xl gap-1 hover:text-[#000000]' title='九猫' aria-label='九猫' href="/">
            <Image
              aria-hidden
              src="/logo.png"
              alt="File icon"
              width={32}
              height={32}
              className='w-8 h-8 rounded-full'
            />
            <span>九猫</span>
          </Link>

          <label htmlFor="nav-toggle" className='lg:hidden cursor-pointer'>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path className="peer-checked:hidden" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              <path className="hidden peer-checked:inline" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>

          <div className='hidden lg:flex flex-row items-center gap-6'>
            <Link href="/#about" className='text-[#111925] text-sm hover:text-[#000000]'>和九猫合作</Link>
            <Link href="/#about" className='text-[#111925] text-sm hover:text-[#000000]'>我们的科技</Link>
            <Link href="/#about" className='text-[#111925] text-sm hover:text-[#000000]'>企业社会责任</Link>
            <Link href="/#about" className='text-[#111925] text-sm hover:text-[#000000]'>九猫公益</Link>
            <Link href="/#about" className='text-[#111925] text-sm hover:text-[#000000]'>投资者关系</Link>
            <Link href="/#contact" className='text-[#111925] text-sm hover:text-[#000000]'>加入我们</Link>
          </div>
          <Link href="/#contact" className='hidden lg:block text-[#111925] text-sm hover:text-[#000000]'>下载和关注</Link>
        </div>

        <div className='hidden peer-checked:block lg:hidden absolute left-0 w-full bg-gray-100 shadow-lg'>
          <div className='flex flex-col px-6 py-4 space-y-4'>
            <Link href="/#about" className='text-[#111925] text-sm hover:text-[#000000]'>和九猫合作</Link>
            <Link href="/#about" className='text-[#111925] text-sm hover:text-[#000000]'>我们的科技</Link>
            <Link href="/#about" className='text-[#111925] text-sm hover:text-[#000000]'>企业社会责任</Link>
            <Link href="/#about" className='text-[#111925] text-sm hover:text-[#000000]'>九猫公益</Link>
            <Link href="/#about" className='text-[#111925] text-sm hover:text-[#000000]'>投资者关系</Link>
            <Link href="/#contact" className='text-[#111925] text-sm hover:text-[#000000]'>加入我们</Link>
            <Link href="/#contact" className='text-[#111925] text-sm hover:text-[#000000]'>下载和关注</Link>
          </div>
        </div>
      </div>
      {/* banner展示 */}
      <Banner />
      <div className='mx-auto max-w-7xl p-4 sm:px-6 lg:px-8'>
        <Image
          src="/service1.png"
          alt="File icon"
          width={0}
          height={0}
          sizes="100vw"
          className='w-full h-auto'
          priority
        />
      </div>
      <div className='mx-auto max-w-7xl p-4 sm:px-6 lg:px-8'>
        <Image
          src="/service2.png"
          alt="File icon"
          width={0}
          height={0}
          sizes="100vw"
          className='w-full h-auto'
          priority
        />
      </div>
      <div className='mx-auto max-w-7xl p-4 sm:px-6 lg:px-8'>
        <Image
          src="/service3.png"
          alt="File icon"
          width={0}
          height={0}
          sizes="100vw"
          className='w-full h-auto'
          priority
        />
      </div>
      <div className='mx-auto max-w-7xl p-4 sm:px-6 lg:px-8'>
        <Image
          src="/service4.png"
          alt="File icon"
          width={0}
          height={0}
          sizes="100vw"
          className='w-full h-auto'
          priority
        />
      </div>
      <div className='mx-auto max-w-7xl p-4 sm:px-6 lg:px-8'>
        <Image
          src="/service5.png"
          alt="File icon"
          width={0}
          height={0}
          sizes="100vw"
          className='w-full h-auto'
          priority
        />
      </div>
      <div className='mx-auto max-w-7xl p-4 sm:px-6 lg:px-8'>
        <Image
          src="/service6.png"
          alt="File icon"
          width={0}
          height={0}
          sizes="100vw"
          className='w-full h-auto'
          priority
        />
      </div>
      {/* 关于我们 */}
      {/* 添加/#about的锚点 */}
      <div id='about'></div>
      <div className='mx-auto max-w-7xl p-4 sm:px-6 lg:px-8'>
        <div className=' flex flex-col items-center justify-center gap-3'>
          <h3 className='text-xl font-bold my-4'>关于我们</h3>
          <div className='w-full bg-white px-6 py-10 rounded-lg text-[#191E24] shadow-lg flex flex-col gap-3'>
            <h3 className='text-xl font-bold'>九猫社区官网产品简介：</h3>
            <p className='text-lg'>九猫社区 - 您的猫咪生活管家</p>
            <p className='text-base'>欢迎来到九猫社区</p>
            <p className='text-sm'>九猫社区是一个充满活力的猫咪爱好者社区，我们致力于打造一个全方位的猫咪生活服务平台。无论您是资深猫奴还是新手猫主，这里都有您需要的一切资源和支持。
            </p>
            <h4 className='text-base font-bold mt-2'>1. 猫咪档案管理 - 个性化的猫咪档案</h4>
            <p className='text-sm'>在九猫社区，您可以为每一只猫咪创建一个详细的个性化档案。记录它们的品种、年龄、性别、毛色、性格特点，甚至是它们的小癖好。档案管理功能帮助您更好地了解和照顾您的猫咪</p>
            <h4 className='text-base font-bold mt-2'>2. 日常健康记录 - 猫咪健康守护者</h4>
            <p className='text-sm'>我们提供全面的猫咪健康记录工具，让您能够轻松跟踪和管理猫咪的疫苗接种、健康检查和医疗历史。通过我们的平台，您可以确保猫咪得到及时和适当的医疗照顾</p>
            <h4 className='text-base font-bold mt-2'>3. 科学养猫 - 专业指导，科学养护</h4>
            <p className='text-sm'>九猫社区汇集了众多养猫专家的智慧，为您提供科学的养猫指南。从营养均衡的饮食建议到日常护理的最佳实践，我们帮助您成为猫咪的最佳护理者。</p>
            <h4 className='text-base font-bold mt-2'>4. 社区动态 - 分享与交流的乐园</h4>
            <p className='text-sm'>加入我们的社区，分享您的猫咪生活点滴，无论是趣事、挑战还是成就。在这里，您可以找到志同道合的朋友，一起交流养猫心得，共同成长。</p>
            <h4 className='text-base font-bold mt-2'>5. 猫咪写真 - 捕捉美好瞬间</h4>
            <p className='text-sm'>我们的平台是展示您猫咪风采的舞台。上传您猫咪的照片，无论是它们悠闲的睡姿，还是活泼的玩耍场景，让这些美好瞬间成为永恒的记忆。</p>
            <h4 className='text-base font-bold mt-2'>6. 流浪猫公益 - 爱心传递，温暖每一个角落</h4>
            <p className='text-sm'>九猫社区积极参与流浪猫的救助和领养活动。我们相信每一只猫咪都值得一个温暖的家。加入我们，为流浪猫提供帮助，让爱心传递给每一个需要的角落。</p>
            <h4 className='text-base font-bold mt-2'>7.自营猫咪商城 - 一站式购物体验</h4>
            <p className='text-sm'>我们的自营猫咪商城提供高品质的猫咪用品，从食品、玩具到护理用品，应有尽有。我们精心挑选每一件商品，确保它们既安全又适合您的猫咪。</p>
            <p className='text-xs font-bold mt-6'>加入九猫社区，开启您的猫咪生活新篇章</p>
            <p className='text-xs font-bold'>九猫社区不仅是一个平台，它是一个温暖的社区，一个猫咪爱好者的家园。我们诚邀您加入我们的大家庭，与我们一起创造更多美好的猫咪生活故事。</p>
            <p className='text-xs font-bold'>立即注册，开始您的九猫社区之旅！</p>
          </div>
        </div>
      </div>

      {/* 联系我们 */}
      {/* 添加/#contact的锚点 */}
      <div id='contact'></div>
      <div className='mx-auto max-w-7xl p-4 sm:px-6 lg:px-8 w-full'>
        <div className=' flex flex-col items-center justify-center gap-3'>
          <h3 className='text-xl font-bold my-4'>联系我们</h3>
          <div className='w-full bg-white px-6 pt-4 rounded-lg shadow-lg flex flex-row flex-wrap text-xs text-gray-500'>
            <div className='w-full mb-4 md:w-1/2'>
              <span>地址：上海市奉贤区南桥镇南奉公路8589号1幢1203室</span>
            </div>
            <div className='w-full mb-4 md:w-1/2'>
              <span>地址：上海市浦东新区临沂北路 252号</span>
            </div>
            <div className='w-full mb-4 md:w-1/2'>
              <span>邮箱：413712472@qq.com</span>
            </div>
            <div className='w-full mb-4 md:w-1/2'>
              <span>商务合作：413712472@qq.com</span>
            </div>
          </div>
        </div>
      </div>
      <footer className='border-t border-gray-200 py-4'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='columns-1 sm:columns-2 gap-0'>
            <div className='columns-2 w-full py-3'>
              <div>
                <h5 style={{
                  borderBottom: '1px solid #eaeaea',
                  height: '40px',
                  lineHeight: '40px',
                  width: '80%',
                  textAlign: 'left',
                  fontSize: '15px',
                  color: '#333',
                }}>隐私保护</h5>
                <ul>
                  <li>
                    <a style={{
                      height: '40px',
                      lineHeight: '40px',
                      color: '#666',
                    }} href='/privacy?type=privacy'>隐私协议</a>
                  </li>
                  <li>
                    <a style={{
                      height: '40px',
                      lineHeight: '40px',
                      color: '#666',
                    }} href='/privacy?type=user'>用户协议</a>
                  </li>
                  <li>
                    <a style={{
                      height: '40px',
                      lineHeight: '40px',
                      color: '#666',
                    }} href='/privacy?type=cooperation'>第三方数据合作清单</a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 style={{
                  borderBottom: '1px solid #eaeaea',
                  height: '40px',
                  lineHeight: '40px',
                  width: '80%',
                  textAlign: 'left',
                  fontSize: '15px',
                  color: '#333',
                }}>关于九猫</h5>
                <ul>
                  <li>
                    <Link style={{
                      height: '40px',
                      lineHeight: '40px',
                      color: '#666',
                    }} href="/#about">了解我们</Link>
                  </li>
                  <li>
                    <Link style={{
                      height: '40px',
                      lineHeight: '40px',
                      color: '#666',
                    }} href="/#contact">联系我们</Link>
                  </li>
                  <li>
                    <a style={{
                      height: '40px',
                      lineHeight: '40px',
                      color: '#666',
                    }} href='/share/partner'>合伙人计划</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='columns-2 w-full py-3'>
              <div className='flex flex-col items-start sm:items-center'>
                <Image
                  aria-hidden
                  src="/qrcode.avif"
                  alt="File icon"
                  width={96}
                  height={96}
                  className='w-24 h-24'
                />
                <span className='text-gray-700'>微信公众账号</span>
              </div>
              <div className='flex flex-col items-start sm:items-center'>
                <Image
                  aria-hidden
                  src="/qrcode.avif"
                  alt="File icon"
                  width={96}
                  height={96}
                  className='w-24 h-24'
                />
                <div><span className='text-gray-700'>抖音号</span></div>
              </div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: '40px',
            color: '#666',
            fontSize: '12px',
          }}>
            <span>@2024 九猫 版权所有 |</span>
            <a style={{
              marginLeft: '5px',
              color: '#999',
            }} href="http://www.beian.miit.gov.cn" target="_blank">沪ICP备2023021619号-1</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
