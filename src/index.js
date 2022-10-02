import React from 'react'
import ReactDOM from 'react-dom'
import Component from './container'
import './index.css'

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div className='box'>
    <Component/>
  </div>
)