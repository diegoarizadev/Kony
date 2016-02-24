//Form JS File
function frmScreenOne_btnBack_onClick_seq0(eventobject) {
    frmStart.show();
};

function addWidgetsfrmScreenOne() {
    var lblScreenTitle = new kony.ui.Label({
        "id": "lblScreenTitle",
        "top": "9dp",
        "left": "164dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Pantalla 1",
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
        "top": "287dp",
        "left": "0dp",
        "right": "0dp",
        "height": "41dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Regresar al Home",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmScreenOne_btnBack_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {});
    var image220038600442043 = new kony.ui.Image2({
        "id": "image220038600442043",
        "top": "41dp",
        "left": "90dp",
        "width": "227dp",
        "height": "237dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "uno.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 53
    }, {});
    frmScreenOne.add(
    lblScreenTitle, btnBack, image220038600442043);
};

function frmScreenOneGlobals() {
    var MenuId = [];
    frmScreenOne = new kony.ui.Form2({
        "id": "frmScreenOne",
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
        "addWidgets": addWidgetsfrmScreenOne
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
    frmScreenOne.setDefaultUnit(kony.flex.DP);
};