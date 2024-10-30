

import { post } from '../../../src/controllers/auth/signin'
import { createRouter } from 'next-connect'

const route = createRouter()

route.post(post)

export default route.handler({
    onError: (err, req, res) => {
      console.error(err.stack);
      res.status(err.statusCode || 500).end(err.message);
    },
});