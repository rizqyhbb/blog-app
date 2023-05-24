import Link from 'next/link'
import React from 'react'

const MiniLogo = () => {
  return (
    <div className='mx-auto px-5 md:px-14 lg:max-w-6xl '>
      <div className='bg-yellow-400 flex items-center justify-center h-12 w-12 shadow-[5px_5px_0px_-1px_rgba(0,0,0,1)] rounded-md '>
        <Link href={'/'}>
          <h1 className='inline font-bold text-2xl'>K_</h1>
        </Link>
      </div>
    </div>
  )
}

export default MiniLogo