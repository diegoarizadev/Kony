//startup.js file
var appConfig = {
    appId: "WSegmentSections",
    appName: "WSegmentSections",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.0.23",
    serverPort: "8080",
    secureServerPort: "443",
    url: "http://192.168.0.23:8080/middleware/MWServlet",
    secureurl: "http://192.168.0.23:8080/middleware/MWServlet",
    middlewareContext: "middleware"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmPrincipalGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 6500
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmPrincipal.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};