"use client"
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React, { ReactNode, useState } from 'react'

export default function Layout({children}:{children: ReactNode}) {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false)
  return (
    <main className='bg-[#f0f0f0]'>
        <Header 
          setIsSidebarMenuOpen={setIsSidebarMenuOpen}
        />
        <div className='flex flex-row'>
            <Sidebar 
              isSidebarMenuOpen={isSidebarMenuOpen}
              setIsSidebarMenuOpen={setIsSidebarMenuOpen}
            />
            {children}
        </div>  
    </main>
  )
}
