import { Select } from './Select'
import products from '../data/products'
import { FiClock } from 'react-icons/fi'
import { Button } from './Button'

export const SidebarL = () => {

    const brands = [...new Set(products.map(p => p.brand))]
    return(
        <div className="flex flex-col gap-3 ">
            <div className="border border-gray-200 rounded-lg p-[17px] w-[256px] flex flex-col gap-6">
                <p className="text-xl">Filters</p>
                <div className="">
                    <p>Brand</p>
                    <Select
                        className="mt-2"
                        style="w-full min-w-0 h-[32px] bg-gray-200 border rounded-lg border-gray-300 text-gray-500" 
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
            <div className="border border-red-400 rounded-lg w-[256px] h-[147px] bg-red-400 text-white p-[17px]">
                <div className="flex gap-3 items-center">
                    <FiClock size={24}/>
                    <p className="text-lg">Special Deal!</p>
                </div>
                <p className="mt-2">
                    Register now to unlock exclusive offers and discou
                </p>
                <div className="mt-2 flex gap-6 items-center">
                    <p>Offer expires in:</p>
                    <p className="font-bold text-lg">0:59:59</p>
                </div>
                
            </div>
        </div>
    )
}