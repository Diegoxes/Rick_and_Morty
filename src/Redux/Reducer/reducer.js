import { ADDFAVORITE, DELETEFAVORITE, FILTRAR, ORDENAR } from "../Actions/type"

const stateGlobalInitial = {
   favorites: [],
   allFavorites: [],
   characters: [],
   access: false
}



export default function favoreducer(state = stateGlobalInitial, action) {
   switch (action.type) {
      //state es el estado actual
      //stateGlobalInitial es el estado inicial

      case ADDFAVORITE:
         return { ...state, favorites: action.payload, allFavorites: action.payload };
         /*const copy = [...state.allFavorites, action.payload]
         return {
            ...state, favorites: copy, allFavorites: [...copy]
         }*/
      case DELETEFAVORITE:

         return { ...state,favorites: action.payload,allFavorites:action.payload };
            /*
         return {
            ...state, favorites: state.favorites.filter((elemento) => {
               return elemento.id !== action.payload 
            }) ,  allFavorites: state.allFavorites.filter((element)=>{
               return element.id !== action.payload
            })

         }*/

      case FILTRAR:
            console.log("soy filtrarrrr",state.allFavorites);
         return {
               ...state,favorites:state.allFavorites.filter((elemento)=>{
                  return elemento.gender === action.payload
               })
         }

      case ORDENAR:

      let copia=[...state.favorites];
      copia.sort((a,b)=>{
         if(action.payload === "A"){
            if(a.id>b.id) return 1 //cuando primer parametro es mayor, el 1 toma como booleano
            if(a.id<b.id) return -1
            return 0 //iguales
         }else{
            if(a.id>b.id) return -1
            if(b.id>a.id) return 1
            return 0
         }
      })
         

         return {
               ...state,
               favorites: copia
         }




      default: return {
         ...state
      }
   }

}