const nodeMailer = require("nodemailer");


const sendEmail = async(to,subject,text) => {
    try {
        const transporter = nodeMailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASS,
            }
        });
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text
        }
        const info = await transporter.sendMail(mailOptions);
        console.log("Email Sent:", info.response)
        return info;
    } catch (error) {
        console.log(error || "error sending mail");
        
    }
}
module.exports = sendEmail