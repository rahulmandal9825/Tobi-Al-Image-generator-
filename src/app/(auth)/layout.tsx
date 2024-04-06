import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex-center min-h-screen w-full bg-orange-200'>
      {children}
    </div>
  )
}

export default Layout
