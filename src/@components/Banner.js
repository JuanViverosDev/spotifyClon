import React from 'react'
import background from '../resources/radio-g7197c5b46_1920.jpg'
import { UserCircleIcon, ChevronDownIcon } from '@heroicons/react/solid'
import Superbar from './Superbar'

const Banner = (props) => {

    const texto = props

  return (
    <div className='h-64 bg-banner'>
        <Superbar/>
        <h1 className='text-white text-6xl font-black mx-10 mt-24'>Podcasts</h1>
    </div>
  )
}

export default Banner