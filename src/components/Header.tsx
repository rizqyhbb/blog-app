import React from 'react'
import LargeLogo from './logo/LargeLogo'
import MiniLogo from './logo/MiniLogo'
import Icon from './Icon'
import LogoPortfolio from './logo/LogoPortfolio'

const Header = () => {
  return (
    <div className='mx-auto px-5 md:px-14 lg:max-w-6xl lg:py-4'>
      <div className='hidden lg:flex items-center gap-6'>
        <LargeLogo />
        <span className='text-2xl font-bold'>X</span>
        <div className='h-16 w-16 -ml-3'>
          <LogoPortfolio />
        </div>
      </div>
      <div className='flex items-center gap-4 lg:hidden'>
        <MiniLogo />
        <span className='text-2xl font-bold'>X</span>
        <div className='h-12 w-12 -ml-1'>
          <LogoPortfolio />
        </div>
      </div>
    </div>
  )
}

export default Header