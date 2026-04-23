# Chat con IA en GitHub

Este proyecto contiene una página web sencilla que permite chatear con una IA mediante la API de OpenAI. Está escrita en HTML, CSS y JavaScript.

## Estructura del proyecto

- `index.html`: define la estructura de la página con un campo para ingresar preguntas y un área para mostrar la respuesta de la IA.
- `styles.css`: estilos básicos para darle formato a la página.
- `script.js`: maneja la interacción con la API de OpenAI. Debes proporcionar tu propia clave de API en la variable `apiKey` para que funcione.

## Instrucciones para usarlo

1. Consigue una [clave de API de OpenAI](https://platform.openai.com/) y reemplaza la cadena `REEMPLAZA_CON_TU_CLAVE_OPENAI` en `script.js` por tu clave real. **No publiques tu clave en repositorios públicos**.
2. Abre `index.html` en tu navegador para ver la interfaz.
3. Escribe una pregunta o mensaje en español y haz clic en “Enviar”. El asistente responderá utilizando el modelo `gpt‑3.5‑turbo`.

## Despliegue en GitHub Pages

Puedes alojar esta página fácilmente utilizando GitHub Pages:

1. Crea un repositorio nuevo en GitHub y sube los archivos de este proyecto.
2. En la configuración del repositorio, activa GitHub Pages seleccionando la rama principal (por ejemplo, `main`) como fuente y la carpeta `/` como directorio de publicación.
3. GitHub generará una URL donde podrás acceder a tu página web de chat con IA.

## Aviso sobre la clave API

Para fines didácticos, el ejemplo incluye la clave directamente en el código, pero **no** se recomienda exponer claves secretas en el lado del cliente. Para un entorno de producción, deberías crear un servidor intermedio o utilizar variables de entorno y métodos seguros de almacenamiento para mantener la clave protegida.
