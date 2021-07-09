import React, {useContext, useEffect} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthContext from '../../context/autenticacion/authContext'

const RotaPrivada = ({component: Component, ...props}) => {
    
    const authContext = useContext(AuthContext)
    const {autenticado, carregando, usuarioAutenticado} = authContext

    useEffect(() => {
        usuarioAutenticado()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <Route {...props} render={props => !autenticado && !carregando ? (
            <Redirect to='/' />
        ) : (
            <Component {...props} />
        )} />
    )
}
export default RotaPrivada