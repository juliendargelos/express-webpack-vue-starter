import application from './application'
import './router'

const port = process.env.PORT || 8080

application.listen(port, () => console.log(`Listening on localhost:${port}`))
