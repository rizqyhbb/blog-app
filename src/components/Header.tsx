import React from 'react'
import LargeLogo from './logo/LargeLogo'
import MiniLogo from './logo/MiniLogo'

const Header = () => {
  return (
    <div className='mx-auto px-5 md:px-14 lg:max-w-6xl lg:py-4'>
      <div className='hidden lg:block'>
        <LargeLogo />
      </div>
      <div className='block lg:hidden'>
        <MiniLogo />
      </div>
    </div>
  )
}

export default Header