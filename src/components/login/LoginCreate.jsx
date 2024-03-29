import { useContext } from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helper/Error'
import useForm from '../../Hooks/useForm'
import { POST_USER } from '../../api'
import { UserContext } from '../../UserContext'
import useFetch from '../../Hooks/useFetch'
import Head from '../Helper/Head'

const LoginCreate = () => {
	const username = useForm()
	const email = useForm('email')
	const password = useForm('password')
	const { userLogin } = useContext(UserContext)
	const { loading, error, request } = useFetch()


	async function handleSubmit(event) {
		event.preventDefault()
		const { url, options } = POST_USER({
			username: username.value,
			email: email.value,
			password: password.value
		})

		const { response } = await request(url, options)
		if (response.ok) userLogin(username.value, password.value)
	}

	return (
		<section className="animeLeft">
			<Head title="Crie sua Conta" />
			<h1 className="title">Cadastre-se</h1>
			<form onSubmit={handleSubmit}>
				<Input label="Usuário" type="text" name="username" {...username} />
				<Input label="E-mail" type="text" name="email" {...email} />
				<Input label="Senha" type="password" name="password" {...password} />
				{loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>}
				<Error message={error}/>
			</form>
		</section>
	)
}

export default LoginCreate
