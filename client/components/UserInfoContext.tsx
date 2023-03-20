import { createContext } from 'react'

interface Props {
  id: string
  username: string
  avatar: string
  role: string
  createAt?: Date
}

const UserInfoContext = createContext<Props>({
  id: '',
  username: '',
  avatar: '',
  role: '',
})

export default UserInfoContext
