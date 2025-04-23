export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbztAVkBNUTAnBafe5MxJhAQnsrfVGsHSNrI70j-rqoCt-5iwNNdECoJbC5bsw4BOV3z/exec',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      }
    );

    const result = await response.text();
    res.status(200).send(result);
  } catch (error) {
    console.error('Proxy Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
