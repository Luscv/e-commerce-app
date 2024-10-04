/* eslint-disable @next/next/no-img-element */
"use client"

import { Product } from "@/app/models/product.entity"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"



export default function ProductDetailsClient(){
    const [product, setProduct] = useState<Product>()
    const router = useRouter()
    const { id } = router.query

    
    useEffect(() => {
        if(id){
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(data => setProduct(data));
        }
    }, [id])

    if(!product) return <div>Loading...</div>

    return(
        <div className="flex h-screen justify-center items-center">
                <div className="border w-2/3 h-2/3 p-6 rounded-lg bg-zinc-800 flex justify-around items-center">
                    <div className="h-2/3 w-1/4">
                        <img className="w-full h-full rounded-lg" src={product.image} alt={product.title} />
                    </div>
                    <div className="border w-1/2 rounded-lg p-6">
                        <h1 className="text-4xl text-wrap">{product.title}</h1>
                        <h3 className="mt-8 text-lg">{product.description}</h3>
                        <p className="text-zinc-400 text-md">Category: {product.category}</p>
                        <div className="text-zinc-200 mt-4" >
                            <p className="text-md">Rating: <span>{product.rating.rate} / 5</span></p>
                            <p className="text-sm text-zinc-400">{product.rating.count} Reviews</p>
                        </div>
                        
                        <div className="mt-12 flex justify-end">
                           <p className="flex align-top text-2xl">Price:<span className="text-5xl px-3">${product.price}</span></p> 
                        </div>

                        
                    </div>
                    
                </div>
            </div>
    )
}