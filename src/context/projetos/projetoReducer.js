import {FORMULARIO_PROJETO, OBTER_PROJETOS} from '../../types'

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
        default:
            return state;
    }
}