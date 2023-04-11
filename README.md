项目详细介绍：https://juejin.cn/post/7220327699385532471

## 技术栈

- Next.js 13
  - [Zustand](https://github.com/pmndrs/zustand)
  - Tailwind CSS
  - Framer-motion
- Nest.js
  - [ Prisma](https://www.prisma.io/)
  - mysql
- Socket.io
- TurboRepo
- TurboPack
- Netlify

工具库：

- [Daisyui](https://daisyui.com/components/)
- [@neodrag/react](https://www.neodrag.dev/docs/react)
- ahooks

## 项目优点

- TypeScript 全栈开发
- 基于最新技术(Next.js 13、TurboPack、RSC)实践
- TurboRepo 管理项目结构
- 组件化开发、代码逻辑清晰
- 页面简洁大方
- 动画效果丰富


## 效果展示

- 在线体验： [TurboMac](https://turbomac.netlify.app/)

TopBar 状态栏：

- Dark / Light 模式切换
- 全局右键增加 ContextMenu

![desktop.gif](https://obs-pic-1309372570.cos.ap-chongqing.myqcloud.com/pic/desktop.gif)

打开关闭 APP：

- 每个 APP 的窗口顶部范围**可拖拽**，双击顶部范围可放大
  ![app.gif](https://obs-pic-1309372570.cos.ap-chongqing.myqcloud.com/pic/app.gif)

启动 LaunchedPad:

- 也可通过 hover 窗口的 4 个角落来触发

Terminal

- 可跳转文件路径、打开文件
- 通过上下键切换历史 command 记录
- 通过 Tab 键补全历史 command
- 命令行打开或关闭 APP
  ![terminal.gif](https://obs-pic-1309372570.cos.ap-chongqing.myqcloud.com/pic/terminal.gif)

TurboChat

- 即时通讯
- 滚动加载
- 文件上传
- 过渡动画
  ![chat1.gif](https://obs-pic-1309372570.cos.ap-chongqing.myqcloud.com/pic/chat1.gif)

ChatGPT

- 接入 OpenAI API，在线使用 ChatGPT
  ![gpt.gif](https://obs-pic-1309372570.cos.ap-chongqing.myqcloud.com/pic/gpt.gif)

VSCode

- 借助[github1s](https://github.com/conwnet/github1s) 在线查看[源代码](https://github.com/ljq0226/turbomac)



## 项目启动

前往 [github 项目地址](https://github.com/ljq0226/turbomac) 拉取项目源代码.

终端进入文件夹目录，运行 `npm install` 或 ` pnpm install`

分别在 client 和 server 文件夹下创建 .env 文件

client/.env

```
NEXT_PUBLIC_OPENAI_API_KEY= 你自己的 OpenAI Key
NEXT_PUBLIC_NODE_ENV= dev

# 部署到服务器相关
# NEXT_PUBLIC_HOST = 例如https://175.24.18:8080/
# NEXT_PUBLIC_WEBSOCKET = 例如https://175.24.18:81/
```

server/.env

```
# 部署上线 mysql
# DATABASE_URL= "mysql://ljq:ljq@175.24.18:3306/my_mac"
# 本地mysql 将自己的 username\password\database名字换入
DATABASE_URL= "mysql://username:password@localhost:3306/database"
# 下面为腾讯云 ID 和 KEY 填入自己的信息
TX_SECRET_ID = 'AKID8J....'
TX_SECRET_KEY = 'vaz81....'
# COS 存储桶
TX_BUCKET = 'turbomac-13093...'
TX_REGION = 'ap-shanghai'
```

cd 进入 server 文件夹，执行 `npx prisma migrate dev --name init` 初始化数据库，
执行 `prisma generate` 以使用 prisma client.

运行 client 和 server 有两种方式：

- (推荐)分别进入 client 和 server 文件夹下 运行 `npm run dev` 或 `pnpm run dev`
- 直接在根目录运行 `turbo dev`

运行之后，服务端将在 8080 端口，客户端在 3000 端口上，打开 localhost:3000，便可看到页面了。
注册用户：
前往 postman / apifox 等接口请求工具，注册用户接口：`http://localhost:8080/register`
![image.png](https://obs-pic-1309372570.cos.ap-chongqing.myqcloud.com/pic/202303282104802.png)

登录 TurboChat
![image.png](https://obs-pic-1309372570.cos.ap-chongqing.myqcloud.com/pic/202303282114895.png)

### 如何添加其它 App

![image.png](https://obs-pic-1309372570.cos.ap-chongqing.myqcloud.com/pic/202303282134678.png)

