import React from "react";
import "./creados.css";

export default function Creados(props){
    const {renderperson}=props;
    
    return(
        <div className="papacreados">
            
            {renderperson.map((elemento,index)=>(
                <div key={index} className="creados">
                <h2>🧑:{"  "}{elemento.nombre}</h2>
                <h2>🧟:{"  "}{elemento.specie}</h2>
                <h2>⚧️:{"  "}{elemento.gender}</h2>
                <h2>🌆:{"  "}{elemento.ciudad}</h2>
                <h2>🌍:{"  "}{elemento.planeta}</h2>
                <img src={elemento.imagen} alt={`${index}`} /> 
                </div>

            ))}
            


        </div>
    )
}