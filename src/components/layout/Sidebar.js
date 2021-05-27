import React from 'react'
import NovoProjeto from '../projetos/NovoProjeto'

const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN<span>ProjetosTarefas</span></h1>

            <NovoProjeto />

            <div className='projetos'>
                <h2>Seus projetos</h2>
            </div>
        </aside>
     );
}
 
export default Sidebar;