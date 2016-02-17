function stepConfig() {
    var config = kony.ui.createAnimation({
        "0": {
            "left": "0dp",
            "top": "0dp",
            "backgroundColor": "ff7f50",
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "25": {
            "left": "50dp",
            "top": "50dp",
            "opacity": 0.75,
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "50": {
            "opacity": 0.5,
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        },
        "100": {
            "opacity": 0.0,
            "stepConfig": {
                "timingFunction": kony.anim.LINEAR
            }
        }
    });
    return config;
}

function timingConfig() {
    var config = {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_NONE,
        "duration": 5.0
    };
    return config;
}

function callbackConfig() {
    var config = {
        "animationEnd": function() {
            kony.print("animation END")
        }
    };
    return config;
}

function animateButton() {
    frmPrincipal.btnAnimar.animate(stepConfig(), timingConfig(), callbackConfig())
    kony.print("just ran the animation");
}