import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'
import { NavBar } from './NavBar'
import { AboutPage, HomePage, LoginPage } from './pages'

export const MainApp = () => {
    return (
        <UserProvider>
            <h1>MainApp</h1>
            <NavBar />
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route path="*" element={<Navigate to="/about"/>} />
            </Routes>
        </UserProvider>
    )
}
