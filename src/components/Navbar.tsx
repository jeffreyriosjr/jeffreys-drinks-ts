import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
<<<<<<< HEAD
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-5">
=======
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
>>>>>>> 998559b24a5036d90de4038894006363efba2212
            {/*logo*/}
            <Link to='/' className='navbar-brand'>Drinks</Link>
            {/*menu*/}
            <div className='collapse navbar-collapse'>
            <div className='navbar-nav ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='#'>Single Drink</Link>
               
            </div>

            </div>
            
          
        </nav>
    )
}
export default Navbar;