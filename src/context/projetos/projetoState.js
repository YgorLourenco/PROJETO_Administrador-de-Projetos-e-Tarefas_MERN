import React, { useReducer } from 'react'
// import { v4 as uuid } from 'uuid';

import projetoContext from './projetoContext'
import projetoReducer from './projetoReducer'
import {FORMULARIO_PROJETO, 
        OBTER_PROJETOS, 
        ADICIONAR_PROJETO, 
        VALIDAR_FORMULARIO, 
        PROJETO_ATUAL, 
        ELIMINAR_PROJETO,
        PROJETO_ERROR} from '../../types'
import clienteAxios from '../../config/axios'

const ProjetoState = props => {

    // const projetos = [
    //     {id: 1, nome:'Loja Virtual'},
    //     {id: 2, nome:'Intranet'},
    //     {id: 3, nome:'Web Design'},
    //     {id: 4, nome:'MERN'},
    // ]

    const initialState = {
        projetos : [],
        formulario : false,
        errorFormulario: false,
        projeto: null,
        mensagem: null,
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
    const obterProjetos = async () => {
        
        try {
            const resultado = await clienteAxios.get('/api/projetos')
            dispatch({
                type: OBTER_PROJETOS,
                payload: resultado.data.projetos,
            })
        } catch (error) {
            const alerta = {
                msg: 'Houve um erro',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROJETO_ERROR,
                payload: alerta
            })
        }
    }

    // Adicionar novo projeto
    const adicionarProjeto = async projeto => {
        
        try {
            const resultado = await clienteAxios.post('/api/projetos', projeto)
            console.log(resultado)

            // Inserir o projeto em um state
            dispatch({
                type: ADICIONAR_PROJETO,
                payload: resultado.data,
            })

        } catch (error) {
            const alerta = {
                msg: 'Houve um erro',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROJETO_ERROR,
                payload: alerta
            })
        }
    }

    //Validar Formulario por erros
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO,
        })
    }

    // Seleciona o projeto que o usuario for clicar
    const projetoAtual = projetoID => {
        dispatch({
            type: PROJETO_ATUAL,
            payload: projetoID,
        })
    }

    // Eliminar um projeto
    const eliminarProjeto = async projetoID => {
        
        try {
            await clienteAxios.delete(`/api/projetos/${projetoID}`)
            dispatch({
                type: ELIMINAR_PROJETO,
                payload: projetoID
            })
        } catch (error) {
            const alerta = {
                msg: 'Houve um erro',
                categoria: 'alerta-error'
            }
            dispatch({
                type: PROJETO_ERROR,
                payload: alerta
            })
        }
    }

    return(
        <projetoContext.Provider
            value={{
                projetos: state.projetos,
                formulario: state.formulario,
                errorFormulario: state.errorFormulario,
                projeto: state.projeto,
                mensagem: state.mensagem,
                mostrarFormulario,
                obterProjetos,
                adicionarProjeto,
                mostrarError,
                projetoAtual,
                eliminarProjeto
            }}
        >
            {props.children}
        </projetoContext.Provider>
    )
}

export default ProjetoState