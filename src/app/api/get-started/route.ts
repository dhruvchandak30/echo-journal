import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const name = body.name;
    console.log('Hey, ', name);

    const prompt = `Hey, my name is ${name}. I want to have a conversation with you like you are my friend. Like just how two friends talk to each other when the meet after a whole day. But in this you only have to ask me questions and I will answer. Lets start with you asking me Hi ${name} how was your day today. And remember the output should give me should be in a specific format only. And in the result you should only`
    console.log(prompt);

    
    return NextResponse.json({ text: `Hello, ${name}` });
}
