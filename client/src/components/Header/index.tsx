import logo from "../../assets/Motors shop.svg"
import menu from "../../assets/bars.svg"
import close from "../../assets/xmark.svg"
import { Button } from "../Button"
import { Container } from "./style"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AvatarUser } from "../AvatarUser"
import { api } from "../../services/api"
import { Link } from "react-router-dom"
import { ModalBackground } from "../ModalBackground"
import { ModalEditAddress } from "../ModalEditAddress"
import { ModalEditUser } from "../ModalEditUser"


const Header = () => {

    const navigate = useNavigate()
    
    const token = sessionStorage.getItem("Motors shop: token")
    
    const [ menuOpen, setMenuOpen ] = useState<boolean>(false)

    const [ menuOpenLogged, setMenuOpenLogged ] = useState<boolean>(false)

    const [ userName, setUserName ] = useState<string>("")

    const [ openModalEditAddress, setOpenModalEditAddress ] = useState<boolean>(false)

    const [ openModalEditUser, setOpenModalEditUser ] = useState<boolean>(false)

    token && useEffect(() => {

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
                openModalEditAddress && 
                <ModalBackground>
                    <ModalEditAddress setOpenModalEditAddress={ setOpenModalEditAddress } />
                </ModalBackground>
            }
            {
                openModalEditUser && 
                <ModalBackground>
                    <ModalEditUser setOpenModalEditUser={ setOpenModalEditUser } />
                </ModalBackground>
            }
            {
                menuOpenLogged &&
                <div className="menuOpenLogged">
                    <p onClick={ () => {
                                    
                        setOpenModalEditUser(true)

                        setMenuOpenLogged(false)

                    } }>Editar perfil</p>
                    <p onClick={ () => {
                                    
                        setOpenModalEditAddress(true)

                        setMenuOpenLogged(false)

                    } }>Editar endereço</p>
                    <p>Meus Anúncios</p>
                    <p>Sair</p>
                </div>
            }
            <img src={ logo } alt="Motors shop" title="Motors shop" />

            <div className={ token ? "divLogged" : "divNotLogged" }>
                <nav>
                    <Link to="/">Carros</Link>
                    <Link to="/">Motos</Link>
                    <Link to="/">Leilão</Link>
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
                            <Link to="/signin">Fazer Login</Link>
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
                            <Link to="/">Carros</Link>
                            <Link to="/">Motos</Link>
                            <Link to="/">Leilão</Link>
                            <hr />
                            <div>
                                <p onClick={ () => {
                                    
                                    setOpenModalEditUser(true)
            
                                    setMenuOpenLogged(false)
            
                                } }>Editar perfil</p>
                                <p onClick={ () => {
                                    
                                    setOpenModalEditAddress(true)

                                    setMenuOpenLogged(false)

                                } }>Editar endereço</p>
                                <Link to="">Meus Anúncios</Link>
                                <Link to="">Sair</Link>
                            </div>
                        </nav>

                    ) : (
                        menuOpen && 
                        <nav>
                            <hr />
                            <div>
                                <Link to="/">Carros</Link>
                                <Link to="/">Motos</Link>
                                <Link to="/">Leilão</Link>
                            </div>
                            <hr />
                            <div>
                                <Link to="/signin">Fazer Login</Link>
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
