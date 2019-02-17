const path = require('path');

module.exports = {
	jest: {
		configure: {
			moduleNameMapper: {
				'^@components(.*)$': '<rootDir>/src/components$1'
			}
		}
	},
	webpack: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components')
		}
	}
};
