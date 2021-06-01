import React, {useReducer} from 'react'
import TarefaContext from './tarefaContext'
import TarefaReducer from './tarefaReducer'

import {TAREFAS_PROJETO, ADICIONAR_TAREFA, VALIDAR_TAREFA} from '../../types'

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
        tarefasprojeto: null,
        errorTarefa: false
    }

    // Criar dispatch e state
    const [state, dispatch] = useReducer(TarefaReducer, initialState);

    // Criar as funções


    // Obter as tarefas de um projeto
    const obterTarefas = projetoID => {
        dispatch({
            type: TAREFAS_PROJETO,
            payload: projetoID
        })
    }

    // Adicionar uma tarefa a um projeto selecionado
    const adicionarTarefa = tarefa => {
        dispatch({
            type: ADICIONAR_TAREFA,
            payload: tarefa
        })
    }

    // Validar e mostrar um error em caso de que for necessário
    const validarTarefa = () => {
        dispatch({
            type: VALIDAR_TAREFA
        })
    }

    return(
        <TarefaContext.Provider
            value={{
                tarefas: state.tarefas,
                tarefasprojeto : state.tarefasprojeto,
                errorTarefa: state.errorTarefa,
                obterTarefas,
                adicionarTarefa,
                validarTarefa
            }}
        >
            {props.children}
        </TarefaContext.Provider>
    )
}

export default TarefaState;