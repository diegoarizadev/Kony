//Form JS File
function frmInicial_btnReset_onClick_seq1() {
    setResetAcomuladores.call(this);
};

function act0_frmInicial_btnReset_onClick_seq0(response) {
    if (response == true) {
        frmInicial_btnReset_onClick_seq1()
    } else {}
};

function frmInicial_btn0_onClick_seq0(eventobject) {
    get_acomulador0.call(this);
};

function frmInicial_btn1_onClick_seq0(eventobject) {
    get_acomulador1.call(this);
};

function frmInicial_btn2_onClick_seq0(eventobject) {
    get_acomulador2.call(this);
};

function frmInicial_btnReset_onClick_seq0(eventobject) {
    var alert_seq0_act0 = kony.ui.Alert({
        "message": "Esta seguro de reiniciar los contadores",
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": "Confirmacion",
        "yesLabel": "SI",
        "noLabel": "No",
        "alertIcon": "",
        "alertHandler": act0_frmInicial_btnReset_onClick_seq0
    }, {});
};

function addWidgetsfrmInicial() {
    var label2003860044134 = new kony.ui.Label({
        "id": "label2003860044134",
        "isVisible": true,
        "text": "Implementacion JavaScript",
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
    var btn0 = new kony.ui.Button({
        "id": "btn0",
        "isVisible": true,
        "text": "0",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmInicial_btn0_onClick_seq0
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
    var btn1 = new kony.ui.Button({
        "id": "btn1",
        "isVisible": true,
        "text": "1",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmInicial_btn1_onClick_seq0
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
    var btn2 = new kony.ui.Button({
        "id": "btn2",
        "isVisible": true,
        "text": "2",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmInicial_btn2_onClick_seq0
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
    var btnReset = new kony.ui.Button({
        "id": "btnReset",
        "isVisible": true,
        "text": "Reiniciar",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmInicial_btnReset_onClick_seq0
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
    frmInicial.add(
    label2003860044134, btn0, btn1, btn2, btnReset);
};

function frmInicialGlobals() {
    var MenuId = [];
    frmInicial = new kony.ui.Form2({
        "id": "frmInicial",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "addWidgets": addWidgetsfrmInicial
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