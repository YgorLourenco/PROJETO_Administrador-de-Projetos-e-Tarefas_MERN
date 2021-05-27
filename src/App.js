import React from 'react'
// Componentes feitos para habilitar Router no projeto
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/auth/Login'
import NovaConta from './components/auth/NovaConta'
import Projetos from './components/projetos/Projetos'
import ProjetoState from './context/projetos/projetoState'

function App() {

  // Router e para todas as páginas
  // Switch e para páginas especificas
  // Route de cada página do projeto
  // ProjetoState vai servir como Context que vai transfirir diversos props entre todos os componentes
  return (
    <ProjetoState>
      <Router>
          <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/nova-conta" component={NovaConta}/>
              <Route exact path="/projetos" component={Projetos}/>
          </Switch>
      </Router>
    </ProjetoState>
  );
}

export default App;
