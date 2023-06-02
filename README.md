Nodemailer Mail Sender
======================

Prerequisites
-------------

Before running the application, make sure you have the following:

*   Node.js installed on your machine
*   Gmail account credentials (email address and password)
*   PDF file named "cv.pdf" in the application directory

Installation
------------

To install and run the Nodemailer Mail Sender, follow these steps:

1.  Clone the repository:

    $ git clone https://github.com/your-username/nodemailer-mail-sender.git

3.  Navigate to the project directory:

    $ cd nodemailer-mail-sender

5.  Install the dependencies:

    $ npm install

7.  Configure the email account:

*   Open the `.env` file.
*   Replace the `EMAIL_ADDRESS` and `EMAIL_PASSWORD` placeholders with your Gmail account credentials.

9.  Start the application:

    $ node app.js

11.  The application will send an email with the PDF attachment to the specified recipients.

Usage
-----

To use the Nodemailer Mail Sender, follow these steps:

1.  Make sure the application is running.
2.  Modify the `subject`, `text`, and `tomail` variables in the `app.js` file to customize the email subject, message, and recipients.
3.  Place the PDF file you want to attach in the application directory and name it "cv.pdf".
4.  Save the changes to the `app.js` file.
5.  Restart the application by running `node app.js`.
6.  The application will send an email with the updated information and the PDF attachment to the specified recipients.

Contributing
------------

Contributions to the Nodemailer Mail Sender are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

License
-------

Nodemailer Mail Sender is open-source software licensed under the MIT License.
