export function getRealTypeOfObj(obj: unknown): string {
  if (obj === null) {
    return 'null'
  }
  if (Array.isArray(obj)) {
    return 'array'
  }
  return typeof obj
}
