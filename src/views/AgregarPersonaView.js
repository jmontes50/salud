import React, { useState } from "react";
import { crearPersona } from "../services/PersonaService";
import Areas from "../config/Areas";
import Swal from "sweetalert2";

export default function AgregarPersonaView() {
  const [persona, setPersona] = useState({
    nombres: "",
    apellidos: "",
    dni: "",
    fecha_nac: "",
    tipo_sangre: "",
    area: "",
    temperatura: [],
    saturacion:[],
    frecuencia:[],
    historial: [],
  });

  const actualizarValue = (e) => {
    setPersona({ ...persona, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    crearPersona(persona)
      .then((nuevaPersona) => {
        Swal.fire({
          icon: "success",
          title: "Paciente Registrado!",
          showConfirmation: false,
          timer: 2000,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Agregar Paciente</h2>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="form-group">
              <label>Nombres:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese Nombres"
                name="nombres"
                value={persona.nombres}
                onChange={(e) => {
                  actualizarValue(e);
                }}
              />
            </div>
            <div className="form-group">
              <label>Apellidos:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese Apellidos"
                name="apellidos"
                value={persona.apellidos}
                onChange={(e) => {
                  actualizarValue(e);
                }}
              />
            </div>
            <div className="form-group">
              <label>DNI:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese DNI"
                name="dni"
                value={persona.dni}
                onChange={(e) => {
                  actualizarValue(e);
                }}
              />
            </div>
            <div className="form-group">
              <label>Fecha de Nacimiento:</label>
              <input
                type="date"
                className="form-control"
                placeholder="Ingrese Fecha de Nacimiento"
                name="fecha_nac"
                value={persona.fecha_nac}
                onChange={(e) => {
                  actualizarValue(e);
                }}
              />
            </div>
            <div className="form-group">
              <label>Tipo de Sangre:</label>
              <select
                className="form-control"
                name="tipo_sangre"
                value={persona.tipo_sangre}
                onChange={(e) => {
                  actualizarValue(e);
                }}
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
              </select>
            </div>
            <div className="form-group">
              <label>Área</label>
              <select
                className="form-control"
                name="area"
                value={persona.area}
                onChange={(e) => {
                  actualizarValue(e);
                }}
              >
                {Areas.map((area, i) => (
                  <option key={i} value={area.nombre}>
                    {area.nombre}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block font-weight-bold"
            >
              Crear Persona
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
