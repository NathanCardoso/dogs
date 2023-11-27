import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helper/Error'
import { GET_USER, TOKEN_POST } from '../../api'
import { UserContext } from '../../UserContext'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/Button.module.css'

const LoginForm = () => {
	const username = useForm()
	const password = useForm()

	const { userLogin, error, loading } = useContext(UserContext)

	async function handleSubmit(event) {
		event.preventDefault()
		if (username.validate() && password.validate()) {
			userLogin(username.value, password.value)
		}
	}

	return (
		<section className="animeLeft">
			<h1 className="title">Login</h1>
			<form className={styles.form} onSubmit={handleSubmit}>
				<Input label="Usuário" type="text" name="username" {...username} />
				<Input label="Senha" type="password" name="password" {...password} />
				{loading ? <Button disabled>Carregando...</Button> : <Button>Enviar</Button>}
				<Error message={error} />
			</form>

			<Link className={styles.lost} to="/login/lost">Perdeu a senha?</Link>
			<div className={styles.register}>
				<h2 className={styles.subtitle}>Cadastre-se</h2>
				<p>Ainda não possui conta? Cadastre-se no site.</p>
				<Link className={stylesBtn.button} to="/login/create">Cadastrar</Link>
			</div>
		</section>
	)
}

export default LoginForm
