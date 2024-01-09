import "./SearchBar.css";

import { useState,useEffect } from "react";


export default function SearchBar(props) {
   const{onSearch,onSearchRandom} = props;

   const [id,setID]=useState("");
   

   useEffect(()=>{
      onRandom();
   },[])
   
   
   function handleChange(evento) {
      setID(evento.target.value);

   }
   const [numero,setnumero]=useState("");

   function onRandom () {
      const aleatorio = Math.random();
      setnumero(()=>Math.floor(aleatorio*(825-1+1)+1))
      
     }
   return (
      <div class="searchbar">
         <input placeholder="Ingresa el ID"type='text' class="inputagregar"
         onChange={handleChange}
         value={id} />
         
         <button class="botonagregar" onClick={() => { onSearch(id)  }}>Agregar</button>
         <button class="random" onClick={() => {onRandom();
          onSearchRandom(numero);
          
               
                     }}>Agregar Random</button>
                     

      </div>
   );
}
