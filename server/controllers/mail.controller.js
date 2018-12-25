(function() {
    'use strict';
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'inpayapp@gmail.com',
            pass: '1ngenico'
        },
        logger: false, // log to console
        debug: false // include SMTP traffic in the logs
    });

    exports.sendEmail = function(req, res) {
        console.log(req)
        let mailOptions = {
            from: 'inpayapp@gmail.com',
            subject: '[Projeto de vida] ' + req.body.subtitle,
            text: 'Mensagem de: ' + req.body.name + ', email: [' + req.body.email + '] ' + req.body.message,
            to: 'cezarnonato@yahoo.com'
        }
        transporter.sendMail(mailOptions).then((trans) => {
            res.json(trans);
            res.end();
        }).catch((error) => {
            res.json(error);
            res.end();
        });
    }


}());