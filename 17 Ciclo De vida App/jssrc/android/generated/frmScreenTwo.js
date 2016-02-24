//Form JS File
function frmScreenTwo_btnBack_onClick_seq0(eventobject) {
    frmStart.show();
};

function addWidgetsfrmScreenTwo() {
    var lblScreenTitle = new kony.ui.Label({
        "id": "lblScreenTitle",
        "top": "12dp",
        "left": "171dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Pantalla 2",
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var btnBack = new kony.ui.Button({
        "id": "btnBack",
        "top": "321dp",
        "left": "1dp",
        "right": "-1dp",
        "height": "41dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Regresar al Home",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmScreenTwo_btnBack_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {});
    var image220038600442042 = new kony.ui.Image2({
        "id": "image220038600442042",
        "top": "60dp",
        "left": "103dp",
        "width": "241dp",
        "height": "241dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "dos.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 54
    }, {});
    frmScreenTwo.add(
    lblScreenTitle, btnBack, image220038600442042);
};

function frmScreenTwoGlobals() {
    var MenuId = [];
    frmScreenTwo = new kony.ui.Form2({
        "id": "frmScreenTwo",
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
        "addWidgets": addWidgetsfrmScreenTwo
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
    frmScreenTwo.setDefaultUnit(kony.flex.DP);
};