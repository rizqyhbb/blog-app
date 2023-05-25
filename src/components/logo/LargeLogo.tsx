import Link from 'next/link'
import React from 'react'

const LargeLogo = () => {
  return (
    <div >
      <Link href={'/'} className='flex justify-center items-center bg-yellow-400 h-12 w-36 rounded-md transition-all shadow-[5px_5px_0px_-1px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_-1px_rgba(0,0,0,1)] hover:-translate-x-[2px] hover:-translate-y-[2px]'>
        <h1 className='inline font-bold'>KIKI&apos;S BLOG</h1>
      </Link>
    </div>
  )
}

export default LargeLogo