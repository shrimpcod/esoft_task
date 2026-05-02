import { FiTrash } from "react-icons/fi"
import { Button } from "./Button"
import { useCart } from "../context/CartContext"

export const CardCart = ({ product }) => {
    const { cart, addToCart, deleteFromCart, deleteAllItemsFromCart } = useCart()
    const totalCost = (product.price * cart.get(product.id).quantity).toLocaleString()
    return(
        <div className="border border-gray-400 rounded-lg p-4 flex flex-row gap-4">
            <div>
                <img 
                    className="w-full aspect-square object-cover rounded-lg w-[96px] h-[96px] hover:opacity-90 transition-opacity"
                    src={product.images[0]} 
                    alt={product.model} 
                />
            </div>
            <div className="flex-1 flex flex-col">
                <p className="text-sm text-gray-600">{product.brand}</p>
                <p className=" flex-1 font-bold">{product.model}</p>
                <div className="flex justify-between items-center w-[150px]">
                    <Button 
                        onClick={() => deleteFromCart(product)}
                        className="w-[30px] h-[30px] rounded-lg bg-gray-200 text-black text-sm flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                    > 
                        - 
                    </Button>

                    <p>{cart.get(product.id).quantity}</p>
                    
                    <Button
                        onClick={() => addToCart(product)}
                        className="w-[30px] h-[30px] rounded-lg bg-black text-white text-sm flex items-center justify-center hover:bg-green-600 transition-colors"
                    > 
                        +
                    </Button>
                </div> 
            </div>
            <div className="flex flex-col justify-between items-center">
                <FiTrash 
                    size={20}
                    className="cursor-pointer text-red-600 transition-all duration-200 hover:scale-125"
                    onClick={() => deleteAllItemsFromCart(product)}
                />
                <p>${totalCost}</p>
            </div>
        </div>
    )
}