/*
  Este script llama a la API de OpenAI para generar una respuesta
  a partir del mensaje del usuario. Es necesario establecer
  una clave API válida en `apiKey`. No incluyas tu clave en
  repositorios públicos; utiliza mecanismos seguros como variables
  de entorno o almacén de secretos para protegerla.
*/

const apiKey = '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';

// Si usas una clave de proyecto (prefijo 'sk-proj-'), extrae el ID de proyecto para el encabezado OpenAI-Project.
const projectId = apiKey.startsWith('sk-proj-') ? apiKey.split('-')[2] : null;

document.getElementById('send-button').addEventListener('click', async () => {
  const input = document.getElementById('user-input').value.trim();
  const responseContainer = document.getElementById('response');
  if (!input) {
    responseContainer.textContent = 'Por favor, escribe algo para enviar.';
    return;
  }
  responseContainer.textContent = 'Procesando...';
  try {
    // Prepara cabeceras de la petición
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };
    // Añade el encabezado OpenAI-Project si la clave lo requiere
    if (projectId) {
      headers['OpenAI-Project'] = projectId;
    }

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers,
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
