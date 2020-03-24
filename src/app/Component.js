sap.ui.define([
    'jquery.sap.global',
	"sap/ui/core/UIComponent"
], function (Query, UIComponent) {
	"use strict";

	return UIComponent.extend("app.Component", {
		metadata: {
			manifest: "json"
		},
		init: function () {
			UIComponent.prototype.init.apply(this, arguments);

            this.getRouter().initialize();
		}
	});
});
