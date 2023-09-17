import Link from "../Link/Link";

const NavBar = () => {

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/products', name: 'Products', id: 'products' },
        { path: '/dashboard', name: 'Dashboard', id: 'dashboard' }
      ];
      
      
    return (
        <nav>
            <ul className="md: flex ">
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;