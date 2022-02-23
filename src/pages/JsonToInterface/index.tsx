import React, { useCallback, useState } from 'react'
import { Helmet } from 'react-helmet'
import { getRealTypeOfObj } from '@/utils'
import './style.scoped.scss'

const JsonToInterface: React.FC = () => {
  const [jsonValue, setJsonValue] = useState('')
  const [interfaceValue, setInterfaceValue] = useState('')

  const onJsonValueChange = useCallback(
    (e) => {
      setJsonValue(e.target.value)
      let res = 'interface RootObject'

      const dealObject = (obj: unknown, level: number) => {
        let tmp = ''
        let whitespace = ''
        let propertyWhitespace = '  '
        for (let i = 1; i < level; i++) {
          whitespace += '  '
          propertyWhitespace += '  '
        }
        if (Array.isArray(obj)) {
          // 如果是数组，要判断元素是否是基础类型，并且还要判断每个元素类型是否一样，长度为2且数据类型不同，则认为是元组，否则认为是联合类型的数组
          if (
            obj.length === 2 &&
            getRealTypeOfObj(obj[0]) !== getRealTypeOfObj(obj[1])
          ) {
            const obj1Type = getRealTypeOfObj(obj[0])
            const obj2Type = getRealTypeOfObj(obj[1])
            tmp += `[${
              obj1Type === 'object'
                ? dealObject(obj[0] as unknown, level + 1)
                : obj1Type
            }, ${
              obj2Type === 'object'
                ? dealObject(obj[1] as unknown, level + 1)
                : obj2Type
            }]`
          } else {
            const map = new Map() // 使用map存所有的类型,如果最后只有一个key则直接返回 类型[]
            obj.forEach((item) => {
              map.set(getRealTypeOfObj(item), true)
            })
            const mapArray = Array.from(map)
            if (mapArray.length === 1) {
              if (mapArray[0][0] === 'object') {
                let tmpObject = {}
                obj.forEach((item) => {
                  tmpObject = { ...tmpObject, ...item }
                })
                const objectKeyMap = new Map()
                obj.forEach((item) => {
                  Object.keys(tmpObject).forEach((key) => {
                    const typeList = objectKeyMap.get(key) || []
                    const type = getRealTypeOfObj(item[key])
                    if (type === 'object') {
                      // 层级过深，抛出错误
                      setInterfaceValue('invalid json')
                    } else if (type === 'array') {
                      typeList.push(dealObject(item[key], level + 1))
                      objectKeyMap.set(key, typeList)
                    } else {
                      typeList.push(type)
                      objectKeyMap.set(key, typeList)
                    }
                  })
                })
                tmp += `\n${propertyWhitespace}{`
                Array.from(objectKeyMap).forEach(([key, typeList]) => {
                  tmp += `\n${whitespace}${propertyWhitespace}${key}`
                  const tmpTypeList = Array.from(new Set(typeList))
                  if (tmpTypeList.indexOf('undefined') >= 0) {
                    tmp += '?'
                  }
                  tmp += ': '
                  tmp += tmpTypeList
                    .filter((item) => item !== 'undefined')
                    .join(' | ')
                })
                tmp += `\n${propertyWhitespace}}`
              } else {
                tmp += mapArray[0][0]
              }
            } else if (mapArray.length > 1) {
              tmp += '('
              mapArray.forEach((item, index) => {
                tmp += item[0]
                if (index !== mapArray.length - 1) {
                  tmp += ' | '
                }
              })
              tmp += ')'
            }
            tmp += '[]'
          }
        } else {
          tmp += '{'
          Object.keys(obj as JsonObject).forEach((key) => {
            if (Array.isArray((obj as JsonObject)[key] as unknown)) {
              tmp += `\n${propertyWhitespace}${key}: ${dealObject(
                (obj as JsonObject)[key] as unknown,
                level + 1
              )}`
            } else if (typeof (obj as JsonObject)[key] === 'object') {
              if ((obj as JsonObject)[key] === null) {
                tmp += `\n${propertyWhitespace}${key}: null | [to be determined]`
              } else {
                tmp += `\n${propertyWhitespace}${key}: ${dealObject(
                  (obj as JsonObject)[key] as unknown,
                  level + 1
                )}`
              }
            } else {
              tmp += `\n${propertyWhitespace}${key}: ${typeof (obj as JsonObject)[
                key
              ]}`
            }
          })
          tmp += `\n${whitespace}}`
        }
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
        <textarea placeholder="请输入json" onChange={onJsonValueChange} />
        {/* <div className="transfer-btn">转换</div> */}
        <textarea disabled placeholder="interface" value={interfaceValue} />
      </div>
    </>
  )
}

export default React.memo(JsonToInterface)
