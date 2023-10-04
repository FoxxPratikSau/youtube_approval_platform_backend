const {SMTPClient} = require('emailjs');

const client = new SMTPClient({
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD,
    host: process.env.EMAIL_HOST,
    ssl: true
});

export async function sendEmail(to) {
    try {
        await client.sendAsync({
            text: "I hope this message finds you well. Your video has been approved and uploaded to YouTube.",
            from: process.env.EMAIL_USER,
            to,
            subject: "Video approved and uploaded"
        });
    } catch (err) {
        console.error(err);
        throw new Error('Failed to send email');
    }
}