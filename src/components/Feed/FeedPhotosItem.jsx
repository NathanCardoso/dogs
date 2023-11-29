import styles from '../Feed/FeedPhotosItem.module.css'

const FeedPhotosItem = ({ photo }) => {
	return (
		<li className={styles.photo}>
			<img src={photo?.src} alt={photo?.title} />
			<span className={styles.view}>{photo?.hits}</span>
		</li>
	)
}

export default FeedPhotosItem
