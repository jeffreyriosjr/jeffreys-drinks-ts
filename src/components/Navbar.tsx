import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-5">
            {/*logo*/}
            <Link to='/' className='navbar-brand'>Drinks</Link>
            {/*menu*/}
            <div className='collapse navbar-collapse'>
            <div className='navbar-nav'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='#'>Single Drink</Link>
               
            </div>

            </div>
            
          
        </nav>
    )
}
export default Navbar;