import { Button } from "./Button"

export const Footer = ({}) => {
    const categories = [
        {
            id: 1,
            title: 'About',
            links: [
                { id: 1, label: 'About Us', href: '/'},
                { id: 2, label: 'Careers', href: '/'},
                { id: 3, label: 'Press', href: '/'},
            ]
        }, 
        {
            id: 2,
            title: 'Support',
            links: [
                { id: 1, label: 'Contact', href: '/'},
                { id: 2, label: 'FAQ', href: '/'},
                { id: 3, label: 'Shopping', href: '/'},
            ]
        },
        {
            id: 3,
            title: 'Legal',
            links: [
                { id: 1, label: 'Privacy Police', href: '/'},
                { id: 2, label: 'Term of Service', href: '/'},
                { id: 3, label: 'Returns', href: '/'},
            ]
        },
    ] 

    return(
        <footer className="w-full xl:px-[140px] border-t border-t-gray-200 flex flex-col gap-6 items-center">
            <div className="w-full p-[32px]">
                
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {categories.map(category => (
                        <div key={category.id} className="flex flex-col gap-1">
                            <div className="font-bold">{category.title}</div>
                            {category.links.map(link => (
                                <div key={link.id}>{link.label}</div> 
                            ))}
                        </div>
                    ))}
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