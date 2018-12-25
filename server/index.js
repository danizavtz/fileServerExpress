(function() {

  'use strict';
  const express = require('express');
  const router = express.Router();
  const emailService = require('./controllers/mail.controller.js')

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
  router.post('/sendmail', emailService.sendEmail);

  module.exports = router;


}());