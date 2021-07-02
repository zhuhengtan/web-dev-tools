/*
 * @Date: 2021-03-04 15:31:31
 * @LastEditors: ZHT
 * @LastEditTime: 2021-03-04 16:07:09
 */
import React from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from './routes'
import '@/lang/i18n'
import './App.css'

const App: React.FC = () => {
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
}

export default App
