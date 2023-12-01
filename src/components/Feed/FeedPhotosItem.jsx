import Image from '../Helper/Image'
import styles from '../Feed/FeedPhotosItem.module.css'

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
	function handleClick() {
		setModalPhoto(photo)
	}

	return (
		<li className={styles.photo} onClick={handleClick}>
			<Image src={photo?.src} alt={photo?.title}/>
			<span className={styles.view}>{photo?.hits}</span>
		</li>
	)
}

export default FeedPhotosItem
