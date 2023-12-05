import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import PhotoComments from './PhotoComments'
import PhotoDelete from './PhotoDelete'
import Image from '../Helper/Image'
import styles from '../Photo/PhotoContent.module.css'

const PhotoContent = ({ data, single }) => {
	const { photo, comments } = data
	const user = useContext(UserContext)

	return (
		<div className={`${styles.photo} ${single ? styles.single : ''}`}>
			<div className={styles.img}>
				<Image src={photo?.src} alt={photo?.title}/>
			</div>
			<div className={styles.details}>
				<p className={styles.author}>
					{user.data && user.data.username === photo.author ?
						<PhotoDelete id={photo.id} /> :
						<Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
					}
					<span className={styles.view}>{photo.hits}</span>
				</p>
				<h1 className="title">
					<Link to={`/photo/${photo.id}`}>{photo.title}</Link>
				</h1>
				<ul className={styles.attributes}>
					<li>{photo.weight} kg</li>
					<li>{photo.age} anos</li>
				</ul>
			</div>
			<PhotoComments id={photo.id} comments={comments} single={single} />
		</div>
	)
}

export default PhotoContent
