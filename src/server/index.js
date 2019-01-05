const anumargak = require('anumargak');
const { PORT } = require('../../config');

const service = require('restana')({
	routerFactory: options => anumargak(options)
});

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
	res.send(); // 200 is the default response code
});

async function create (port = PORT) {
  await service.start(port);
}

module.exports = {
  create
};