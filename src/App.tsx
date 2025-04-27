

import { Routes,BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import { Incident } from './pages/Incident'
import { Home } from './pages/Home'

function App(){
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/incidents" element={<Incident/>}/>

      </Routes>
    </BrowserRouter>

  </div>
}



export default App
