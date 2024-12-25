import React from 'react'

function Table() {
  return (
    <div className='w-full h-full bg-gradient-to-br from-[#220CBB] to-[#09D568] rounded-[20px] overflow-hidden shadow-2xl'>
        <table className='w-full text-white'>
            <thead className='w-full h-[6rem] bg-[#04da64e0] shadow-sm text-[18px] max-sm:text-[14px]'>
                <tr>
                    <th className='tracking-[2px]'>Number</th>
                    <th className='tracking-[2px]'>Name</th>
                    <th className='tracking-[2px]'>Consignment</th>
                    <th className='tracking-[2px]'>Status</th>
                </tr>
            </thead>

            <tbody className='w-full h-full'>
                <tr>
                    <td className='py-5'>1234</td>
                    <td className='py-5'>Your Name</td>
                    <td className='py-5'>One</td>
                    <td className='py-5'>Yes</td>
                </tr>

                <tr>
                    <td className='py-5'>1234</td>
                    <td className='py-5'>Your Name</td>
                    <td className='py-5'>One</td>
                    <td className='py-5'>Yes</td>
                </tr>
                <tr>
                    <td className='py-5'>1234</td>
                    <td className='py-5'>Your Name</td>
                    <td className='py-5'>One</td>
                    <td className='py-5'>Yes</td>
                </tr>

                <tr>
                    <td className='py-5'>1234</td>
                    <td className='py-5'>Your Name</td>
                    <td className='py-5'>One</td>
                    <td className='py-5'>Yes</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table