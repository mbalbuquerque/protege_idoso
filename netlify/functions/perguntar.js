const { GoogleGenAI } = require('@google/genai');

exports.handler = async (event) => {
    // Só aceita POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ erro: 'Método não permitido.' })
        };
    }

    try {
        const { duvida } = JSON.parse(event.body || '{}');

        if (!duvida) {
            return {
                statusCode: 400,
                body: JSON.stringify({ erro: 'Nenhuma dúvida foi enviada.' })
            };
        }

        // A chave vem das variáveis de ambiente da Netlify, nunca do código
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: duvida,
            config: {
                systemInstruction: "Você é uma assistente virtual acolhedora, paciente e especialista em segurança digital para idosos no Brasil. Responda em texto puro, sem usar formatação Markdown (NÃO use asteriscos, cerquilhas #, traços ou negrito). Escreva sempre de forma direta, sem usar construções com parênteses como (a) ou o/a para evitar confusão na leitura de áudio, deixe em negrito o que for destaque. Use frases curtas, pontuação padrão e tom humanizado."
            }
        });

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ resposta: response.text })
        };

    } catch (error) {
        console.error('Erro na API do Gemini:', error);
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ resposta: 'Desculpe, tive um problema ao analisar agora. Por favor, tente novamente em instantes.' })
        };
    }
};
