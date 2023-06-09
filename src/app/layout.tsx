import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: { default: "Welcome to Kiki's Blog", template: "Kiki's Blog | %s" },
  description: 'Learn and engage to knowledge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='py-6 border-b-[1px] mb-10'>
          <Header />
        </div>
        <div className='mx-auto px-5 md:px-14 lg:max-w-6xl mb-20'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
