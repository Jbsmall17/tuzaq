"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

type contextypeObj = {
    firstRender : boolean, 
    setFirstRender: (prev: boolean) => void,
    usersStep: number,
    setUsersStep: Dispatch<SetStateAction<number>>
} 

const myContext = createContext<contextypeObj | undefined>(undefined)


export default function ContextComp({children}: {children: ReactNode}){
    const [firstRender, setFirstRender] = useState(false);
    const [usersStep, setUsersStep] = useState(0)

    return (
        <myContext.Provider value={{firstRender, setFirstRender, usersStep, setUsersStep}}>
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