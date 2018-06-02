const express = require('express');
const app = express();

app.get('/getInfo', (req, res) => {
    const infoUser = {
        firstName: 'Hai',
        lastName: 'Nguyen',
        age: '21'
    }
    
    res.json(infoUser);
});

app.listen('8000', () => console.log('Server started on port 8000'));