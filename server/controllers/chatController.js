const axios = require('axios');
require('dotenv').config();

exports.askAI = async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await axios.post(
      'https://api.deepseek.com/v1/chat/completions',
      {
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: userMessage }]
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const aiResponse = response.data.choices[0].message.content;
    res.json({ response: aiResponse });

  } catch (err) {
    console.error('DeepSeek Error:', err.response?.data || err.message);
    res.status(500).json({ error: 'Gagal mengambil respon dari AI' });
  }
};
