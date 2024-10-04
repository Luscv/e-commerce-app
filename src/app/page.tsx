"use client"
import { RenderingTypeProvider } from "./contexts/RenderingContext"
import { Home } from "./main"

export default function Main() {
    return (
        <RenderingTypeProvider>
            <Home/>
        </RenderingTypeProvider>
        
    )
}