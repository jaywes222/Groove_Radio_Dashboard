import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from './../Common/HomePage';
import NotFoundPage from './../Common/NotFoundPage';
import DashboardOverview from '../Overview/DashboardOverview'

const Routing = () => {
    return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/dashboard" element={<DashboardOverview />} />
            </Routes>
    )
}

export default Routing
