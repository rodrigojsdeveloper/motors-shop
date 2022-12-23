import { Bid } from "../../entities/bids";
import { NotFoundError } from "../../helpers";
import { IBid } from "../../interfaces/bids";
import { auctionRepository } from "../../repositories/auctionRepository";
import { bidRepository } from "../../repositories/bidRepository";
import { useRepository } from "../../repositories/userRepository";

const createBidService = async (bid: IBid, email: string, auction_id: string): Promise<Bid> => {

    const user = await useRepository.findOneBy({ email })

    const auction = await auctionRepository.findOneBy({ id: auction_id })

    if(!auction) {

        throw new NotFoundError("Auction not found")
    }

    const newBid = new Bid()
    newBid.value = bid.value
    newBid.auction = auction
    newBid.user = user!

    bidRepository.create(newBid)
    bidRepository.save(newBid)

    return newBid
}

export { createBidService }
