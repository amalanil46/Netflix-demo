import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import {originals,action, horror, romance} from './Urls'
import "./App.css"
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/RowPost/Rowpost'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={action} title='Action' isSmall/>
      <Rowpost url={horror} title='Horror Movies' isSmall/>
      <Rowpost url={romance} title='Romance Movies' isSmall/>
    </div>
  )
}

export default App
