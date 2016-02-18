//Form JS File
function addWidgetsfrmWidget2Detalle() {
    var label2003860044239 = new kony.ui.Label({
        "id": "label2003860044239",
        "top": "84dp",
        "left": "10dp",
        "width": "92dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Producto :",
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
    var lblIdProducto = new kony.ui.Label({
        "id": "lblIdProducto",
        "top": "50dp",
        "left": "103dp",
        "width": "190dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
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
    var label2003860044241 = new kony.ui.Label({
        "id": "label2003860044241",
        "top": "119dp",
        "left": "10dp",
        "width": "91dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Precio:",
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
    var lblNombeProducto = new kony.ui.Label({
        "id": "lblNombeProducto",
        "top": "84dp",
        "left": "103dp",
        "width": "189dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
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
    var label2003860044243 = new kony.ui.Label({
        "id": "label2003860044243",
        "top": "50dp",
        "left": "11dp",
        "width": "91dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "ID Producto:",
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
    var lblPrecioProducto = new kony.ui.Label({
        "id": "lblPrecioProducto",
        "top": "119dp",
        "left": "102dp",
        "width": "188dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
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
    var label2003860044245 = new kony.ui.Label({
        "id": "label2003860044245",
        "top": "10dp",
        "left": "11dp",
        "width": "285dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Info detallada del producto",
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
    frmWidget2Detalle.add(
    label2003860044239, lblIdProducto, label2003860044241, lblNombeProducto, label2003860044243, lblPrecioProducto, label2003860044245);
};

function frmWidget2DetalleGlobals() {
    var MenuId = [];
    frmWidget2Detalle = new kony.ui.Form2({
        "id": "frmWidget2Detalle",
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
        "addWidgets": addWidgetsfrmWidget2Detalle
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
    frmWidget2Detalle.setDefaultUnit(kony.flex.DP);
};