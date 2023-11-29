import { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import FeedPhotosItem from './FeedPhotosItem'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import { GET_PHOTOS } from '../../api'
import styles from '../Feed/FeedPhotos.module.css'

const FeedPhotos = () => {
	const { data, error, loading, request } = useFetch()

	useEffect(() => {
		async function fetchPhotos() {
			const { url, options } = GET_PHOTOS({ page: 1, total: 6, user: 0 })
			const { response, json } = await request(url, options)
		}
		fetchPhotos()
	}, [request])

	if (error) return <Error message={error} />
	if (loading) return <Loading />
	if (data)
		return (
			<ul className={`${styles.feed} animeLeft`}>
				{data.map(itemPhoto => <FeedPhotosItem key={itemPhoto.id} photo={itemPhoto}/>)}
				<FeedPhotosItem />
			</ul>
		)
	else return null
}

export default FeedPhotos
