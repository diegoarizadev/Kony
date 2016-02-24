//Form JS File
function frmBrowser_btnReload_onClick_seq0(eventobject) {
    frmBrowser.browserQuotes.reload()
};

function frmBrowser_btnQuotes_onClick_seq0(eventobject) {
    getStockQuotes.call(this);
};

function addWidgetsfrmBrowser() {
    var tbxInput = new kony.ui.TextBox2({
        "id": "tbxInput",
        "top": "8dp",
        "left": "10dp",
        "width": "254dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Normal",
        "focusSkin": "tbx2Focus",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var btnReload = new kony.ui.Button({
        "id": "btnReload",
        "top": "58dp",
        "left": "8dp",
        "width": "73dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Refrescar",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmBrowser_btnReload_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {});
    var btnQuotes = new kony.ui.Button({
        "id": "btnQuotes",
        "top": "56dp",
        "right": "85",
        "width": "69dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Procesar",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmBrowser_btnQuotes_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {});
    var browserQuotes = new kony.ui.Browser({
        "id": "browserQuotes",
        "top": "110dp",
        "left": "6dp",
        "width": "95.78%",
        "height": "326dp",
        "zIndex": 1,
        "text": "Browser",
        "isVisible": true,
        "requestURLConfig": {
            "URL": "http://www.meetup.com/es-ES/",
            "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
        },
        "detectTelNumber": true,
        "enableZoom": false
    }, {
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 73
    }, {});
    frmBrowser.add(
    tbxInput, btnReload, btnQuotes, browserQuotes);
};

function frmBrowserGlobals() {
    var MenuId = [];
    frmBrowser = new kony.ui.Form2({
        "id": "frmBrowser",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmBrowser
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "formAnimation": 0
        },
        "outTransitionConfig": {
            "formAnimation": 0
        },
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU
    });
    frmBrowser.setDefaultUnit(kony.flex.DP);
};