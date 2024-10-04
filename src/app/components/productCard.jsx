/* eslint-disable @next/next/no-img-element */
"use client"
import { useRenderingType } from "../contexts/RenderingContext";
import { useRouter } from "next/navigation"


export const ProductCard = ({product}) => {
    const router = useRouter()
    const {renderingType} = useRenderingType()

    const handleClick = () => {
        if(renderingType === 'client'){
            router.push(`/csr/product/${product.id}`)
        } else if( renderingType === 'server'){
            router.push(`/ssr/product/${product.id}`)
        }
    }

    return (
        <div onClick={handleClick} className="w-56 rounded-lg border">
                <div className="flex justify-center items-center flex-col p-6">
                    <div className="w-40 h-40">
                        <img className="w-full h-full rounded-lg" src={product.image} alt={product.title} />
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-bold">{product.title}</h2>
                        <p className="text-md text-zinc-400">${product.price}</p>
                    </div>
                </div> 
        </div>
        
    )
}