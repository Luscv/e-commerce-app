import Link from "next/link"

export const ProductCard = ({params}) => {
    return (
        <Link
            href={`ssr/product/${params.id}`}
        >
            <div className="w-56 flex flex-col rounded-lg border p-6">
                <div className="w-40 h-40">
                    <img className="w-full h-full rounded-lg" src={params.image} alt={params.title} />
                </div>
                <div className="mt-4">
                    <h2 className="text-lg font-bold">{params.title}</h2>
                    <p className="text-sm">${params.price}</p>
                </div>
            </div>
        </Link>
    )
}