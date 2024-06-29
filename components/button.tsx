import React from "react";

interface buttonObj {
    text:string
}


export const Button= (props: buttonObj)=>{

    const text= props.text;

    return(
        <button className="p-6 bg-purple-600 text-white font-bold text-xl rounded-2xl">
            {text}
        </button>



    )
}