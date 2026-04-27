import { Dropdown } from './Dropdown'
import products from '../data/products'
import { FiClock } from 'react-icons/fi'
import { Button } from './Button'

export const Sidebar = () => {
    const brands = [...new Set(products.map(p => p.brand))]
    
    return(
        <div className="w-full flex flex-col gap-3 lg:w-[256px]">
            <div className="border border-gray-200 rounded-lg p-[17px] flex flex-col gap-6">
                <p className="text-xl">Filters</p>
                <div className="">
                    <p>Brand</p>
                    <Dropdown
                        className="mt-2 w-full min-w-0 h-[32px] bg-gray-200 border rounded-lg border-gray-300 text-gray-500"
                        name="brand"
                        id="brand=select"
                        options={brands}
                    />
                </div>
                <div className="">
                    <p>Price Range</p>
                    <div className="flex gap-2 mt-2">
                        <input 
                            type="number" 
                            placeholder="0" 
                            min={0}
                            className="w-full min-w-0 px-2 bg-gray-200 border rounded-lg border-gray-300 text-gray-500"
                        />
                        <input 
                            type="number" 
                            placeholder="5000" 
                            max={5000}
                            className="w-full min-w-0 px-2 bg-gray-200 border rounded-lg border-gray-300 text-gray-500"
                        />
                    </div>
                </div>
                <Button 
                    name="Apply Filters" 
                    style= "w-full border rounded-lg bg-black text-white px-4 py-2"
                />
            </div>
            <div className="flex flex-col border border-red-400 rounded-lg bg-red-400 text-white p-[17px]">
                <div className="flex gap-3 items-center">
                    <FiClock size={24}/>
                    <p className="text-lg">Special Deal!</p>
                </div>
                <p className="mt-2 flex-1">
                    Register now to unlock exclusive offers and discou
                </p>
                <div className="w-full mt-2 flex justify-between items-center">
                    <div>
                        <p>Offer expires in:</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg">0:59:59</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}