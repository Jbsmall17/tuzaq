"use client"
import { useMyContext } from '@/context'
import { Bell, EllipsisVertical, Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

type headerType = {
  setIsSidebarMenuOpen : (prev: boolean) => void
}

export default function Header({setIsSidebarMenuOpen}: headerType) {
  const pathname = usePathname()
  const {usersStep, setUsersStep} = useMyContext()
  const handleOpen = () => {
    setIsSidebarMenuOpen(true)
  }

  const getPageTitle = (path:string) => {
    let name;
    switch(path){
      case '/dashboard':
        name = "Dashboard";
        break;
      case '/sales':
        name = "Sales";
        break;
      case '/offloads':
        name = 'Offloads';
        break;
      case "/tank-overview":
        name = "Tank Overview";
        break;
      case "/reports":
        name = "Reports";
        break;
      case "/users":
        name = "Users"
        break;
      default:
        name = "Unknown";
    }
    return name;
  }

  return (
    <>
    <header className='hidden md:flex  border-b-[1.5px] border-[#d7d7e0] auth-padding flex-row justify-between items-end py-2'>
      <div className='flex items-center gap-3'>
        <div className='size-5 rounded-full bg-primary'></div>
        <h1 className='text-xl font-medium'>Tuzaq</h1>
      </div>
      <div className='space-y-1'>
        <p className='text-[#111a41] text-base text-center'>Manager</p>
        <div className='flex items-center gap-3'>
          <div className='relative text-[#333333]'>
            <span className='absolute top-0 right-0 size-3 rounded-full bg-red-800'></span>
            <Bell className='size-7 fill-current' />
          </div>
          <div className='flex flex-row gap-2 items-center'>
           <div className='size-9 flex-container rounded-full bg-gradient-to-r from-[#030C35] to-[#09249B]'>
              <div className='size-8 flex-container rounded-full bg-white font-medium text-base leading-none'>AH</div>
            </div>
           <span className='text-[#111a41] text-base font-semibold'>Abdul Haqq</span>
          </div>
        </div>
      </div>
    </header>
    <header className='pt-5 sm:pt-7 pb-3 sm:pb-4 auth-padding flex md:hidden flex justify-between items-center'>
      <div className='flex flex-row gap-2 items-center'>
        <div onClick={handleOpen} className='size-7 border-2 border-primary flex-container rounded-full text-primary'>
          <Menu className='cursor-pointer size-5 fill-current' />
        </div>
        <p className='text-base sm:text-xl font-semibold text-primary'>{getPageTitle(pathname)}</p>
      </div>
      {
        pathname !== "/users"
        &&
      <div className={`relative`}>
        <span className='absolute top-0 right-0 size-2 sm:size-3 rounded-full bg-red-800'></span>
        <Bell className='size-6 sm:size-7' />
      </div>
      }
      {
        pathname == "/users"
        &&
        usersStep == 0 ?(
          <div className={`relative`}>
            <span className='absolute top-0 right-0 size-2 sm:size-3 rounded-full bg-red-800'></span>
            <Bell className='size-6 sm:size-7' />
          </div>
        )
        : usersStep == 2 ? (
          <>
            <EllipsisVertical />
          </>
        )
        : <></>
      }

    </header>
    </>
  )
}
