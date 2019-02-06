var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    routes = require('./routes');
	
	
var cors = require('cors')


	
	
	

//connect directly to mongoose
mongoose.connect('mongodb://admin:123456Aa!@ds135179.mlab.com:35179/clients', { useNewUrlParser: true })
    .then(() => console.log("Successfully connected to the database."))
    .catch(() => console.log("Conntection to database failed."));
    

// parse incoming requests

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
routes(app);

app.get('/', (req, res) => {
    res.send('hey').status(200);
});

 //middleware added to check if user enters not found route 
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, ()=> {
    console.log(`todo list RESTful API server started on : ${port}`);
});



// fetch('/clients', {
//     method: 'POST',
//     body: JSON.stringify({
// 		firstName: 'q',
//         lastName: 5,
//         phone: '08854630s2d5',
//         lastVisited: Date.now(),
//         lastNotified: Date.now(),
//         period: '5',
//     }),
//     headers: new Headers({
//       'Content-Type': 'application/json'
//     }),
//   })
//   .then(response => response.json())
//   .then(r => console.log(r))
