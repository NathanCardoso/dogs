import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login/Login'
import Account from './components/Account/Account'
import Photo from './components/Photo/Photo'
import UserProfile from './components/Account/UserProfile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserStorage } from './UserContext'
import ProtectedRoute from './components/Helper/ProtectedRoute'

const App = () => {
	return (
		<BrowserRouter>
			<UserStorage>
				<Header />
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
				</Routes>
				<Footer />
			</UserStorage>
		</BrowserRouter>
	)
}

export default App
