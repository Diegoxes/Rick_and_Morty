import React from "react";

import "./favorites.css";
import { connect, useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { order, filtrar } from "../../Redux/Actions/action";



export function Favorite() {



    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    const filtro = (evento) => {
        dispatch(filtrar(evento.target.value))
    }

    const ordenar = (evento) => {
        dispatch(order(evento.target.value))

    }





    return (

        <div>
            <div className="selects">
                <select className="select1" onChange={ordenar}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>

                <select className="select2" onChange={filtro}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>


                </select>
            </div>
            <div className="cartasfav">
                {favorites.map((elemento, index) => (
                    <div key={index}>
                        <Card
                            name={elemento.name}
                            status={elemento.state}
                            species={elemento.species}
                            image={elemento.image}
                            id={elemento.id}

                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export function mapStateToProps(state) {
    return {
        favorites: state.favorites
    }
}



export default connect(mapStateToProps, null)(Favorite);