import {Link} from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark  mt-5">

            {/*logo*/}
            <Link to='/' className='navbar-brand mx-3 text-white'>Jeffrey's Drinks</Link>
            {/*menu*/}
            <div className='collapse navbar-collapse'>
            <div className='navbar-nav ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/cocktails/1'>Single Drink</Link>
               
            </div>

            </div>
            
          
        </nav>
    )
}
export default Navbar;