
import './Card.css'
import { Link } from 'react-router-dom';
import { addFavorite,deleteFavorite } from '../../Redux/Actions/action';
import { connect } from 'react-redux';
import {useState,useEffect} from "react";



 export function Card({myFavorites,id,name,status,gender,species,image,onClose,deleteFavorite,addFavorite}) {
//Card(props) hare un cambio para ya no tener que hacer character.id
//Le paso id directamente desde cards , pero tendria si hago eso id,props.id,props.character
//por ello debo pasar o bien props o bien {id,character,onClose}
 //  const {character,onClose}=props;
 //<h2>Origin:{character.origin.name}</h2>
 //<h2>Gender:{character.gender}</h2>||

const[ isFav , setIsFav]=useState(false)

function handleClick(){
   if(isFav){
      
      setIsFav(false)
      deleteFavorite(id)
      
   }else{
      setIsFav(true)
      
      addFavorite({id,name,status,species,image,gender})
   }
   

}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) { //  compara al id de characters
         setIsFav(true);
      }
   });
}, [myFavorites,id]);

   return (
      <div className="cartas">
         <div>

         {
            onClose?<button onClick={()=>onClose(id)}>❌</button>:null
         }
          {
            isFav ? (
      <button onClick={handleClick}>❤️</button>
            ) : (
      <button onClick={handleClick}>🤍</button>
             )
         }
         
         
         <h2>Name:{name}</h2>
         <h2>Status:{status}</h2>
         <h2>Species:{species}</h2>
         <h2>Genero:{gender}</h2>
         
         
         <Link to={`/detail/${id}`}>
         <img src={image} alt='' /> 
         </Link>
        
         </div>
      </div>
   );
}

export function mapDispacthToProps(dispatch){
   return{
      addFavorite: function(character){
         dispatch(addFavorite(character))
      },

      deleteFavorite:  function(id){
         dispatch(deleteFavorite(id))
      }
   }
}


export function mapStateToProps(globalState){
   return{
      myFavorites:globalState.favorites
   }
}
export default connect(mapStateToProps,mapDispacthToProps)(Card)


