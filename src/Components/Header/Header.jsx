import React from 'react'

function Header() {
  return (
    <div className='w-full flex items-center justify-between py-8 px-[5rem] max-md:px-[2rem] max-sm:px-[1rem]'>
        <h3 className='text-[23px] text-[#12C365] font-[Jost-ExtraBold] cursor-pointer max-sm:text-[18px]'>Farm<span className='text-[#97D11C]'>Expo</span></h3>

        <div className='flex gap-8 max-sm:gap-4'>
          <button className='text-[20px] text-white'>Home</button>
          <button className='btnAll'>Profile</button>
        </div>
    </div>
  )
}

export default Header