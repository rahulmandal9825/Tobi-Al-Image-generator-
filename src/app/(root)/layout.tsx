import Sidebar from '@/components/Sidebar'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="w-full">
        <Sidebar/>
        <div>
               {children}
        </div>
    </main>
  )
}

export default Layout
