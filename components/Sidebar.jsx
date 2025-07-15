import React from 'react'
import { Search } from 'lucide-react';
import OtherUsers from './OtherUsers';
const Sidebar = () => {
  return (
    <div className='px-10 py-3 border-slate-500 flex flex-col border-r '>
      <form action="" className='flex items-center relative'>
        <input type="search" placeholder='Serch' className='input   rounded-full' />
        <button type='submit' className='btn btn-circle absolute right-0 bg-zinc-500 '><Search /></button>
      </form>
      <div className='divider px-2'></div>
      <div>
        <OtherUsers />
      </div>
      <div className='mt-2'>
        <button className='btn btn-sm'>Logout</button>
      </div>
    </div>
  )
}

export default Sidebar
