//Form JS File
function frmSolucion2_bttn0_onClick_seq0(eventobject) {
    get_actividad.call(this, eventobject);
    get_acumular.call(this, eventobject, 0);
};

function frmSolucion2_bttn1_onClick_seq0(eventobject) {
    get_actividad.call(this, eventobject);
    get_acumular.call(this, eventobject, 1);
};

function frmSolucion2_bttn2_onClick_seq0(eventobject) {
    get_actividad.call(this, eventobject);
    get_acumular.call(this, eventobject, 2);
};

function frmSolucion2_bttnReiniciar_onClick_seq0(eventobject) {
    get_actividad(eventobject);
    frmSolucion2.bttn0.text = "0";
    frmSolucion2.bttn1.text = "1";
    frmSolucion2.bttn2.text = "2";
};

function addWidgetsfrmSolucion2() {
    var label2003860044146 = new kony.ui.Label({
        "id": "label2003860044146",
        "isVisible": true,
        "text": "Implementacion JavaScript Recursivo",
        "skin": "lblNormal"
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "vExpand": false,
        "hExpand": true,
        "margin": [0, 0, 0, 0],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var bttn0 = new kony.ui.Button({
        "id": "bttn0",
        "isVisible": true,
        "text": "0",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSolucion2_bttn0_onClick_seq0
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
    var bttn1 = new kony.ui.Button({
        "id": "bttn1",
        "isVisible": true,
        "text": "1",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSolucion2_bttn1_onClick_seq0
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
    var bttn2 = new kony.ui.Button({
        "id": "bttn2",
        "isVisible": true,
        "text": "2",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSolucion2_bttn2_onClick_seq0
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
    var bttnReiniciar = new kony.ui.Button({
        "id": "bttnReiniciar",
        "isVisible": true,
        "text": "Reiniciar Contadores.",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmSolucion2_bttnReiniciar_onClick_seq0
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
    frmSolucion2.add(
    label2003860044146, bttn0, bttn1, bttn2, bttnReiniciar);
};

function frmSolucion2Globals() {
    var MenuId = [];
    frmSolucion2 = new kony.ui.Form2({
        "id": "frmSolucion2",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmSolucion2
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