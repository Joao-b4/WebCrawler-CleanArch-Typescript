import 'module-alias/register'
import app from '@/main/webserver/config/app'
import { env } from '@/main/webserver/config'
app.listen(env.port, () => console.log(`Server running ${env.port}`))
