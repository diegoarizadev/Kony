//Form JS File
function frmPrincipal_frmPrincipal_preshow_seq0(eventobject) {
    cargarItems.call(this);
};

function frmPrincipal_button19733838512010_onClick_seq0(eventobject) {
    agregarContacto.call(this);
};

function frmPrincipal_segAgenda_onRowClick_seq0(eventobject, sectionNumber, rowNumber) {
    eliminarContacto.call(this);
};

function addWidgetsfrmPrincipal() {
    var label19733838512006 = new kony.ui.Label({
        "id": "label19733838512006",
        "top": "74dp",
        "left": "5dp",
        "width": "54dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Nombre :",
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
    var label19733838512007 = new kony.ui.Label({
        "id": "label19733838512007",
        "top": "123dp",
        "left": "5dp",
        "width": "58dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Grupo : ",
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
    var txtNombre = new kony.ui.TextBox2({
        "id": "txtNombre",
        "top": "65dp",
        "left": "64dp",
        "width": "187dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Normal",
        "focusSkin": "tbx2Focus",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var txtGrupo = new kony.ui.TextBox2({
        "id": "txtGrupo",
        "top": "117dp",
        "left": "66dp",
        "width": "185dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Normal",
        "focusSkin": "tbx2Focus",
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "autoFilter": false,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var button19733838512010 = new kony.ui.Button({
        "id": "button19733838512010",
        "top": "164dp",
        "left": "36dp",
        "width": "260dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Agregar",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmPrincipal_button19733838512010_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var image219733838512011 = new kony.ui.Image2({
        "id": "image219733838512011",
        "top": "8dp",
        "left": "8dp",
        "width": "52dp",
        "height": "52dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "icag.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 12
    }, {});
    var label19733838512012 = new kony.ui.Label({
        "id": "label19733838512012",
        "top": "18dp",
        "left": "72dp",
        "width": "100dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "AGENDA",
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
    var segAgendabox = new kony.ui.FlexContainer({
        "id": "segAgendabox",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segAgenda = new kony.ui.SegmentedUI2({
        "id": "segAgenda",
        "top": "230dp",
        "left": "4dp",
        "width": "92%",
        "height": "210dp",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblContacto": "lblContacto"
        },
        "Location": "[4,230]",
        "rowTemplate": segAgendabox,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "groupCells": false,
        "onRowClick": frmPrincipal_segAgenda_onRowClick_seq0,
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    var lblContacto = new kony.ui.Label({
        "id": "lblContacto",
        "top": "6dp",
        "left": "3dp",
        "width": "388dp",
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
    segAgendabox.add(
    lblContacto);
    frmPrincipal.add(
    label19733838512006, label19733838512007, txtNombre, txtGrupo, button19733838512010, image219733838512011, label19733838512012, segAgenda);
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
        "preShow": frmPrincipal_frmPrincipal_preshow_seq0,
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