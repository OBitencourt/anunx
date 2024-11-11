

import { post } from '../../../src/controllers/products'
import { createRouter } from 'next-connect'

const route = createRouter()


route.post(post)


export default route.handler({
    onError: (err, req, res) => {
      console.error(err.stack);
      res.status(err.statusCode || 500).end(err.message);
    },
});

export const config = {
  api: {
    bodyParser: false
  }
}