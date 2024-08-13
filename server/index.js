require('dotenv').config();
const express = require('express');
const Pusher = require('pusher');
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: process.env.PUSHER_APP_CLUSTER,
    // useTLS: true
});

app.get('/', (req, res) => {
    res.json({
        status: true,
        message: "Welcome to pusher server"
    });
});

app.post('/api/pusher/auth', (req, res) => {
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const auth = pusher.authenticate(socketId, channel);
    res.send(auth);
});

app.post('/api/messages', (req, res) => {
    const message = req.body.message;
    pusher.trigger('chat-app-test', 'test-event', {
        message: message,
        time: new Date()
    });
    res.send({ status: 'Message sent' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});