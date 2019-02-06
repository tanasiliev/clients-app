const controller = require('./controllers/clientsController');  

module.exports = function(app){
    
    //Clients Routes
    app.route('/clients')
        .get(controller.findAll)
        .post(controller.create);

    app.route('/clients/:clientId')
        .get(controller.findOne)
        .put(controller.update)
        .delete(controller.delete);
};
