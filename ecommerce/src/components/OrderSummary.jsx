import { useCart } from "../context/CartContext"
import { useProducts } from '../context/ProductsContext'
import { Button } from "./Button"

export const OrderSummary = () => {
    const { subtotalCost, taxCost, totalCost } = useCart()
    const { setProductPage } = useProducts()

    return(
        <div className="p-4 flex flex-col gap-4 border border-gray-400 rounded-lg">
            <p className="text-xl font-bold">Order Summary</p>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between ">
                    <p className="text-gray-600">Subtotal</p>
                    <p>${subtotalCost.toFixed(2)}</p> 
                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-gray-600">Tax (8%)</p>
                    <p>${taxCost.toFixed(2)}</p>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-gray-600">Shipping</p>
                    <p className="text-gray-600">Calculated at checkout</p>
                </div>
                <div className="flex flex-row justify-between border-t border-t-gray-400 pt-4">
                    <p className="font-bold">Total</p>
                    <p>${totalCost.toFixed(2)}</p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <Button
                    className="w-full rounded-xl bg-black text-white text-sm flex items-center justify-center py-2"
                >
                    Proceed to Checkout
                </Button>
                <Button
                    className="w-full rounded-xl border border-gray-400 text-black text-sm flex items-center justify-center py-2"
                    onClick={() => setProductPage("tv")}
                >
                    Continue Shopping
                </Button>
            </div>

        </div>
    )
}