import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VidlibService {
    constructor() { }
}
VidlibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
VidlibService.ctorParameters = () => [];
/** @nocollapse */ VidlibService.ngInjectableDef = defineInjectable({ factory: function VidlibService_Factory() { return new VidlibService(); }, token: VidlibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VidlibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
VidlibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-vidlib',
                template: `
    <p>
      vidlib works!
    </p>
  `
            }] }
];
/** @nocollapse */
VidlibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class VidlibModule {
}
VidlibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [VidlibComponent],
                imports: [],
                exports: [VidlibComponent]
            },] }
];

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