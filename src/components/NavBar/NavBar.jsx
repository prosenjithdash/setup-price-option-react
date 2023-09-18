import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/products', name: 'Products', id: 'products' },
        { path: '/dashboard', name: 'Dashboard', id: 'dashboard' }
      ];
      
      
    return (
        <nav className="text-black p-6 bg-gray-400 ">
            {/* navbar background color and ul background color same na dile problem hoy */}
         
            <div className=" md:hidden text-2xl" onClick={()=> setOpen(!open)}>
                
                {
                    open === true?
                        <AiOutlineClose ></AiOutlineClose> 
                        : <AiOutlineMenuUnfold ></AiOutlineMenuUnfold>
                }

            </div>

            <ul className={`md:flex   duration-1000 absolute md:static
            ${open? 'top-16' : '-top-60'} bg-gray-400 px-6 
             `}>
                
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>


        </nav>
    );

    
};

export default NavBar;

 