import React,{useState} from 'react'
// Componente que linka uma página a outra
import {Link} from 'react-router-dom'

const NovaConta = () => {

    // State para iniciar Sessão
    const [usuario, guardarUsuario] = useState({
        nome:'',
        email:'',
        password:'',
        confirmar:'',

    })

    const {nome, email, password, confirmar} = usuario

    // Captura e coloca no state o que o usuário digitar no Login
    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Quando o usuário quer iniciar uma sessão
    const onSubmit = e => {
        e.preventDefault()

        // Validar para que não haja campos vazios

        //Senha minima de 6 caracteres

        // Confirmar se as duas senhas são iguais

        // Mandando a informação

    }


    return ( 
        <div className='form-usuario'>
            <div className='container-form sombra-dark'>
                <h1>Criar Nova Conta</h1>
            
                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor='nome'>Nome</label>
                        <input 
                            type='text'
                            id='nome'
                            name='nome'
                            placeholder='Seu nome'
                            value={nome}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='email'>E-mail</label>
                        <input 
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Seu e-mail'
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='password'>Senha</label>
                        <input 
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Sua senha'
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <label htmlFor='confirmar'>Confirmar senha</label>
                        <input 
                            type='password'
                            id='confirmar'
                            name='confirmar'
                            placeholder='Repita sua senha'
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <input 
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Registrar'
                        />
                    </div>
                </form>
                <Link
                    to={'/'}
                    className='link-conta'
                >Retornar ao login</Link>
            </div>
        </div>
     );
}
 
export default NovaConta;