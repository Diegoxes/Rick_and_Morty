import {React,useState} from "react";
import "./create.css";

export default function Create(props){
    const {createPerson}=props;

 const[personajes,setCreate]=useState({nombre:"",
 specie:"",gender:"",ciudad:"",planeta:"",imagen:"",
});



function handleSubmit(event) {
    event.preventDefault();
    
    
    createPerson(personajes);
  
  }


function handleChange(event){
    setCreate({
        ...personajes,
        [event.target.name]:event.target.value,
        })     
  }



    return(
        <div className="dadform">
            <form style={{color:"white"}} className="form" onSubmit={handleSubmit}>
                <h2>Create New Character</h2>

                <label>🧑Name</label>
                <input 
                onChange={handleChange}
                value={personajes.nombre}
                type="text" 
                name="nombre"
                placeholder="Name..."/>

                <label>🐞Species</label>

                <input  
                onChange={handleChange}
                value={personajes.specie}
                type="text" 
                name="specie" 
                placeholder="Species..." />

                <label>⚧️Gender</label>
                <input 
                onChange={handleChange}
                value={personajes.gender}
                type="text" 
                name="gender" 
                placeholder="Gender..."/>

                <label>🌆Ciudad</label>
                <input 
                onChange={handleChange}
                value={personajes.ciudad}
                type="text" 
                name="ciudad" 
                placeholder="Ciudad..."/>

                <label>🌍Planeta</label>
                <input 
                onChange={handleChange}
                value={personajes.planeta}
                type="text" 
                name="planeta" 
                placeholder="Planeta..."/>

                <label>🤳Imagen</label>
                <input 
                onChange={handleChange}
                value={personajes.imagen}
                type="text"
                name="imagen"
                placeholder="Url Img..."
                
                
                
                />

              { /* Mala practica lo correcto es usar input type submit <button style={{marginTop:"15px"}}>Crear</button>*/}
                <button style={{marginTop:"15px"}}>Enviar</button>

            </form>

        </div>
    )
}