import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/*" element = { <AuthRouter /> } />
                <Route path="/" element = { <JournalScreen /> } />
            </Routes>
        </BrowserRouter>
    )
}