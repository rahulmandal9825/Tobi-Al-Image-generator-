import React from 'react'

const Header = ({title, subtitle ,creditBalance }: {title:string, subtitle?: string ,  creditBalance:number}) => {
  return (
    <div className='flex flex-col gap-3 mb-5'>
        <h2 className='text-2xl font-bold'>
            {title}
        </h2>
        <div className='flex justify-between'>
            <h1 className=' self-center'>
              {subtitle}
              </h1>
              <h1 className=' bg-orange-400 p-2 font-semibold text-white rounded-xl '>Credit Balance - {creditBalance}</h1>

        </div>
       
    </div>
  )
}

export default Header