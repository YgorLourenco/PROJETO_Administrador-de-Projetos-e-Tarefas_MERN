import React,{useContext} from 'react'
import projetoContext from '../../context/projetos/projetoContext'
import tarefaContext from '../../context/tarefas/tarefaContext'

const Projeto = ({projeto}) => {

    // Obter o state de projetos
    // Vai passar os props do projetoContext
    const projetosContext = useContext(projetoContext)
    const { projetoAtual } = projetosContext

    // Obter a função do context de tarefa
    const tarefasContext = useContext(tarefaContext)
    const {obterTarefas} = tarefasContext

    // Função para agregar o projeto atual
    const selecionarProjeto = id => {
        projetoAtual(id) // Fixar um projeto atual
        obterTarefas(id) // Filtar as tarefas quando se de click
    }

    return ( 
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={() => selecionarProjeto(projeto._id)}
            >{projeto.nome}</button>
        </li>
     );
}
 
export default Projeto;