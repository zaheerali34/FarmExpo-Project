import React from 'react'
import { NavLink } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'

function Login() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#46ff4f] to-[#08159E] relative flex items-center justify-center max-md:h-[100vh] overflow-hidden">
      <div className='absolute top-[10%] left-[27%] z-1 max-sm:left-[29%] max-sm:top-[7%]'>
        <div className='w-[150px] h-[150px] bg-gradient-to-tl from-[#00FF66] to-[#009F3F] rounded-full shadow-md'></div>
      </div>
      <div className='w-[30rem] h-[65vh] bg-[#FFFFFF] bg-opacity-[0.13] rounded-[1.5rem] shadow-2xl flex items-center justify-center flex-col gap-4 font-[ Jost-Bold] max-sm:w-[90%] z-10 '>
        <h1 className='text-xl text-white'>Login</h1>

        <form className='w-full flex items-center justify-center flex-col gap-4 px-8'>
          <input type="text" placeholder='Email' className='input w-full py-2 bg-none outline-non border-b-[2px] border-solid border-[#ffffffac] text-white font-[Jost-Medium]' />
          <input type="password" placeholder='Password'  className='input w-full py-2 bg-none outline-non border-b-[2px] border-solid border-[#ffffffac] text-white font-[Jost-Medium]'  />
        </form>

        <button className='w-[90%] py-4 bg-[#1A2493] mt-8 rounded-[10px] shadow-xl text-md text-white hover:bg-[#04B64B] transition duration-[0.4s] uppercase text-xl'>Login</button>

        <div className='flex items-center justify-start gap-3'>
          <span className='text-sm text-[#BBA9A9]'>New User?</span>
         <NavLink to={'/signup'}>
         <h3 className='text-xl font-semibold text-white font-[Jost-SemiBold] cursor-pointer'>SignUp</h3> 
        </NavLink>
        </div>

        <div className='flex items-center justify-center mt-8 gap-10 max-md:mt-4 w-[30px]'>
        <img src="/icon 1.png" alt="" />
        <img src="/icon 2.png" alt="" />
        <img src="/icon 3.png" alt="" />
        </div>
      </div>
      <div className='absolute bottom-[5%] right-[25%] z-1 max-sm:bottom-[-4rem]'>
      <div className='w-[210px] h-[210px] bg-gradient-to-tl from-[#00FF66] to-[#009F3F] rounded-full shadow-md'></div>
      </div>
    </div>
  )
}

export default Login