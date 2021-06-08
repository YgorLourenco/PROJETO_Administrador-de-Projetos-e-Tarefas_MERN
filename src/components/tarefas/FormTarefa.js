import React, {useContext, useState, useEffect} from 'react'
import projetoContext from '../../context/projetos/projetoContext'
import tarefaContext from '../../context/tarefas/tarefaContext'


const FormTarefa = () => {

    // Extrair se um projeto esta ativo
    const projetosContext = useContext(projetoContext)
    const {projeto} = projetosContext

    // Obter a função do context de tarefa
    const tarefasContext = useContext(tarefaContext)
    const { tarefaSelecionada, errorTarefa, adicionarTarefa, validarTarefa, obterTarefas, atualizarTarefa, limparTarefa} = tarefasContext

    // Effect que detecta se a uma tarefa selecionada
    useEffect(() => {
        if(tarefaSelecionada !== null) {
            guardarTarefa(tarefaSelecionada)
        } else {
            guardarTarefa({
                nome:'',
            })
        }
    }, [tarefaSelecionada])

    // State do formulario
    const [tarefa, guardarTarefa] = useState({
        nome:'',
    })

    // Extrair o nome do projeto
    const {nome} = tarefa

    // Se não existe projeto selecionado
    if(!projeto) return null

    // Array destructing para extrair o projeto atual
    const [projetoAtual] = projeto

    // Ler os valores de formulario
    const handleChange = e => {
        guardarTarefa({
            ...tarefa,
            [e.target.name] : e.target.value
        })
    }

    // Eventos para quando clicar o botão submit
    const onSubmit = e => {
        e.preventDefault()

        // Validar
        if(nome.trim() === '') {
            validarTarefa()
            return;
        }

        // Se essa edição e da nova tarefa
        if(tarefaSelecionada === null) {
            // Agregar a nova tarefa no state e tarefas
            tarefa.projetoID = projetoAtual.id
            tarefa.estado = false
            adicionarTarefa(tarefa)
        } else {
            // Atualizar tarefa existente
            atualizarTarefa(tarefa)

            // Eleiminar tarefa selecionada do state
            limparTarefa()

        }

        

        // Obter e filtrar as tarefas do projeto atual
        obterTarefas(projetoAtual.id)

        //Reinicar o form
        guardarTarefa({
            nome:'',
        })
    }

    return ( 
        <div className='formulario'>
            <form
                onSubmit={onSubmit}
            >
                <div className='container-input'>
                    <input 
                        type='text'
                        className='input-text'
                        placeholder='Nome da tarefa'
                        name='nome'
                        value={nome}
                        onChange={handleChange}
                    />
                </div>

                <div className='container-input'>
                    <input 
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value={tarefaSelecionada ? 'Editar Tarefa' : 'Agregar Tarefa'}
                    />
                </div>
            </form>
            {errorTarefa ? <p className='mensagem error'>O nome da tarefa e obrigatório!</p> : null}
        </div>
     );
}
 
export default FormTarefa;