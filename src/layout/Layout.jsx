import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Container from '../components/Container/Container'

export default function Layout({ children }) {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <main>
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  )
}
