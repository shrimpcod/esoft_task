import { useState, useEffect } from 'react'
import  { Sidebar }  from '../components/Sidebar'
import { Body } from '../components/Body'

export const ProductsPage = () => {
    return(
        <main className='flex-1 flex flex-col lg:flex-row gap-4 px-4 xl:px-[180px] py-[30px]'>
            <Sidebar />
            <Body />
        </main>
    )
}