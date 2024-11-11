

import { remove } from '../../../src/controllers/products'
import { createRouter } from 'next-connect'

const route = createRouter()


route.delete(remove)

export default route.handler({
    onError: (err, req, res) => {
      console.error(err.stack);
      res.status(err.statusCode || 500).end(err.message);
    },
});

