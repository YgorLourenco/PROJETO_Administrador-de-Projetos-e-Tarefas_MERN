import React from 'react'

const Barra = () => {
    return ( 
        <header className='app-header'>
            <p className='nome-usuario'>
                Olá <span>Fulano</span>
            </p>
            <nav className='nav-principal'>
                <a href='#!'>Encerrar Sessão</a>
            </nav>
        </header>
     );
}
 
export default Barra;