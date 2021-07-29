import 'module-alias/register'
/// desacoplando abertura da porta e testar somente o app.ts
import app from '@/main/webserver/config/app'
import { env } from '@/main/webserver/config'
app.listen(env.port, () => console.log(`Server running ${env.port}`))
