import {REGISTRO_SUCEDIDO,
        REGISTRO_ERROR,
        OBTER_USUARIO,
        LOGIN_SUCEDIDO,
        LOGIN_ERROR,
        TERMINAR_SESSAO
} from '../../types'

export default (state, action) => {
    switch(action.type) {

        case REGISTRO_SUCEDIDO:
        case LOGIN_SUCEDIDO:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                autenticado: true,
                mensagem: null
            }
            case OBTER_USUARIO: 
            return {
                ...state,
                usuario: action.payload, 
            }

        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                mensagem: action.payload
            }


        default:
            return state;
    }
}