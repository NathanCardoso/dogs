import { useState, useEffect, useCallback, createContext } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, GET_USER } from './api'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
	const [data, setData] = useState(null)
	const [login, setLogin] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	const userLogout = useCallback(async function () {
		setData(null)
		setError(null)
		setLoading(false)
		setLogin(false)
		window.localStorage.removeItem('token')
	}, [])

	async function getUser(token) {
		const {url, options} = GET_USER(token)
		const response = await fetch(url, options)
		const json = await response.json()
		setData(json)
		setLogin(true)
	}

	async function userLogin(username, password) {
		setError(null)
		setLoading(true)
		try {
			const {url, options} = TOKEN_POST({username, password})
			const responseToken = await fetch(url, options)

			if(!responseToken.ok) throw new Error(responseToken.statusText)

			const { token } = await responseToken.json()
			window.localStorage.setItem('token', token)
			await getUser(token)
			navigate('/account')
		} catch(error) {
			setError(String(error))
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		async function autoLogin() {
			const token = window.localStorage.getItem('token')

			if(token) {
				setError(null)
				setLoading(true)
				try {
					const { url, options } = TOKEN_VALIDATE_POST(token)
					const response = await fetch(url, options)

					if(!response.ok) throw new Error('Token inválido')

					await getUser(token)
				} catch(error) {
					userLogout()
				} finally {
					setLoading(false)
				}
			} else {
				setLogin(false)
			}
		}
		autoLogin()
	}, [userLogout])

	return (
		<UserContext.Provider value={{ userLogin, userLogout, error, loading, login, data }}>
			{ children }
		</UserContext.Provider>
	)
}
