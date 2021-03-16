const express = require('../../anime.json')

let anime = [];
let watchList = [];
let id = 0;

anime.push(express);

module.exports = {
    read: (req, res) => {
        res.status(200).send(anime);
    },
    create: (req, res) => {
        watchList.push(req.query);
        res.status(200).send(watchList);
    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    }
}



