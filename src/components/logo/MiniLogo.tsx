import Link from 'next/link'
import React from 'react'

const MiniLogo = () => {
  return (
    <div className='bg-yellow-400 flex items-center justify-center h-10 w-10 shadow-[5px_5px_0px_-1px_rgba(0,0,0,1)] rounded-md '>
      <Link href={'/'}>
        <h1 className='font-black text-lg text-black'>K_</h1>
      </Link>
    </div>
  )
}

export default MiniLogo