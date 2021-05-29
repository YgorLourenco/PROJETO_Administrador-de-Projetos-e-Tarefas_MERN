import React,{useContext} from 'react'
import projetoContext from '../../context/projetos/projetoContext'

const Projeto = ({projeto}) => {

    // Obter o state de projetos
    // Vai passar os props do projetoContext
    const projetosContext = useContext(projetoContext)
    const { projetoAtual } = projetosContext

    return ( 
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={() => projetoAtual(projeto.id)}
            >{projeto.nome}</button>
        </li>
     );
}
 
export default Projeto;