interface IAuction {
    name: string
    description: string
    year: number
    kilometers: number
    ad_type: string
    price: "auction" | "sale"
    vehicle_type: string
    images: string
    time_limit: string
}

export { IAuction }
