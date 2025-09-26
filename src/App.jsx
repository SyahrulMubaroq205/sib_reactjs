
import React from 'react'
import Home from './pages/Home'
import Layout from './layout/Layout'
import Team from './pages/Team'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
