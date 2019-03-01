<br/>
<p align="center">
  <strong><code>🔐 react-password</code></strong>
</p>

<p align="center">
  React components <br/>
  for password management.
</p>
<br/>

<p align="center">
  <a href="https://unpkg.com/react-password@^0.1/lib/index.js"><img src="https://img.badgesize.io/https://unpkg.com/react-password@^0.1/lib/index.js?compression=gzip&amp;label=react--password"></a>
  <a href="https://www.npmjs.com/package/react-password"><img src="https://img.shields.io/npm/v/react-password.svg?maxAge=3600&label=react-password&colorB=007ec6"></a>
</p>
<br/>

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { PasswordManager, Styles } from '../../lib/react-password'

let root = document.getElementById('root')
let app = React.createElement(PasswordManager, {}, [
  React.createElement(Styles, { key: 1 })
])

ReactDOM.render(app, root)
```

#### Installation

Install with npm:

```console
npm install --save react-password
```

Or yarn:

```console
yarn add react-password
```

Or using a script tag:

```html
<script
  src="https://unpkg.com/react-password@^0.1/lib/index.umd.js"
  crossorigin="anonymous"
></script>
```
