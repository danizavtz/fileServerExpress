(function() {

  'use strict';

  const express = require('express');
  const router = express.Router();

  router.get('/caderno1', (req, res) => {
    res.contentType("application/pdf");
    res.status(200).sendFile(__dirname + '/cadernos/CADERNO1.pdf');
  });
  router.get('/caderno2', (req, res) => {
    res.contentType("application/pdf");
    res.status(200).sendFile(__dirname + '/cadernos/CADERNO2.pdf');
  });
  router.get('/caderno3', (req, res) => {
    res.contentType("application/pdf");
    res.status(200).sendFile(__dirname + '/cadernos/CADERNO3.pdf');
  });

  module.exports = router;


}());