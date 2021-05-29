import React, {useReducer} from 'react'
import TarefaContext from './tarefaContext'
import TarefaReducer from './tarefaReducer'

const TarefaState = props => {

    const initialState = {
        tarefas: [
            {nome:'Escolher plataforma', estado:true, projetoID: 1},
            {nome:'Escolher Cores', estado:false, projetoID: 2},
            {nome:'Escolher Plataformas de pagamento', estado:false, projetoID: 3},
            {nome:'Escolher Hosting', estado:true, projetoID: 4},
            {nome:'Escolher plataforma', estado:true, projetoID: 1},
            {nome:'Escolher Cores', estado:false, projetoID: 2},
            {nome:'Escolher Plataformas de pagamento', estado:false, projetoID: 3},
            {nome:'Escolher plataforma', estado:true, projetoID: 1},
            {nome:'Escolher Cores', estado:false, projetoID: 2},
            {nome:'Escolher Plataformas de pagamento', estado:false, projetoID: 3},
            {nome:'Escolher plataforma', estado:true, projetoID: 1},
            {nome:'Escolher Cores', estado:false, projetoID: 2},
            {nome:'Escolher Plataformas de pagamento', estado:false, projetoID: 3},
        ],
    }

    // Criar dispatch e state
    const [state, dispatch] = useReducer(TarefaReducer, initialState);

    return(
        <TarefaContext.Provider
            value={{
                tarefas: state.tarefas,
            }}
        >
            {props.children}
        </TarefaContext.Provider>
    )
}

export default TarefaState;