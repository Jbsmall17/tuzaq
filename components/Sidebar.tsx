import { Files, Fuel, LayoutDashboard, LogOut, ReceiptText, Settings, Truck, Users } from 'lucide-react'
import { usePathname } from 'next/navigation';
import React from 'react'

type sidebarType = {
  isSidebarMenuOpen: boolean;
  setIsSidebarMenuOpen: (prev: boolean) => void
}

export default function Sidebar({isSidebarMenuOpen,setIsSidebarMenuOpen}: sidebarType) {
  const pathname = usePathname()
  const handleClose = () => {
    setIsSidebarMenuOpen(false)
  }
  return (
    <div className={`${isSidebarMenuOpen ? 'block' : 'hidden md:block'}`}>
    <div onClick={handleClose} className='fixed md:hidden top-0 left-0 z-10  w-[100vw] h-[100vh]'></div>
    <div className='border-r-[1.5px] border-[#d7d7e0] fixed z-20 bg-[#f0f0f0] top-0 left-0 md:static flex flex-col gap-4 h-[100vh] py-3 md:py-0'>
      <h1 className='block md:hidden text-center text-primary text-xl font-semibold'> Tuzaq</h1>
    <div className='flex flex-col justify-between flex-1 w-[150px] lg:w-[175px] xl:w-[200px]'>
      <ul className='w-full'>
        <li className={`auth-padding text-sm md:text-base cursor-pointer flex items-center gap-2 py-1.5 md:py-3 ${pathname === '/dashboard' ? 'bg-[#d1ddf3] text-primary font-semibold border-r-2 border-primary' : ''} hover:bg-[#d1ddf3] hover:text-primary hover:font-semibold hover:border-r-2 hover:border-primary`}>
          <LayoutDashboard className='size-5' />
          <span>Dashboard</span>
        </li>
        <li className={`auth-padding text-sm md:text-base cursor-pointer flex items-center gap-2 py-1.5 md:py-3 ${pathname === '/sales' ? 'bg-[#d1ddf3] text-primary font-semibold border-r-2 border-primary' : ''} hover:bg-[#d1ddf3] hover:text-primary hover:font-semibold hover:border-r-2 hover:border-primary`}>
          <ReceiptText className='size-5' />
          <span>Sales</span>
        </li>
        <li className={`auth-padding text-sm md:text-base cursor-pointer flex items-center gap-2 py-1.5 md:py-3 ${pathname === '/offloads' ? 'bg-[#d1ddf3] text-primary font-semibold border-r-2 border-primary' : ''} hover:bg-[#d1ddf3] hover:text-primary hover:font-semibold hover:border-r-2 hover:border-primary`}>
          <Truck className='size-5' />
          <span>Offloads</span>
        </li>
        <li className={`auth-padding text-sm md:text-base cursor-pointer flex items-center gap-2 py-1.5 md:py-3 ${pathname === '/fuel' ? 'bg-[#d1ddf3] text-primary font-semibold border-r-2 border-primary' : ''} hover:bg-[#d1ddf3] hover:text-primary hover:font-semibold hover:border-r-2 hover:border-primary`}>
          <Fuel className='size-5' />
          <span>Fuel</span>
        </li>
        <li className='auth-padding text-sm md:text-base cursor-pointer flex items-center gap-2 py-1.5 md:py-3 hover:bg-[#d1ddf3] hover:text-primary hover:font-semibold hover:border-r-2 hover:border-primary'>
          <Files className='size-5' />
          <span>Reports</span>
        </li>
        <li className={`auth-padding text-sm md:text-base cursor-pointer flex items-center gap-2 py-1.5 md:py-3 ${pathname === '/users' ? 'bg-[#d1ddf3] text-primary font-semibold border-r-2 border-primary' : ''} hover:bg-[#d1ddf3] hover:text-primary hover:font-semibold hover:border-r-2 hover:border-primary`}>
          <Users className='size-5' />
          <span>Users</span>
        </li>
      </ul>
      <ul className='w-full'>
        <div className='space-y-6 md:space-y-0'>
          <div>
            <li className='auth-padding text-sm md:text-base cursor-pointer flex items-center gap-2 py-1.5 md:py-3 hover:bg-[#d1ddf3] hover:text-primary hover:font-semibold hover:border-r-2 hover:border-primary'>
              <Settings className='size-5' />
              <span>Settings</span>
            </li>
            <li className='text-[#d98c88] auth-padding text-sm md:text-base cursor-pointer flex items-center gap-2 py-1.5 md:py-3 hover:bg-[#d1ddf3] hover:text-primary hover:font-semibold hover:border-r-2 hover:border-primary'>
              <LogOut className='size-5' />
              <span>Log out</span>
            </li>
          </div>
          <div className='auth-padding md:hidden space-y-1'>
            <p className='text-[#111a41] text-sm text-end'>Manager</p>
            <div className='flex flex-row gap-2 items-center justify-end'>
              <div className='size-7 flex-container rounded-full bg-gradient-to-r from-[#030C35] to-[#09249B]'>
                <div className='size-6 flex-container rounded-full bg-white font-medium text-xs leading-none'>AH</div>
              </div>
              <span className='text-[#111a41] text-sm font-semibold'>Abdul Haqq</span>
            </div>
          </div>
        </div>
      </ul>
    </div>
    </div>
    </div>
  )
}
