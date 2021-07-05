import React, { useCallback, useState } from 'react'
import { Helmet } from 'react-helmet'
import './style.scoped.scss'

const JsonToInterface: React.FC = () => {
  const [jsonValue, setJsonValue] = useState('')
  const [interfaceValue, setInterfaceValue] = useState('')

  const onJsonValueInput = useCallback(
    (e) => {
      setJsonValue(e.target.value)
      let res = 'interface #interfaceName#'

      const dealObject = (obj: JsonObject, level: number) => {
        let tmp = '{'
        let whitespace = ''
        let propertyWhitespace = '  '
        for (let i = 1; i < level; i++) {
          whitespace += '  '
          propertyWhitespace += '  '
        }
        Object.keys(obj).forEach((key) => {
          if (typeof obj[key] === 'object') {
            tmp += `\n${propertyWhitespace}${whitespace}${key}: ${dealObject(
              obj[key] as JsonObject,
              level + 1
            )}`
          } else {
            tmp += `\n${propertyWhitespace}${key}: ${typeof obj[key]}`
          }
        })
        tmp += `\n${whitespace}}`
        return tmp
      }
      const jsonObject = JSON.parse(jsonValue)
      res += dealObject(jsonObject, 1)
      setInterfaceValue(res)
    },
    [jsonValue]
  )

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>json转ts interface</title>
      </Helmet>
      <div className="json-to-interface-container">
        <textarea placeholder="请输入json" onInput={onJsonValueInput} />
        {/* <div className="transfer-btn">转换</div> */}
        <textarea disabled placeholder="interface" value={interfaceValue} />
      </div>
    </>
  )
}

export default React.memo(JsonToInterface)
