import { useState } from 'react'
import { ReactComponent as Submit } from '../../Assets/enviar.svg'
import { POST_COMMENT } from '../../api'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({ id, setComments, single }) => {
	const [comment, setComment] = useState('')
	const { request, error } = useFetch()

	async function handleSubmit(event) {
		event.preventDefault()

		const token = window.localStorage.getItem('token')
		const { url, options } = POST_COMMENT(id, { comment }, token)
		const { response, json } = await request(url, options)

		if (response.ok) {
			setComment('')
			setComments((comments) => [...comments, json])
		}
	}

	return (
		<form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
			<textarea
				className={styles.textarea}
				id="comment"
				name="comment"
				placeholder="Comente..."
				value={comment}
				onChange={({ target }) => setComment(target.value)}
			/>
			<button className={styles.button}>
				<Submit />
			</button>
			<Error message={error}/>
		</form>
	)
}

export default PhotoCommentsForm
