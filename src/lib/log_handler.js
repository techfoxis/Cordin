'use strict'

require('terminal-colors');

let main = {

	load() {

	},

	log(message, type, details, label) {
		if(typeof message == 'object') {
			type = message.type;
			message = message.content;
			details = message.details;
			label = message.label;
		}

		let date = new Date();
		let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

		switch(type) {

			case 'log':
				console.log(`[${time}|${label || 'Log'}] ${message}`.blue);
				addDetails(details);
				break;

			case 'warn': 
				console.log(`[${time}|${label || 'Warning'}] ${message}`.lightRed);
				addDetails(details);
				break;

			case 'error': 
				console.log(`[${time}|${label || 'Error'}] ${message}`.red);
				addDetails(details);
				break;

			case 'success': 
				console.log(`[${time}|${label || 'Success'}] ${message}`.green);
				addDetails(details);
				break;

			case 'detail':
				console.log(`  | ${message}`);
				addDetails(details);
				break;

			default: 
				console.log(`[${time}|${label || 'Output'}] ${message}`);
				addDetails(details);
				break;

		}

		function addDetails(detail) {
			if(!detail) return;

			if(Array.isArray(detail)) {
				details.forEach((value) => {
					console.log(`  | ${value}`);
				});
			}
			else {
				console.log(`  | ${details}`);
			}
			
		}

	},

}

module.exports = main;


// bold
// italic
// underline
// yellow
// lightYellow
// cyan
// lightCyan
// white
// lightWhite
// magenta
// lightMagenta
// green
// lightGreen
// red
// lightRed
// grey
// lightGrey
// blue
// lightBlue