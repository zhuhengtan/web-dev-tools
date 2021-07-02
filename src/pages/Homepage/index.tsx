import React from 'react'
import { Helmet } from 'react-helmet'

const JsonToInterface: React.FC = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>首页</title>
      </Helmet>
      <div>这是首页</div>
    </div>
  )
}

export default React.memo(JsonToInterface)
