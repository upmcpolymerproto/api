'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let smtpConfig = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: 'raymond.santucci@gmail.com',
        pass: ''
    }
};

let transporter = nodemailer.createTransport(smtpConfig)

/*
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'raymond.santucci@gmail.com',
        pass: ''
    }
});
*/

// setup email data with unicode symbols
let mailOptions = {
    from: '"UPMC MR" <mr@upmc.edu>', // sender address
    to: 'santuccir@upmc.edu', // list of receivers
    subject: 'Test MR Email', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

function EmailService(app) {
    app.get('/email', (request, response) => {
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
    })
}

module.exports = EmailService;