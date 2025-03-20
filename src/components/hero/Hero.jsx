import './hero.css';
import heroImg1 from '../../assets/hero-carousel-1.jpg';
import heroImg2 from '../../assets/hero-carousel-2.jpg';
import heroImg3 from '../../assets/hero-carousel-3.jpg';

const Hero = () =>{
    return(
<>
<div className="hero">
    <img src={heroImg1} alt="HERO Image" />
    {/* <img src={heroImg2} alt="HERO Image" />
    <img src={heroImg3} alt="HERO Image" /> */}

    
</div>


<h1>Hero Section</h1>
</>


    )
}

export default Hero;