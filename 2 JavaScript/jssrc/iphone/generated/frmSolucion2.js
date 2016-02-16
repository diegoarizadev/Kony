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
        "margin": [1, 1, 1, 1],
        "padding": [1, 1, 1, 1],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
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
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
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
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
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
        "margin": [1, 1, 1, 1],
        "padding": [0, 3, 0, 3],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": true,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
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