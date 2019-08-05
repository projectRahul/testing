(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('vidlib', ['exports', '@angular/core'], factory) :
    (factory((global.vidlib = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VidlibService = /** @class */ (function () {
        function VidlibService() {
        }
        VidlibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        VidlibService.ctorParameters = function () { return []; };
        /** @nocollapse */ VidlibService.ngInjectableDef = i0.defineInjectable({ factory: function VidlibService_Factory() { return new VidlibService(); }, token: VidlibService, providedIn: "root" });
        return VidlibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VidlibComponent = /** @class */ (function () {
        function VidlibComponent() {
        }
        /**
         * @return {?}
         */
        VidlibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        VidlibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-vidlib',
                        template: "\n    <p>\n      vidlib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        VidlibComponent.ctorParameters = function () { return []; };
        return VidlibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var VidlibModule = /** @class */ (function () {
        function VidlibModule() {
        }
        VidlibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [VidlibComponent],
                        imports: [],
                        exports: [VidlibComponent]
                    },] }
        ];
        return VidlibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.VidlibService = VidlibService;
    exports.VidlibComponent = VidlibComponent;
    exports.VidlibModule = VidlibModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=vidlib.umd.js.map