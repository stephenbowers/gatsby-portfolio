const nodemailer = require('nodemailer');

function generateContactEmail({ email, name, message }) {
    return `<div>
        <h2>Contact Form - Message Received</h2>
        <p>From: ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    </div>`;
}

// Create a transport for nodemailer
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

exports.handler = async (event, context) => {
    const body = JSON.parse(event.body)
    // Check if they have filled out the honeypot
    if(body.mapleSyrup) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: `Beep Boop Beep Bop Beep Beep ERR0101` }),
        }
    }

    // Validate the data coming in is correct
    const requiredFields = ['email', 'name', 'message'];

    for(const field of requiredFields) {
        if(!body[field]) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: `You are missing the ${field} field!`}),
            };
        }
    }
    // Send the email

    // Send the success or error message

    // Test send an email
    const info = await transporter.sendMail({
        from: `${body.name} <${body.email}>`,
        to: 'Stephen Bowers <sb@thatstephenbowers.com>',
        subject: "New Message From Contact Form",
        html: generateContactEmail({ email: body.email, name: body.name, message: body.message }),
    });
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Success' }),
    }
}