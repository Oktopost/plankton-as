'use strict';


const is = require('../../index').is;
const as = require('../../index').as;
const obj = require('../../index').obj;
const array = require('../../index').array;
const func = require('../../index').func;
const common = require('./common');
const assert = require('chai').assert;


suite('as module', function() {
	test('as.bool', function() {
		common.assertTrueFor(as.bool, [
			'array',
			'object',
			'string',
			'number',
			'negative',
			'float',
			'negative float',
			'Infinity',
			'negative Infinity',
			'true',
			'true object',
			'function'
		]);
	});
	
	test('as.array', function() {
		assert.equal(as.array, array); 
	});
	
	test('as.func', function() {
		assert.equal(as.func, func); 
	});
	
	test('as.async', function() {
		assert.equal(as.async, func.async); 
	});
});