//Form JS File
function frmPrincipal_btnAnimar_onClick_seq0(eventobject) {
    animateButton.call(this);
};

function addWidgetsfrmPrincipal() {
    var btnAnimar = new kony.ui.Button({
        "id": "btnAnimar",
        "isVisible": true,
        "text": "Ejecutar Animacion",
        "skin": "sknNaranja",
        "focusSkin": "btnFocus",
        "onClick": frmPrincipal_btnAnimar_onClick_seq0
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
    frmPrincipal.add(
    btnAnimar);
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