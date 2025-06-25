/*global QUnit*/

sap.ui.define([
	"appjsonmodelcom/json_model_demo_app/controller/ProductPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ProductPage Controller");

	QUnit.test("I should test the ProductPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
