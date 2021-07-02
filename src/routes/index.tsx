import React from 'react'
import { Redirect } from 'react-router-dom'
import Homepage from '@/pages/Homepage'
import JsonToInterface from '@/pages/JsonToInterface'
import { RouteConfig } from 'react-router-config'

const routes: RouteConfig[] = [
  {
    path: `${
      process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : ''
    }/`,
    exact: true,
    component: Homepage,
  },
  {
    path: `${
      process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : ''
    }/json-to-interface`,
    exact: true,
    component: JsonToInterface,
  },
]

export default routes
