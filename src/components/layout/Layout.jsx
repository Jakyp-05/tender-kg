import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Container } from '@mui/material'

function Layout() {
  return (
    <>
      <Header />
      <Container className='main' maxWidth="xl">
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default Layout
