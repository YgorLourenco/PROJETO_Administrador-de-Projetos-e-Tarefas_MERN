import React,{Fragment} from 'react'
import Tarefa from './Tarefa'

const ListaTarefas = () => {

    const tarefasProjeto = [
        {nome:'Escolher plataforma', estado:true},
        {nome:'Escolher Cores', estado:false},
        {nome:'Escolher Plataformas de pagamento', estado:false},
        {nome:'Escolher Hosting', estado:true},
    ]

    return ( 
    <Fragment>
        <h2>Projeto: Loja Virtual</h2>

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
        >Eliminar Projeto &times;</button>
    </Fragment>
     );
}
 
export default ListaTarefas;