import React, {useReducer} from 'react'
import TarefaContext from './tarefaContext'
import TarefaReducer from './tarefaReducer'
// import { v4 as uuid } from 'uuid';
import clienteAxios from '../../config/axios'

import {TAREFAS_PROJETO, ADICIONAR_TAREFA, VALIDAR_TAREFA, ELIMINAR_TAREFA, ESTADO_TAREFA, TAREFA_ATUAL, ATUALIZAR_TAREFA, LIMPAR_TAREFA} from '../../types'

const TarefaState = props => {

    const initialState = {
        // tarefas: [
        //     {id: 1 , nome:'Escolher plataforma', estado:true, projetoID: 1},
        //     {id: 2 , nome:'Escolher Cores', estado:false, projetoID: 2},
        //     {id: 3 , nome:'Escolher Plataformas de pagamento', estado:false, projetoID: 3},
        //     {id: 4 , nome:'Escolher Hosting', estado:true, projetoID: 4},
        //     {id: 5 , nome:'Escolher plataforma', estado:true, projetoID: 1},
        //     {id: 6 , nome:'Escolher Cores', estado:false, projetoID: 2},
        //     {id: 7 , nome:'Escolher Plataformas de pagamento', estado:false, projetoID: 3},
        //     {id: 8 , nome:'Escolher plataforma', estado:true, projetoID: 1},
        //     {id: 9 , nome:'Escolher Cores', estado:false, projetoID: 2},
        //     {id: 10 , nome:'Escolher Plataformas de pagamento', estado:false, projetoID: 3},
        //     {id: 11, nome:'Escolher plataforma', estado:true, projetoID: 1},
        //     {id: 12, nome:'Escolher Cores', estado:false, projetoID: 2},
        //     {id: 13, nome:'Escolher Plataformas de pagamento', estado:false, projetoID: 3},
        // ],
        tarefasprojeto: [],
        errorTarefa: false,
        tarefaSelecionada: null
    }

    // Criar dispatch e state
    const [state, dispatch] = useReducer(TarefaReducer, initialState);

    // Criar as funções


    // Obter as tarefas de um projeto
    const obterTarefas = async projeto => {
        
        console.log(projeto)
        
        try {
            const resultado = await clienteAxios.get('/api/tarefas', {params:{projeto}})
            console.log(resultado)
            dispatch({
                type: TAREFAS_PROJETO,
                payload: resultado.data.tarefas
                // payload: projetoID
            })
        } catch (error) {
            
        }
    }

    // Adicionar uma tarefa a um projeto selecionado
    const adicionarTarefa = async tarefa => {
        // tarefa.id = uuid
        console.log(tarefa)
        try {
            const resultado = await clienteAxios.post('/api/tarefas',tarefa)
            console.log(resultado)
            dispatch({
                type: ADICIONAR_TAREFA,
                payload: tarefa
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Validar e mostrar um error em caso de que for necessário
    const validarTarefa = () => {
        dispatch({
            type: VALIDAR_TAREFA
        })
    }

    // Eliminar tarefa por sua ID
    const eliminarTarefa = id => {
        dispatch({
            type: ELIMINAR_TAREFA,
            payload:id
        })
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

    // Mudar o estado de cada tarefa
    const mudarEstadoTarefa = tarefa => {
        dispatch({
            type: ESTADO_TAREFA,
            payload: tarefa,
        })
    }

    // Extrair uma tarefa para edição
    const guardarTarefaAtual = tarefa => {
        dispatch({
            type: TAREFA_ATUAL,
            payload: tarefa
        })
    }

    // Edita e modifica uma tarefa
    const atualizarTarefa = tarefa => {
        dispatch({
            type: ATUALIZAR_TAREFA,
            payload: tarefa
        })
    }

    // Eliminar a tarefa selecionada
    const limparTarefa = () => {
        dispatch({
            type: LIMPAR_TAREFA
        })
    }

    return(
        <TarefaContext.Provider
            value={{
                // tarefas: state.tarefas,
                tarefasprojeto : state.tarefasprojeto,
                errorTarefa: state.errorTarefa,
                tarefaSelecionada: state.tarefaSelecionada,
                obterTarefas,
                adicionarTarefa,
                validarTarefa,
                eliminarTarefa,
                mudarEstadoTarefa,
                guardarTarefaAtual,
                atualizarTarefa,
                limparTarefa
            }}
        >
            {props.children}
        </TarefaContext.Provider>
    )
}

export default TarefaState;