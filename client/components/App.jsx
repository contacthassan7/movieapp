import React, { Component } from 'react'
import Header from './Header'
import Navbar from './Navbar'
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
      </>
    )
  }
}

export default App
