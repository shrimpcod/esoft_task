import { FiShoppingCart, FiUser} from 'react-icons/fi'
import { CategoryButton } from './CategoryButton'
import { useState } from 'react'

export const Header = ({}) => {
    const categories = [(1, 'Tv'), (2, 'Phone'), (3, 'Laptop')]
    const [activeCategory, setActiveCategory] = useState('Tv')

    return(
        <header className='flex flex-col sm:flex-row sm:items-center xl:px-[140px] border-b border-b-gray-200 bg-white sticky top-0 z-50'>
            <div className='flex justify-between items-center px-4 h-[65px] border-b border-b-gray-200 sm:border-b-0 sm:h-auto sm:w-auto'>
                <h1 className='font-bold text-xl'>Tech Store</h1>
                <div className='flex gap-4 items-center sm:hidden'>
                    <FiShoppingCart />
                    <FiUser />
                </div>
            </div>

            <nav className='flex justify-around sm:flex-1 sm:justify-start sm:gap-4 py-4'>
                {categories.map((category, id) => (
                    <CategoryButton
                        key={id}
                        isActive={activeCategory === category}
                        onClick={() => {setActiveCategory(category)}}

                    >
                        {category}
                    </CategoryButton>
                ))}
            </nav>

            <div className='hidden px-4 sm:flex gap-4 items-center'>
                <FiShoppingCart />
                <FiUser />
            </div>

        </header>
    )
}
