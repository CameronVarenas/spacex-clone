const express = require('../../watchList.json')

let watchList = [];

watchList.push(express)

module.exports = {
    create: (req, res) => {
        // anime.push({id});
        // id++;
        // res.status(200).send(anime);
    },
    read: (req, res) => {
        res.status(200).send(watchList);
    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    }
}