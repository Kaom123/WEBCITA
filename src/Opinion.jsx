import React from "react";
import './index.css'


const Opinion = ({nombre, mensaje}) => {

    return (
        <div className="bg-white  border-2  border-gray-200 rounded-sm p-3  w-[45vh] h-[18vh]">
           
           <h1 className=" text-xl text-black border-b-2 border-gray-200">{nombre}</h1> 
           <br />
           <p>{mensaje}</p>
        </div>
    )

}

export default Opinion