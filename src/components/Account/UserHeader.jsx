import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'

const UserHeader = () => {
	const [title, setTitle] = useState('')
	const location = useLocation()

	useEffect(() => {
		const objectPathName = {
			'/account': 'Conta',
			'/account/stats': 'Estatísticas',
			'/account/posts': 'Posts'
		}

		setTitle(objectPathName[location.pathname])
	}, [location])

	return (
		<header className={styles.header}>
			<h1 className="title">{title}</h1>
			<UserHeaderNav />
		</header>
	)
}

export default UserHeader
