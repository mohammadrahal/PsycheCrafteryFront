import React, { useState } from 'react';

const Chatbot = () => {
  const [send, setSend] = useState('');
  const [responseText, setResponseText] = useState('');
  const [error, setError] = useState(null);

  const api_key = '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';
  const api_Url =
    'https://api.openai.com/v1/engines/text-davinci-003/completions';

  const messageBot = async () => {
    try {
      const response = await fetch(api_Url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${api_key}`,
        },
        body: JSON.stringify({
          prompt: send,
          max_tokens: 100,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from the chatbot.');
      }

      const data = await response.json();
      setResponseText(data.choices[0].text);
      setError(null);
    } catch (error) {
      console.error('Error sending message to the chatbot:', error);
      setResponseText('');
      setError('Failed to get a response. Please try again.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={send}
        onChange={(e) => setSend(e.target.value)}
        placeholder="Enter message"
      />
      <button onClick={messageBot}>Send</button>
      {error && <div>Error: {error}</div>}
      {responseText && <div>{responseText}</div>}
    </div>
  );
};

export default Chatbot;
