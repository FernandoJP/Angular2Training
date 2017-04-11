System.register(["angular2/platform/browser", "./component_app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, component_app_component_1;
    var hw, teste;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (component_app_component_1_1) {
                component_app_component_1 = component_app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(component_app_component_1.App);
            hw = new component_app_component_1.HelloWorld(1, "vá a merda");
            teste = hw.getName();
        }
    }
});
//# sourceMappingURL=component_main.js.map