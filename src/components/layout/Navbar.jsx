import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Contact from '../pages/Curiosities';
import About from '../pages/About';
import './styles/Navbar.css'
import More from '../pages/More';
import Menu from './Menu';
import Footer from './Footer';

const Navbar = () => {
    return ( 
        <nav className='navbar'>
            <div className='div'>
                <h1>Curiosidades de Tecnologia</h1>
                <p>Tudo aquilo que você sempre quis saber sobre o mundo Tech, em um único lugar</p>
                <Menu />
           </div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/curiosidades" element={<Contact />} />
                 <Route exact path="/sobre"element={<About />} />
                <Route exact path="/saibamais" element={<More />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </nav>
     );
}
 
export default Navbar;