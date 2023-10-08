import { Link } from 'react-router-dom'
import './style.css'
function Header () {
    return(
        <header>
            <nav>
                <div class="logo">Logo</div>
                <ul class="nav-links">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/sobre" >Sobre</Link></li>
                    <li><Link to="/servico" >Serviço</Link></li>
                    <li><Link to="/contato" >Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header