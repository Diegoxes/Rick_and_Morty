import './App.css';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav.jsx';
import Detail from './components/Detail/detail';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Welcome from './components/Welcome/welcome';
import LandingPage from './views/LandingPage/landingPage';
import Create from './components/Create/create';
import Creados from './components/Creados/creados';
import Favorite from './components/Favorites/Favorite';
import { deleteFavorite } from './Redux/Actions/action';
import { connect } from 'react-redux';

export function App({ deleteFavorite }) {

   
   const [characters, setCharacters] = useState([]);
   //const [contador,setIterador]=useState(0); // cada vez que cambie contador se ejecuta l
   const [unicos, setUnicos] = useState([]);



   const navigate = useNavigate();
   const [access, setAccess] = useState(false);


   function Login(userData) { //userData es user en Form
      const { email, password } = userData;
      const URL = 'http://localhost:3006/user/login';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }


   useEffect(() => {

      !access && navigate("/");
   }, [access, navigate])


   function onClose(id) {

      setCharacters(characters.filter((characters) => {
         return characters.id !== id;
      }));
      setUnicos(unicos.filter((elemento) => {
         return elemento !== id;
      }));

      deleteFavorite(id);

   }
   //response.data.character.name

   
      async function onSearch(id) {

     try{
         const request = await axios(`http://localhost:3006/character/${id}`);
         const {data} = request;

         if(data.name){
            if(!unicos.includes(data.id)){
               setUnicos(prevUnicos=>[...prevUnicos,data.id]);
               setCharacters(oldChars=>[...oldChars,data]);
            }
             
            else{
            alert("No se admiten valores repetidos")
             }
         }
         else{
            alert("No hay elementos con este ID")
          }

     } catch(error){
         console.error("Error en la solicitud API",error);
     }
   }




      /*axios(`http://localhost:3006/character/${id}`).then(({ data }) => {
         console.log(data);
         if (data.name) {
            if (!unicos.includes(data.id)) {

               setUnicos(prevUnicos => [...prevUnicos, data.id]);

               setCharacters(oldChars => [...oldChars, data]);

            } else {
               window.alert("¡No se admiten elementos repetidos!");
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      }).catch((error) => alert(error.response.data.error));
   }*/


   function onSearchRandom(numero) {
      axios(`https://rickandmortyapi.com/api/character/${numero}`).then(({ data }) => {

         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });

   }
   const [renderperson, setRenderPerson] = useState([]);

   function createPerson(personajes) {
      setRenderPerson((antiguos) => [...antiguos, personajes]);//recibo antiguos y quedan todos los antiguos y añado personajes
      // si pongo [...antiguos]

   }


   const location = useLocation();

   return (

      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch} onSearchRandom={onSearchRandom} />}

         <Routes>
            <Route path="/" element={<LandingPage Login={Login} />} />
            <Route path="/home" element={<Home characters={characters} onClose={onClose}
            />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/create" element={<Create createPerson={createPerson} />} />
            <Route path='/creados' element={<Creados renderperson={renderperson} />} />
            <Route path='/favorites' element={<Favorite />} />
         </Routes>

         {/* <button onClick={aumento}>{contador}</button>*/}

      </div>

   );
   }

export function mapDispatchToProps(dispatch) {
   return {
      deleteFavorite:
         function (id) {
            dispatch(deleteFavorite(id))
         }
   }
}

export function mapStateToProps(globalState) {
   return {
      favorites: globalState.favorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)









