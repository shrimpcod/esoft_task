import { useState } from "react"
import { Button } from "./Button"
import { FaHeart } from "react-icons/fa"     
import { FaRegHeart } from "react-icons/fa"

export const ProductCard = (props) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const favoriteStyle = "absolute top-2 right-2 rounded-lg bg-red-400 text-white text-sm p-2 flex items-center transition duration-100"
    const notFavoriteStyle = "absolute top-2 right-2 rounded-lg bg-gray-100 text-black text-sm p-2 flex items-center transition duration-100"
    const favoriteClick = () => {
        setIsFavorite(!isFavorite)
    }

    const [countInCart, setCountInCart] = useState(0)
    const addCartClick = () => setCountInCart(1)
    const minusCartClick = () => {
        if (countInCart > 0) setCountInCart(countInCart - 1)
    } 
    const plusCartClick = () => {
        if (countInCart >= 0) setCountInCart(countInCart + 1)
    }

    const [imageCount, setImageCount] = useState(0)
    const leftImageclick = (dlina) => {
        setImageCount(Math.abs(imageCount - 1) % dlina)
    } 
    const rightImageClick = (dlina) => {
        setImageCount(Math.abs(imageCount + 1) % dlina)
    }

    return(
        <div className='w-[260px] pb-4 border border-gray-300 rounded-lg'>
            <div className="relative group">
                {props.product.isSpecialOffer && (
                    <div className="absolute top-2 left-2 h-[24px] p-2 rounded-lg bg-red-400 flex items-center">
                        <p className="text-white text-sm">Special Offer</p>
                    </div>
                )}
                <Button 
                    onClick = {favoriteClick}
                    name={isFavorite ? <FaHeart /> : <FaRegHeart />}
                    style= {isFavorite ? favoriteStyle : notFavoriteStyle}
                />
                {props.product.images.length > 1 && (
                    <div className="absolute w-full flex justify-between top-[50%] px-2 opacity-0 group-hover:opacity-100 transition duration-200">
                        <Button 
                            onClick={() => leftImageclick(props.product.images.length)}
                            name="<" 
                            style="w-[30px] h-[30px] rounded-full bg-gray-200 text-black text-sm flex items-center justify-center"
                        />
                        <Button 
                            onClick={() => rightImageClick(props.product.images.length)}
                            name=">" 
                            style="w-[30px] h-[30px] rounded-full bg-gray-200 text-black text-sm flex items-center justify-center"
                        />
                    </div>  
                )}
                <img 
                    className="w-[260px] h-[260px] rounded-t-lg"
                    src={props.product.images[imageCount]} 
                    alt={props.product.model} 
                />
            </div>
            <div className="p-4">
                <p className="text-sm text-gray-400">{props.product.brand}</p>
                <p className="font-bold">{props.product.model}</p>
                <p className="mt-4">${props.product.price}</p>
            </div>

            <div className="flex justify-center">
                {countInCart == 0 ? (
                    <Button 
                        onClick={addCartClick}
                        name="Add to Cart" 
                        style="w-[228px] border rounded-lg bg-black text-white px-4 py-2"
                    />
                ) : (
                    <div className="w-full px-4 flex justify-between items-center">
                        <Button 
                            onClick={minusCartClick}
                            name="-" 
                            style="w-[40px] h-[40px] rounded-xl bg-gray-200 text-black text-sm flex items-center justify-center"
                        />
                        <p>{countInCart} in cart</p>
                        <Button
                            onClick={plusCartClick}
                            name="+" 
                            style="w-[40px] h-[40px] rounded-xl bg-black text-white text-sm flex items-center justify-center"
                        />
                    </div> 
                )}
                
            </div>
            
        </div>
    )
}