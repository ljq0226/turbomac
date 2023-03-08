import React from 'react'
import Image from 'next/image'
const QQ = () => {
  return (
    <div className='flex h-full bg-[#262626] backdrop-blur-sm'>
      <aside className='h-full w-[66px] flex flex-col'>

        <div className='w-full h-7 '></div>
        <div className="flex-center">
          <img className='w-5 h-6' src="/logo/qq5.svg" alt="qqlogo" />
          <div className='flex-center'>QQ</div>
        </div>
        <div className='my-4 flex-center'>
          <Image src='/img/icons/qqavatar.png' width={35} alt='qqavatar' height={35} />
        </div>
        <div className="flex flex-col h-[160px] p-3 space-y-2">

          <div className='rounded-lg w-full h-[46px] flex-center hover:bg-white/10'>
            <Image src='/qq/icon/chat.svg' width={30} alt='qqavatar' height={30} />
          </div>
          <div className='rounded-lg w-full h-[46px] flex-center hover:bg-white/10'>
            <Image src='/qq/icon/people_fill.svg' width={30} alt='qqavatar' height={30} />
          </div>
          <div className='rounded-lg w-full h-[46px] flex-center hover:bg-white/10'>
            <Image src='/qq/icon/qqspace.svg' width={40} alt='qqavatar' height={40} />
          </div>
        </div>

        <div className="flex-1 w-full"></div>

        <div className="flex flex-col h-[160px] p-3 space-y-2 mb-3">

          <div className='rounded-lg w-full h-[46px] flex-center hover:bg-white/10'>
            <Image src='/qq/icon/email.svg' width={30} alt='qqavatar' height={30}
              onMouseEnter={(e) => {
                (e.currentTarget.setAttribute('src', '/qq/icon/email_fill.svg'))
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.setAttribute('src', '/qq/icon/email.svg'))
              }}
            />
          </div>
          <div className='rounded-lg w-full h-[46px] flex-center hover:bg-white/10'>
            <Image src='/qq/icon/collect.svg' width={30} alt='qqavatar' height={30}
              onMouseEnter={(e) => {
                (e.currentTarget.setAttribute('src', '/qq/icon/collect_fill.svg'))
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.setAttribute('src', '/qq/icon/collect.svg'))
              }}
            />
          </div>
          <div className='rounded-lg w-full h-[46px] flex-center hover:bg-white/10'>
            <Image src='/qq/icon/menu.svg' width={30} alt='qqavatar' height={30}
              onMouseEnter={(e) => {
                (e.currentTarget.setAttribute('src', '/qq/icon/menu_fill.svg'))
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.setAttribute('src', '/qq/icon/menu.svg'))
              }}
            />
          </div>
        </div>

      </aside>
      <section className='w-[250px] border border-red-200'>section</section>

      <div className='flex-center flex-1 bg-[#1a1a1a]/95'>
        <img className='w-[140px] h-[140px]' src="/logo/qq3.svg" alt="123" />
      </div>
    </div>
  )
}

export default QQ
