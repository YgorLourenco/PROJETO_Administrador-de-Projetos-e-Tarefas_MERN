import React from 'react'
// Componentes feitos para habilitar Router no projeto
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/auth/Login'
import NovaConta from './components/auth/NovaConta'
import Projetos from './components/projetos/Projetos'

function App() {

  // Router e para todas as páginas
  // Switch e para páginas especificas
  // Route de cada página do projeto
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/nova-conta" component={NovaConta}/>
            <Route exact path="/projetos" component={Projetos}/>
        </Switch>
    </Router>
  );
}

export default App;
