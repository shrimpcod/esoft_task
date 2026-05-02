import { useState } from "react"
import { Button } from "./Button"
import { FaHeart } from "react-icons/fa"     
import { FaRegHeart } from "react-icons/fa"
import { useCart } from "../context/CartContext"

export const ProductCard = ({ className, product }) => {
    const {cart, addToCart, deleteFromCart } = useCart()

    const [isFavorite, setIsFavorite] = useState(false)
    const favoriteStyle = "absolute top-2 right-2 rounded-lg bg-red-400 text-white text-sm p-2 flex items-center transition duration-100"
    const notFavoriteStyle = "absolute top-2 right-2 rounded-lg bg-gray-100 text-black text-sm p-2 flex items-center transition duration-100"
    const favoriteClick = () => {
        setIsFavorite(!isFavorite)
    }

    const [imageCount, setImageCount] = useState(0)
    const leftImageclick = (dlina) => {
        setImageCount(Math.abs(imageCount - 1) % dlina)
    } 
    const rightImageClick = (dlina) => {
        setImageCount(Math.abs(imageCount + 1) % dlina)
    }

    return(
        <div className='flex flex-col pb-4 border border-gray-300 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
            <div className="relative group">
                {product.isSpecialOffer && (
                    <div className="absolute top-2 left-2 h-[24px] p-2 rounded-lg flex items-center bg-gradient-to-t from-red-500 to-orange-600 shadow-sm">
                        <p className="text-white text-sm">Special Offer</p>
                    </div>
                )}
                <Button 
                    onClick = {favoriteClick}
                    className= {isFavorite ? favoriteStyle : notFavoriteStyle}
                >
                    {isFavorite ? <FaHeart /> : <FaRegHeart />}
                </Button>
                {product.images.length > 1 && (
                    <div className="absolute w-full flex justify-between top-[50%] px-2 opacity-0 group-hover:opacity-100 transition duration-200">
                        <Button 
                            onClick={() => leftImageclick(product.images.length)}
                            className="w-[30px] h-[30px] rounded-full bg-gray-200 text-black text-sm flex items-center justify-center"
                        >
                            {'<'}
                        </Button>
                        <Button 
                            onClick={() => rightImageClick(product.images.length)}
                            className="w-[30px] h-[30px] rounded-full bg-gray-200 text-black text-sm flex items-center justify-center"
                        >
                            {'>'}
                        </Button>
                    </div>  
                )}
                <div className="overflow-hidden">
                    <img 
                        className="w-full aspect-square object-cover rounded-t-lg hover:scale-110 transition-transform duration-500"
                        src={product.images[imageCount]} 
                        alt={product.model} 
                    />
                </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
                <p className="text-sm text-gray-400">{product.brand}</p>
                <p className="font-bold line-clamp-2">{product.model}</p>
                <p className="mt-auto pt-4 text-lg font-bold">${product.price}</p>
            </div>

            <div className="flex justify-center px-4">
                {!cart.has(product.id) ? (
                    <Button 
                        className="w-full border rounded-lg bg-black text-white py-2"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </Button>
                ) : (
                    <div className="w-full flex justify-between items-center">
                        <Button 
                            onClick={() => deleteFromCart(product)}
                            className="w-[40px] h-[40px] rounded-xl bg-gray-200 text-black text-sm flex items-center justify-center"
                        > - </Button>
                        <p>{cart.get(product.id).quantity} in cart</p>
                        <Button
                            onClick={() => addToCart(product)}
                            className="w-[40px] h-[40px] rounded-xl bg-black text-white text-sm flex items-center justify-center"
                        > + </Button>
                    </div> 
                )}
                
            </div>
            
        </div>
    )
}