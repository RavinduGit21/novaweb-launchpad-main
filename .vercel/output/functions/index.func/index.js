
import server from './server.js';

export default async function (req, res) {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['host'];
    const url = new URL(req.url, `${protocol}://${host}`);
    
    const request = new Request(url.href, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req,
      duplex: 'half'
    });

    const response = await server.fetch(request);

    res.status(response.status);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    const body = await response.arrayBuffer();
    res.send(Buffer.from(body));
    
  } catch (error) {
    console.error('SSR Entry Error:', error);
    res.status(500).send('Internal Server Error');
  }
}
