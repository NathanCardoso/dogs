import { useState } from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Input from '../Forms/Input'
import Button from '../Forms/Button'

const LoginForm = () => {
	const username = useForm('email')
	const password = useForm()

	function handleSubmit(event) {
		event.preventDefault()
		if(username.validate() && password.validate()) {
			fetch('http://dogs.test/json/jwt-auth/v1/token', {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify()
			}).then(response => {
				console.log(response)
				return response.json()
			}).then(json =>
				console.log(json))
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
