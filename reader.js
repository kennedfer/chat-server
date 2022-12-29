const axios = require('axios');

fetch('./chat-messages.json')
    .then((response) => response.json())
    .then((json) => console.log(json));