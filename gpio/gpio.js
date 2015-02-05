/*
 *  Anser Innovation LLC.
 *  
 *  (c) Copyright 2015 Anser Innovation LLC. All Rights Reserved.
 *  All rights reserved under the copyright laws of the United States.
 *  
 *  author: Sam Herbert
 *
 *  This is a node module that allows access to the Raspberry Pi Compute
 *  modules GPIO.  The module starts by reading a configuration file and
 *  setting all pins to the state specified in the file.  Any pins not
 *  addressed in the file will be in an unknown state.  
 *
 *  Compute module provides access to 46 GPIO pins (GPIO0 - GPIO45).
 *  GPIO28, 29, 44, and 45 do not have pulls enabled at boot. 
 *
 *  Don't forget to export the GPIO if you are going to use them:
 *   sudo echo <Pin Number> /sys/class/gpio/export
 *
 */

var fileSys = require('fs');
var exec = require('child_process').exec;

var GPIO = function () {};

module.exports = GPIO;

/*
 * gpio is the prototype for both input and output
 */

var gpio = function(pin){
	var path = '/sys/class/gpio/gpio' + pin + '/';
	
	fileSys.exists(path, 
		function(exists){
			if(!exists){
				exec("echo 'Pretending to run the export command for GPIO" + pin + "'", 
					function(error, stdout, stderr){
						if(error || stderr != ''){
							console.log('' + error);
							return;
							//throw('Error exporting GPIO' + pin + ': ' + error);						
						}
						console.log('stdout: ' + stdout);
					}
				);
				/*exec('sudo echo ' + pin + ' > /sys/class/gpio/export', 
					function(error, stdout, stderr){
						if(error || stderr != ''){
							throw('Failed to export GPIO' + pin);						
						}
					}
				);*/
				return;			
			}
			console.log('path found.');
		}	
	);
	
	this.getPin = function(){
		return pin;	
	}
}

/*
 *  Input - Set up the specified GPIO as an input which is checked
 *				pollingRate times per seconds.  When the value changes
 *				the callback function is fired.
 *
 *		pin  				The I/O that is being set up as an input.
 *		pollingRate 	number of times the pin is checked per second.
 * 					  	If pollingRate is omitted or zero polling will
 *							be disabled.
 *		callback 		The function that is called when the value on
 *					  		pin changes.
 */
GPIO.Input = function(pin, pollingRate, callback){
	var input;	
	try{
		input = new gpio(pin);
	}
	catch(e){
		console.log(e);
		return null;	
	}
	
	//Check all the values
	if(!(typeof pollingRate === 'undefined') && pollingRate != 0){
		//set up the polling function
	}
	
	input.isInput = function(){
		console.log('this is an input');	
	}	
	
	return input;
};


GPIO.Output = function(pin){
	var output = new gpio(pin);
	
	return output;
}



