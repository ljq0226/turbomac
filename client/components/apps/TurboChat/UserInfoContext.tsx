import { createContext } from 'react'
import type { UserInfo } from 'types'

const UserInfoContext = createContext<UserInfo>({
  id: '',
  role: '',
  username: '',
  avatar: '',
  createAt: new Date(),

})
export default UserInfoContext
