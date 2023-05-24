import Link from 'next/link'
import React from 'react'

const LargeLogo = () => {
  return (
    <div className='mx-auto px-5 md:px-14 lg:max-w-6xl py-4'>
      <Link href={'/'} className='bg-yellow-400 py-4 px-7 rounded-md shadow-[5px_5px_0px_-1px_rgba(0,0,0,1)]'>
        <h1 className='inline font-bold'>KIKI&apos;S BLOG</h1>
      </Link>
    </div>
  )
}

export default LargeLogo