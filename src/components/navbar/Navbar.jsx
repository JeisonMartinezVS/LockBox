import '../../assets/style/NavbarStyle.css'
import { Link } from 'react-router-dom';
import Login from '../../pages/Login';

const Navbar = () => {
  return (
    <nav className="navbar box-border m-0 bg-neutral-700 text-white flex justify-between items-center gap-8 px-5">
      <Link to="/" className="title-logo text-3xl">Lock<span className='text-orange-500'>Box</span></Link>
      <ul className='flex gap-4'>
        <li className=''>
          <Link to="#"><Login /></Link>
        </li>
        <li>
          <Link to="/registro">Registrate</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;