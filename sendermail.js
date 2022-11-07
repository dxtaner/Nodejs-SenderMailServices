const nodemailer = require("nodemailer");
var fs = require("fs");

// Env
var dotenv = require("dotenv");

// Multer
// Validation

// Async
// const asyncHandler = require("express-async-handler");
dotenv.config();

var user = process.env.EMAIL_ADRESS; // mail servis adresi
var pass = process.env.EMAIL_PASSWORD; // mail servis şifresi

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass,
  },
});

fs.readFile("cv.pdf", function (err, data) {
  if (err) throw err;
  // console.log(data);
});

var subject = "Başvuru";
var text =
  "Öz geçmişimin değer katabilecek uygun pozisyonlar için değerlendirilmesini" +
  "rica ediyorum. İlginize şimdiden teşekkür ederim. Saygılarımla;"; // mail mesajı
var tomail = ["abc@yandex.com", "cxay@gmail.com"]; // gönderilecek mail adresleri
// var tomail = ["info@abc.com"];

let mailDetails = {
  // from: req.body.from,
  from: user,
  to: tomail,
  subject: subject,
  text: text,
  // html: req.body.html,
  attachments: [
    {
      filename: "cv.pdf", // pdf dosyası buraya gelecek  => "cv.pdf"
      path: "cv.pdf", // pdf dosyası buraya gelecek  => "cv.pdf"
      contentType: "application/pdf",
    },
  ],
};

mailTransporter.sendMail(mailDetails, function (err, data) {
  if (err) {
    res
      .status(500)
      .send({ message: "Mail gönderirken bir hata oluştu", success: false });
  } else {
    res
      .status(200)
      .send({ message: "Mail başarıyla gönderildi", success: true });
  }
});
