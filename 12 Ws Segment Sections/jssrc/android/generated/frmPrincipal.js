//Form JS File
function frmPrincipal_frmPrincipal_init_seq0(eventobject) {
    frmPrincipal.segNoticias.setVisibility(false);
};

function frmPrincipal_btnBuscarNoticias_onClick_seq0(eventobject) {
    recuperarNoticias.call(this);
};

function addWidgetsfrmPrincipal() {
    var image219733838511848 = new kony.ui.Image2({
        "id": "image219733838511848",
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
    var label19733838511850 = new kony.ui.Label({
        "id": "label19733838511850",
        "top": "9dp",
        "left": "64dp",
        "width": "180dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Lector de noticias Fox",
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
    var lstCategoria1 = new kony.ui.ListBox({
        "id": "lstCategoria1",
        "top": "84dp",
        "left": "9dp",
        "width": "260dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "masterData": [
            ["vacio", "Seleccione una opcion"],
            ["deporte", "Deportes"],
            ["futbol", "Futbol"],
            ["nfl", "NFL"],
            ["uefa", "UEFA Europe League"],
            ["ligaColombia", "Liga Colombia Futbol"]
        ],
        "selectedKey": "vacio",
        "skin": "listboxNormal",
        "focusSkin": "listboxFocus"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "popupIcon": null,
        "applySkinsToPopup": true,
        "dropDownImage": null,
        "placeholder": null,
        "popupTitle": null,
        "tickedImage": null,
        "untickedImage": null,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var lstCategoria2 = new kony.ui.ListBox({
        "id": "lstCategoria2",
        "top": "129dp",
        "left": "10dp",
        "width": "260dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "masterData": [
            ["vacio", "Seleccione una opcion"],
            ["sports", "Deportes"],
            ["futbol", "Futbol"],
            ["nfl", "NFL"],
            ["uefa", "UEFA Europe League"],
            ["ligaColombia", "Liga futbol Colombiana"]
        ],
        "selectedKey": "vacio",
        "skin": "listboxNormal",
        "focusSkin": "listboxFocus"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "popupIcon": null,
        "applySkinsToPopup": true,
        "dropDownImage": null,
        "placeholder": null,
        "popupTitle": null,
        "tickedImage": null,
        "untickedImage": null,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var label19733838511993 = new kony.ui.Label({
        "id": "label19733838511993",
        "top": "49dp",
        "left": "9dp",
        "width": "100dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Categorias",
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
    var btnBuscarNoticias = new kony.ui.Button({
        "id": "btnBuscarNoticias",
        "top": "174dp",
        "left": "10dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Buscar Noticias",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmPrincipal_btnBuscarNoticias_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var segNoticiasbox = new kony.ui.FlexContainer({
        "id": "segNoticiasbox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segNoticias = new kony.ui.SegmentedUI2({
        "id": "segNoticias",
        "top": "230dp",
        "left": "11dp",
        "width": "72.89%",
        "height": "209dp",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblTituloNoticia": "lblTituloNoticia"
        },
        "Location": "[11,230]",
        "rowTemplate": segNoticiasbox,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    var lblTituloNoticia = new kony.ui.Label({
        "id": "lblTituloNoticia",
        "top": "5dp",
        "left": "2dp",
        "width": "325dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
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
    segNoticiasbox.add(
    lblTituloNoticia);
    frmPrincipal.add(
    image219733838511848, label19733838511850, lstCategoria1, lstCategoria2, label19733838511993, btnBuscarNoticias, segNoticias);
};

function frmPrincipalGlobals() {
    var MenuId = [];
    frmPrincipal = new kony.ui.Form2({
        "id": "frmPrincipal",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "init": frmPrincipal_frmPrincipal_init_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmPrincipal
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
    frmPrincipal.setDefaultUnit(kony.flex.DP);
};