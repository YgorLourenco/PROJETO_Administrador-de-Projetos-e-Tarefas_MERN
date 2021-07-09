import {TAREFAS_PROJETO, ADICIONAR_TAREFA, VALIDAR_TAREFA, ELIMINAR_TAREFA, ESTADO_TAREFA, TAREFA_ATUAL, ATUALIZAR_TAREFA, LIMPAR_TAREFA} from '../../types'


export default (state, action) => {
    switch(action.type) {
        case TAREFAS_PROJETO:
            return{
                ...state,
                tarefasprojeto: action.payload
            }
        case ADICIONAR_TAREFA:
            return{
                ...state,
                tarefasprojeto: [action.payload, ...state.tarefasprojeto],
                errorTarefa: false
            }
        case VALIDAR_TAREFA:
            return{
                ...state,
                errorTarefa: true 
            }
        case ELIMINAR_TAREFA:
            return{
                ...state,
                tarefasprojeto: state.tarefasprojeto.filter(tarefa => tarefa.id !== action.payload)
            }
        case ATUALIZAR_TAREFA:
        case ESTADO_TAREFA:
            return{
                ...state,
                tarefasprojeto: state.tarefasprojeto.map(tarefa => tarefa.id === action.payload.id ? action.payload : tarefa)

            }
        case TAREFA_ATUAL:
            return{
                ...state,
                tarefaSelecionada: action.payload
            }
        case LIMPAR_TAREFA:
            return{
                ...state,
                tarefaSelecionada: null
            }
        default:
            return state
    }
}