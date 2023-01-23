import { Link } from 'react-router-dom';
import './NavBar.css';
import SearchBar from './SearchBar';

 function NavBar() {
    return (
        <div className='navbar'>
            <nav>
               <Link to="/" className='brand'>
                    <h1>Luxury sports cars</h1>
               </Link> 
               <SearchBar />
               <Link to="/create">Add car</Link>
            </nav>
        </div>
  )
}
export default NavBar;
