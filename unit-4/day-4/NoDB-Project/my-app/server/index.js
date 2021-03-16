const cors = require('cors')
const express = require('express');
const ac = require('./Controllers/anime_controller');

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const animeBaseUrl = '/api/anime';
app.get(animeBaseUrl, ac.read);
app.post(animeBaseUrl, ac.create);
app.put(`${animeBaseUrl}/:id`, ac.update);
app.delete(`${animeBaseUrl}/:id`, ac.delete);

const port = 4000;
app.listen(port, () => {
    console.log(`Server Listening on port ${port}`)
});