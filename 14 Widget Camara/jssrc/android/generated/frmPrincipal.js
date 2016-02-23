//Form JS File
function frmPrincipal_btnCamara_onCapture_seq0(eventobject) {
    capturarImagen.call(this);
};

function addWidgetsfrmPrincipal() {
    var btnCamara = new kony.ui.Camera({
        "id": "btnCamara",
        "top": "2dp",
        "left": "0dp",
        "width": "354dp",
        "height": "50dp",
        "zIndex": 1,
        "isVisible": true,
        "text": "Selfie..!!",
        "skin": "camNormal",
        "focusSkin": "camFocus",
        "onCapture": frmPrincipal_btnCamara_onCapture_seq0,
        "scaleFactor": 80,
        "compressionLevel": 0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": false,
        "overlayConfig": {
            "overlayForm": frmOverlay,
            "tapAnywhere": false
        }
    });
    var imgCamara = new kony.ui.Image2({
        "id": "imgCamara",
        "top": "53dp",
        "left": "0dp",
        "width": "354dp",
        "height": "391dp",
        "zIndex": 1,
        "isVisible": true,
        "src": null,
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 88
    }, {});
    frmPrincipal.add(
    btnCamara, imgCamara);
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