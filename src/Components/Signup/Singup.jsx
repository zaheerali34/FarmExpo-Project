import React from 'react'

function Login() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#46ff4f] to-[#08159E] relative flex items-center justify-center max-md:h-[100vh] overflow-hidden">
      <div className='absolute top-[10%] left-[27%] z-1 max-sm:left-[29%] max-sm:top-[7%]'>
        <div className='w-[150px] h-[150px] bg-gradient-to-tl from-[#00FF66] to-[#009F3F] rounded-full shadow-md'></div>
      </div>
      <div className='w-[30rem] h-[65vh] bg-[#FFFFFF] bg-opacity-[0.13] rounded-[1.5rem] shadow-2xl flex items-center justify-center flex-col gap-4 font-[ Jost-Bold] max-sm:w-[90%] z-10 '>
        <h1 className='text-xl text-white'>Sing Up</h1>

        <form className='w-full flex items-center justify-center flex-col gap-4 px-8'>
          <input type="text" placeholder='Your Name' className='input w-full py-2 bg-none outline-non border-b-[2px] border-solid border-[#ffffffac] text-white font-[Jost-Medium]' />
          <input type="text" placeholder='Email' className='input w-full py-2 bg-none outline-non border-b-[2px] border-solid border-[#ffffffac] text-white font-[Jost-Medium]' />
          <input type="password" placeholder='Password' className='input w-full py-2 bg-none outline-non border-b-[2px] border-solid border-[#ffffffac] text-white font-[Jost-Medium]' />
          <input type="password" placeholder='Confirm Password'  className='input w-full py-2 bg-none outline-non border-b-[2px] border-solid border-[#ffffffac] text-white font-[Jost-Medium]'  />
        </form>

        <button className='w-[90%] py-4 bg-[#1A2493] mt-8 rounded-[10px] shadow-xl text-md text-white hover:bg-[#04B64B] transition duration-[0.4s] text-xl'>SUBMIT</button>

      </div>
      <div className='absolute bottom-[5%] right-[25%] z-1 max-sm:bottom-[-4rem]'>
      <div className='w-[210px] h-[210px] bg-gradient-to-tl from-[#00FF66] to-[#009F3F] rounded-full shadow-md'></div>
      </div>
    </div>
  )
}

export default Login