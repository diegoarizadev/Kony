//Form JS File
function addWidgetsfrmPrincipal() {
    var map20038600442041 = new kony.ui.Map({
        "id": "map20038600442041",
        "isVisible": true,
        "mapKey": null,
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "defaultPinImage": null,
        "screenLevelWidget": true,
        "calloutWidth": 80
    }, {
        "margin": [1, 1, 1, 1],
        "containerHeight": null,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "showCurrentLocation": constants.MAP_VIEW_SHOW_CURRENT_LOCATION_NONE,
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "zoomLevel": 14
    });
    frmPrincipal.add(
    map20038600442041);
};

function frmPrincipalGlobals() {
    var MenuId = [];
    frmPrincipal = new kony.ui.Form2({
        "id": "frmPrincipal",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmPrincipal
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false,
        "layoutType": constants.CONTAINER_LAYOUT_BOX
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "bounces": true,
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
};