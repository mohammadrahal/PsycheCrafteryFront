// import {Link} from 'react-router-dom'
import '../style/header.css'
const Header = () => {
  return (
    <div>
        <header className='header container'>
        <div className='logo'>
            <h3>PsycheCraftery</h3>
        </div>
        <nav>
        <ul className="items">
            <li className="items_list">Home</li>
            <li className="items_list">Services</li>
            <li className="items_list">About</li>
            <li className="items_list">Contact</li>
            <li className="btn-items_list">Login</li>
        </ul>
        </nav>
        </header>
    </div>
  )
}

export default Header