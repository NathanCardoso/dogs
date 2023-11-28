import Feed from '../Feed/Feed'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import { Routes, Route } from 'react-router-dom'

const Account = () => {
	return (
		<section className="container">
			<UserHeader />
			<Routes>
				<Route path="/" element={<Feed />} />
				<Route path="/posts" element={<UserPhotoPost />} />
				<Route path="/stats" element={<UserStats />} />
			</Routes>
		</section>
	)
}

export default Account
