import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Homepage'
import Likedvideos from './Likedvideos'
import Pagenotfound from './Pagenotfound'
import Songs from './Songs'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/likedvideos' element={<Likedvideos/>}/>
      <Route path='/songs' element={<Songs/>}/>
      <Route path='*' element={<Pagenotfound/>}/> 
     </Routes>
    </>
  )
}

export default App
