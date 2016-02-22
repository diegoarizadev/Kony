//Form JS File
function frmPrincipal_lstSecciones_onSelection_seq0(eventobject) {
    recuperarNoticias.call(this);
};

function addWidgetsfrmPrincipal() {
    var label2003860044352 = new kony.ui.Label({
        "id": "label2003860044352",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var image22003860044356 = new kony.ui.Image2({
        "id": "image22003860044356",
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
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var lstSecciones = new kony.ui.ListBox({
        "id": "lstSecciones",
        "top": "80dp",
        "left": "16dp",
        "width": "260dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "masterData": [
            ["vacio", "Selecciones una opciòn"],
            ["deporte", "Deportes"],
            ["futbol", "Fútbol"],
            ["nfl", "NFL"],
            ["uefa", "UEFA Europe League"],
            ["ligaColombia", "Liga Colombia"]
        ],
        "selectedKey": "vacio",
        "skin": "listboxNormal",
        "focusSkin": "listboxFocus",
        "onSelection": frmPrincipal_lstSecciones_onSelection_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "dropDownImage": null,
        "placeholder": null,
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
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
        "top": "173dp",
        "left": "13dp",
        "width": "66.67%",
        "height": "231dp",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "fecha": "fecha",
            "hidDescripcion": "hidDescripcion",
            "lblNoticia": "lblNoticia"
        },
        "Location": "[13,173]",
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
    }, {
        "indicator": constants.SEGUI_ROW_SELECT,
        "enableDictionary": false,
        "showProgressIndicator": true,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE
    });
    var lblNoticia = new kony.ui.Label({
        "id": "lblNoticia",
        "top": "2dp",
        "left": "1dp",
        "width": "297dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "sknLabel"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    segNoticiasbox.add(
    lblNoticia);
    var label2003860044360 = new kony.ui.Label({
        "id": "label2003860044360",
        "top": "47dp",
        "left": "16dp",
        "width": "100dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Categoria",
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 6
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblNotificacion = new kony.ui.Label({
        "id": "lblNotificacion",
        "top": "131dp",
        "left": "17dp",
        "width": "258dp",
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
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    frmPrincipal.add(
    label2003860044352, image22003860044356, lstSecciones, segNoticias, label2003860044360, lblNotificacion);
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
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmPrincipal
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
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
    frmPrincipal.setDefaultUnit(kony.flex.DP);
};