import { MdEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from '../../img/logo.png'
import './style.css'

export default function Footer() {
    return (
        <footer >
            <div className="footer">
                <div className="logo-footer alinhamento">
                    <img src={logo} className=" logo-fundo-escuro" />
                    <p>Agencia e acessoria de Markting</p>
                </div>
                <div className="institucional alinhamento">
                    <h3>Institucional</h3>
                    <p>Home</p>
                    <p>Sobre Nós</p>
                    <p>Equipe</p>
                </div>
                <div className="contato-footer alinhamento">
                    <h3>Contato</h3>
                    <p><MdEmail /> exemplo@exemplo.com</p>
                    <p><MdEmail /> exemplo@exemplo.com</p>
                </div>
                <div className="redes-sociais alinhamento">
                    <h3>Nossas Redes</h3>
                    <p>Siga-nos</p>
                    <div className="icones-redes">
                    <p><FaTiktok /></p>
                    <p><FaInstagram /></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}