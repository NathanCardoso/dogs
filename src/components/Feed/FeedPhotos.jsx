import { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import FeedPhotosItem from './FeedPhotosItem'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import { GET_PHOTOS } from '../../api'
import styles from '../Feed/FeedPhotos.module.css'

const FeedPhotos = ({ setModalPhoto, setInfinite, page, user, total }) => {
	const { data, error, loading, request } = useFetch()

	useEffect(() => {
		async function fetchPhotos() {
			const { url, options } = GET_PHOTOS({ page, total, user })
			const { response, json } = await request(url, options)
			if(response && response.ok && json.length < total) {
				setInfinite(false)
			}
		}
		fetchPhotos()
	}, [request, setInfinite, page, user, total])

	if (error) return <Error message={error} />
	if (loading) return <Loading />
	if (data)
		return (
			<ul className={`${styles.feed} animeLeft`}>
				{data.map(itemPhoto => (
					<FeedPhotosItem 
						key={itemPhoto.id} 
						photo={itemPhoto} 
						setModalPhoto={setModalPhoto}
					/>))}
			</ul>
		)
	else return null
}

export default FeedPhotos
