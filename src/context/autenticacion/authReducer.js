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
                mensagem: null,
                carregando: false,
            }
            case OBTER_USUARIO: 
            return {
                ...state,
                autenticado: true,
                usuario: action.payload,
                carregando: false,
            }
        case TERMINAR_SESSAO:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
                mensagem: action.payload,
                carregando: false,
            }


        default:
            return state;
    }
}