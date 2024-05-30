// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import AddMovie from './Pages/AddMovie'
import Populer from './Pages/Populer'
import NewPlay from './Pages/NewPlay'
import TopRated from './Pages/TopRated'
import Layout from './Layout/Layout'
import Counter from './Pages/Counter'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie/about' element={<About />}></Route>
        <Route path='/movie/add-movie' element={<AddMovie />}></Route>
        <Route path='/movie/pouler' element={<Populer />}></Route>
        <Route path='/movie/new-play' element={<NewPlay />}></Route>
        <Route path='/movie/top-rated' element={<TopRated />}></Route>
        <Route path='/movie/counter' element={<Counter />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
