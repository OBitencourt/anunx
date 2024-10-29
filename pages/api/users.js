

import { get, post } from '../../src/controllers/users'
import { createRouter } from 'next-connect'

const route = createRouter()

route.get(get)

route.post(post)

export default route.handler({
    onError: (err, req, res) => {
      console.error(err.stack);
      res.status(err.statusCode || 500).end(err.message);
    },
});