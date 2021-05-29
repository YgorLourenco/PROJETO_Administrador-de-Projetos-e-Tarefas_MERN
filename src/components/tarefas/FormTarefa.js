import React, {useContext} from 'react'
import projetoContext from '../../context/projetos/projetoContext'


const FormTarefa = () => {

    // Extrair se um projeto esta ativo
    const projetosContext = useContext(projetoContext)
    const {projeto} = projetosContext

    // Se não existe projeto selecionado
    if(!projeto) return null

    // Array destructing para extrair o projeto atual
    const [projetoAtual] = projeto

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