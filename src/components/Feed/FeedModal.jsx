import { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from '../Photo/PhotoContent'
import { GET_PHOTO } from '../../api'
import styles from './FeedModal.module.css'

const FeedModal = ({ photo, setModalPhoto }) => {
	const { data, error, loading, request } = useFetch()

	useEffect(() => {
		const { url, options} = GET_PHOTO(photo.id)
		request(url, options)
	}, [photo, request])

	function handleOutSideClick({ target, currentTarget}) {
		if(target === currentTarget) setModalPhoto(null)
	}

	return (
		<div className={styles.modal} onClick={handleOutSideClick}>
			{error && <Error message={error} />}
			{loading && <Loading />}
			{data && <PhotoContent data={data}/>}
		</div>
	)
}

export default FeedModal
