const { connect, connection, disconnect } = require('mongoose');

const { DB_HOST } = require('../config');

function connectWrapper () {
	connect( DB_HOST , {
		useNewUrlParser: true,
		server: {
			auto_reconnect: true
		},
	});
}

let connectPromise;

function create () {
	if (!connectPromise) {
		connectPromise = new Promise(( resolve ) => {
			const db = connection;

			db.on( 'connecting', () => console.info('Start MongoDB connection'));
			db.once( 'open', () => console.info('MongoDB connection opened!'));
			db.on( 'reconnected', () => console.info('MongoDB reconnected!'));

			db.on( 'error', error => {
				console.error(`Error in MongoDb connection: ${error}`);
				disconnect();
			});

			db.on( 'connected', () => {
				console.info('MongoDB connected!');
				resolve();
			});

			db.on( 'disconnected', () => {
				console.info('MongoDB disconnected!');
				setTimeout(connect, 1000);
			});

			connectWrapper();
		});
	}
	return connectPromise;
}

module.exports = {
	create
};