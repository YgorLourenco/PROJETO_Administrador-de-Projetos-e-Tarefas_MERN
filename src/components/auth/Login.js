import React,{useState} from 'react'
// Componente que linka uma página a outra
import {Link} from 'react-router-dom'

const Login = () => {

    // State para iniciar Sessão
    const [usuario, guardarUsuario] = useState({
        email:'',
        password:'',
    })

    const {email, password} = usuario

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

    }


    return ( 
        <div className='form-usuario'>
            <div className='container-form sombra-dark'>
                <h1>Iniciar Sessão</h1>
            
                <form
                    onSubmit={onSubmit}
                >
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
                        <input 
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Iniciar Sessão'
                        />
                    </div>
                </form>
                <Link
                    to={'/nova-conta'}
                    className='link-conta'
                >Criar Conta</Link>
            </div>
        </div>
     );
}
 
export default Login;