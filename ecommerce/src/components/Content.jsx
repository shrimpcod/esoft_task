import { ProductsPage } from "../pages/ProductsPage"
import { Cart } from "../pages/Cart"
import { useProducts } from "../context/ProductsContext"

export const Content = () => {
    const { productPage } = useProducts()
    return(
        <>
            {productPage === 'cart' ? (
                <Cart />
            ) : (
                <ProductsPage />
            )}
        </>
    )
}