import {Handler} from '@netlify/functions';
import axios from 'axios';
import * as dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({path: '.env.local'});

const convertAttributes = (attributes: {[key: string]: string}): string => {
    return `[${Object.entries(attributes)
        .map(([key, value]) => `${key}: '${value}'`)
        .join(', ')}]`;
};

export const handler: Handler = async (event, context) => {
    try {
        if (!process.env.OPENROUTER_API_KEY) {
            return {
                statusCode: 500,
                body: JSON.stringify({error: 'API key for OpenRouter is missing'}),
            };
        }

        const attrString = convertAttributes({
            "1": 'юбка + клеш + черный + (подъюбник + прозрачный)',
            "2": 'блузка + белый + (узор + розы)',
            "3": 'трусики + кружева + розовый',
            "4": 'бюстгальтер + красный + (кружевные оборки + черный)',
            "5": 'анальная пробка + серебро',
            "6": 'растительность на лобке + отсутствует',
            "7": 'растительность на лобке + рыжий',
        });

        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: 'google/gemini-2.5-flash-lite',
                messages: [
                    {
                        role: 'user',
                        content: `Верни ТОЛЬКО JSON с полем 'result', где ключи — ID атрибутов, а значения — склеенные описания на русском. Не оборачивай в блок кода, на выходе только чистый JSON и ничего лишнего!!! Строго соблюдай формат вывода и ID! Вход: ${attrString} → {"result":{"1":"синие шорты с белыми лампасами"}}.`,
                    },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        // Extract the text response and parse it as JSON
        const rawResponse: string = response.data.choices[0].message.content.replace('```json\n', '').replace('\n```', '');
        let parsedResponse;
        try {
            parsedResponse = JSON.parse(rawResponse);
        } catch (e) {
            return {
                statusCode: 500,
                body: JSON.stringify({error: `Invalid JSON response from OpenRouter ${e}. Response: ${rawResponse}`}),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify(parsedResponse), // Return plain JSON
            headers: {'Content-Type': 'application/json; charset=UTF-8'}, // Set the character encoding
        };
    } catch (error) {
        console.error('Error in OpenRouter request:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({error: 'Failed to fetch from OpenRouter'}),
        };
    }
};