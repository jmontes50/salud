import fire from "../config/Firebase";

const db = fire.firestore();

const crearPersona = (persona) => {
  return db.collection("personas").add({...persona})
}

const obtenerPersonas = () => {
  return new Promise((resolve, reject) => {
    let consulta =  db.collection("personas");
    consulta.onSnapshot((respuesta) => {
      let personas = respuesta.docs.map( persona => {
        let objPersona = {
          ...persona.data(),
          id:persona.id
        }
        return objPersona	
      })
      resolve(personas)
    })
  })
}

const obtenerPersonaPorId = (id) => {
  return new Promise ((resolve, reject) => {
    let consulta = db.collection("personas").doc(id);
    consulta.onSnapshot((respuesta) => {
      console.log(respuesta.data())
      resolve(respuesta.data())
    })
  })
}

const actualizarPersona = (id, persona) => {
    return db.collection("personas").doc(id).update({...persona})
}

export {
  crearPersona,
  obtenerPersonaPorId,
  obtenerPersonas,
  actualizarPersona
}