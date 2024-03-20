import Layout from './components/layout/Layout'
import { Route, Routes } from 'react-router-dom'
import { About, Auction, Contest, Grant, Home, NotFound, Tender, Term } from './pages'

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='auction' element={<Auction />}/>
          <Route path='contest' element={<Contest />}/>
          <Route path='grant' element={<Grant />}/>
          <Route path='tender' element={<Tender />}/>
          <Route path='login' element={<>LOGIN PAGE</>}/>
          <Route path='registration' element={<>REGISTRATION PAGE</>}/>
          <Route path='terms' element={<Term />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
