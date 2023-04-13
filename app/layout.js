"use client"
import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import Footer from '@/components/footer/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className='wrapper'>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
