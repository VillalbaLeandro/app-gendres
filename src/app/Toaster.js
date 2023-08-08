'use client'
import dynamic from "next/dynamic";
//este codigo indica que este componente es de front
export const Toaster = dynamic(async()=>{
    const {Toaster} = await import("react-hot-toast")
    return Toaster;
},
{
    ssr: false,
}
)