import logo from "../../assets/Motors shop.svg"
import menu from "../../assets/bars.svg"
import close from "../../assets/xmark.svg"
import { Button } from "../Button"
import { Container } from "./style"
import { useState } from "react"


const HeaderNotLogged = () => {

    const [ menuOpen, setMenuOpen ] = useState<boolean>(false)

    return (
        <Container id="top">
            <img src={ logo } alt="Motors shop" title="Motors shop" />

            <menu className="menuDefault">
                <nav>
                    <p>Carros</p>
                    <p>Motos</p>
                    <p>Leilão</p>
                </nav>
                <hr />
                <div>
                    <p>Fazer Login</p>
                    <Button size="buttonSizeHeader" color="buttonColorWhiteHeader" type="button" >Cadastrar</Button>
                </div>
            </menu>

            <menu className="menuIcon">
                <img src={ menuOpen ? close : menu } alt="menu"  onClick={ () => {

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
                            <p>Fazer Login</p>
                            <Button size="buttonSizeHeader" color="buttonColorWhiteHeader" type="button" >Cadastrar</Button>
                        </div>
                    </nav>
                }
            </menu>
        </Container>
    )
}

export { HeaderNotLogged }
