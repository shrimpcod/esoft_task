import  { Header }  from '../components/Header'
import  { Footer }  from '../components/Footer'
import  { SidebarL }  from '../components/SidebarL'
import { Body } from '../components/Body'

export const HomePage = () => {
    return(
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className='flex-1 flex gap-4 px-[280px] py-[30px]'>
                <SidebarL />
                <Body />
            </main>
            <Footer />
        </div>
    )
}
