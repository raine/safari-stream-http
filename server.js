const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.get('/stdin', (req, res) => {
  res.set({ "Cache-Control": 'no-cache, no-store, must-revalidate' })
  process.stdin.pipe(res)
})

app.listen(3000)
