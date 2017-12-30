const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		error: 'Page not found.',
		name: 'Todo App v1.0'
	});
});

app.get('/users', (req, res) => {
	res.send([{
		name:'Cody',
		age: 27
	}, {
		name:'Cory',
		age: 27
	}, {
		name:'Kim',
		age:28
	}]);
});
//Get /users
//Give users a name property and an age prop

app.listen(3000);
module.exports.app = app;