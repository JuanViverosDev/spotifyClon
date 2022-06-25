import { ArrowLeftIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, UserCircleIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Superbar = () => {

  const navigate = useNavigate()

  return (
    <div>
        <section className='flex justify-between px-10 py-6 bg-negro'>
            <div className='flex'>
              <button onClick={() => navigate(-1)}>
                <ChevronLeftIcon className='h-8 bg-black rounded-full'/>
              </button>
              <button onClick={() => navigate(1)}>
                <ChevronRightIcon className='h-8 bg-black rounded-full ml-2'/>
              </button>
            </div>
            <div className='flex items-center'>
                <UserCircleIcon className='text-white h-8 mr-2'/>
                <h1 className='text-white font-semibold'>Juan Viveros</h1>
                <ChevronDownIcon className='text-white h-8 mr-2'/>
            </div>
        </section>
    </div>
  )
}

export default Superbar