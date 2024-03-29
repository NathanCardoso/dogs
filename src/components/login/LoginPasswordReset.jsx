import { useState, useEffect } from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helper/Error'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_RESET } from '../../api'
import { useNavigate } from 'react-router-dom'
import Head from '../Helper/Head'

const LoginPasswordReset = () => {
	const password = useForm("passowrd")
	const [login, setLogin] = useState("")
	const [key, setKey] = useState("")
	const { loading, error, request } = useFetch()
	const navigate = useNavigate()

	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		const key = params.get("key")
		const login = params.get("login")

		if(key) setKey(key)
		if(login) setLogin(login)
	}, [])

	async function handleSubmit(event) {
		event.preventDefault()
		if (password.validate()) {
			const { url, options } = PASSWORD_RESET({
				login,
				key,
				password: password.value
			})
			const { response } = await request(url, options)
			if(response.ok) navigate("/login")
		}
	}

	return (
		<section className="animeLeft">
			<Head title="Resete a Senha" />
			<h1 className="title">Resete a senha</h1>
			<form onSubmit={handleSubmit}>
				<Input label="Nova Senha" type="password" name="passowrd" {...password} />
				{loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
			</form>
			<Error message={error} />
		</section>
	)
}

export default LoginPasswordReset
