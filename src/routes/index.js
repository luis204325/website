const { Router } = require ('express');
const router = Router();
const nodemailer = require("nodemailer");


router.post('/send-email', async (req, res) => {
   const { name, email, phone, message} = req.body;

    contentHTML = `
        <h1>User information </h1>
        <ul>
            <li>Username: ${name}</>
            <li>Phone: ${phone}</>
            <li>Email: ${email}</>
        </ul>
        <p>${message}</p >
    `;
    const transporter = nodemailer.createTransport({
        host: '',
        port: '',
        secure:'',
        auth: {
            user: '',
            pass: ''
        }

    });

  const info = await transporter.sendMail({
        from: '',
        to : '',
        subject: 'website contact form',
        text: 'hello word'
    });
    console.log('message sent', info.message);
    res.send('recivido');
})

module.exports = router;
 