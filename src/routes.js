import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';
import AgregarPersonaView from './views/AgregarPersonaView';
import VerPersonasView from './views/VerPersonasView';
import DetallePersonaView from './views/DetallePersonaView';

export default function routes() {
  return (
    <Fragment>
      <Route exact path="/" component={VerPersonasView}/>
      <Route exact path="/agregar" component={AgregarPersonaView}/>
      <Route exact path="/detalle/:id" component={DetallePersonaView}/>
    </Fragment>
  )
}
