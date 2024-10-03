import { Product } from "@/app/models/product.entity"

interface ProductProps {
    id: string; // Define the product prop type
}

async function fetchData(id: string){
    let response = await fetch(`https://fakestoreapi.com/products/${id}`)
    let data = await response.json()
    console.log(data)
    return data
}


export async function generateStaticParams() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data: Product[] = await response.json()
    return data.map((product: Product) => ({
        params: { id: product.id }
    }))
}
export default async function ProductDetails(params: ProductProps) {
    const {id} = params
    console.log(id)
    const productDetail = await fetchData(id)

    return (
        <div key={id}>
            <h1>{productDetail.title}</h1> {/* Use productDetail fields */}
            <p>{productDetail.description}</p>
            <p>Price: ${productDetail.price}</p>
        </div>
    )
}
