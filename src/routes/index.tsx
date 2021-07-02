import React from 'react'
import { Redirect } from 'react-router-dom'
import Homepage from '@/pages/Homepage'
import JsonToInterface from '@/pages/JsonToInterface'
import { RouteConfig } from 'react-router-config'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: `${
      process.env.NODE_ENV === 'production' ? '/web-dev-tools' : ''
    }/json-to-interface`,
    component: JsonToInterface,
  },
]

export default routes
