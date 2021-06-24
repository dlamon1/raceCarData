const express = require('express');
const f = require('./fetch')

const port = process.env.PORT || 5000;
const app = express();

function spinUp(url) {

  if (url.startsWith('https://')) {


    app.get('/', async (req, res) => {
      console.log(req)
      let x = await f.get(url)
      res.json(
        x
      );
    });


    app.listen(port, () => {
      console.log(`Listening: http://localhost:${port}`);
    });

  }
}

module.exports = { spinUp }