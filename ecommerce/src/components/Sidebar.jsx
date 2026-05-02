import { Dropdown } from './Dropdown'
import { FiClock } from 'react-icons/fi'
import { Button } from './Button'
import { useProducts } from '../context/ProductsContext'

export const Sidebar = () => {
    const { products, productPage, draftFilters, setDraftFilters, handleApply } = useProducts()

    const brands = [
        "All brands", 
        ...new Set(products.filter(p => p.category === productPage).map(p => p.brand))
    ]

    const handleChange = (e) => {
        const {name, value} = e.target
        const finalValue = value === "All brands" ? "" : value
        setDraftFilters(prev => ({...prev, [name]: finalValue}))
    }
    
    return(
        <div className="w-full flex flex-col gap-3 lg:w-[256px]">
            <div className="border border-gray-200 rounded-lg p-[17px] flex flex-col gap-6">
                <p className="text-xl">Filters</p>
                <div className="">
                    <p>Brand</p>
                    <Dropdown
                        id="brand=select"
                        className="mt-2 w-full h-[36px] bg-white border border-gray-300 rounded-lg px-2 text-sm focus:border-black outline-none transition-colors"
                        options={brands}
                        name="brand"
                        value={draftFilters.brand}
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <p>Price Range</p>
                    <div className="flex gap-2 mt-2">
                        <input 
                            type="number" 
                            placeholder="0" 
                            min={0}
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:border-black outline-none transition-colors"
                            name="minPrice"
                            value={draftFilters.minPrice}
                            onChange={handleChange}
                        />
                        <input 
                            type="number" 
                            placeholder="5000" 
                            max={5000}
                            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:border-black outline-none transition-colors"
                            name="maxPrice"
                            value={draftFilters.maxPrice}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <Button 
                    className= "w-full bg-black text-white py-2 rounded-lg font-medium"
                    onClick={handleApply}
                > 
                    Apply Filters
                </Button>

            </div>
            <div className="flex flex-col bg-linear-to-br from-red-500 to-red-600 rounded-xl text-white p-5 shadow-md shadow-red-200">
                <div className="flex gap-3 items-center">
                    <FiClock size={24} className='animate-pulse'/>
                    <p className="text-lg font-bold">Special Deal!</p>
                </div>
                <p className="mt-2 text-sm opacity-90 leading-relaxed">
                    Register now to unlock exclusive offers and discou
                </p>
                <div className="w-full mt-4 flex justify-between items-center border-t border-white/50 pt-4">
                        <p className='text-xs uppercase tracking-wider opacity-80'>Offer expires in:</p>
                        <p className="font-mono font-bold text-lg">0:59:59</p>
                </div>
                
            </div>
        </div>
    )
}