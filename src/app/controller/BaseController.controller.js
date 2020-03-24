sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History"
], function (Controller, History) {
  "use strict";
  return Controller.extend("app.controller.BaseController", {
    onInit: function () {
      // var i18nModel = new ResourceModel({
      //   bundleName: "UI5toLearn.i18n.i18n"
      // });
      // this.getView().setModel(i18nModel, "i18n");
    },

    getModel: function (oEvent) {
      // return this.getOwnerComponent().getModel("Model");
    },

    getRouter: function (oEvent) {
      return sap.ui.core.UIComponent.getRouterFor(this);
    },

    onNavBack: function (oEvent) {
      var oHistory, sPreviousHash;
      oHistory = History.getInstance();
      sPreviousHash = oHistory.getPreviousHash();
      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        this.getRouter().navTo("main", {}, true /*no history*/);
      }
    }
  });
});
