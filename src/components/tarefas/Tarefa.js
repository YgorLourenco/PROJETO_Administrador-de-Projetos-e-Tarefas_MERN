import React, {useContext} from 'react'
import projetoContext from '../../context/projetos/projetoContext'
import tarefaContext from '../../context/tarefas/tarefaContext'

const Tarefa = ({tarefa}) => {

    // Extrair se um projeto esta ativo
    const projetosContext = useContext(projetoContext)
    const {projeto} = projetosContext

    // Extrair o projeto
    const [projetoAtual] = projeto
    
    // Obter a função do context de tarefa
    const tarefasContext = useContext(tarefaContext)
    const {eliminarTarefa, obterTarefas, mudarEstadoTarefa, guardarTarefaAtual} = tarefasContext

    // Função que se executa quando o usuário preciona o botão de eliminar tarefa
    const tarefaEliminar = id => {
        eliminarTarefa(id)
        obterTarefas(projetoAtual.id)
    }

    // Função que modifica o estado das tarefas
    const mudarEstado = tarefa => {
        if(tarefa.estado) {
            tarefa.estado = false
        } else {
            tarefa.estado = true
        }
        mudarEstadoTarefa(tarefa)
    }

    // Agregar uma tarefa atual quando o usuário desejar edita-la
    const selecionarTarefa = tarefa => {
        guardarTarefaAtual(tarefa)
    }

    return ( 
        <li className='tarefa sombra'>
            <p>{tarefa.nome}</p>

            <div className='estado'>
                {tarefa.estado
                ?
                    (
                        <button
                            type='button'
                            className='completo'
                            onClick={() => mudarEstado(tarefa)}
                        >Completo</button>
                    )
                :
                    (
                        <button
                            type='button'
                            className='incompleto'
                            onClick={() => mudarEstado(tarefa)}
                        >Incompleto</button>
                    )
                }
            </div>

            <div className='acoes'>
                <button
                    type='button'
                    className='btn btn-primario'
                    onClick={() => selecionarTarefa(tarefa)}
                >Editar</button>

                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick={() => tarefaEliminar(tarefa.id)}
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarefa;