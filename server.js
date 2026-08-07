const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(express.json());
app.use(cors());

// Inicializa a SDK do Google Gen AI utilizando a chave do arquivo .env
const ai = new GoogleGenAI({ apiKey: "AQ.Ab8RN6KAGsB_jhEBMnQJtXFYRu5vPgmMZ9aZhmop9GKa6ldASw" });

app.post('/api/perguntar', async (req, res) => {
    try {
        const { duvida } = req.body;
        if (!duvida) {
            return res.status(400).json({ erro: "Nenhuma dúvida foi enviada." });
        }

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: duvida,
            config: {
                systemInstruction: "Você é uma assistente virtual acolhedora, paciente e especialista em segurança digital para idosos no Brasil. Responda em texto puro, sem usar formatação Markdown (NÃO use asteriscos, cerquilhas #, traços ou negrito). Escreva sempre de forma direta, sem usar construções com parênteses como (a) ou o/a para evitar confusão na leitura de áudio, deixe em negrito o que for destaque. Use frases curtas, pontuação padrão e tom humanizado."
            }
        });

        res.json({ resposta: response.text });

    } catch (error) {
        console.error("Erro na API do Gemini:", error);
        res.status(500).json({ resposta: "Desculpe, tive um problema ao analisar agora. Por favor, tente novamente em instantes." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});