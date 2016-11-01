jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ru/fpk/backend/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ru/fpk/backend/test/integration/pages/App",
	"ru/fpk/backend/test/integration/pages/Browser",
	"ru/fpk/backend/test/integration/pages/Master",
	"ru/fpk/backend/test/integration/pages/Detail",
	"ru/fpk/backend/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ru.fpk.backend.view."
	});

	sap.ui.require([
		"ru/fpk/backend/test/integration/NavigationJourneyPhone",
		"ru/fpk/backend/test/integration/NotFoundJourneyPhone",
		"ru/fpk/backend/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});