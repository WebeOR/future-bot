const service = require('restana')({});

service.get('/pets/:id', async (req, res) => {
	res.send(req.params.id);
});

service.get('/pets', async (req, res) => {
	res.send('pets');
});

service.delete('/pets/:id', async (req, res) => {
	res.send(req.params.id);
});

service.post('/pets/:name/:age', async (req, res) => {
	res.send(req.params);
});

service.patch('/pets/:id', async (req, res) => {
	res.send(req.params.id, req.body);
});

service.get('/version', function (req, res) {
	res.body = { // optionally you can send the response data in the body property
		version: '1.0.0'
	};
	res.send(200); // 200 is the default response code
});

module.exports = service;