import logo from "../../assets/Motors shop.svg"
import menu from "../../assets/bars.svg"
import close from "../../assets/xmark.svg"
import { Button } from "../Button"
import { Container } from "./style"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AvatarUser } from "../AvatarUser"
import { api } from "../../services/api"


const Header = () => {

    const token = sessionStorage.getItem("Motors shop: token")

    const navigate = useNavigate()

    const [ menuOpen, setMenuOpen ] = useState<boolean>(false)

    const [ menuOpenLogged, setMenuOpenLogged ] = useState<boolean>(false)

    const [ userName, setUserName ] = useState<string>("")

    useEffect(() => {

        api.get("/profile", {
            headers: {
                "Authorization": `Bearer ${ token }`
            }
        })
        .then(res => setUserName(res.data.name))
        .catch(error => console.error(error))

    }, [])

    return (
        <Container>
            {
                menuOpenLogged &&
                <div className="menuOpenLogged">
                    <p>Editar perfil</p>
                    <p>Editar endereço</p>
                    <p>Meus Anúncios</p>
                    <p>Sair</p>
                </div>
            }
            <img src={ logo } alt="Motors shop" title="Motors shop" />

            <div className={ token ? "divLogged" : "divNotLogged" }>
                <nav>
                    <p onClick={ () => navigate("/") }>Carros</p>
                    <p onClick={ () => navigate("/") }>Motos</p>
                    <p onClick={ () => navigate("/") }>Leilão</p>
                </nav>
                <hr />
                {
                    token ? (

                        <div onClick={ () => {
                            setMenuOpenLogged(true)

                            if(menuOpenLogged) {

                                setMenuOpenLogged(false)
                            }
                        } }>
                            <AvatarUser userName={ userName } />
                            <h2>{ userName }</h2>
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
                    token ? (
                        
                        menuOpen && 
                        <nav>
                            <p onClick={ () => navigate("/") }>Carros</p>
                            <p onClick={ () => navigate("/") }>Motos</p>
                            <p onClick={ () => navigate("/") }>Leilão</p>
                            <hr />
                            <div>
                                <p>Editar perfil</p>
                                <p>Editar endereço</p>
                                <p>Meus Anúncios</p>
                                <p>Sair</p>
                            </div>
                        </nav>

                    ) : (
                        menuOpen && 
                        <nav>
                            <p onClick={ () => navigate("/") }>Carros</p>
                            <p onClick={ () => navigate("/") }>Motos</p>
                            <p onClick={ () => navigate("/") }>Leilão</p>
                            <hr />
                            <div>
                                <p onClick={ () => navigate("/signin") }>Fazer Login</p>
                                <Button size="buttonSizeHeader" color="buttonColorWhiteHeader" type="button" onClick={ () => navigate("/signup") }>Cadastrar</Button>
                            </div>
                        </nav>
                    )
                }
            </div>
        </Container>
    )
}

export { Header }
