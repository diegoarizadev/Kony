//Form JS File
function frmStart_btnOne_onClick_seq0(eventobject) {
    kony.store.setItem("userPreference", "screenOne");
};

function frmStart_btnTwo_onClick_seq0(eventobject) {
    kony.store.setItem("userPreference", "screenTwo");
};

function frmStart_btnExit_onClick_seq0(eventobject) {
    kony.application.exit();
};

function addWidgetsfrmStart() {
    var btnOne = new kony.ui.Button({
        "id": "btnOne",
        "top": "23dp",
        "left": "0dp",
        "right": "0dp",
        "height": "41dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Iniciar con pantalla 1",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmStart_btnOne_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {});
    var btnTwo = new kony.ui.Button({
        "id": "btnTwo",
        "top": "96dp",
        "left": "0dp",
        "right": "0dp",
        "height": "41dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Iniciar con pantalla 2",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmStart_btnTwo_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {});
    var btnExit = new kony.ui.Button({
        "id": "btnExit",
        "top": "164dp",
        "left": "0dp",
        "right": "0dp",
        "height": "41dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Salir",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmStart_btnExit_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {});
    frmStart.add(
    btnOne, btnTwo, btnExit);
};

function frmStartGlobals() {
    var MenuId = [];
    frmStart = new kony.ui.Form2({
        "id": "frmStart",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": false,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmStart
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
    frmStart.setDefaultUnit(kony.flex.DP);
};