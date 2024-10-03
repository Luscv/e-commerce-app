import { useEffect, useState } from "react"
import { Product } from "../models/product.entity"
import { ProductCard } from "./productCard"



export const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([])

    async function fetchProducts(){
        const data = await fetch('https://fakestoreapi.com/products')
        const response = await data.json()
        setProducts(response)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            Product List
            <div className="flex flex-wrap gap-6">
                {
                    products.map((product) => (
                        <ProductCard key={product.id} params={product}/>
                    ))
                }
            </div>
        </div>
    )
}