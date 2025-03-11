import emailjs from '@emailjs/browser';

const sendEmail = (to_email, name) => {
  const templateParams = {
    to_email: to_email,
    name: name,
  };

  emailjs
    .send(
      'service_0uq0s5k',
      'template_nsixjen',
      templateParams,
      's8fl-J--kA_aDZAa1'
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (err) => {
        console.log('FAILED...', err);
      }
    );
};

export default sendEmail;
