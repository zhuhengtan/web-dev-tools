import React from 'react'
import { Helmet } from 'react-helmet'

interface Test {
  test1: string
  test2: number
  test3: boolean
  test4: {
    test5: string
    test6: {
      test7: string
      test8: (string | number)[]
      test9: string[]
      test10: number[]
    }
  }
  test11: {
    test12: string
    test13: number
    test14: (string | number | boolean)[]
    test15: string[]
    test16: number[]
  }[]
  test17: [
    (number | string | boolean)[],
    {
      test18: number
      test19: string
    },
    number[],
    {
      test20: number
      test21: string
    }
  ]
}

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
