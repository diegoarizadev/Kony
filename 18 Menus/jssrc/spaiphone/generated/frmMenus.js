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
    }, {});
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
    }, {});
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
    }, {});
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
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmMenus
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
    frmMenus.setDefaultUnit(kony.flex.DP);
};