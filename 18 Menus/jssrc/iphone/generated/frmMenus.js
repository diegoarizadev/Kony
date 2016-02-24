//Form JS File
function frmMenus_frmMenus_init_seq0(eventobject) {};

function frmMenus_btnAdd_onClick_seq0(eventobject) {
    addMenuItem.call(this);
};

function frmMenus_btnRemove_onClick_seq0(eventobject) {
    removeMenuItem.call(this);
};

function frmMenus_btnSwitch_onClick_seq0(eventobject) {
    switchAppMenu.call(this);
};

function addWidgetsfrmMenus() {
    var btnAdd = new kony.ui.Button({
        "id": "btnAdd",
        "top": "0dp",
        "left": "0.0%",
        "width": "100%",
        "height": "30dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Add item - More...",
        "skin": "sknBtnBg",
        "focusSkin": "slButtonGlossRed",
        "onClick": frmMenus_btnAdd_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 7
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnRemove = new kony.ui.Button({
        "id": "btnRemove",
        "top": "33dp",
        "left": "0.0%",
        "width": "100%",
        "height": "27dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Remove item - Settings",
        "skin": "sknBtnBg",
        "focusSkin": "slButtonGlossRed",
        "onClick": frmMenus_btnRemove_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var btnSwitch = new kony.ui.Button({
        "id": "btnSwitch",
        "top": "64dp",
        "left": "-0.44%",
        "width": "100%",
        "height": "27dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Switch App Menus",
        "skin": "sknBtnBg",
        "focusSkin": "slButtonGlossRed",
        "onClick": frmMenus_btnSwitch_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmMenus.add(
    btnAdd, btnRemove, btnSwitch);
};

function frmMenusGlobals() {
    var MenuId = [];
    frmMenus = new kony.ui.Form2({
        "id": "frmMenus",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": "App Menu",
        "enabledForIdleTimeout": false,
        "skin": "sknFrmBg",
        "init": frmMenus_frmMenus_init_seq0,
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmMenus
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "titleBarConfig": {
            "renderTitleText": true,
            "titleBarRightSideView": "button",
            "titleBarLeftSideView": "button",
            "labelRightSideView": "Edit",
            "labelLeftSideView": "Back"
        },
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
    frmMenus.setDefaultUnit(kony.flex.DP);
};