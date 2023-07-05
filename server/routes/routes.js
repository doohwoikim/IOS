const Controller = require('../controllers/controller');

module.exports = app => {
    app.get('/api/todos', Controller.list);
    app.post('/api/todos', Controller.create);
    app.get('/api/todos/:id', Controller.detail);
    app.put('/api/todos/:id', Controller.update);
    app.delete('/api/todos/:id', Controller.delete);
}