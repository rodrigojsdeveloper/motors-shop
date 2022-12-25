import { useParams } from "react-router-dom";
import { AuctionDetails } from "../../components/AuctionDetails";
import { CreateBid } from "../../components/CreateBid";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListBids } from "../../components/ListBids";
import { Container } from "./style";

const PageAuctionDetails = () => {

  let { productId } = useParams()
  
  return (
    <Container>
      <Header />

      <div>
        <div className="divBlue"></div>
        <div className="divWhite">
          <div>
            <AuctionDetails />
            <ListBids />
            <CreateBid />
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
};

export { PageAuctionDetails };
