import  { Header }  from '../components/Header'
import { Content } from '../components/Content'
import  { Footer }  from '../components/Footer'

export const HomePage = () => {
    return(
        <div className="min-h-screen flex flex-col">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
