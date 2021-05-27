import React from 'react'


const Projeto = ({projeto}) => {
    return ( 
        <li>
            <button
                type='button'
                className='btn btn-blank'
            >{projeto.nome}</button>
        </li>
     );
}
 
export default Projeto;