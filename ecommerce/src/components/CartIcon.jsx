import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext"
import { useProducts } from "../context/ProductsContext"

export const CartIcon = () => {
    const { totalItems } = useCart()
    const { setProductPage } = useProducts()

    return(
        <div 
            className='relative cursor-pointer hover:text-gray-500 transition-colors' 
            onClick={() => {setProductPage('cart')}}
        >
            <FiShoppingCart size={20}/>
            {totalItems > 0 && (
                <div className='absolute -top-3 -right-3 bg-black text-white text-[10px] min-w-[20px] rounded-full flex justify-center items-center font-bold border-2 border-white'>
                    {totalItems.toLocaleString()}
                </div>
            )}
        </div>
    )
}