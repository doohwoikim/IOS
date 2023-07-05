const Model = require('../models/model');

module.exports.list = (request, response) => {
    Model.find().sort("title")
        .then((dbRes) => {
            response.json(dbRes);
        })
        .catch((dbErr) => {
            response.status(400).json(dbErr);
        });
}

module.exports.create = (request, response) => {
    Model.create(request.body)
        .then((dbRes) => {
            response.json(dbRes)
        })
        .catch((dbErr) => {
            response.status(400).json(dbErr);
        });
}

module.exports.detail = (request, response) => {
    Model.findOne({ _id: request.params.id })
        .then((dbRes) => {
            response.json(dbRes)
        })
        .catch((dbErr) => {
            response.status(400).json(dbErr);
        });
}

module.exports.update = (request, response) => {
    Model.findOneAndUpdate({ _id: request.params.id }, request.body,
        { new: true, runValidators: true }
    )
        .then((dbRes) => {
            response.json(dbRes)
        })
        .catch((dbErr) => {
            response.status(400).json(dbErr);
        });
}

module.exports.delete = (request, response) => {
    Model.deleteOne({ _id: request.params.id })
        .then((dbRes) => {
            response.json(dbRes)
        })
        .catch((dbErr) => {
            response.status(400).json(dbErr);
        });
}