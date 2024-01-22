import './styles/Menu.css'

const Menu = () => {
    return ( 
        <div className="menu">
            <ul className=" menu">
                <li>
                <a href="/">Home</a>
                </li>
                <li>
                <a href="/sobre">Sobre</a>
                </li>
                <li>
                <a href="/curiosidades">Curiosidades</a>
                </li>
                <li>
                <a href="/saibamais">Saiba mais</a>
                </li>
            </ul>
        </div>
     );
}
 
export default Menu;