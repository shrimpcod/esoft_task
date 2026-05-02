import { FiUser} from 'react-icons/fi'
import { CartIcon } from './CartIcon'
import { CategoryButton } from './CategoryButton'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useProducts } from '../context/ProductsContext'

export const Header = () => {
    const categories = ['tv', 'phone', 'laptop']
    const { totalItems } = useCart()
    const { productPage, setProductPage } = useProducts()

    return(
        <header className='flex flex-col sm:flex-row sm:items-center xl:px-[140px] border-b border-b-gray-200 bg-white sticky top-0 z-50 shadow-sm'>
            <div className='flex justify-between items-center px-4 h-[65px] border-b border-b-gray-200 sm:border-b-0 sm:h-auto sm:w-auto'>
                <h1 
                    className='font-bold text-xl cursor-pointer hover:opacity-80 transition-opacity'
                    onClick={() => {setProductPage('tv')}}
                >
                    Tech Store
                </h1>
                <div className='relative flex gap-4 items-center sm:hidden'>
                    <CartIcon />
                    <FiUser 
                        size={20} 
                        className='cursor-pointer hover:text-gray-500 transition-colors'
                    />
                </div>
            </div>

            <nav className='flex justify-around sm:flex-1 sm:justify-start sm:gap-4 py-4'>
                {categories.map((category) => (
                    <CategoryButton
                        key={category}
                        isActive={productPage === category}
                        onClick={() => {setProductPage(category)}}

                    >
                        {category[0].toUpperCase() + category.slice(1)}
                    </CategoryButton>
                ))}
            </nav>

            <div className='hidden px-4 sm:flex gap-4 items-center'>
                <CartIcon />
                <FiUser 
                    size={20} 
                    className='cursor-pointer'
                />
            </div>

        </header>
    )
}
