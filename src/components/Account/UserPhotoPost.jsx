import { useEffect, useState } from 'react'
import styles from './UserPhotoPost.module.css'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helper/Error'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import { POST_PHOTO } from '../../api'
import { useNavigate } from 'react-router-dom'

const UserPhotoPost = () => {
	const name = useForm()
	const weight = useForm('namber')
	const age = useForm('namber ')
	const [img, setImg] = useState({})
	const { data, error, loading, request } = useFetch()
	const navigate = useNavigate()

	useEffect(() => {
		if(data) navigate('/account')
	}, [data, navigate])

	function handleSubmit(event) {
		event.preventDefault()
		const formData = new FormData()
		formData.append('img', img.raw)
		formData.append('name', name.value)
		formData.append('weight', weight.value)
		formData.append('age', age.value)

		const token = window.localStorage.getItem("token")
		const { url, options } = POST_PHOTO(token, formData)
		request(url, options)
	}

	function handleImgChange({ target }) {
		setImg({
			preview: URL.createObjectURL(target.files[0]),
			raw: target.files[0],
		})
	}

	return (
		<section className={`${styles.photoPost} animeLeft`}>
			<form onSubmit={handleSubmit}>
				<Input label="Nome" type="text" name="name" {...name} />
				<Input label="Peso" type="number" name="weight" {...weight} />
				<Input label="Idade" type="number" name="age" {...age} />
				<input type="file" name="img" id="img" className={styles.file} onChange={handleImgChange} />
				{loading ? <Button>Enviando...</Button> : <Button>Enviar</Button>}
				<Error message={error}/>
			</form>
			{img.preview &&
				<div
					className={styles.preview}
					style={{ backgroundImage: `url(${img.preview})` }}
				></div>
			}
		</section>
	)
}

export default UserPhotoPost
