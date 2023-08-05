import './globals.css'
import Sidebar from '../components/Sidebar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Micah H.O',
  description: 'A personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className='max-w-xl ml-auto mr-auto mt-16 flex'>
          <Sidebar />
          <div className='pl-4'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
