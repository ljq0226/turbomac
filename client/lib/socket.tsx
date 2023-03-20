import io from 'socket.io-client'

const socket = io('http://localhost:80', {
  query: {
    userId: 'ljq',
  },
})

export default socket
