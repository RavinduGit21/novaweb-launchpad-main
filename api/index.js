import server from '../dist/server/server.js'

export default async function (req, res) {
  try {
    // 1. Create a Web-compatible Request from the Vercel/Node request
    const protocol = req.headers['x-forwarded-proto'] || 'http'
    const host = req.headers['host']
    const url = new URL(req.url, `${protocol}://${host}`)
    
    const request = new Request(url.href, {
      method: req.method,
      headers: req.headers,
      // Only attach body if it's not a GET/HEAD request
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req,
      // @ts-ignore
      duplex: 'half'
    })

    // 2. Call the TanStack Start fetch handler
    const response = await server.fetch(request)

    // 3. Send the response back to Vercel
    res.status(response.status)
    response.headers.forEach((value, key) => {
      res.setHeader(key, value)
    })
    
    const body = await response.arrayBuffer()
    res.send(Buffer.from(body))
    
  } catch (error) {
    console.error('SSR Error:', error)
    res.status(500).send('Internal Server Error')
  }
}
