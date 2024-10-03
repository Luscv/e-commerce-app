/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { Product } from "@/app/models/product.entity"
import { Suspense } from "react";

interface ProductProps {
    params: {
        id: string;
    }
}

async function fetchData(id: string){
    
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json()
    return data
}


export async function generateStaticParams() {
    const response = await fetch('https://fakestoreapi.com/products')
    const data: Product[] = await response.json()
    return data.map((product: Product) => ({
        params: { id: product.id }
    }))
}
export default async function ProductDetails({params}: ProductProps) {
    const {id} = params
    console.log(id)
    const productDetail = await fetchData(id)

    return (
        <Suspense fallback={<div>Content not loaded</div>}>
            <div key={id} className="flex h-screen justify-center items-center">
                <div className="border w-2/3 h-2/3 p-6 rounded-lg bg-zinc-800 flex justify-around items-center">
                    <div className="h-2/3 w-1/4">
                        <img className="w-full h-full rounded-lg" src={productDetail.image} alt={productDetail.title} />
                    </div>
                    <div className="border w-1/2 rounded-lg p-6">
                        <h1 className="text-4xl text-wrap">{productDetail.title}</h1>
                        <h3 className="mt-8 text-lg">{productDetail.description}</h3>
                        <p className="text-zinc-400 text-md">Category: {productDetail.category}</p>
                        <div className="text-zinc-200 mt-4" >
                            <p className="text-md">Rating: <span>{productDetail.rating.rate} / 5</span></p>
                            <p className="text-sm text-zinc-400">{productDetail.rating.count} Reviews</p>
                        </div>
                        
                        <div className="mt-12 flex justify-end">
                           <p className="flex align-top text-2xl">Price:<span className="text-5xl px-3">${productDetail.price}</span></p> 
                        </div>

                        
                    </div>
                    
                </div>
            </div>
        </Suspense>
    )
}
