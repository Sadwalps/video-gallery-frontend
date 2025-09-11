import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Homepage'
import Likedvideos from './Likedvideos'
import Pagenotfound from './Pagenotfound'
import Songs from './Songs'
import AnimeContent from './AnimeContent'
import EducationAndTutorials from './EducationAndTutorials'
import GamingHighlight from './GamingHighlight'
import Others from './Others'
import TravelAndLifestyle from './TravelAndLifestyle'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/likedvideos' element={<Likedvideos/>}/>
      <Route path='/songs' element={<Songs/>}/>
      <Route path='/animecontent' element={<AnimeContent/>}/>
      <Route path='/educationandtutorial' element={<EducationAndTutorials/>}/>
      <Route path='/gaminghighlight' element={<GamingHighlight/>}/>
      <Route path='/others' element={<Others/>}/>
      <Route path='/travelandlifestyle' element={<TravelAndLifestyle/>}/>
      <Route path='*' element={<Pagenotfound/>}/> 
     </Routes>
    </>
  )
}

export default App
