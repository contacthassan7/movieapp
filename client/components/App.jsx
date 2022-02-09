import React, { Component } from 'react'
import Header from './Header'

import { getGreeting } from '../apiClient'

class App extends Component {
  state = { message: 'Hello, Dev team' }
  render () {
    return (
      <div>
        <Header />
      </div>

    )
  }
}

export default App
