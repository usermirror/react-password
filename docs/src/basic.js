import React from 'react'
import ReactDOM from 'react-dom'
import { PasswordManager, Styles } from '../../lib/react-password'

let root = document.getElementById('root')
let app = React.createElement(PasswordManager, {}, [
  React.createElement(Styles, { key: 1 })
])

ReactDOM.render(app, root)
