import React, { useState, useEffect } from 'react'
import Text1 from './Text1'
import { getGreeting } from '../apiClient'

function App () {
  return (
    <>
      <Text1 />
      <h1>Hello World</h1>
    </>
  )
}

export default App
