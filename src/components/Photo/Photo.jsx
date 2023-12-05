import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import { GET_PHOTO_ID } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from './PhotoContent'

const Photo = () => {
	const { id } = useParams()
	const { data, loading, error, request } = useFetch()

	useEffect(() => {
		const { url } = GET_PHOTO_ID(id)
		request(url)
	}, [request, id])

	if (error) return <Error message={error} />
	if (loading) return <Loading />
	if (data)
		return (
			<section className="container mainContainer">
				<PhotoContent	data={data} single={true}/>
			</section>
		)
	else return null
}

export default Photo
