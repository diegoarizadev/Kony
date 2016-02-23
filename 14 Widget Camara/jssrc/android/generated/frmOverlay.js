//Form JS File
function addWidgetsfrmOverlay() {
    var lblCaption = new kony.ui.Label({
        "id": "lblCaption",
        "top": "2dp",
        "left": "6dp",
        "width": "349dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Make sure entire subject is in the frame",
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var imgOne = new kony.ui.Image2({
        "id": "imgOne",
        "top": "10dp",
        "left": "3dp",
        "width": "100%",
        "height": "90.0%",
        "zIndex": 1,
        "isVisible": true,
        "src": "frame.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var flexContainerOne = new kony.ui.FlexContainer({
        "id": "flexContainerOne",
        "top": "10%",
        "left": "4dp",
        "width": "97.78%",
        "height": "80.0%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[4,45]",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexContainerOne.setDefaultUnit(kony.flex.DP)
    flexContainerOne.add(
    imgOne);
    frmOverlay.add(
    lblCaption, flexContainerOne);
};

function frmOverlayGlobals() {
    var MenuId = [];
    frmOverlay = new kony.ui.Form2({
        "id": "frmOverlay",
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
        "addWidgets": addWidgetsfrmOverlay
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
    frmOverlay.setDefaultUnit(kony.flex.DP);
};