import React from 'react'

const Tarefa = ({tarefa}) => {
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
                        >Completo</button>
                    )
                :
                    (
                        <button
                            type='button'
                            className='incompleto'
                        >Incompleto</button>
                    )
                }
            </div>

            <div className='acoes'>
                <button
                    type='button'
                    className='btn btn-primario'
                >Editar</button>

                <button
                    type='button'
                    className='btn btn-secundario'
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarefa;