//Form JS File
function frmA_frmA_init_seq0(eventobject, neworientation) {
    kony.print("n0rf3n => frmA => Ejecutando init()");
};

function frmA_frmA_preshow_seq0(eventobject, neworientation) {
    kony.print("n0rf3n => frmA => Ejecutando preShow()");
};

function frmA_frmA_postshow_seq0(eventobject, neworientation) {
    kony.print("n0rf3n => frmA => Ejecutando postShow()");
};

function frmA_frmA_onhide_seq0(eventobject, neworientation) {
    kony.print("n0rf3n => frmA => Ejecutando onHide()");
};

function frmA_frmA_onDestroy_seq0(eventobject, neworientation) {
    kony.print("n0rf3n => frmA => Ejecutando onDestroy()");
};

function frmA_button2003860044161_onClick_seq0(eventobject) {
    frmB.show();
};

function addWidgetsfrmA() {
    var label2003860044160 = new kony.ui.Label({
        "id": "label2003860044160",
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
    var button2003860044161 = new kony.ui.Button({
        "id": "button2003860044161",
        "isVisible": true,
        "text": "Ir a frmB",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmA_button2003860044161_onClick_seq0
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
    frmA.add(
    label2003860044160, button2003860044161);
};

function frmAGlobals() {
    var MenuId = [];
    frmA = new kony.ui.Form2({
        "id": "frmA",
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "init": frmA_frmA_init_seq0,
        "preShow": frmA_frmA_preshow_seq0,
        "postShow": frmA_frmA_postshow_seq0,
        "onHide": frmA_frmA_onhide_seq0,
        "onDestroy": frmA_frmA_onDestroy_seq0,
        "addWidgets": addWidgetsfrmA
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