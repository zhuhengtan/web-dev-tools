interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}

interface JsonObject {
  [key: string]:
    | number
    | number[]
    | string
    | string[]
    | boolean
    | boolean[]
    | JsonObject
    | JsonObject[]
}
