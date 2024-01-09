
import { ADDFAVORITE,DELETEFAVORITE,FILTRAR,ORDENAR } from "./type";
import axios from "axios";


export const addFavorite = (character) => {
    const endpoint = 'http://localhost:3006/favorites/';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADDFAVORITE,
             payload: data,
          });
       });
    };
 };


 export const deleteFavorite = (id) => {
    const endpoint = 'http://localhost:3006/favorites/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: DELETEFAVORITE,
             payload: data,
       });
       });
    };
 };


export const order =(orden)=>{
    return{
        type: ORDENAR,
        payload: orden
    }
}

export const filtrar=(gender)=>{
    return{
    type: FILTRAR,
    payload: gender
}
}



