import React, { useReducer } from 'react'

import projetoContext from './projetoContext'
import projetoReducer from './projetoReducer'
import {FORMULARIO_PROJETO, OBTER_PROJETOS} from '../../types'



const ProjetoState = props => {

    const projetos = [
        {id: 1, nome:'Loja Virtual'},
        {id: 2, nome:'Intranet'},
        {id: 3, nome:'Web Design'},
        {id: 4, nome:'MERN'},
    ]

    const initialState = {
        projetos : [],
        formulario : false
    }

    // Dispatch para executar as ações
    // useReducer e usado quando se precisa de multiplos estados de uma vez só
    const [state, dispatch] = useReducer(projetoReducer, initialState)

    // Serie de Funções para o CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROJETO,
        })
    }

    // Obter os projetos
    const obterProjetos = () => {
        dispatch({
            type: OBTER_PROJETOS,
            payload: projetos,
        })
    }

    return(
        <projetoContext.Provider
            value={{
                projetos: state.projetos,
                formulario: state.formulario,
                mostrarFormulario,
                obterProjetos
            }}
        >
            {props.children}
        </projetoContext.Provider>
    )
}

export default ProjetoState