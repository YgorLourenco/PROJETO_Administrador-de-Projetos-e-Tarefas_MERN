import {TAREFAS_PROJETO, ADICIONAR_TAREFA, VALIDAR_TAREFA} from '../../types'


export default (state, action) => {
    switch(action.type) {
        case TAREFAS_PROJETO:
            return{
                ...state,
                tarefasprojeto: state.tarefas.filter(tarefa => tarefa.projetoID === action.payload)
            }
        case ADICIONAR_TAREFA:
            return{
                ...state,
                tarefas: [...state.tarefas, action.payload],
                errorTarefa: false
            }
        case VALIDAR_TAREFA:
            return{
                ...state,
                errorTarefa: true 
            }
        default:
            return state
    }
}