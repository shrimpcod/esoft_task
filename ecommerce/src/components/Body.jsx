import products from '../data/products'
import { Select } from './Select'
import { ProductCard } from './ProductCard'

export const Body = () => {
    const filteredProducts = [...new Set(products.filter(p => p.category == "tv"))]
    const prices = ["Price: High to Low", "Price: Low to High"]
    return(
        <div className='w-full'>
            <div className='flex justify-between items-center'>
                <p className='text-gray-400'>{filteredProducts.length} products</p>
                <div className='flex gap-2 items-center'>
                    <p>Sort by:</p>
                    <div>
                        <Select
                            style="w-full min-w-0 h-[32px] bg-gray-200 border rounded-lg border-gray-300 text-gray-500"  
                            name="price"
                            id="price"
                            options={prices}
                        />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-4 mt-4'>
                {filteredProducts.map((product) => (
                    <ProductCard
                        style="rounded"
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}