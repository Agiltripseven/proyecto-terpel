import Footer from './components/Footer'

import Inicio from './components/Inicio'
import InterfazViveTerpel from './components/InterfazViveTerpel'
import Nav from './components/Nav'
import { HashRouter,Routes,Route } from 'react-router-dom' 



import Prueba from './components/Prueba'



const App = () => {
 
  return (
    <div>

      <HashRouter>
        <Nav/>
        <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route  path='/interfaz' element={<InterfazViveTerpel/>}/>
        <Route path="*" element={<p>Not found</p>}/>
        </Routes>
       </HashRouter>
       <Footer/>


    </div>
  )
}


export default App