
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

export const getPlumbingAdvice = async (history: ChatMessage[], userQuery: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  const systemInstruction = `
    You are an expert AI plumbing consultant for 'Brownstone Repiping', a specialist plumbing firm in Brooklyn, NY.
    Your expertise is specifically in historic New York City brownstones, rowhouses, and landmarked properties.
    You know everything about:
    1. Secondary lead pipe replacement (internal lines).
    2. PEX retrofitting techniques that avoid breaking historic plaster walls.
    3. NYC Landmark Preservation Commission (LPC) plumbing guidelines.
    4. Common issues like low water pressure in 100-year-old homes and winter pipe freezing.
    
    Tone: Professional, knowledgeable, reassuring, and focused on historical preservation.
    Keep answers concise. Always encourage the user to schedule a professional inspection with Brownstone Repiping.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { role: "user", parts: [{ text: `System context: ${systemInstruction}` }] },
        ...history.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        })),
        { role: "user", parts: [{ text: userQuery }] }
      ],
      config: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base right now. Please call us directly at (844) 340-6413 for immediate assistance.";
  }
};
