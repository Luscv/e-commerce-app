"use client"
import { ProductList } from "./components/productList";
import { useRenderingType } from "./contexts/RenderingContext";

export function Home() {
  const {renderingType, setRenderingType} = useRenderingType()


  return (
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl">E-Commerce App</h1>

        {
          renderingType === '' && 
          <div className="text-center">
            Choose Rendering type
            <div className="flex flex- row gap-12 mt-12">
              <button className="bg-blue-700 p-3 rounded-lg" onClick={() => setRenderingType('client')}>Client Side Rendering</button>
              <button className="bg-blue-700 p-3 rounded-lg" onClick={() => setRenderingType('server')}>Server Side Rendering</button>
            </div>
        </div>
        }
        {
          renderingType !== '' && <ProductList/>
        }
        
      </div>
  );
}
