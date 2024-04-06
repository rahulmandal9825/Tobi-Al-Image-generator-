
import MobileNav from '@/components/MobileNav'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="w-full">
        <Sidebar/>
        <MobileNav/>
        <div>
               {children}
        </div>
    </main>
  )
}

export default Layout
