/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export const ProductCard = ({params}) => {
    return (
        <div className="w-56 rounded-lg border">
          <Link
            href={`ssr/product/${params.id}`}
            >
                <div className="flex justify-center items-center flex-col p-6">
                    <div className="w-40 h-40">
                        <img className="w-full h-full rounded-lg" src={params.image} alt={params.title} />
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-bold">{params.title}</h2>
                        <p className="text-md text-zinc-400">${params.price}</p>
                    </div>
                </div>
            </Link>  
        </div>
        
    )
}