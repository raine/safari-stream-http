import http from 'stream-http'

http.get(
  {
    host: 'localhost',
    port: 3000,
    path: '/stdin',
    mode: 'prefer-streaming'
  },
  (res) => {
    res.on('data', (chunk) => {
      self.postMessage(chunk.toString())
    })
  }
)
