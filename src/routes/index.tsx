import React from 'react'
import { Redirect } from 'react-router-dom'
import JsonToInterface from '@/pages/JsonToInterface'
import { RouteConfig } from 'react-router-config'

const routes: RouteConfig[] = [
  {
    path: '/json-to-interface',
    component: JsonToInterface,
  },
]

export default routes
