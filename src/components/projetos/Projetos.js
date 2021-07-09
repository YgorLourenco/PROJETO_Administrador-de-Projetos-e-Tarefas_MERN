import React, {useContext, useEffect} from 'react'
import Sidebar from '../layout/Sidebar'
import Barra from '../layout/Barra'
import FormTarefa from '../tarefas/FormTarefa'
import ListaTarefas from '../tarefas/ListaTarefas'
import AuthContext from '../../context/autenticacion/authContext'

const Projetos = () => {

    // Extrair a informação de autenticação
    const authContext = useContext(AuthContext)
    const { usuarioAutenticado } = authContext

    useEffect(() => {
        usuarioAutenticado()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <div className='container-app'>
            <Sidebar />
            <div className='sessao-principal'>
                <Barra />
                <main>
                    <FormTarefa />
                    <div className='container-tarefas'>
                        <ListaTarefas />
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Projetos;