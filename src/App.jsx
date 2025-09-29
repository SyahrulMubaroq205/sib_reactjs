
import Home from './pages/Home'
import Layout from './layout/Layout'
import Team from './pages/Team'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import BooksPage from './pages/Books'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
