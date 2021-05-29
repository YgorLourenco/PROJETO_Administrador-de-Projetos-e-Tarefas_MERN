import React,{Fragment, useState, useContext} from 'react'
import projetoContext from '../../context/projetos/projetoContext'

const NovoProjeto = () => {

    // Obter o state do formulário
    // Vai passar os props do projetoContext
    const projetosContext = useContext(projetoContext)
    const {formulario, errorFormulario ,mostrarFormulario, adicionarProjeto, mostrarError} = projetosContext

    // State para Projeto
    const [projeto, guardarProjeto] = useState({
        nome:'',
    })

    const {nome} = projeto

    // Conteudos do Input
    const onChangeProjeto = e => {
        guardarProjeto({
            ...projeto,
            [e.target.name] : e.target.value
        })
    }

    // Quando o usuário envia um projeto
    const onSubmitProjeto = e => {
        e.preventDefault();

        // Valiar o projeto
        if(nome === '') {
            mostrarError()
            return
        }

        // Agregar o State
        adicionarProjeto(projeto)


        //Reiniciar Form
        guardarProjeto({
            nome:'',
        })
    }

    // Mostrar Formulario
    const onClickFormulario = () => {
        mostrarFormulario()
    }

    return ( 
    <Fragment>
        <button
            type='button'
            className='btn btn-block btn-primario'
            onClick={onClickFormulario}
        >Novo Projeto</button>

        {
            formulario
            ?
            (
                <form 
                    className='formulario-novo-projeto'
                    onSubmit={onSubmitProjeto}
                    >
                    <input 
                        type='text'
                        className='input-text'
                        placeholder='Nome do Projeto'
                        name='nome'
                        value={nome}
                        onChange={onChangeProjeto}
                    />
                    <input
                        type='submit'
                        className='btn btn-primario btn-block'
                        value='Adicionar Projeto'
                    />
                </form>
            ) : null
        }

        {errorFormulario ? <p className='mensagem error'>O nome do projeto é obrigatório!</p> : null}
    </Fragment>
     );
}
 
export default NovoProjeto;