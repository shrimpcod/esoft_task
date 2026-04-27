import  { Sidebar }  from './Sidebar'
import { Body } from './Body'

export const Content = () => {
    return(
        <main className='flex-1 flex flex-col lg:flex-row gap-4 px-4 xl:px-[180px] py-[30px]'>
            <Sidebar />
            <Body />
        </main>
    )
}