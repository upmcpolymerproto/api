'use strict';

const nodemailer = require('nodemailer');
var emailMessage = require('../../domain/emailmessage/emailmessage');

// create reusable transporter object using the default SMTP transport
let smtpConfig = {
    host: 'smtp.gmail.com',    
    port: 587,
    secure: false,    
    auth: {
        user: 'upmcproto@gmail.com',
        pass: 'p@ssW0rd'
    }    
};

let transporter = nodemailer.createTransport(smtpConfig);

function EmailService(server) {
    server.post('/email', function (req, res, next) {
        //var json = JSON.parse(req.body);
        console.log(req.body.from, req.body.to, req.body.subject, req.body.text);
        var email = new emailMessage(req.body.from, req.body.to, req.body.subject, req.body.text);
                
        // send mail with defined transport object
        transporter.sendMail(email, (error, info) => {
            if (error) {                
                return res.send(500, {error: error});
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        })

        res.send(200, 'email sent');
    });
}

module.exports = EmailService;