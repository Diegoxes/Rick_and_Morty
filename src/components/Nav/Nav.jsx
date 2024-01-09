import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Nav.css";



export default function Nav(props) {
  const { onSearch, onSearchRandom } = props;

  return (
    <div className="navbar">
      
      <Link className="link" to="/welcome" >Welcome</Link>
      <Link className="link"to="/detail" >Detail</Link>
      <Link className="link"to="/home" >Home</Link>
      <Link className="link"to="/create" >Crea tu Personaje</Link>
      <Link className="link"to="/creados" >Personajes Creados</Link>
      <Link className="link"to="/favorites" >Favoritos</Link>
      <SearchBar onSearch={onSearch} onSearchRandom={onSearchRandom} />

    </div>)
}