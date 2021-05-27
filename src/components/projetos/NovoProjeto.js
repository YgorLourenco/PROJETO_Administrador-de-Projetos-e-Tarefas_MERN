import React,{Fragment} from 'react'

const NovoProjeto = () => {
    return ( 
    <Fragment>
        <button
            type='button'
            className='btn btn-block btn-primario'
        >Novo Projeto</button>

        <form 
        className='formulario-novo-projeto'
        >
            <input 
                type='text'
                className='input-text'
                placeholder='Nome do Projeto'
                name='nome'
            />
            <input
                type='submit'
                className='btn btn-primario btn-block'
                value='Adicionar Projeto'
            />
        </form>
    </Fragment>
     );
}
 
export default NovoProjeto;