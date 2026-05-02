import { useProducts } from "../context/ProductsContext";

export const useFilteredProducts = () => {
    const { products, productPage, appliedFilters } = useProducts()

    const filteredProducts = products.filter(p => {
        const isCategory = p.category === productPage;
        const isBrand = appliedFilters.brand === "" || p.brand === appliedFilters.brand;
        const isMinPrice = appliedFilters.minPrice === "" || p.price >= Number(appliedFilters.minPrice);
        const isMaxPrice = appliedFilters.maxPrice === "" || p.price <= Number(appliedFilters.maxPrice);

        return isCategory && isBrand && isMinPrice && isMaxPrice
    })

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (appliedFilters.sortBy === "Price: Low to High") {
            return a.price - b.price
        }
        if (appliedFilters.sortBy === "Price: High to Low") {
            return b.price - a.price
        }
        return 0
    })

    return sortedProducts
}