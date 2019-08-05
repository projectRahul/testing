import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var VidlibService = /** @class */ (function () {
    function VidlibService() {
    }
    VidlibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    VidlibService.ctorParameters = function () { return []; };
    /** @nocollapse */ VidlibService.ngInjectableDef = defineInjectable({ factory: function VidlibService_Factory() { return new VidlibService(); }, token: VidlibService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { VidlibService, VidlibComponent, VidlibModule };

//# sourceMappingURL=vidlib.js.map