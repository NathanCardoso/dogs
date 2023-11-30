import { Link } from 'react-router-dom'
import PhotoComments from './PhotoComments'
import styles from '../Photo/PhotoContent.module.css'

const PhotoContent = ({ data }) => {
	const { photo, comments } = data

	return (
		<div className={styles.photo}>
			<div className={styles.img}>
				<img src={photo?.src} alt={photo?.title} />
			</div>
			<div className={styles.details}>
				<p className={styles.author}>
					<Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
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
			<PhotoComments id={photo.id} comments={comments}/>
		</div>
	)
}

export default PhotoContent
