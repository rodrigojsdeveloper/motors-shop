import logo from "../../assets/Motors shop.svg"
import menu from "../../assets/bars.svg"
import close from "../../assets/xmark.svg"
import { Button } from "../Button"
import { Container } from "./style"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Header = () => {

    const navigate = useNavigate()

    const [ menuOpen, setMenuOpen ] = useState<boolean>(false)

    const token = false

    return (
        <Container>
            <img src={ logo } alt="Motors shop" title="Motors shop" />

            <div className={ token ? "divLogged" : "divNotLogged" }>
                <nav>
                    <p>Carros</p>
                    <p>Motos</p>
                    <p>Leilão</p>
                </nav>
                <hr />
                {
                    token ? (

                        <div>
                            <img src="https://i.pinimg.com/originals/07/27/27/07272766e2fc55ea363b3655ddf00f4e.jpg" />
                            <h2>Rodrigo silva</h2>
                        </div>

                    ) : (

                        <div>
                            <p onClick={ () => navigate("/signin") }>Fazer Login</p>
                            <Button size="buttonSizeHeader" color="buttonColorWhiteHeader" type="button" onClick={ () => navigate("/signup") }>Cadastrar</Button>
                        </div>
                    )
                }
            </div>

            <div className="menuIcon">
                <img src={ menuOpen ? close : menu } alt="menu" onClick={ () => {

                    setMenuOpen(true)

                    if(menuOpen) {

                        setMenuOpen(false)
                    }

                } } />

                {
                    menuOpen && 
                    <nav>
                        <p>Carros</p>
                        <p>Motos</p>
                        <p>Leilão</p>
                        <hr />
                        <div>
                            <p onClick={ () => navigate("/signin") }>Fazer Login</p>
                            <Button size="buttonSizeHeader" color="buttonColorWhiteHeader" type="button" onClick={ () => navigate("/signup") }>Cadastrar</Button>
                        </div>
                    </nav>
                }
            </div>
        </Container>
    )
}

export { Header }
