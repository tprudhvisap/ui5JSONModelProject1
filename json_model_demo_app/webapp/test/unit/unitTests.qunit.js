/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"appjsonmodelcom/json_model_demo_app/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});