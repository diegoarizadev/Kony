//Form JS File
function frmWidget2_frmWidget2_init_seq0(eventobject) {
    cargarDbSegment.call(this);
};

function frmWidget2_segProductos_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    mostrarInfoProducto.call(this);
};

function addWidgetsfrmWidget2() {
    var segProductosbox = new kony.ui.FlexContainer({
        "id": "segProductosbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segProductos = new kony.ui.SegmentedUI2({
        "id": "segProductos",
        "top": "31dp",
        "left": "25dp",
        "width": "84%",
        "height": "328dp",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblProducto": "lblProducto",
            "idproducto": "idproducto",
            "lblProductoPrecio": "lblProductoPrecio"
        },
        "Location": "[25,31]",
        "rowTemplate": segProductosbox,
        "widgetSkin": "sknWidget",
        "rowSkin": "sknRow",
        "rowFocusSkin": "segFocusKn",
        "alternateRowSkin": "sknSegRowAlter",
        "sectionHeaderSkin": "sknSegHEader",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "onRowClick": frmWidget2_segProductos_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    var lblProducto = new kony.ui.Label({
        "id": "lblProducto",
        "top": "29dp",
        "left": "25dp",
        "width": "144dp",
        "height": "273dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "sknPrecio"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 84
    }, {
        "textCopyable": false
    });
    var lblProductoPrecio = new kony.ui.Label({
        "id": "lblProductoPrecio",
        "top": "29dp",
        "left": "175dp",
        "width": "158dp",
        "height": "273dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "sknPrecio"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 16
    }, {
        "textCopyable": false
    });
    segProductosbox.add(
    lblProducto, lblProductoPrecio);
    frmWidget2.add(
    segProductos);
};

function frmWidget2Globals() {
    var MenuId = [];
    frmWidget2 = new kony.ui.Form2({
        "id": "frmWidget2",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": "Inv. De Productos",
        "enabledForIdleTimeout": false,
        "skin": "sknform",
        "init": frmWidget2_frmWidget2_init_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmWidget2
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
    frmWidget2.setDefaultUnit(kony.flex.DP);
};