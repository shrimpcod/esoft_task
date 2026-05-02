import { useEffect, useState } from 'react'
import  { Header }  from './Header'
import { Content } from './Content'
import  { Footer }  from './Footer'

export const Container = () => {
    return(
        <div className="min-h-screen flex flex-col">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}