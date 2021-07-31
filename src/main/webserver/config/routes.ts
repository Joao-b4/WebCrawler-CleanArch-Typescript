import { Express, Router } from 'express'
import { readdirSync } from 'fs'

export default (app: Express): void => {
  const router = Router()
  app.use(router)
  readdirSync(`${__dirname}/../routes`).map(async file => {
    ///  .map file generate by typescript in dist folder
    if (!file.endsWith('.map')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}
