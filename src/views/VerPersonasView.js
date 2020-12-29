import React, { useState, useEffect } from "react";
import { obtenerPersonas } from "../services/PersonaService";
import {Link} from 'react-router-dom';
export default function VerPersonasView() {
  const [personas, setPersonas] = useState([]);

  const getPersonas = () => {
    obtenerPersonas().then((arrPersonas) => {
      setPersonas([...arrPersonas]);
    });
  };

  useEffect(() => {
    getPersonas();
  }, []);

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Pacientes Registrados</h2>
          {personas.map((per, i) => (
            <div className="card bg-info text-white" key={i}>
              <div className="card-body">
                <h5 className="card-title">{`${per.nombres} ${per.apellidos}`}</h5>
                <ul className="list-group bg-info text-white">
                  <li className="list-group-item bg-info text-white"><small><b>Area:</b>{per.area}</small></li>
                  <li className="list-group-item bg-info text-white"><small><b>DNI:</b>{per.dni}</small></li>
                </ul>
                <Link className="btn btn-primary btn-block btn-sm mt-2" to={`/detalle/${per.id}`}>Ver Detalles</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
