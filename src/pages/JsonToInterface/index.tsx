import React from 'react'
import { Helmet } from 'react-helmet'

const JsonToInterface: React.FC = () => {
  console.log(123)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>json转ts interface</title>
      </Helmet>
      <div>1234</div>
    </div>
  )
}

export default React.memo(JsonToInterface)
