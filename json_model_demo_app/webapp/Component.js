sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "app/jsonmodel/com/jsonmodeldemoapp/model/models",
    "sap/ui/model/json/JSONModel",
  ],
  (UIComponent, models, JSONModel) => {
    "use strict";

    return UIComponent.extend("app.jsonmodel.com.jsonmodeldemoapp.Component", {
      metadata: {
        manifest: "json",
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
      },

      init() {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        // enable routing
        this.getRouter().initialize();
      },
    });
  }
);
