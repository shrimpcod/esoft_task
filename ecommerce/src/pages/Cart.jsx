import { Button } from "../components/Button"
import { CardCart } from "../components/CardCart"
import { OrderSummary } from "../components/OrderSummary"
import { useCart } from "../context/CartContext"
import { useProducts } from '../context/ProductsContext'
export const Cart = () => {
    const { cart } = useCart()
    const { setProductPage } = useProducts()

    return(
        <main className='flex-1 flex flex-col gap-4 px-4 xl:px-[180px] py-[30px]'>
            <p className="font-bold text-xl">Shopping Cart</p>

            {cart.size == 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                    <p className="text-gray-500">Your cart is empty</p>
                    <Button
                        className="bg-black text-white rounded-lg py-3 px-8"
                        onClick={() => (setProductPage("tv"))}
                    >
                        Continue Shopping
                    </Button>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-4 items-start">
                    <div className="flex-1 flex flex-col gap-4 w-full">
                        {
                            [...cart.values()].map((product) => (
                                <CardCart 
                                    key={product.id}
                                    product={product}
                                />
                            ))
                        }
                    </div>
                    
                    <div className="w-full lg:w-[350px] lg:sticky lg:top-[75px]">
                        <OrderSummary />
                    </div>
                    
                </div>
            )}
            
        </main>
    )
}