//Form JS File
function addWidgetsfrmDetalle() {
    var image22003860044497 = new kony.ui.Image2({
        "id": "image22003860044497",
        "top": "6dp",
        "left": "8dp",
        "width": "53dp",
        "height": "33dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "fox1.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {});
    var label2003860044525 = new kony.ui.Label({
        "id": "label2003860044525",
        "top": "9dp",
        "left": "64dp",
        "width": "180dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Lector de noticias Fox",
        "skin": "sknTitulo"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var label2003860044754 = new kony.ui.Label({
        "id": "label2003860044754",
        "top": "88dp",
        "left": "8dp",
        "width": "100dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Titulo :",
        "skin": "sknLabel2"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var lblTitulo = new kony.ui.Label({
        "id": "lblTitulo",
        "top": "118dp",
        "left": "8dp",
        "width": "342dp",
        "height": "58dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {
        "textCopyable": false
    });
    var label20038600441014 = new kony.ui.Label({
        "id": "label20038600441014",
        "top": "57dp",
        "left": "8dp",
        "width": "81dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Fecha :",
        "skin": "sknLabel2"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    var lblFecha = new kony.ui.Label({
        "id": "lblFecha",
        "top": "56dp",
        "left": "91dp",
        "width": "260dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
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
    var lblDescNoticia = new kony.ui.Label({
        "id": "lblDescNoticia",
        "top": "210dp",
        "left": "9dp",
        "width": "341dp",
        "height": "205dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 46
    }, {
        "textCopyable": false
    });
    var label19733838511811 = new kony.ui.Label({
        "id": "label19733838511811",
        "top": "181dp",
        "left": "8dp",
        "width": "100dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Descripcion :",
        "skin": "sknLabel2"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false
    });
    frmDetalle.add(
    image22003860044497, label2003860044525, label2003860044754, lblTitulo, label20038600441014, lblFecha, lblDescNoticia, label19733838511811);
};

function frmDetalleGlobals() {
    var MenuId = [];
    frmDetalle = new kony.ui.Form2({
        "id": "frmDetalle",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmDetalle
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
    frmDetalle.setDefaultUnit(kony.flex.DP);
};