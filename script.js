/*
  Este script llama a la API de OpenAI para generar una respuesta
  a partir del mensaje del usuario. Es necesario establecer
  una clave API válida en `apiKey`. No incluyas tu clave en
  repositorios públicos; utiliza mecanismos seguros como variables
  de entorno o almacén de secretos para protegerla.
*/

const apiKey = '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';

document.getElementById('send-button').addEventListener('click', async () => {
  const input = document.getElementById('user-input').value.trim();
  const responseContainer = document.getElementById('response');
  if (!input) {
    responseContainer.textContent = 'Por favor, escribe algo para enviar.';
    return;
  }
  responseContainer.textContent = 'Procesando...';
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Eres un asistente útil que responde en español.' },
          { role: 'user', content: input },
        ],
        max_tokens: 200,
        temperature: 0.7,
      }),
    });
    if (!res.ok) {
      throw new Error(`Error de API: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    const message = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
    responseContainer.textContent = message || 'No se pudo obtener una respuesta.';
  } catch (error) {
    console.error(error);
    responseContainer.textContent = `Ocurrió un error: ${error.message}`;
  }
});
