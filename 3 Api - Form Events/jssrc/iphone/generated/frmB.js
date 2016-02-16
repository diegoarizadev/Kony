//Form JS File
function frmB_frmB_init_seq0(eventobject, neworientation) {
    kony.print("n0rf3n => frmB => Ejecutando init()");
};

function frmB_frmB_preshow_seq0(eventobject, neworientation) {
    kony.print("n0rf3n => frmB => Ejecutando preShow()");
};

function frmB_frmB_postshow_seq0(eventobject, neworientation) {
    kony.print("n0rf3n => frmB => Ejecutando postShow()");
};

function frmB_frmB_onhide_seq0(eventobject, neworientation) {
    kony.print("n0rf3n => frmB => Ejecutando onHide()");
};

function frmB_frmB_onDestroy_seq0(eventobject, neworientation) {
    kony.print("n0rf3n => frmB => Ejecutando onDestroy()");
};

function frmB_button2003860044157_onClick_seq0(eventobject) {
    frmA.show();
};

function frmB_button2003860044159_onClick_seq0(eventobject) {
    frmA.destroy();
};

function addWidgetsfrmB() {
    var label2003860044156 = new kony.ui.Label({
        "id": "label2003860044156",
        "isVisible": true,
        "text": "Ciclo de Vida - Kony Api (Form Events)",
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
    var button2003860044157 = new kony.ui.Button({
        "id": "button2003860044157",
        "isVisible": true,
        "text": "Ir a FrmA",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmB_button2003860044157_onClick_seq0
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
    var button2003860044159 = new kony.ui.Button({
        "id": "button2003860044159",
        "isVisible": true,
        "text": "Destruir frmA",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmB_button2003860044159_onClick_seq0
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
    frmB.add(
    label2003860044156, button2003860044157, button2003860044159);
};

function frmBGlobals() {
    var MenuId = [];
    frmB = new kony.ui.Form2({
        "id": "frmB",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "init": frmB_frmB_init_seq0,
        "preShow": frmB_frmB_preshow_seq0,
        "postShow": frmB_frmB_postshow_seq0,
        "onHide": frmB_frmB_onhide_seq0,
        "onDestroy": frmB_frmB_onDestroy_seq0,
        "addWidgets": addWidgetsfrmB
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