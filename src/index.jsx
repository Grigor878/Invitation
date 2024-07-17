import React from 'react'
import ReactDOM from 'react-dom/client'
import View from './view/view.jsx'
import "../src/services/i18next/i18next.js";
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <View />
  </React.StrictMode>,
)
