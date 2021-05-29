import React,{Fragment, useContext} from 'react'
import Tarefa from './Tarefa'
import projetoContext from '../../context/projetos/projetoContext'


const ListaTarefas = () => {

    // Extrair projetos de State Inicial
    const projetosContext = useContext(projetoContext)
    const {projeto, eliminarProjeto} = projetosContext

    // Se não existe projeto selecionado
    if(!projeto) return <h2>Selecione um projeto!</h2>

    // Array destructing para extrair o projeto atual
    const [projetoAtual] = projeto

    const tarefasProjeto = []

    // Eliminar um projeto
    const onClickEliminar = () => {
        eliminarProjeto(projetoAtual.id)
    }

    return ( 
    <Fragment>
        <h2>Projeto: {projetoAtual.nome}</h2>

        <ul className='lista-tarefas'>
            {tarefasProjeto.length === 0
                ? (<li className='tarefa'><p>Não possui tarefas</p></li>)
                : tarefasProjeto.map(tarefa => (
                    <Tarefa 
                        tarefa={tarefa}
                    />
                ))
            }
        </ul>
        
        <button
            type='button'
            className='btn btn-eliminar'
            onClick={onClickEliminar}
        >Eliminar Projeto &times;</button>
    </Fragment>
     );
}
 
export default ListaTarefas;