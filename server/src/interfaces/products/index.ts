interface IProduct {
    name: string
    description: string
    year: number
    kilometers: number
    ad_type: string
    price: string
    vehicle_type: string
    images: string
}

interface IProductUpdate {
    name?: string
    description?: string
    year?: number
    kilometers?: number
    ad_type?: string
    price?: string
    vehicle_type?: string
    images?: string
}

export { IProduct, IProductUpdate }
