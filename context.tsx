"use client"
import { createContext, ReactNode, useContext, useState } from "react";

type contextypeObj = {
    firstRender : boolean, 
    setFirstRender: (prev: boolean) => void
} 

const myContext = createContext<contextypeObj | undefined>(undefined)


export default function ContextComp({children}: {children: ReactNode}){
    const [firstRender, setFirstRender] = useState(false);


    return (
        <myContext.Provider value={{firstRender, setFirstRender}}>
            {children}
        </myContext.Provider>
    )
} 


export function useMyContext(){
    const context = useContext(myContext)
    if(!context){
        throw new Error("an error occured")
    }
    return context
}