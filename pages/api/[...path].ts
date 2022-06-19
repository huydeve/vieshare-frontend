// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // dont send cookies to api server 
  req.headers.cookie = ''
  proxy.web(req, res, {
    target: 'https://backend-vieshare-stg.vi-vu.vn',
    changeOrigin: true,
    selfHandleResponse: false,
  })
}
