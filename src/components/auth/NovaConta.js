import React,{useState, useContext, useEffect} from 'react'
// Componente que linka uma página a outra
import {Link} from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/autenticacion/authContext'

const NovaConta = (props) => {

    // Extrair os valores 
    const alertaContext = useContext(AlertaContext)
    const {alerta, mostrarAlerta} = alertaContext

    const authContext = useContext(AuthContext)
    const {mensagem, autenticado, registrarUsuario} = authContext

    // Em caso o usuario esteja autenticado ou registrado ou seja um registro duplicado
    useEffect(() => {
        if(autenticado) {
            props.history.push('/projetos')
        }
        if(mensagem) {
            mostrarAlerta(mensagem.msg, mensagem.categoria) 
        }
    }, [mensagem, autenticado, props.history])

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
        if(nome.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '' ) {
            mostrarAlerta('Todos os campos são obrigatórios', 'alerta-error') 
            return
        }

        //Senha minima de 6 caracteres
        if(password.length < 6) {
            mostrarAlerta('O password deve ser de menos 6 caracteres', 'alerta-error')
            return
        }

        // Confirmar se as duas senhas são iguais
        if(password !== confirmar) {
            mostrarAlerta('Os passwords não são iguais', 'alerta-error')
            return
        }

        // Mandando a informação
        registrarUsuario({
            nome,
            email, 
            password
        })

    }


    return ( 
        <div className='form-usuario'>
            {alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}
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