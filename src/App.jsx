import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserStorage } from './UserContext'

const App = () => {
	return (
		<BrowserRouter>
			<UserStorage>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login/*" element={<Login />} />
				</Routes>
				<Footer />
			</UserStorage>
		</BrowserRouter>
	)
}

export default App
