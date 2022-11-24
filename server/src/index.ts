import express from 'express';
import cors from 'cors';
import client from './database/data-source';

import {
    chats,
    products,
    Sale,
    User
} from './models';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    console.log(`Initial page: ${port}`)
});

app.post('/login', async (req, res) => {
    try {
        const body = req.body()
    } catch(err) {
        console.error(err.message)
    }
})

app.listen(port, () => {
    console.log('I am to here on mode turbe')
});
