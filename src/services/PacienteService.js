import fire from "../config/Firebase";

let db = fire.firestore();

const registrarPaciente = (paciente) => {
  return db.collection("pacientes").add({...paciente});
}

const actualizarPaciente = (id,paciente) => {
  return db.collection("pacientes").doc(id).update({...paciente})
}

export {
  registrarPaciente,
  actualizarPaciente
}