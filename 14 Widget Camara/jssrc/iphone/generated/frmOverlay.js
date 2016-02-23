//Form JS File
function addWidgetsfrmOverlay() {
    var flexContainer20038600442032 = new kony.ui.FlexContainer({
        "id": "flexContainer20038600442032",
        "top": "38dp",
        "left": "3dp",
        "width": "97.11%",
        "height": "407dp",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[3,38]",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexContainer20038600442032.setDefaultUnit(kony.flex.DP)
    flexContainer20038600442032.add();
    frmOverlay.add(
    flexContainer20038600442032);
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
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmOverlay
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
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
    frmOverlay.setDefaultUnit(kony.flex.DP);
};