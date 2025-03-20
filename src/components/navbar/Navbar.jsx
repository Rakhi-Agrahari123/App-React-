import './navbar.css';
import logo from './../../assets/logo.png';

const Navbar = () =>{
    return(
<>
<div className="navbar" >   

<div className='nav-Top'> 
    <div className='nav-left'><h5>Monday - Saturday, 8AM to 10PM</h5></div>
    <div className='nav-right'><h5>Call us now +1 5589 55488 55</h5></div>

</div>

<div className="nav-bottom">
    <div> <img className="nav-logo" src={logo} alt='Medicio logo'/></div>

    <div className='nav-menubar'>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Department</li>
            <li>Doctors</li>
            <li>Contact</li>
            </ul>
            
    </div>

    <div className='nav-btn'><button>Make an Appointment</button></div>
</div>





</div>
</>

    )
}

export default Navbar;