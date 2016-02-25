//Form JS File
function frmDiccionario_frmDiccionario_preshow_seq0(eventobject) {
    setTitleBarI18N.call(this);
};

function frmDiccionario_btnIngles_onClick_seq0(eventobject) {
    setEnglishLocale.call(this);
};

function frmDiccionario_button12191474232136_onClick_seq0(eventobject) {
    setSpanishLocale.call(this);
};

function frmDiccionario_button12191474232137_onClick_seq0(eventobject) {
    setFrenchLocale.call(this);
};

function frmDiccionario_btnAleman_onClick_seq0(eventobject) {
    setGermanLocale.call(this);
};

function addWidgetsfrmDiccionario() {
    var txtTituloFrm = new kony.ui.Label({
        "id": "txtTituloFrm",
        "top": "10dp",
        "left": "13dp",
        "width": "220dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Diccionario",
        "skin": "snkTitulo"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var image212191474232132 = new kony.ui.Image2({
        "id": "image212191474232132",
        "top": "57dp",
        "left": "8dp",
        "width": "50dp",
        "height": "54dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "gato.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 12
    }, {});
    var image212191474232133 = new kony.ui.Image2({
        "id": "image212191474232133",
        "top": "118dp",
        "left": "7dp",
        "width": "53dp",
        "height": "54dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "pajaro.jpg",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 12
    }, {});
    var image212191474232134 = new kony.ui.Image2({
        "id": "image212191474232134",
        "top": "178dp",
        "left": "9dp",
        "width": "51dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "perro.jpg",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var btnIngles = new kony.ui.Button({
        "id": "btnIngles",
        "top": "248dp",
        "left": "41dp",
        "width": "100dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Ingles",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDiccionario_btnIngles_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var button12191474232136 = new kony.ui.Button({
        "id": "button12191474232136",
        "top": "311dp",
        "left": "43dp",
        "width": "96dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Espanol",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDiccionario_button12191474232136_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var button12191474232137 = new kony.ui.Button({
        "id": "button12191474232137",
        "top": "310dp",
        "left": "148dp",
        "width": "94dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Frances",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDiccionario_button12191474232137_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var lblGato = new kony.ui.Label({
        "id": "lblGato",
        "top": "73dp",
        "left": "59dp",
        "width": "100dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("gato"),
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var lblPajaro = new kony.ui.Label({
        "id": "lblPajaro",
        "top": "136dp",
        "left": "62dp",
        "width": "100dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("pajaro"),
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var lblPerro = new kony.ui.Label({
        "id": "lblPerro",
        "top": "191dp",
        "left": "61dp",
        "width": "100dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": kony.i18n.getLocalizedString("perro"),
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var btnAleman = new kony.ui.Button({
        "id": "btnAleman",
        "top": "248dp",
        "left": "150dp",
        "width": "93dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Aleman",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmDiccionario_btnAleman_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    frmDiccionario.add(
    txtTituloFrm, image212191474232132, image212191474232133, image212191474232134, btnIngles, button12191474232136, button12191474232137, lblGato, lblPajaro, lblPerro, btnAleman);
};

function frmDiccionarioGlobals() {
    var MenuId = [];
    frmDiccionario = new kony.ui.Form2({
        "id": "frmDiccionario",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "preShow": frmDiccionario_frmDiccionario_preshow_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmDiccionario
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
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
    frmDiccionario.setDefaultUnit(kony.flex.DP);
};