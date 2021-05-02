import 'reflect-metadata'
import { App } from './app'

require('./database')

const server = new App()
const port = process.env.PORT || 3000

const main = async ()=>{
  await server.app.listen(port)
  console.log(' ❤️‍🔥 Server Startup http://localhost:3000 ')
}

main()  