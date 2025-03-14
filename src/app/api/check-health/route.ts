import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function GET() {
    const APIKEY = process.env.APIKEY || '';
    const genAI = new GoogleGenerativeAI(APIKEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const name = 'Dhruv';
    const prompt = `Hey, my name is ${name}. I want to have a conversation with you like you are my friend. Like just how two friends talk to each other when the meet after a whole day. But in this you only have to ask me questions and I will answer. Lets start with you asking me Hi ${name} how was your day today. And remember the output should give me should be in a specific format only. And in the result you should only give what I have asked and that too in proper format.
    {text: {your answer}}`;
    try {
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
        const ans = result.response.text();
        return NextResponse.json({ text: ans });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return NextResponse.json({ text: 'Error in getting output from GPT' });
    }
}
