import Link from 'next/link'
import React from 'react'
import Icon from '../Icon'

const MiniLogo = () => {
  return (
    <div>
      <Link href={'/'}>
        <Icon.Logo className='h-12' />
      </Link>
    </div>
  )
}

export default MiniLogo