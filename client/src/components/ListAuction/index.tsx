import { IAuctionProps, IListAuctions } from "../../interfaces"
import { Auction } from "../Auction"
import { Container } from "./style"

const ListAuction = ({ auctions }: IListAuctions) => {
    const car = {
        title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 ",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        year: 2013,
        kilometers: 0,
        price: "R$ 00.000,00",
        ad_type: "sale",
        vehicle_type: "car",
        cover_image: "https://media.istockphoto.com/id/1145720458/photo/3d-illustration-of-generic-red-car-front-view.jpg?s=612x612&w=0&k=20&c=GeLrH7n-UMTX6l1ULskxQG9_6D_PTlW3m96RMAQzErU=",
        gallery_image: "https://media.istockphoto.com/id/1157655660/pt/foto/generic-red-suv-on-a-white-background-side-view.jpg?s=612x612&w=0&k=20&c=SwmLFK_KmRw0oQFCDscipI-N2gSj1PItzTkC69BdlpA=",
        user: {
            name: "Rodrigo Silva"
        },
        time_limit: "00:00:00"
    }

    return (
        <Container>
            <h2>Leilão</h2>

            <menu>
                <Auction auction={ car } />
                <Auction auction={ car } />
                <Auction auction={ car } />
                <Auction auction={ car } />
            </menu>
        </Container>
    )
}

export { ListAuction }
