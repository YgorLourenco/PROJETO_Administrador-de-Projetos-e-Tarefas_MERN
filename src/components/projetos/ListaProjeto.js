import React, {useContext, useEffect} from 'react'
import Projeto from './Projeto'
import projetoContext from '../../context/projetos/projetoContext'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const ListaProjeto = () => {

    // Extrair projetos de State Inicial
    const projetosContext = useContext(projetoContext)
    const {projetos, obterProjetos} = projetosContext

    // Obter projetos quando carregar componente
    useEffect(() => {
        obterProjetos()
        //eslint-disable-next-line
    }, [])

    // Revisar se projetos tem conteudo
    if(projetos.length === 0) return <p>Não há projetos, comece criando um!</p>

    

    return(
        <ul className='lista-projetos'>
            <TransitionGroup>
                {projetos.map(projeto =>(
                    <CSSTransition
                        key={projeto.id}
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