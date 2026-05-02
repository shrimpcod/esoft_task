import { createContext, useContext, useState, useEffect } from "react";
import products from "../data/products";

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
    const [productPage, setProductPage] = useState("tv")

    const initialFilters = {
        brand: "",
        minPrice: "",
        maxPrice: "",
        sortBy: "Price: Low to High"
    }

    const [draftFilters, setDraftFilters] = useState(initialFilters)
    const [appliedFilters, setAppliedFilters] = useState(initialFilters)

    useEffect(() => {
        setDraftFilters(initialFilters)
        setAppliedFilters(initialFilters)

    }, [productPage])

    const handleApply = () => {
        setAppliedFilters(draftFilters)
    }

    const value = {
        products,
        productPage, 
        setProductPage,
        draftFilters,
        setDraftFilters,
        appliedFilters,
        setAppliedFilters,
        handleApply
    }

    return(
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => {
    const context = useContext(ProductsContext)
    if (!context) {
        throw new Error("useProducts must be used within a ProductProvider")
    }
    return context
}