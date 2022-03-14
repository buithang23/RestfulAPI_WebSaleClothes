const nodemailer = require("nodemailer");

class MailService {
  static init() {
    this.transporter = nodemailer.createTransport(process.env.Mailer);
  }
  static async sendMail(form, to, subject, text, html) {
    await this.transporter.sendMail({ form, to, subject, text, html });
  }
}
module.exports = MailService;
