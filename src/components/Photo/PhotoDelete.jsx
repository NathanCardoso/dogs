import React from 'react'
import styles from './PhotoDelete.module.css'
import { DELETE_PHOTO } from '../../api'
import useFetch from '../../Hooks/useFetch'

const PhotoDelete = ({ id }) => {
	const { loading, request } = useFetch()

	async function handleClick() {
		const confirm = window.confirm('Tem certeza que deseja deletar essa foto?')
		if (confirm) {
			const token = window.localStorage.getItem('token')
			const { url, options } = DELETE_PHOTO(id, token)
			const { response } = await request(url, options)
			if (response.ok) window.location.reload()
		}
	}

	return (
		<>
			{loading ?
				<button className={styles.delete} disabled>Deletar</button> :
				<button className={styles.delete} onClick={handleClick}>Deletar</button>
			}
		</>
	)
}

export default PhotoDelete
