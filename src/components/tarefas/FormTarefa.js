import React from 'react'

const FormTarefa = () => {
    return ( 
        <div className='formulario'>
            <form>
                <div className='container-input'>
                    <input 
                        type='text'
                        className='input-text'
                        placeholder='Nome da tarefa'
                        name='nome'
                    />
                </div>

                <div className='container-input'>
                    <input 
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value='Adicionar Tarefa'
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTarefa;