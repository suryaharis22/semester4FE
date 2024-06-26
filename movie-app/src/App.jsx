// src/App.jsx
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import AddMovie from './Pages/AddMovie'
import Populer from './Pages/Populer'
import TopRated from './Pages/TopRated'
import NowPlay from './Pages/NowPlay'
import Layout from './Layout/Layout'
import Counter from './Pages/Counter'
import { ThemeProvider } from 'styled-components'
import theme from './utils/theme'
import GlobalStyle from './components/GlobalStyle'
import Detail from './Pages/Detail'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movie/about' element={<About />}></Route>
          <Route path='/movie/add-movie' element={<AddMovie />}></Route>
          <Route path='/movie/pouler' element={<Populer />}></Route>
          <Route path='/movie/new-play' element={<NowPlay />}></Route>
          <Route path='/movie/top-rated' element={<TopRated />}></Route>
          <Route path='/movie/counter' element={<Counter />}></Route>
          <Route path='/movie/:id' element={<Detail />}></Route>
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
