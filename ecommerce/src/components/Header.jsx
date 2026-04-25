import { FiShoppingCart, FiUser} from 'react-icons/fi'

export const Header = ({}) => {
    return(
        <header className="sticky top-0 z-50 bg-white w-full px-[247px] border-b border-b-gray-200 h-[65px] flex gap-6 items-center">
            <h1 className='font-bold text-xl'>TechStore</h1>
            <div className='w-full flex justify-between items-center'>
                <nav className="flex gap-4 text-sm text-gray-700">
                    <p className='font-bold'>TV</p>
                    <p> Phone</p>
                    <p>Laptop</p>
                </nav>
                <div className='flex gap-4 items-center'>
                    <FiShoppingCart />
                    <FiUser />
                </div> 
            </div>            
        </header>
    )
}
