import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './detail.css';

export default function Detail() {
  const { id } = useParams();
  const [pj, setPj] = useState({}); // Inicializamos el estado con un objeto vacío

  useEffect(() => {
    axios(`http://localhost:3006/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setPj(data);
          console.log("data", data);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        window.alert("¡Hubo un error al cargar los datos!");
      });
  }, [id]);

  return (
    <div class="detalle">
      <div className="detalleinfo">
      <h2>Card Description</h2>
      <h3>🧑{" "}{pj.name}</h3>
      <h3>🧟{" "}{pj.status}</h3>
      <h3>🐞{" "}{pj.species}</h3>
      <h3>⚧️{" "}{pj.gender}</h3>
      <h3>🌆{" "}{pj.location && pj.location.name}</h3> {/* Añadir chequeo para evitar errores */}
      <h3>🌍{" "}{pj.origin && pj.origin.name}</h3> {/* Añadir chequeo para evitar errores */}
      </div>
      <div className="imagendetalle">
      <img src={pj.image} alt={id}/>
      </div>
    </div>
  );
  //<img src={pj.image} alt={pj.name}/>
}