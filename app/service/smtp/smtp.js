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

let transporter = nodemailer.createTransport(smtpConfig)

/*
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});
*/

// setup email data with unicode symbols
let defaultOptions = {
    from: 'UPMC CoMIT <comit@upmc.edu>', // sender address
    to: 'santuccir@upmc.edu', // list of receivers
    subject: 'Test MR Email', // Subject line
    text: 'Hello world', // plain text body
    html: '<b>Hello world</b>' // html body
};

function EmailService(app) {    
    app.post('/email', (request, response) => {
        console.log(request.body);
        var email = new emailMessage(request.body.from, request.body.to, request.body.subject, request.body.text);
           
        // send mail with defined transport object
        transporter.sendMail(email, (error, info) => {
            if (error) {                
                return response.status(500).send({error: error});
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        })
        
        response.status(200).send('email sent');
    })
}

module.exports = EmailService;