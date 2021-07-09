import React from 'react'
// Componentes feitos para habilitar Router no projeto
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/auth/Login'
import NovaConta from './components/auth/NovaConta'
import Projetos from './components/projetos/Projetos'
import ProjetoState from './context/projetos/projetoState'
import TarefaState from './context/tarefas/tarefaState'
import AlertaState from './context/alertas/alertaState'
import AuthState from './context/autenticacion/authState'
import tokenAuth from './config/tokenAuth'
import RotaPrivada from './components/rotas/RotaPrivada'

// Revisar se tem um token
const token = localStorage.getItem('token')
if(token) {
  tokenAuth(token)
}

function App() {

  // console.log(process.env.REACT_APP_BACKEND_URL)

  // Router e para todas as páginas
  // Switch e para páginas especificas
  // Route de cada página do projeto
  // ProjetoState vai servir como Context que vai transfirir diversos props entre todos os componentes
  return (
    <ProjetoState>
      <TarefaState>
        <AlertaState>
          <AuthState>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/nova-conta" component={NovaConta}/>
                    <RotaPrivada exact path="/projetos" component={Projetos}/>
                </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TarefaState>
    </ProjetoState>
  );
}

export default App;
