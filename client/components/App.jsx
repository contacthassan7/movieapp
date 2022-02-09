import React, { Component } from 'react'

// import Componenets
import Header from './layout/Header'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Landing from './home/Landing'

import { getGreeting } from '../apiClient'

class App extends Component {
  state = { message: 'Hello, Dev team' }
  render () {
    return (
      <>
        <div>
          <Header />
        </div>

        <div>
          <br />
        </div>
        <div>
          <Navbar />
        </div>
        <div>
          <Landing />
        </div>
        <div>
          <Footer />
        </div>
      </>
    )
  }
}

export default App
