import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuctionDetails } from "../../components/AuctionDetails";
import { CreateBid } from "../../components/CreateBid";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListBids } from "../../components/ListBids";
import { IAuctionProps, IBid } from "../../interfaces";
import { api } from "../../services/api";
import { Container } from "./style";

const PageAuctionDetails = () => {

  const auctionId = useParams()

  const [ auctionRequest, setAuctionRequest ] = useState<IAuctionProps>({} as IAuctionProps)

  const [ bidsList, setBidsList ] = useState<IBid[]>([])

  const ListBidsFunc = (bid: IBid) => setBidsList([ ...bidsList, bid ])

  useEffect(() => {

    api.get(`/auctions/${ auctionId }`)
    .then(res => setAuctionRequest(res.data))
    .catch(error => console.error(error))
  }, [])
  
  return (
    <Container>
      <Header />

      <div>
        <div className="divBlue"></div>
        <div className="divWhite">
          <div>
            <AuctionDetails auction={ auctionRequest } />
            <ListBids bids={ auctionRequest.bids } />
            <CreateBid product={ auctionRequest } ListBidsFunc={ ListBidsFunc } />
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
};

export { PageAuctionDetails };
