import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { logout } from '../store/slices/auth-slice';

const Header = () => {
  const dispatch=useDispatch();
  const {isAuthenticated}=useSelector(state=>state.auth)
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {
        isAuthenticated &&
      
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button type='button' onClick={()=>dispatch(logout())}>Logout</button>
          </li>
        </ul>
      </nav>
}
    </header>
  );
};

export default Header;
