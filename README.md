Node.js Email Sender
====================

Prerequisites
-------------

*   Node.js installed on your machine. You can download Node.js from the official website: [https://nodejs.org](https://nodejs.org)
*   Gmail account credentials (email address and password).

Setup
-----

1.  Clone the repository or download the script file.
2.  Install the required dependencies by running the following command in the project directory:

    npm install nodemailer dotenv

3.  Create a `.env` file in the project directory and add the following lines, replacing `EMAIL_ADDRESS` and `EMAIL_PASSWORD` with your Gmail account credentials:

    EMAIL_ADDRESS=your-email@gmail.com
    EMAIL_PASSWORD=your-email-password

4.  Place the PDF file you want to attach in the same directory as the script and name it `cv.pdf`.

Usage
-----

1.  Open the terminal or command prompt and navigate to the project directory.
2.  Run the script using the following command:

    node script.js

The script will send an email with the attached PDF file to the specified recipients.

*   Modify the `tomail` variable in the script to include the email addresses you want to send the email to.
*   Update the `subject` and `text` variables in the script with your desired email subject and message.

Additional Details
------------------

The `mailTransporter.sendMail()` function in the script uses Nodemailer to send the email. It configures the transporter with Gmail as the email service provider and uses the credentials provided in the `.env` file for authentication.

The script reads the contents of the `cv.pdf` file using the `fs.readFile()` function, which should be present in the same directory as the script.

Make sure to handle any errors that may occur during the email sending process and provide appropriate error messages or notifications to the user.

That's it! You have successfully set up and run the Node.js email sender script. You should see the output indicating whether the email was sent successfully or if an error occurred.
