import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import { GET_USER, TOKEN_POST } from '../../api'
import { UserContext } from '../../UserContext'

const LoginForm = () => {
	const username = useForm()
	const password = useForm()

	const { userLogin } = useContext(UserContext)

	async function handleSubmit(event) {
		event.preventDefault()
		if (username.validate() && password.validate()) {
			userLogin(username.value, password.value)
		}
	}

	return (
		<section>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<Input label="Usuário" type="text" name="username" {...username} />
				<Input label="Senha" type="password" name="password" {...password} />
				<Button>Enviar</Button>
			</form>

			<Link to="/login/create">Cadastrar</Link>
		</section>
	)
}

export default LoginForm
