import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Courses from './pages/Courses'
import Gallery from './pages/Gallery'
import ContactUs from './pages/ContactUs'
import CompetitiveSwim from './pages/CompetitiveSwim'
import NewNavbar from './components/NewNavbar'
import LearnToSwim from './pages/coursePages/LearnToSwim'
import Intermediate from './pages/coursePages/Intermediate'
import Advanced from './pages/coursePages/Advanced'
import Beginner from './pages/coursePages/Beginner'
import StrokeSchool from './pages/coursePages/StrokeSchool'
import Pallavaram from './pages/branches/Pallavaram'
import Incor from './pages/branches/Incor'
import Aquaclub from './pages/Aquaclub'
import AthleteImages from './pages/galleryPages/AthleteImages'
import FoundationImages from './pages/galleryPages/FoundationImages'
import CelebrationImages from './pages/galleryPages/CelebrationImages'
import { Train } from 'lucide-react'
import TrainingImages from './pages/galleryPages/TrainingImages'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="">
    <BrowserRouter>
    {/* <NativeNavbar/> */}
    <NewNavbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/swimming-courses' element={<Courses/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/competitive-swimming' element={<CompetitiveSwim/>}/>
      <Route path='/aquaclub' element={<Aquaclub/>}/>

      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/gallery-athletes' element={<AthleteImages/>}/>
      <Route path='/gallery-foundation' element={<FoundationImages/>}/>
      <Route path='/gallery-celebrations' element={<CelebrationImages/>}/>
      <Route path='/gallery-training' element={<TrainingImages/>}/>


      <Route path='/pallavaram' element={<Pallavaram/>}/>
      <Route path='/incor' element={<Incor/>}/>

      <Route path='/courses/learn-to-swim' element={<LearnToSwim/>}/>
      <Route path='/courses/beginner' element={<Beginner/>}/>
      <Route path='/courses/intermediate' element={<Intermediate/>}/>
      <Route path='/courses/advanced' element={<Advanced/>}/>
      <Route path='/courses/stroke-school' element={<StrokeSchool/>}/>

    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
