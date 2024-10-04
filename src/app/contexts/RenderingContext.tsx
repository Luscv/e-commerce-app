import { createContext, ReactNode, useContext, useState } from "react"

type RenderingTypeContextType = {
    renderingType: string
    setRenderingType: (type: string) => void
}

const RenderingTypeContext = createContext<RenderingTypeContextType | undefined>(undefined)

export const useRenderingType = () => {
    const context = useContext(RenderingTypeContext)
    if(!context) {
        throw new Error("useRenderingType must be used within a RenderingTypeProvider")
    }
    return context
}


export const RenderingTypeProvider = ({children}: {children: ReactNode}) => {
    const [renderingType, setRenderingType] = useState<string>("")

    return (
        <RenderingTypeContext.Provider value={{renderingType, setRenderingType}}>
            {children}
        </RenderingTypeContext.Provider>
    )
}