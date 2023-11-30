import styles from '../Feed/FeedPhotosItem.module.css'

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
	function handleClick() {
		setModalPhoto(photo)
	}

	return (
		<li className={styles.photo} onClick={handleClick}>
			<img src={photo?.src} alt={photo?.title} />
			<span className={styles.view}>{photo?.hits}</span>
		</li>
	)
}

export default FeedPhotosItem
