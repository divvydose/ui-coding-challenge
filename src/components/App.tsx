import { hot } from 'react-hot-loader/root'
import React from 'react'

import './App.scss'

const App = () => {
  return (
    <div className="app">
      This is the application.
      <div>This is a new awesome div.</div>
    </div>
  )
}

export default hot(App)
