import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
import Dogs from './ComponentsSvg/Dogs'

const Header = () => {
	return (
		<header className={style.header}>
			<nav className={`${style.nav} container`}>
				<Link to="/" className={style.logo} aria-label="Dogs - Home">
					<Dogs />
				</Link>
				<Link to="/login" className={style.login}>Login | Criar Login</Link>
			</nav>
		</header>
	)
}

export default Header
