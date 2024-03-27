import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'
import FetchProducts from './components/FetchProducts'

function App() {

  return (
    <>
    <NavBar />
    <FetchProducts />
    <Outlet />
    </>
  )
}

export default App
