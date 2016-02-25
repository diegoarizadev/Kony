//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "i18n",
    appName: "Diccionario i18n",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.0.11",
    serverPort: "8080",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "middleware",
    isMFApp: false,
    eventTypes: [],
    url: "http://192.168.0.11:8080/middleware/MWServlet",
    secureurl: "http://192.168.0.11:8080/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmDiccionarioGlobals();
    frmPrincipalGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
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
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes
    }
    kony.setupsdks(sdkInitConfig, null, null);
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("es", onSuccess, onFailure, null);