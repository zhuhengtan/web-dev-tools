import React from 'react'
import { Redirect, useParams, generatePath } from 'react-router'

interface Props {
  to: string
}

const RedirectWithParam: React.FC<Props> = (props: Props) => {
  let { to } = props

  const params = useParams<{ [key: string]: string }>()
  to = generatePath(to, params)

  return <Redirect to={to} />
}

export default React.memo(RedirectWithParam)
