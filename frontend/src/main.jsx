
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Admin from './Admin'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
     </Routes>
  </BrowserRouter>
)
