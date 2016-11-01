jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Firms in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"ru/fpk/backend/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ru/fpk/backend/test/integration/pages/App",
	"ru/fpk/backend/test/integration/pages/Browser",
	"ru/fpk/backend/test/integration/pages/Master",
	"ru/fpk/backend/test/integration/pages/Detail",
	"ru/fpk/backend/test/integration/pages/Create",
	"ru/fpk/backend/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ru.fpk.backend.view."
	});

	sap.ui.require([
		"ru/fpk/backend/test/integration/MasterJourney",
		"ru/fpk/backend/test/integration/NavigationJourney",
		"ru/fpk/backend/test/integration/NotFoundJourney",
		"ru/fpk/backend/test/integration/BusyJourney",
		"ru/fpk/backend/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});