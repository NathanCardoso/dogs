import Feed from '../Feed/Feed'
import Head from '../Helper/Head'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
	const { user } = useParams()

	return (
		<section className='container mainSection'>
			<Head title={user} />
			<h1 className="title">{user}</h1>
			<Feed user={user}/>
		</section>
	)
}

export default UserProfile
