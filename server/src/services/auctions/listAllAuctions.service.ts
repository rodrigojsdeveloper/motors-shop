import { auctionRepository } from "../../repositories/auctionRepository"
import { Auction } from "../../entities/auctions"

const listAllAuctionsService = async (): Promise<Auction[]> => {

    const auctions = await auctionRepository.find()

    return auctions
}

export { listAllAuctionsService }
