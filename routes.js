const clientController = require('./controllers/clientController');
const baseController = require('./controllers/baseController');    

module.exports = function(app){
    
    //Clients Routes
    app.route('/clients')
        .get(clientController.findAll)
        .post(clientController.create);

    app.route('/clients/:clientId')
        .get(clientController.findOne)
        .put(clientController.update)
        .delete(clientController.delete);

    app.route('/update-clients')
        .post(clientController.updateMany);
    
    app.route('/send-email')
        .post(baseController.sendEmail);
        
    app.route('/send-sms')
        .post(baseController.sendSMS);      
};
