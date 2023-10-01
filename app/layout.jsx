import './globals.css'
import clsx from 'clsx';
import Sidebar from '../components/Sidebar'
import localFont from 'next/font/local'

const graphik = localFont({
  src: [
      {
          path: '../public/fonts/Graphik-Regular.ttf',
          weight: '400',
          style: 'normal',
      },
      {
          path: '../public/fonts/Graphik-Medium.ttf',
          weight: '600',
          style: 'bold',
      },
  ],
  variable: '--font-graphik',
  display: 'swap'
})

export const metadata = {
  title: 'Micah H.O',
  description: 'A personal website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(`${graphik.className}`)}>
        <main className='max-w-2xl ml-auto mr-auto mt-16 flex flex-col gap-12 p-4'>
          <Sidebar />
          <div className=''>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
