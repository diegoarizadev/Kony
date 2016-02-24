//Form JS File
function frmBadge_btnBadge_onClick_seq0(eventobject) {
    setBadgeValue.call(this);
};

function addWidgetsfrmBadge() {
    var label20038600442110 = new kony.ui.Label({
        "id": "label20038600442110",
        "top": "146dp",
        "left": "40dp",
        "width": "107dp",
        "height": "26dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Valor Baged :",
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
    var txtBaged = new kony.ui.TextBox2({
        "id": "txtBaged",
        "top": "138dp",
        "left": "155dp",
        "width": "78dp",
        "height": "40dp",
        "zIndex": 1,
        "isVisible": true,
        "text": null,
        "secureTextEntry": false,
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "placeholder": null,
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "skin": "tbx2Normal",
        "focusSkin": "tbx2Focus"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerHeightMode": constants.TEXTBOX_DEFAULT_PLATFORM_HEIGHT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 9
    }, {
        "pasteboardType": constants.TEXTBOX_PASTE_BOARD_TYPE_SYSTEM_LEVEL,
        "leftViewImage": null,
        "showClearButton": true,
        "showProgressIndicator": true,
        "showCloseButton": true,
        "closeButtonText": "Done",
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT,
        "autoCorrect": false
    });
    var btnBadge = new kony.ui.Button({
        "id": "btnBadge",
        "top": "190dp",
        "left": "63dp",
        "width": "144dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Badge..!!",
        "skin": "btnNormal",
        "focusSkin": "btnFocus",
        "onClick": frmBadge_btnBadge_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var image220038600442113 = new kony.ui.Image2({
        "id": "image220038600442113",
        "top": "7dp",
        "left": "16dp",
        "width": "125dp",
        "height": "124dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "icon.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 28
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    var label20038600442114 = new kony.ui.Label({
        "id": "label20038600442114",
        "top": "49dp",
        "left": "148dp",
        "width": "100dp",
        "height": "36dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "BADGE N0RF3N",
        "skin": "skntTitulo"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 8
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var image220038600442115 = new kony.ui.Image2({
        "id": "image220038600442115",
        "top": "248dp",
        "left": "54dp",
        "width": "184dp",
        "height": "55dp",
        "zIndex": 1,
        "isVisible": true,
        "src": "badge.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 13
    }, {
        "glossyEffect": constants.IMAGE_GLOSSY_EFFECT_DEFAULT
    });
    frmBadge.add(
    label20038600442110, txtBaged, btnBadge, image220038600442113, label20038600442114, image220038600442115);
};

function frmBadgeGlobals() {
    var MenuId = [];
    frmBadge = new kony.ui.Form2({
        "id": "frmBadge",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": "Badge n0rf3n",
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmBadge
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
    frmBadge.setDefaultUnit(kony.flex.DP);
};