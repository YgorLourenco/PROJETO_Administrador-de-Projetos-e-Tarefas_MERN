import React,{useReducer} from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'

import {
    REGISTRO_SUCEDIDO,
    REGISTRO_ERROR,
    OBTER_USUARIO,
    LOGIN_SUCEDIDO,
    LOGIN_ERROR,
    TERMINAR_SESSAO
} from '../../types'

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensagem: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    // As funções
    const registrarUsuario = async dados => {
        try {
            const resposta = await clienteAxios.post('/api/usuarios', dados)
            console.log(resposta.data)

            dispatch({
                type: REGISTRO_SUCEDIDO,
                payload: resposta.data
            })

            //Obter o usuario
            usuarioAutenticado()

        } catch (error) {
            console.log(error.response.data.msg)
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    // Retorna o usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token')
        if(token) {
            tokenAuth(token)
        }

        try {
            const resposta = await clienteAxios.get('/api/auth')
            // console.log(resposta)
            dispatch({
                type: OBTER_USUARIO,
                payload: resposta.data.usuario
            });
        } catch (error) {
            console.log(error.response)
            dispatch({
                type: LOGIN_ERROR
            })
            
        }
    }

    // Quando o usuário inicia a sessão
    const iniciarSessao = async dados => {
        try {
            const resposta = await clienteAxios.post('/api/auth', dados)
            
            dispatch({
                type: LOGIN_SUCEDIDO,
                payload: resposta.data
            })

            // Obter o usuario
            usuarioAutenticado()

        } catch (error) {
            console.log(error.response.data.msg)
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensagem: state.mensagem,
                registrarUsuario,
                iniciarSessao
            }}
        >{props.children}

        </AuthContext.Provider>
    )
}
export default AuthState