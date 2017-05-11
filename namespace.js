'use strict';


const Namespace = require('oktopost-namespace');
const is	= require('oktopost-plankton-is').is;
const obj	= require('oktopost-plankton-obj').obj;
const func	= require('oktopost-plankton-func').func;


const container = {
	Plankton: {
		is: is,
		obj: obj,
		func: func
	}
};

const Plankton = new Namespace(container);


module.exports = {
	Plankton: container.Plankton,
	namespace: Plankton.getCreator()
};