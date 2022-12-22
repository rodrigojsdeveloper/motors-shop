import { Button } from "../Button"
import { Container } from "./style"

const ProductDetails = () => {

    return (
        <Container>
            <div className="divCarDetailsDescription">
                <div className="divCarPhotoAndDetails">
                    <div className="divCarPhoto">
                        <img src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png" />
                    </div>

                    <div className="divCarDetails">
                        <h3>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</h3>

                        <div>
                            <div>
                                <p>2013</p>
                                <p>0 KM</p>
                            </div>

                            <span>R$ 00.000,00</span>
                        </div>

                        <Button size="buttonSizeProductCarDetails" color="buttonColorBlueLogin" type="button">Comprar</Button>
                    </div>    
                </div>

                <div className="divDescription">
                    <h4>Descrição</h4>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>

            <div className="divPhotosAndUserDetails">
                <div className="divPhotos">
                    <h3>Fotos</h3>

                    <div>
                        <div>
                            <div>
                                <img src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png" />
                            </div>
                            <div>
                                <img src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png" />
                            </div>
                            <div>
                                <img src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png" />
                            </div>
                            <div>
                                <img src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png" />
                            </div>
                            <div>
                                <img src="https://i.pinimg.com/originals/dc/19/e9/dc19e9b94a372ebc21ffeb7623d5632a.png" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="divUserDetails">
                    <div>
                        <img src="https://i.pinimg.com/originals/07/27/27/07272766e2fc55ea363b3655ddf00f4e.jpg" />
                        <h4>Rodrigo Silva</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    
                        <Button size="buttonSizeProductDetails" color="buttonColorBlackProductDetails" type="button">Ver todos anuncios</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export { ProductDetails }
