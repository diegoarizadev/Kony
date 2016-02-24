//Form JS File
function addWidgetsfrmPrincipal() {
    var map20038600442041 = new kony.ui.Map({
        "id": "map20038600442041",
        "isVisible": true,
        "mapKey": "AIzaSyDmiXqnr3JJcZ4IystKQdAImaHMjA9kRmg",
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "defaultPinImage": null,
        "screenLevelWidget": true,
        "calloutWidth": 80
    }, {
        "margin": [0, 0, 0, 0],
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 45
    }, {
        "showZoomControl": true,
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "zoomLevel": 15
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
};