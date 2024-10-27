import { useEffect, useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeProvider } from './context/themeContext'
import {Provider} from 'react-redux'
import store from './store/store'
import Cart from './components/Cart'

import Dashbord from './components/Dashbord'

function App() {
  const [themeMode, setThemeMode] = useState('light')

    const lightMode = ()=>{
      setThemeMode('light')
    }
    const darkMode = ()=>{
      setThemeMode('dark')
    }

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
  <>
    <Provider store={store}>
  <ThemeProvider value={{themeMode,lightMode, darkMode}}>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home/>}>
            <Route index element={<Dashbord/>} /> 
            <Route path='/cart' element={<Cart/>} />
            {/* <Route path='/cart2' element={<Cart2/>} /> */}
      </Route>
      {/* <Route path='dash2' element={<Dash2/>}/> */}

      <Route path='Navbar' element={<Navbar/>} />
      <Route path='Footer' element={<Footer/>} />
      
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </Provider>

  </>
  )
}

export default App
