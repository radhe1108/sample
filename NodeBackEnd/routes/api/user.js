const Users = require('../../db').user
const route = require('express').Router()
route.get('/', (req, res) => {
    Users.findAll()
        .then((users) => {
            res.send(users);
        })
        .catch((err) => {
            res.status(500).send({
                err: err.message
            })
        })
})
route.post('/', (req, res) => {
    Users.create({
        name: req.body.name
    }).then((user) => {
        res.status(201).send(user);
    }).catch((err) => {
        res.status(504).send({
            err: err.message
        })
    })
})
exports = module.exports = route 