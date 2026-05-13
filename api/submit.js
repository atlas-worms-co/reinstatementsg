export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, company, email, phone, size, date, message } = req.body;

  const payload = {
    access_key: process.env.WEB3FORMS_KEY,
    subject: `New Reinstatement Enquiry — ${company || name}`,
    from_name: 'reinstatement.sg',
    name,
    company,
    email,
    phone,
    'Space Size': size,
    'Move-Out Date': date,
    message,
  };

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  return res.status(response.status).json(data);
}
