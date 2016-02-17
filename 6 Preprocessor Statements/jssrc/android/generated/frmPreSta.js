//Form JS File
function frmPreSta_btnChangeStyle_onClick_seq0(eventobject) {
    cargarTema.call(this);
};

function addWidgetsfrmPreSta() {
    var btnChangeStyle = new kony.ui.Button({
        "id": "btnChangeStyle",
        "isVisible": true,
        "text": "Cambiar Estilo.",
        "skin": "sknAmarillo",
        "focusSkin": "btnFocus",
        "onClick": frmPreSta_btnChangeStyle_onClick_seq0
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {});
    frmPreSta.add(
    btnChangeStyle);
};

function frmPreStaGlobals() {
    var MenuId = [];
    frmPreSta = new kony.ui.Form2({
        "id": "frmPreSta",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmPreSta
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