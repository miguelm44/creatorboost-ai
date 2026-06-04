

import axios from "axios";



const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function gerarConteudo(formData) {

  const prompt = `
Você é um especialista em marketing digital.

Com base nas informações abaixo gere:

- 1 público ideal
- exatamente 5 principais dores
- exatamente 5 ideias de conteúdo
- exatamente 5 ganchos para vídeos
- 1 legenda pronta
- 1 CTA

IMPORTANTE:

- Responda de forma objetiva.
- Não use markdown.
- Não use **texto**.
- Não use títulos extras.
- Não explique nada.
- Retorne apenas JSON válido.
- Cada item das listas deve ser curto.

Produto: ${formData.produto}

Descrição: ${formData.descricao}

Público-Alvo: ${formData.publico}

Plataforma: ${formData.plataforma}

Objetivo: ${formData.objetivo}

Responda SOMENTE em JSON no formato:

{
  "publicoIdeal": "",
  "dores": [],
  "ideias": [],
  "ganchos": [],
  "legenda": "",
  "cta": ""
}
`;

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
    {
      contents: [
        {
          parts: [
            {
              text: prompt
            }
          ]
        }
      ]
    }
  );

  return response.data;
}