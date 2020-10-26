import React from 'react'
import ReactDOM from 'react-dom'
import { setConfig } from 'react-hot-loader'

import App from './components/App'

setConfig({ reloadHooks: false })

ReactDOM.render(<App />, document.getElementById('app'))
