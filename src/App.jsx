import Layout from './components/layout/Layout'
import { Route, Routes } from 'react-router-dom'
import { Auction, Contest, Grant, NotFound, Tender } from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/auction' element={<Auction />}/>
          <Route path='/contest' element={<Contest />}/>
          <Route path='/grant' element={<Grant />}/>
          <Route path='/tender' element={<Tender />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
