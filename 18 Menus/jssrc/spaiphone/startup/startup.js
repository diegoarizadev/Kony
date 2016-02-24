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
var appConfig = {
    appId: "Menus",
    appName: "Menus",
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
    frmMenusGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmMenus.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default"]);
    globalhttpheaders = {};
    callAppMenu();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};