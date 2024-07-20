import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='flex flex-col justify-center items-center mt-[100px] container border border-blue-500 mx-auto '>
      <h2 className='text-center gap-[10px] font-bold uppercase text-red-500 text-[50px] mt-[20px]'>Error Page</h2>
      <Link to='/' className='text-center text-[20px] text-gray-500 mb-[20px]'>BACK TO HOME</Link>
    </div>
  )
}

export default ErrorPage
