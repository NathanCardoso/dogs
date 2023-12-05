import { useContext } from 'react'
import Feed from '../Feed/Feed'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'
import NotFound from '../NotFound'
import { Routes, Route } from 'react-router-dom'
import { UserContext } from "../../UserContext"
import Head from '../Helper/Head'

const Account = () => {
	const { data } = useContext(UserContext)

	return (
		<section className="container">
			<Head title="Minha Conta"/>
			<UserHeader />
			<Routes>
				<Route path="/" element={<Feed user={data.id}/>} />
				<Route path="/posts" element={<UserPhotoPost />} />
				<Route path="/stats" element={<UserStats />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</section>
	)
}

export default Account
