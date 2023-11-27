import { useContext } from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'
import Dogs from './ComponentsSvg/Dogs'
import { UserContext } from '../UserContext'

const Header = () => {
	const { data, userLogout } = useContext(UserContext)

	return (
		<header className={style.header}>
			<nav className={`${style.nav} container`}>
				<Link to="/" className={style.logo} aria-label="Dogs - Home">
					<Dogs />
				</Link>
				{data ? 
					<div> 
						<p className={style.login}>{data.name}</p> 
						<button onClick={userLogout}>sair</button>
					</div>: 
					<Link to="/login" className={style.login}>Login | Criar Login</Link>
				}
			</nav>
		</header>
	)
}

export default Header
