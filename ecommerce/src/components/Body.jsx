import { useProducts } from '../context/ProductsContext'
import { useFilteredProducts } from '../hooks/useFilteredProducts.js'
import { Dropdown } from './Dropdown'
import { ProductCard } from './ProductCard'

export const Body = () => {
    const { appliedFilters, setAppliedFilters } = useProducts()
    const sortedProducts = useFilteredProducts()

    const prices = ["Price: Low to High", "Price: High to Low"]
    const handleChange = (e) => {
        const {name, value} = e.target
        setAppliedFilters(prev => ({...prev, [name]: value}))
    }

    return(
        <div className='w-full'>
            <div className='flex justify-between items-center px-2'>
                <p className='text-gray-400'>{sortedProducts.length} products</p>
                <div className='flex gap-2 items-center'>
                    <p>Sort by:</p>
                    <div>
                        <Dropdown
                            id="sortBy"
                            className="w-full min-w-[200px] h-[36px] bg-white border border-gray-300 rounded-lg px-3 text-sm focus:border-black outline-none transition-all cursor-pointer hover:border-gray-400" 
                            options={prices}  
                            name="sortBy"
                            value={appliedFilters.sortBy}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4'>
                {sortedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        className="rounded"
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}