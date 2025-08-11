
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

let chat: Chat;

interface StartChatConfig {
    systemInstruction: string;
    context: string;
    contextPrompt: string;
    initialModelResponse: string;
}

export const geminiService = {
  startChat: (config: StartChatConfig) => {
    const { systemInstruction, context, contextPrompt, initialModelResponse } = config;
    
    chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction,
      },
      history: [
        {
            role: "user",
            parts: [{ text: contextPrompt.replace('{context}', context) }]
        },
        {
            role: "model",
            parts: [{ text: initialModelResponse }]
        }
      ]
    });
  },
  sendMessageStream: async (message: string) => {
    if (!chat) {
      throw new Error("Chat has not been initialized. Call startChat first.");
    }
    return await chat.sendMessageStream({ message });
  }
};
