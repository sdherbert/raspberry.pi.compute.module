/*
 *  Anser Innovation LLC.
 *  
 *  (c) Copyright 2015 Anser Innovation LLC. All Rights Reserved.
 *  All rights reserved under the copyright laws of the United States.
 *  
 *  author: Sam Herbert
 *
 *  Test cases for the GPIO module. 
 */

var GPIO = require('./gpio.js');

var input1 = new GPIO.Input(1);
var output7 = new GPIO.Output(7);
var input2 = new GPIO.Input(2);

console.log(input1.getPin());
console.log(output7.getPin());
console.log(input2.getPin());