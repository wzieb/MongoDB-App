const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/challenge18';

connect(connectionString);

module.exports = connection;
