var designer = GC.Spread.Sheets.Designer;
(function () {
    'use strict';

    function initStatusBar() {
        $(".statusBar").find(".statusbar-zoom-slider").slider({ max: 400, min: 50 });
    }

    function addEvents() {
        $(".statusBar").find(".statusbar-zoom-value").click(function () {
            var zoomDialog = new designer.ZoomDialog();
            zoomDialog.open();
        });
        designer.wrapper.spreadElement.bind("FileOpened", function (evt, data) {
            designer.ribbon.updateZoomToStatusBar();
        });
    }

    designer.loader.ready(function () {
        initStatusBar();
        if (!designer.wrapper.spread.notWorking) {
            addEvents();
        }
    });
})();
