import Footer from './components/Footer'
import Nav from './components/Nav'
import Inicio from './components/Inicio'
import Prueba from './components/Prueba'

import { HashRouter, Routes, Route } from 'react-router-dom'

const App = () => {
 
  return (
    <div>
       <HashRouter>
                  <Nav/>
                  <Routes>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="/prueba" element={<Prueba/>} />
                    <Route path="*" element={<p>Not found</p>}/>
                  </Routes>
          </HashRouter>
          <Footer/>
    </div>
  )
}


export default App