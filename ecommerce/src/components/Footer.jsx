import { Button } from "./Button"

export const Footer = ({}) => {
    return(
        <footer className="w-full px-[247px] border-t border-t-gray-200 h-[281px] flex flex-col gap-6 items-center">
            <div className="w-full p-[32px]">
                <div className='w-full flex justify-between items-start'>
                    <div className="flex flex-col gap-3">
                        <div className="font-bold">About</div>
                        <div>About Us</div> 
                        <div>Careers</div> 
                        <div>Press</div>  
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="font-bold">Support</div>
                        <div>Contact</div> 
                        <div>FAQ</div> 
                        <div>Shopping</div>  
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="font-bold">Legal</div>
                        <div>Privacy Police</div> 
                        <div>Term of Service</div> 
                        <div>Returns</div>  
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="font-bold">Newsletter</div>
                        <div>Subscribe for exclusive deals</div> 
                        <div className="flex gap-2">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="w-[231px] min-w-0 px-2 bg-gray-200 border rounded-lg border-gray-300 text-gray-500"
                            />
                            <Button 
                                name="Subscribe" 
                                style= "w-[103pxh] border rounded-lg bg-black text-white px-4 py-2"
                            />
                        </div>  
                    </div>
                </div>
                <div className="border-t border-t-gray-200 mt-10">
                    <p className="text-gray-400 text-center pt-5">© 2026 TechStore. All rights reserved.</p>
                </div>
                  
            </div>        
        </footer>
    )
}