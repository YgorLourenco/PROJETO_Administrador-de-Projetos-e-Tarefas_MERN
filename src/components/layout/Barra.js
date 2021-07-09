import React,{useContext, useEffect} from 'react'
import AuthContext from '../../context/autenticacion/authContext'

const Barra = () => {

    // Extrair a informação de autenticação
    const authContext = useContext(AuthContext)
    const { usuario, usuarioAutenticado, terminarSessao } = authContext

    useEffect(() => {
        usuarioAutenticado()
    // eslint-disable-next-line
    }, [])

    return ( 
        <header className='app-header'>
            {usuario ? <p className='nome-usuario'> Olá <span>{usuario.nome}</span> </p>  : null}
            
            <nav className='nav-principal'>
                <button
                    className='btn btn-blank encerrar-sessao'
                    onClick={() => terminarSessao()}
                >Encerrar Sessão</button>
            </nav>
        </header>
     );
}
 
export default Barra;