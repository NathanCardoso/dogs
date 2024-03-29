import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login/Login'
import Account from './components/Account/Account'
import Photo from './components/Photo/Photo'
import UserProfile from './components/Account/UserProfile'
import NotFound from './components/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserStorage } from './UserContext'
import ProtectedRoute from './components/Helper/ProtectedRoute'

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<UserStorage>
					<Header />
					<main className='appBody'>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="login/*" element={<Login />} />
							<Route path="account/*"
								element={
									<ProtectedRoute>
										<Account />
									</ProtectedRoute>}
							/>
							<Route path="photo/:id" element={<Photo />} />
							<Route path="profile/:user" element={<UserProfile />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</UserStorage>
			</BrowserRouter>
		</div>
	)
}

export default App
