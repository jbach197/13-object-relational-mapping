'use strict';

import express from 'express';
import morgan from 'morgan';

const router = express.Router();

//import model finder from middleware models.js
//router.param('model', modelFinder);

router.get('/api/v1/model', (req, res, next) => {
  let output = {route:'get/api/v1/model', model:req.params.model}
})


let sendJSON = (req, res) => {
  res.statusCode(200);
  res.statusMessage = 'ok';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
}

export default router;