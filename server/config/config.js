var path = require('path');
var rootPath = path.normalize(__dirname +'/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost:27017/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		db: 'mongodb://rt:multivision@ds061661.mongolab.com:61661/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 80 
	}
}
