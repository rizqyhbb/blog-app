import React from 'react'
import Coin from './Coin'
import Icon from './Icon'
import MiniLogo from './logo/MiniLogo'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-7'>
      <div className='mx-auto px-5 md:px-14 lg:max-w-6xl lg:py-4'>

        <div className='flex items-center justify-center gap-8'>
          <div className='border border-slate-600 w-full' />
          <Coin href='https://github.com/rizqyhbb'>
            <Icon.Github className='h-8 fill-slate-500' />
          </Coin>
          <Coin href='https://www.linkedin.com/in/rizqyhbb/'>
            <Icon.Linkedin className='h-8 fill-slate-500' />
          </Coin>
          <div className='border border-slate-600 w-full' />
        </div>

        <div className='flex flex-col items-center my-6'>
          <div>
            <MiniLogo />
          </div>
          <div>
            <p>Made by rizqy 2023</p>
          </div>
        </div>

        <p>rizqyhbb@gmail.com</p>
      </div>
    </footer>
  )
}

export default Footer