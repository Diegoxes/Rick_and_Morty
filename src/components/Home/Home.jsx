import React from "react";
import Cards from "../Cards/Cards";

export default function Home(props){
    
    return <div>
        <span>
        <Cards characters={props.characters} onClose={props.onClose} addFavorites={props.addFavorites}/>
        </span>
    </div>
}