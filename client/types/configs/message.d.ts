export interface Message{
  id:number
  userId:string
  roomId?:string
  content:string
  type:string
  createAt?:Date
  size:string
  user?:{
    username:string
    avatar:string
  }
}
