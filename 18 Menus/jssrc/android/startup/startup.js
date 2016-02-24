//startup.js file
function appmenu1_callback_seq0() {
    accountsClicked.call(this);
};

function appmenu2_callback_seq0() {
    settingsClicked.call(this);
};

function appmenu3_callback_seq0() {
    paymentsClicked.call(this);
};
var globalhttpheaders = {};
var appConfig = {
    appId: "Menus",
    appName: "Menus",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.0.23",
    serverPort: "8080",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "middleware",
    isMFApp: false,
    eventTypes: [],
    url: "http://192.168.0.23:8080/middleware/MWServlet",
    secureurl: "http://192.168.0.23:8080/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmMenusGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false
    })
};

function themeCallBack() {
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmMenus.show();
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
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;