import { useState } from 'react'
import styles from './Image.module.css'

const Image = ({ alt, ...props }) => {
	const [skeleton, setSkeleton] = useState(true)

	function handleLoad({ target }) {
		setSkeleton(false)
		target.style.opacity = 1
	}

		return (
		<div className={styles.wrapper}>
			{skeleton && <div className={styles.skeleton}></div>}
			<img className={styles.img} onLoad={handleLoad} alt={alt} {...props}/>
		</div>
	)
}

export default Image
