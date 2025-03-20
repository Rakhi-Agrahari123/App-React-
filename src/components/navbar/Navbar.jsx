import './navbar.css';
import logo from './../../assets/logo.png';
import { MdOutlineWatchLater } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";


const Navbar = () =>{
    return(
<>
<div className="navbar" >   

<div className='nav-Top'> 
    <div className='nav-left'><h5>{<MdOutlineWatchLater/>}
Monday - Saturday, 8AM to 10PM</h5></div>
    <div className='nav-right'><h5>{<CiMobile2 />}Call us now +1 5589 55488 55</h5></div>

</div>

<div className="nav-bottom">
    <div className='logo'> <img className="nav-logo" src={logo} alt='Medicio logo'/></div>

    <div className='nav-menubar'>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Department</li>
            <li>Doctors</li>
            <li>Contact</li>
            <div className='nav-btn'><button>Make an Appointment</button></div>

            </ul>
            
    </div>

</div>





</div>
</>

    )
}

export default Navbar;