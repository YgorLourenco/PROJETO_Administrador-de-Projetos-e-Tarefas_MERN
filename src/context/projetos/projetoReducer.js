import {FORMULARIO_PROJETO, OBTER_PROJETOS, ADICIONAR_PROJETO, VALIDAR_FORMULARIO, PROJETO_ATUAL, ELIMINAR_PROJETO} from '../../types'

export default (state, action) => {
    switch(action.type) {
        case FORMULARIO_PROJETO:
            return{
                ...state,
                formulario: true,
            }
        case OBTER_PROJETOS:
            return{
                ...state,
                projetos: action.payload,
            }
        case ADICIONAR_PROJETO:
            return{
                ...state,
                projetos:[...state.projetos, action.payload],
                formulario: false,
                errorFormulario: false,
            }
        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorFormulario: true,
            }
        case PROJETO_ATUAL:
            return{
                ...state,
                projeto: state.projetos.filter(projeto => projeto.id === action.payload)
            }
        case ELIMINAR_PROJETO:
            return{
                ...state,
                projetos: state.projetos.filter(projeto => projeto.id !== action.payload),
                projeto: null
            }
        default:
            return state;
    }
}