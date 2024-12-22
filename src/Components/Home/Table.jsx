import React from 'react'

function Table() {
  return (
    <div className='w-full h-full bg-gradient-to-br from-[#220CBB] to-[#09D568]  rounded-[40px] overflow-hidden shadow-2xl'>
        <div className='w-full h-[6rem] bg-[#04da64e0] shadow-sm'>
            <ul className='h-full flex items-center justify-between px-12 text-[20px] text-white'>
                <li>Number</li>
                <li>Name</li>
                <li>Consignment</li>
                <li>Status</li>
            </ul>
        </div>

        <nav className='w-full flex items-center justify-between py-[3rem] px-[4rem] text-white'>
            <ul className='w-full flex items-start flex-col gap-8'>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>

            <ul className='w-full flex items-start flex-col gap-8'>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>

            <ul className='w-full flex items-start flex-col gap-8'>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>


            <ul className='w-full flex items-start flex-col gap-8'>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul>

        </nav>
    </div>
  )
}

export default Table