import  { Header }  from '../components/Header'
import  { Footer }  from '../components/Footer'
import  { Sidebar }  from '../components/Sidebar'
import { Body } from '../components/Body'

export const HomePage = () => {
    return(
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className='flex-1 flex flex-col lg:flex-row gap-4 px-4 xl:px-[180px] py-[30px]'>
                <Sidebar />
                <Body />
            </main>
            <Footer />
        </div>
    )
}
