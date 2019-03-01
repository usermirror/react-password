import React from 'react'
import ReactDOM from 'react-dom'
import { PasswordInput, Styles } from '../../lib/react-password'

let root = document.getElementById('root')
let app = React.createElement(
  'div',
  {
    style: { width: 400, height: 60 }
  },
  [
    React.createElement('h1', { style: { margin: 0 } }, 'react-password'),
    React.createElement(Styles, { key: 1 }),
    React.createElement(PasswordInput, {
      key: 2,
      placeholder: 'Enter password',
      style: { width: '100%', fontSize: 18 }
    })
  ]
)

ReactDOM.render(app, root)
