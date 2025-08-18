import React from 'react'

export default function AuthLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex flex-col relative h-screen w-full pt-4 md:pt-6 lg:pt-8 xl:pt-10 auth-padding'>
        <p className='text-primary text-2xl text-center font-semibold'>Tuzaq</p>
        <div className='flex-1 flex-container'>
            {children}
        </div>
    </div>
  )
}
