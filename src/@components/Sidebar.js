import { HomeOutlined, MicOutlined } from '@mui/icons-material'
import React from 'react'

const Sidebar = () => {
  return (
    <>
        <article className='fixed top-0 left-0 w-1/5 bg-black h-screen'>
            <div className='p-10'>
            <a href='/' className='flex items-center text-lg hover:text-white after:text-white text-blanco mt-5'>
              <HomeOutlined fontSize='large'/>
                <p className='font-medium ml-4'>Home</p>
            </a>
            <a href='/podcasts' className='flex items-center text-lg hover:text-white after:text-white text-blanco mt-5'>
              <MicOutlined fontSize='large'/>
                <p className='font-medium ml-4'>Top podcasts</p>
            </a>
            </div>
        </article>
    </>
  )
}

export default Sidebar