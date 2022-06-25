import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../../@components/Banner'
import Recomendados from '../../@components/Recomendados'
import Sidebar from '../../@components/Sidebar'
import { selectCanales, SET_CANALES } from '../features/CanalesReducer'

const Home = () => {

    

  return (
    <>
        <article className='bg-grisoscuro grid grid-cols-9'>
            <div className='col-span-2'>
                <Sidebar/>
            </div>
            <div className='col-span-7 h-screen'>
                <Banner/>
                <div className='flex justify-between mt-10 mx-10'>
                    <h1 className='text-white font-bold text-2xl'>Top podcasts</h1>
                    <a href='/podcasts' className='text-grisclaro font-bold'>SEE ALL</a>
                </div>
                <Recomendados/>
            </div>
        </article>
    </>
  )
}

export default Home