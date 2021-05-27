import React from 'react'
import Sidebar from '../layout/Sidebar'
import Barra from '../layout/Barra'
import FormTarefa from '../tarefas/FormTarefa'
import ListaTarefas from '../tarefas/ListaTarefas'

const Projetos = () => {
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