import React from 'react'
import {Navbar} from './components'
import Routes from './routes'



const App = () => {
  return (
    <div>
      <div className='app-container'>
      <Navbar/>
      <Routes />
      </div>
    </div>
  )
}

export default App
