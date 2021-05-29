import React, {useContext, useEffect} from 'react'
import Projeto from './Projeto'
import projetoContext from '../../context/projetos/projetoContext'

const ListaProjeto = () => {

    // Extrair projetos de State Inicial
    const projetosContext = useContext(projetoContext)
    const {projetos, obterProjetos} = projetosContext

    // Obter projetos quando carregar componente
    useEffect(() => {
        obterProjetos()
    }, [])

    // Revisar se projetos tem conteudo
    if(projetos.length === 0) return <p>Não há projetos, comece criando um!</p>

    

    return(
        <ul className='lista-projetos'>
            {projetos.map(projeto =>(
                <Projeto 
                    key={projeto.id}
                    projeto={projeto}
                />
            ))}
        </ul>
    )
}

export default ListaProjeto