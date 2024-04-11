import React from 'react'

const Header = ({title, subtitle }: {title:string, subtitle?: string }) => {
  return (
    <div className='flex flex-col gap-3 mb-5'>
        <h2 className='text-2xl font-bold'>
            {title}
        </h2>
        <h2>
            {subtitle}
        </h2>
    </div>
  )
}

export default Header