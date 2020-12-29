import React, { useState, useEffect } from "react";
import {
  obtenerPersonaPorId,
  actualizarPersona,
} from "../services/PersonaService";
import { Bar } from "react-chartjs-2";

export default function DetallePersonaView(props) {
  const personaId = props.match.params.id;
  console.log({ props });
  const [persona, setPersona] = useState({});
  const [indicadores, setIndicadores] = useState({
    frecuencia: 0,
    temperatura: 0,
    saturacion: 0,
  });

  const getPersona = () => {
    console.log("gasbijkfsa");
    obtenerPersonaPorId(personaId).then((miPersona) => {
      setPersona(miPersona);
    });
  };

  const resetIndicadores = () => {
    setIndicadores({
      frecuencia: 0,
      temperatura: 0,
      saturacion: 0,
    });
  };

  const updatePersona = () => {
    actualizarPersona(personaId, {
      ...persona,
      frecuencia: [...persona.frecuencia, indicadores.frecuencia],
      temperatura: [...persona.temperatura, indicadores.temperatura],
      saturacion: [...persona.saturacion, indicadores.saturacion],
    }).then(() => {
      resetIndicadores();
      getPersona();
    });
  };

  useEffect(() => {
    getPersona();
  }, []);

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <h2>
            {persona.nombres} {persona.apellidos}
          </h2>
          <table className="table table-bordered mt-2">
            <thead>
              <tr>
                <th scope="col" colspan="2">
                  Datos Generales
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Fecha Nac:</th>
                <td>{persona.fecha_nac}</td>
              </tr>
              <tr>
                <th scope="row">Tipo Sangre</th>
                <td>{persona.tipo_sangre}</td>
              </tr>
              <tr>
                <th scope="row">DNI</th>
                <td>{persona.dni}</td>
              </tr>
              <tr>
                <th scope="col" colspan="2">
                  Seguimiento
                </th>
              </tr>
              <tr>
                {/* grafico */}
                <td colspan="2">
                  <h4>Temperatura</h4>
                  <ul>
                    {persona.temperatura.map(t => (<li>{t}</li>))}
                  </ul>
                  <h4>Saturación</h4>
                  <ul>
                    {persona.saturacion.map(t => (<li>{t}</li>))}
                  </ul>
                  <h4>Frecuencia Respiratorio</h4>
                  <ul>
                    {persona.frecuencia.map(t => (<li>{t}</li>))}
                  </ul>
                </td>
                {/* fin grafico */}
              </tr>
              <tr>
                <th scope="col" colspan="2">
                  Agregar Datos
                </th>
              </tr>
              <tr>
                <td colspan="2">
                  <div className="form-group">
                    <label>Temperatura</label>
                    <input
                      type="number"
                      className="form-control"
                      value={indicadores.temperatura}
                      onChange={(e) => {
                        setIndicadores({
                          ...indicadores,
                          temperatura: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Saturación</label>
                    <input
                      type="number"
                      className="form-control"
                      value={indicadores.saturacion}
                      onChange={(e) => {
                        setIndicadores({
                          ...indicadores,
                          saturacion: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Frecuencia Respiratoria</label>
                    <input
                      type="number"
                      className="form-control"
                      value={indicadores.frecuencia}
                      onChange={(e) => {
                        setIndicadores({
                          ...indicadores,
                          frecuencia: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-sm btn-block"
                    onClick={() => {
                      updatePersona();
                    }}
                  >
                    Añadir Datos
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <form>
            <div className="form-group">
              <label>
                Título
              </label>
              <input type="text" className="form-control" placeholder="Ej.: Análisis..."/>
            </div>
            <div className="form-group">
              <label>
                Descripción
              </label>
              <textarea type="text" className="form-control"></textarea>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
}
