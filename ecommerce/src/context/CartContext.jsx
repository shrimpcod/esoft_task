import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext()

const getInitialCart = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        return new Map(JSON.parse(savedCart))
    }
    return new Map()
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(getInitialCart)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(Array.from(cart.entries())))
    }, [cart])

    const totalItems = [...cart.values()].reduce((acc, product) => acc + product.quantity, 0)

    const subtotalCost = [...cart.values()].reduce((acc, product) => {
        return acc + (product.price * product.quantity)
    }, 0)
    const taxCost = subtotalCost * 0.08
    const totalCost = subtotalCost + taxCost 

    const addToCart = (product) => {
        setCart(prevCart => {
            const newCart = new Map(prevCart);

            if (newCart.has(product.id)) {
                const existing = newCart.get(product.id)
                newCart.set(product.id, {...existing, quantity: existing.quantity + 1})
            } else {
                newCart.set(product.id, {...product, quantity: 1})
            }

            return newCart
        })
    }

    const deleteFromCart = (product) => {
        setCart(prevCart => {
            const newCart = new Map(prevCart)

            if (newCart.has(product.id)){
                const existing = newCart.get(product.id)
                if (existing.quantity === 1) {
                    newCart.delete(product.id)
                } else {
                    newCart.set(product.id, {...existing, quantity: existing.quantity - 1})
                }
            }

            return newCart
        })
    }

    const deleteAllItemsFromCart = (product) => {
        setCart(prevCart => {
            const newCart = new Map(prevCart)

            if (newCart.has(product.id)) {
                newCart.delete(product.id)
            }

            return newCart
        })
    }

    const value = {
        cart,
        addToCart, 
        deleteFromCart, 
        deleteAllItemsFromCart,
        totalItems,
        subtotalCost,
        taxCost,
        totalCost
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error ("useCart можеть быть использован только с CartProvider")
    }
    return context
}

