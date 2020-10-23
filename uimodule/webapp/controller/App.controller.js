sap.ui.define([
  "com/sap/nav2/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
  "use strict";

  return Controller.extend("com.sap.nav2.controller.App", {

    onInit: function() {

        // Setting the view model for busy indicators
			var viewModel = new JSONModel({
				fromApp1: false
			});

			// Store the models
			this.setModel(viewModel, "viewModel");
			this._viewModel = this.getModel("viewModel");
    },

    onNav: function () {
      let oCrossAppNav = sap.ushell && sap.ushell.Container && sap.ushell.Container.getService("CrossApplicationNavigation");
			let href_display = (oCrossAppNav && oCrossAppNav.toExternal({
				target: {
					semanticObject: "app1",
					action: "maintain"
				},
				params: {
					"fromApp2": true
				}
			}, oComponent)) || "";
    }
  });
});
