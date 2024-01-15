
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MPQ Demo App',
  description: 'MPQ Aplicacion de Control de Faenas',
  manifest: '/manifest.json',
  icons: {
    apple: "/icon-192x192.png",
  },  
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
                
        </body>
    </html>
  )
}
