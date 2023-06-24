function getStorage(info: string) {
  return JSON.parse(localStorage.getItem(`${info}`) as string)
}
function setStorage(name: string, data: any, isStringify = true) {
  if (isStringify)
    localStorage.setItem(name, JSON.stringify(data))
  else localStorage.setItem(name, (data))
}
// 生成随机字符作为 content 的 key
function generateRandomString(length = 6) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength))

  return result
}
const key = generateRandomString
export { getStorage, setStorage, key }
