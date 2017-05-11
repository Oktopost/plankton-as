require('../namespace').namespace('Plankton', function (container) {
	'use strict';


	var is		= container.Plankton.is;
	var func	= container.Plankton.func;
	var array	= container.Plankton.array;


	/**
	 * @name Plankton.as
	 */
	var as = {};
	
	
	/**
	 * @param {*} subject
	 * @returns {boolean}
	 */
	as.bool = function(subject) {
		return is.true(subject);
	};
		
	/**
	 * @param subject
	 * @returns {*}
	 */
	as.array = array;
	
	/**
	 * @param subject
	 * @return {*}
	 */
	as.func = func;
	
	/**
	 * @param {Function} callback
	 * @returns {Function}
	 */
	as.async = func.async;
	
	
	this.as = as;
});