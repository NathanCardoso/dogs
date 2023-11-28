import { useState, useContext, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as MyPhotos } from '../../Assets/feed.svg'
import { ReactComponent as Stats } from '../../Assets/estatisticas.svg'
import { ReactComponent as ToAdd } from '../../Assets/adicionar.svg'
import { ReactComponent as ToExit } from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

const UserHeaderNav = () => {
	const { userLogout } = useContext(UserContext)
	const mobile = useMedia('(max-width: 40rem)')
	const [menuMobile, setMenuMobile] = useState(false)
	const navigate = useNavigate()
	const { pathname } = useLocation()

	useEffect(() => {
		setMenuMobile(false)
	}, [pathname])

	function handleLogout() {
		userLogout()
		navigate('/login')
	}

	return (
		<>
			{mobile &&
				<button 
					aria-label='menu' 
					onClick={() => setMenuMobile(!menuMobile)}
					className={`${styles.mobileButton} ${menuMobile && styles.mobileButtonActive}`}
				></button>
			}
			<nav 
				className={`${mobile ? styles.navMobile : styles.nav} ${menuMobile && styles.navMobileActive}`}>
				<NavLink to="/account" end>
					<MyPhotos />
					{mobile && 'Minhas Fotos'}
				</NavLink>
				<NavLink to="/account/stats">
					<Stats />
					{mobile && 'Estatísticas'}
				</NavLink>
				<NavLink to="/account/posts">
					<ToAdd />
					{mobile && 'Adicionar Foto'}
				</NavLink>
				<button onClick={handleLogout}>
					<ToExit />
					{mobile && 'Sair'}
				</button>
			</nav>
		</>
	)
}

export default UserHeaderNav
