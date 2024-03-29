import { useState } from 'react'

const types = {
	email: {
		regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
		message: "Preencha um e-mail válido."
	},
	password: {
		regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
		message: "A senha precisa ter uma caracter maísculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres."
	},
	number: {
		regex: /ˆ\d+$/,
		message: 'Utilize apenas números.'
	}
}

const useForm = (type) => {
	const [value, setValue] = useState('')
	const [error, setError] = useState(null)

	function validate(value) {
		if(type === false) return true
		if(value.length === 0) {
			setError("Preencha um valor")
			return false
		} else if(types[type] && !types[type].regex.test(value)) {
			setError(types[type].message)
			return false
		} else {
			setError(null)
			return true
		}
	}

	function onChange({ target }) {
		if (error) validate(target.value)
		setValue(target.value)
	}

	return {
		value,
		error,
		setValue,
		onChange,
		validate: () => validate(value),
		onBlur: () => validate(value)
	}
}

export default useForm
