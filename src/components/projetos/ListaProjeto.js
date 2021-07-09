import React, {useContext, useEffect} from 'react'
import Projeto from './Projeto'
import projetoContext from '../../context/projetos/projetoContext'
import AlertaContext from '../../context/alertas/alertaContext'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const ListaProjeto = () => {

    // Extrair projetos de State Inicial
    const projetosContext = useContext(projetoContext)
    const { mensagem, projetos, obterProjetos} = projetosContext

    const alertaContext = useContext(AlertaContext)
    const {  alerta, mostrarAlerta } = alertaContext

    // Obter projetos quando carregar componente
    useEffect(() => {

        if(mensagem) {
            mostrarAlerta(mensagem.msg, mensagem.categoria)
        }

        obterProjetos()
        //eslint-disable-next-line
    }, [mensagem])

    // Revisar se projetos tem conteudo
    if(projetos.length === 0) return <p>Não há projetos, comece criando um!</p>

    

    return(
        <ul className='lista-projetos'>

            {alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}

            <TransitionGroup>
                {projetos.map(projeto =>(
                    <CSSTransition
                        key={projeto._id}
                        timeout={200}
                        classNames='projeto'
                    >
                        <Projeto   
                            projeto={projeto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    )
}

export default ListaProjeto