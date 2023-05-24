import Link from 'next/link'
import React, { FC, ReactNode } from 'react'

interface ICoin {
  children: ReactNode
  href: string
}
export const Coin: FC<ICoin> = ({ children, href }) => {
  return (
    <Link href={href} >
      <div className='flex items-center justify-center h-12 w-12 rounded-full bg-slate-800'>
        {children}
      </div>
    </Link>
  )
}

export default Coin