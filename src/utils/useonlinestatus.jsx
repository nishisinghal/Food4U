import { useState , useEffect } from "react";
const useonlinestatus=()=>{

    const [onlinestatus,setstatus]=useState(true);
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
           setstatus(false)
        })
        window.addEventListener("online", ()=>{
            setstatus(true)
         })
    })
    return onlinestatus;

}
export default useonlinestatus;