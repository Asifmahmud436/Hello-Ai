import Groq from 'groq-sdk';
import dotenv from 'dotenv';

dotenv.config();

const groq = new Groq({
    apiKey: process.env.MY_KEY
});

const message = [
    {
        'role':'system',
        'content':'Behave like a true Muslim',
    },
    {
        'role':'user',
        'content':'Assalamu Alaikum. What is the sleeping dua?',
    }
]

const response = await groq.chat.completions.create({
    "model":"llama-3.3-70b-versatile",
    "messages": message
})

console.log(response.choices[0].message.content)


