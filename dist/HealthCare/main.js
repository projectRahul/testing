(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






// import { PageNotFoundComponent } from './pnf/page-not-found.component';
var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqLyJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdOpacity = 0.9 bdColor = \"#808687\" size = \"large\" color = \"#fff\" type = \"ball-clip-rotate-multiple\" [fullScreen] = \"true\" >\n\t<p style=\"color: white\" > Loading... </p>\n</ngx-spinner>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'HealthCare';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _pnf_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pnf/page-not-found.component */ "./src/app/pnf/page-not-found.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");











// import { SharedComponent } from './home/shared/shared.component';



// import { MyInterceptor } from './my-interceptor';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                // HomeComponent,
                _pnf_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
            ],
            imports: [
                ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                angular_notifier__WEBPACK_IMPORTED_MODULE_9__["NotifierModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"]
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"] /*,{provide: HTTP_INTERCEPTORS,useClass: MyInterceptor,multi: true}*/],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/baseurl.service.ts":
/*!************************************!*\
  !*** ./src/app/baseurl.service.ts ***!
  \************************************/
/*! exports provided: BaseurlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseurlService", function() { return BaseurlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BaseurlService = /** @class */ (function () {
    function BaseurlService() {
        this.baseurl = 'http://localhost:3000/';
    }
    BaseurlService.prototype.getBaseUrl = function () {
        return this.baseurl;
    };
    BaseurlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BaseurlService);
    return BaseurlService;
}());



/***/ }),

/***/ "./src/app/home/add-patient/add-patient.component.css":
/*!************************************************************!*\
  !*** ./src/app/home/add-patient/add-patient.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Absolute-Center {\r\n  margin: auto;\r\n  position: relative;\r\n  top: 0; left: 0; bottom: 0; right: 0;\r\n}\r\n\r\n.Absolute-Center.is-Responsive {\r\n  width: 50%; \r\n  height: 50%;\r\n  min-width: 60%;\r\n  max-width: 400px;\r\n  padding: 40px;\r\n}\r\n\r\n.strong-css{\r\n\tmargin-left: 40%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hZGQtcGF0aWVudC9hZGQtcGF0aWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWRkLXBhdGllbnQvYWRkLXBhdGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5BYnNvbHV0ZS1DZW50ZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwOyBsZWZ0OiAwOyBib3R0b206IDA7IHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uQWJzb2x1dGUtQ2VudGVyLmlzLVJlc3BvbnNpdmUge1xyXG4gIHdpZHRoOiA1MCU7IFxyXG4gIGhlaWdodDogNTAlO1xyXG4gIG1pbi13aWR0aDogNjAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgcGFkZGluZzogNDBweDtcclxufVxyXG4uc3Ryb25nLWNzc3tcclxuXHRtYXJnaW4tbGVmdDogNDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/add-patient/add-patient.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/add-patient/add-patient.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-shared>\n\t<div class=\"container header_content\">\n\t  <div class=\"row\">\n\t    <div class=\"Absolute-Center is-Responsive\">\n\t      <div class=\"col-sm-12\">\n\t\t\t <form class=\"form-horizontal\" [formGroup]=\"addPatientForm\" (ngSubmit)=\"onSubmit()\"  enctype=\"multipart/form-data\">\n\t\t\t \t<div class=\"panel panel-primary\">\n\t\t\t \t\t<div class=\"panel-heading\">\n\n\t\t\t \t\t\t<h3 class=\"panel-title\"><strong class=\"strong-css\">Add Patient</strong></h3>\n\t\t\t \t\t</div>\n\t\t\t \t\t<div class=\"panel-body\">\n\t\t\t \t\t\t<notifier-container></notifier-container>\n\t\t\t \t\t\t<div class=\"form-group\"  [ngClass] = \"{'has-error' : addPatientForm.get('unique_num').errors  && (addPatientForm.get('unique_num').touched || addPatientForm.get('unique_num').dirty)}\">\n\t\t\t \t\t\t\t<label class=\"col-sm-2 control-label\">Uni. No.*</label>\n\t\t\t \t\t\t\t<div class=\"col-sm-8\">\n\t\t\t \t\t\t\t\t<input type=\"text\" id=\"unique_num\" formControlName=\"unique_num\" name=\"unique_num\" class=\"form-control\" [(ngModel)]=\"inputText\">{{ inputText }}\n\t\t\t \t\t\t\t\t<span *ngIf=\"addPatientForm.get('unique_num').errors && (addPatientForm.get('unique_num').touched || addPatientForm.get('unique_num').dirty)\">Unique Number is required</span>\n\t\t\t \t\t\t\t</div>\n\t\t\t \t\t\t</div>\n\t\t\t \t\t\t<div class=\"form-group\"  [ngClass] = \"{'has-error' : addPatientForm.get('name').errors  && (addPatientForm.get('name').touched || addPatientForm.get('name').dirty)}\">\n\t\t\t \t\t\t\t<label class=\"col-sm-2 control-label\">Name*</label>\n\t\t\t \t\t\t\t<div class=\"col-sm-8\">\n\t\t\t \t\t\t\t\t<input type=\"text\" id=\"name\" formControlName=\"name\" name=\"name\" class=\"form-control\">\n\t\t\t \t\t\t\t\t<span *ngIf=\"addPatientForm.get('name').errors && (addPatientForm.get('name').touched || addPatientForm.get('name').dirty)\">Full name is required</span>\n\t\t\t \t\t\t\t</div>\n\t\t\t \t\t\t</div>\n\t\t\t \t\t\t<div class=\"form-group\"  [ngClass] = \"{'has-error' : addPatientForm.get('email').errors  && (addPatientForm.get('email').touched || addPatientForm.get('email').dirty)}\">\n\t\t\t \t\t\t\t<label class=\"col-sm-2 control-label\">Email*</label>\n\t\t\t \t\t\t\t<div class=\"col-sm-8\">\n\t\t\t \t\t\t\t\t<input type=\"text\" id=\"email\" formControlName=\"email\" name=\"email\" class=\"form-control\">\n\t\t\t \t\t\t\t\t<span *ngIf=\"addPatientForm.get('email').errors && (addPatientForm.get('email').touched || addPatientForm.get('email').dirty)\">Email is required</span>\n\t\t\t \t\t\t\t</div>\n\t\t\t \t\t\t</div>\n\t\t\t \t\t\t<div class=\"form-group\"  [ngClass] = \"{'has-error' : addPatientForm.get('mobile').errors  && (addPatientForm.get('mobile').touched || addPatientForm.get('mobile').dirty)}\">\n\t\t\t \t\t\t\t<label class=\"col-sm-2 control-label\">Mobile*</label>\n\t\t\t \t\t\t\t<div class=\"col-sm-8\">\n\t\t\t \t\t\t\t\t<input type=\"text\" id=\"mobile\" formControlName=\"mobile\" name=\"mobile\" class=\"form-control\">\n\t\t\t \t\t\t\t\t<span *ngIf=\"addPatientForm.get('mobile').errors && (addPatientForm.get('mobile').touched || addPatientForm.get('mobile').dirty)\">Only 10 digit mobile number is accepted</span>\n\t\t\t \t\t\t\t</div>\n\t\t\t \t\t\t</div> \n\t\t\t \t\t\t<div class=\"form-group\"  [ngClass] = \"{'has-error' : addPatientForm.get('dob').errors  && (addPatientForm.get('dob').touched || addPatientForm.get('dob').dirty)}\">\n\t\t\t \t\t\t\t<label class=\"col-sm-2 control-label\">DOB*</label>\n\t\t\t \t\t\t\t<div class=\"col-sm-8\">\n\t\t\t \t\t\t\t\t<input type=\"text\" id=\"dob\" formControlName=\"dob\" name=\"dob\" class=\"form-control\" bsDatepicker >\n\t\t\t \t\t\t\t\t<span *ngIf=\"addPatientForm.get('dob').errors && (addPatientForm.get('dob').touched || addPatientForm.get('dob').dirty)\">DOB is required</span>\n\t\t\t \t\t\t\t</div>\n\t\t\t \t\t\t</div>\n\t\t\t \t\t\t<div class=\"form-group\"  [ngClass] = \"{'has-error' : addPatientForm.get('address').errors  && (addPatientForm.get('address').touched || addPatientForm.get('address').dirty)}\">\n\t\t\t \t\t\t\t<label class=\"col-sm-2 control-label\">Address*</label>\n\t\t\t \t\t\t\t<div class=\"col-sm-8\">\n\t\t\t \t\t\t\t\t<input type=\"text\" id=\"address\" formControlName=\"address\" name=\"address\" class=\"form-control\">\n\t\t\t \t\t\t\t\t<span *ngIf=\"addPatientForm.get('address').errors && (addPatientForm.get('address').touched || addPatientForm.get('address').dirty)\">Address is required</span>\n\t\t\t \t\t\t\t</div>\n\t\t\t \t\t\t</div>\n\t\t\t \t\t\t<div class=\"form-group\">\n\t\t\t \t\t\t\t<label class=\"col-sm-2 control-label\">Image</label>\n\t\t\t \t\t\t\t<div class=\"col-sm-8\">\n\t\t\t \t\t\t\t\t<input type=\"file\" id=\"image\" formControlName=\"image\" name=\"image\" class=\"form-control\" (change)=\"onFileSelected($event)\">\n\t\t\t \t\t\t\t</div>\n\t\t\t \t\t\t</div>\n\t\t\t \t\t</div>\n\t\t\t \t\t<div class=\"panel-footer\">\n\t\t\t \t\t\t<div class=\"btn-toolbar\">\n\t\t\t\t \t\t\t<button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"addPatientForm.invalid\">Add</button>\n\t\t\t\t \t\t\t<button class=\"btn btn-primary\" type=\"reset\" value=\"Reset\">Cancel</button>\n\t\t\t\t \t\t</div>\n\t\t\t \t\t</div>\n\t\t\t \t</div>\n\t\t\t </form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t</div>\n</app-shared>"

/***/ }),

/***/ "./src/app/home/add-patient/add-patient.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/add-patient/add-patient.component.ts ***!
  \***********************************************************/
/*! exports provided: AddPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPatientComponent", function() { return AddPatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");






var AddPatientComponent = /** @class */ (function () {
    function AddPatientComponent(apf, router, home_service, notifierService) {
        this.apf = apf;
        this.router = router;
        this.home_service = home_service;
        this.notifierService = notifierService;
        this.inputText = '';
        this.selectedFile = null;
        this.notifier = notifierService;
    }
    AddPatientComponent.prototype.ngOnInit = function () {
        this.addPatientForm = this.apf.group({
            unique_num: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[1-9]{1}[0-9]{9}')])],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            image: [''],
        });
    };
    AddPatientComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        var file = event.target.files[0];
        this.addPatientForm.get('image').setValue(file);
    };
    AddPatientComponent.prototype.onSubmit = function () {
        var _this = this;
        var fd = new FormData();
        fd.append('image', this.addPatientForm.get('image').value);
        fd.append('dob', convertDateFormat(this.addPatientForm.get('dob').value));
        fd.append('unique_num', this.addPatientForm.get('unique_num').value);
        fd.append('name', this.addPatientForm.get('name').value);
        fd.append('email', this.addPatientForm.get('email').value);
        fd.append('mobile', this.addPatientForm.get('mobile').value);
        fd.append('address', this.addPatientForm.get('address').value);
        this.home_service.addNewPatient(fd)
            .subscribe(function (data) {
            console.log(data.status);
            if (data.status == '1') {
                _this.notifier.notify('success', 'Patient Added Successfully');
            }
            else {
                _this.notifier.notify('danger', 'Patient Already Exists');
            }
        });
    };
    AddPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-patient',
            template: __webpack_require__(/*! ./add-patient.component.html */ "./src/app/home/add-patient/add-patient.component.html"),
            styles: [__webpack_require__(/*! ./add-patient.component.css */ "./src/app/home/add-patient/add-patient.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"]])
    ], AddPatientComponent);
    return AddPatientComponent;
}());

function convertDateFormat(str) {
    var date = new Date(str), mnth = ("0" + (date.getMonth() + 1)).slice(-2), day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
}


/***/ }),

/***/ "./src/app/home/csv/csv.component.css":
/*!********************************************!*\
  !*** ./src/app/home/csv/csv.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Absolute-Center {\r\n  margin: auto;\r\n  position: relative;\r\n  top: 0; left: 0; bottom: 0; right: 0;\r\n}\r\n\r\n.Absolute-Center.is-Responsive {\r\n  width: 50%; \r\n  height: 50%;\r\n  min-width: 60%;\r\n  max-width: 400px;\r\n  padding: 40px;\r\n}\r\n\r\n.strong-css{\r\n\tmargin-left: 40%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jc3YvY3N2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVE7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jc3YvY3N2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQWJzb2x1dGUtQ2VudGVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDsgbGVmdDogMDsgYm90dG9tOiAwOyByaWdodDogMDtcclxufVxyXG5cclxuLkFic29sdXRlLUNlbnRlci5pcy1SZXNwb25zaXZlIHtcclxuICB3aWR0aDogNTAlOyBcclxuICBoZWlnaHQ6IDUwJTtcclxuICBtaW4td2lkdGg6IDYwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbn1cclxuLnN0cm9uZy1jc3N7XHJcblx0bWFyZ2luLWxlZnQ6IDQwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/csv/csv.component.html":
/*!*********************************************!*\
  !*** ./src/app/home/csv/csv.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-shared>\n\n\t<div class=\"container header_content\">\n\t  <div class=\"row\">\n\t    <div class=\"Absolute-Center is-Responsive\">\n\t      <div class=\"col-sm-12\">\n\t\t\t <form class=\"form-horizontal\" [formGroup]=\"addCsv\" (ngSubmit)=\"onSubmit()\"  enctype=\"multipart/form-data\">\n\t\t\t \t<div class=\"panel panel-primary\">\n\t\t\t \t\t<div class=\"panel-heading\">\n\n\t\t\t \t\t\t<h3 class=\"panel-title\"><strong class=\"strong-css\">Upload Records</strong></h3>\n\t\t\t \t\t</div>\n\t\t\t \t\t<div class=\"panel-body\">\n\t\t\t \t\t\t<notifier-container></notifier-container>\n\t\t\t \t\t\t<div class=\"form-group\">\n\t\t\t \t\t\t\t<label class=\"col-sm-2 control-label\">Table</label>\n\t\t\t \t\t\t\t<div class=\"col-sm-8\">\n\t\t\t \t\t\t\t\t<select id=\"select_table\"  (change)=\"sample_collection($event.target.value)\" formControlName=\"select_table\" name=\"select_table\" class=\"form-control\" *ngIf= \"collection_data !=''\">\n\t\t\t \t\t\t\t\t\t<option value='' selected >Select Collection</option>\n\t\t\t\t\t\t\t\t \t<option *ngFor=\"let collection of collection_data; let counter=index\" [value]=\"collection\">{{collection}}</option>\n\t\t\t \t\t\t\t\t</select>\n\t\t\t \t\t\t\t</div>\n\t\t\t \t\t\t\t<a (click)=\"download_sample()\" id=\"sample_link_icon\" data-value=\"\" hidden><i class=\"fa fa-download\" style=\"font-size:36px\"></i></a>\n\t\t\t \t\t\t</div>\n\t\t\t \t\t\t<div class=\"form-group\">\n\t\t\t \t\t\t\t<label class=\"col-sm-2 control-label\">Action</label>\n\t\t\t \t\t\t\t<div class=\"col-sm-8\">\n\t\t\t \t\t\t\t\t<input type=\"radio\" name=\"action\" formControlName=\"action\" value=\"truncate\" class=\"\">&nbsp;Truncate And Add&nbsp;&nbsp;\n\t\t\t \t\t\t\t\t<input type=\"radio\" name=\"action\" formControlName=\"action\" value=\"withouttruncateadd\" class=\"\">&nbsp;Add On Existing Data\n\t\t\t \t\t\t\t</div>\n\t\t\t \t\t\t</div>\n\t\t\t \t\t\t<div class=\"form-group\">\n\t\t\t \t\t\t\t<label class=\"col-sm-2 control-label\">File</label>\n\t\t\t \t\t\t\t<div class=\"col-sm-8\">\n\t\t\t \t\t\t\t\t<input type=\"file\" id=\"file\" formControlName=\"file\" name=\"file\" class=\"form-control\" (change)=\"onFileSelected($event)\">\n\t\t\t \t\t\t\t</div>\n\t\t\t \t\t\t</div>\n\t\t\t \t\t</div>\n\t\t\t \t\t<div class=\"panel-footer\">\n\t\t\t \t\t\t<div class=\"btn-toolbar\">\n\t\t\t\t \t\t\t<button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"addCsv.invalid\">Upload</button>\n\t\t\t\t \t\t\t<button class=\"btn btn-primary\" type=\"submit\">Cancel</button>\n\t\t\t\t \t\t</div>\n\t\t\t \t\t</div>\n\t\t\t \t</div>\n\t\t\t </form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t</div>\n</app-shared>"

/***/ }),

/***/ "./src/app/home/csv/csv.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/csv/csv.component.ts ***!
  \*******************************************/
/*! exports provided: CsvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvComponent", function() { return CsvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-csv/ngx-csv */ "./node_modules/ngx-csv/ngx-csv.js");
/* harmony import */ var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_6__);







var CsvComponent = /** @class */ (function () {
    function CsvComponent(cv, router, home_service, notifierService) {
        this.cv = cv;
        this.router = router;
        this.home_service = home_service;
        this.notifierService = notifierService;
        this.selectedFile = null;
        this.notifier = notifierService;
    }
    CsvComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addCsv = this.cv.group({
            select_table: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            action: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            file: [''],
        });
        this.home_service.getCollectionList()
            .subscribe(function (collection_list) {
            // console.log(collection_list);
            if (collection_list.status) {
                _this.collection_data = collection_list.data;
            }
            else {
                _this.collection_data = '';
            }
        });
    };
    CsvComponent.prototype.sample_collection = function (collection_name) {
        var sample_link_icon = document.getElementById('sample_link_icon');
        if (collection_name != '') {
            sample_link_icon.style.display = 'block';
            document.getElementById('sample_link_icon').setAttribute("data-value", collection_name);
        }
        else {
            sample_link_icon.style.display = 'none';
        }
    };
    CsvComponent.prototype.download_sample = function () {
        var collection_name = document.getElementById('sample_link_icon').getAttribute("data-value");
        if (collection_name != '') {
            this.home_service.getSampleCollection({ 'collection_name': collection_name })
                .subscribe(function (collection_list) {
                var index__v = collection_list.data.indexOf('__v');
                if (index__v > -1) {
                    collection_list.data.splice(index__v, 1);
                }
                var index_id = collection_list.data.indexOf('_id');
                if (index_id > -1) {
                    collection_list.data.splice(index_id, 1);
                }
                new ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_6__["ngxCsv"]([Object.assign({}, collection_list.data)], collection_name);
            });
        }
    };
    CsvComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
        var file = event.target.files[0];
        this.addCsv.get('file').setValue(file);
    };
    CsvComponent.prototype.onSubmit = function () {
        var _this = this;
        var fd = new FormData();
        fd.append('select_table', this.addCsv.get('select_table').value);
        fd.append('action', this.addCsv.get('action').value);
        fd.append('file', this.addCsv.get('file').value);
        this.home_service.uploadCsv(fd)
            .subscribe(function (data) {
            console.log(data.status);
            if (data.status == '1') {
                _this.notifier.notify('success', 'Records Added Successfully');
            }
            else {
                _this.notifier.notify('danger', 'Records not Added');
            }
        });
    };
    CsvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-csv',
            template: __webpack_require__(/*! ./csv.component.html */ "./src/app/home/csv/csv.component.html"),
            styles: [__webpack_require__(/*! ./csv.component.css */ "./src/app/home/csv/csv.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"]])
    ], CsvComponent);
    return CsvComponent;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/home/logout/logout.component.ts");
/* harmony import */ var _pnf_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pnf/page-not-found.component */ "./src/app/pnf/page-not-found.component.ts");
/* harmony import */ var _patient_tabs_patient_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-tabs/patient-tabs.component */ "./src/app/home/patient-tabs/patient-tabs.component.ts");
/* harmony import */ var _patient_tabs_information_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patient-tabs/information/information.component */ "./src/app/home/patient-tabs/information/information.component.ts");
/* harmony import */ var _patient_tabs_medication_medication_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patient-tabs/medication/medication.component */ "./src/app/home/patient-tabs/medication/medication.component.ts");
/* harmony import */ var _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-patient/add-patient.component */ "./src/app/home/add-patient/add-patient.component.ts");
/* harmony import */ var _csv_csv_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./csv/csv.component */ "./src/app/home/csv/csv.component.ts");
/* harmony import */ var _patient_tabs_medication_acc_medication_acc_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patient-tabs/medication-acc/medication-acc.component */ "./src/app/home/patient-tabs/medication-acc/medication-acc.component.ts");












var routes = [
    // {path: 'home', component : HomeComponent},
    { path: 'home/patienttabs', component: _patient_tabs_patient_tabs_component__WEBPACK_IMPORTED_MODULE_6__["PatientTabsComponent"] },
    { path: 'home/csv', component: _csv_csv_component__WEBPACK_IMPORTED_MODULE_10__["CsvComponent"] },
    { path: 'home/add-patient', component: _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_9__["AddPatientComponent"] },
    { path: 'home/logout', component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] },
    { path: 'home/patienttabs/information', component: _patient_tabs_information_information_component__WEBPACK_IMPORTED_MODULE_7__["InformationComponent"] },
    { path: 'home/patienttabs/medication', component: _patient_tabs_medication_medication_component__WEBPACK_IMPORTED_MODULE_8__["MedicationComponent"] },
    { path: 'home/patienttabs/medicationacc', component: _patient_tabs_medication_acc_medication_acc_component__WEBPACK_IMPORTED_MODULE_11__["MedicationAccComponent"] },
    // {path: 'change_image', component : ChangeImageComponent},
    { path: 'home', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: _pnf_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Absolute-Center {\r\n  margin: auto;\r\n  position: absolute;\r\n  top: 0; left: 0; bottom: 0; right: 0;\r\n}\r\n\r\n.Absolute-Center.is-Responsive {\r\n  width: 50%; \r\n  height: 50%;\r\n  min-width: 60%;\r\n  max-width: 400px;\r\n  padding: 40px;\r\n}\r\n\r\n.strong-css{\r\n  margin-left: 35%;\r\n}\r\n\r\n// For Search Dropdown\r\n\r\n\r\n.dropbtn:hover, .dropbtn:focus {\r\n  background-color: #2980B9;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  background-color: #f1f1f1;\r\n  min-width: 160px;\r\n  overflow: auto;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.dropdown a:hover {background-color: #ddd;}\r\n\r\n.show {display: block;}\r\n\r\n.position-searchbox{\r\n  position: relative;\r\n  margin-top:5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVE7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUtBOzs7O0VBSUUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBLG1CQUFtQixzQkFBc0IsQ0FBQzs7QUFFMUMsT0FBTyxjQUFjLENBQUM7O0FBSXRCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkFic29sdXRlLUNlbnRlciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7IGxlZnQ6IDA7IGJvdHRvbTogMDsgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5BYnNvbHV0ZS1DZW50ZXIuaXMtUmVzcG9uc2l2ZSB7XHJcbiAgd2lkdGg6IDUwJTsgXHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgbWluLXdpZHRoOiA2MCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG59XHJcbi5zdHJvbmctY3Nze1xyXG4gIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIEZvciBTZWFyY2ggRHJvcGRvd25cclxuXHJcblxyXG4uZHJvcGJ0bjpob3ZlciwgLmRyb3BidG46Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwQjk7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duIGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG5cclxuLnNob3cge2Rpc3BsYXk6IGJsb2NrO31cclxuXHJcblxyXG5cclxuLnBvc2l0aW9uLXNlYXJjaGJveHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDo1JTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-shared>\r\n\t<div class=\"position-searchbox header_content\">\r\n\t\t<div class=\"container\">\r\n\t\t  <div class=\"row\">\r\n\t\t    <div class=\"Absolute-Center is-Responsive\">\r\n\t\t      <div class=\"col-sm-12 col-md-10 col-md-offset-1\">\r\n\t\t\t\t <form id=\"form_login\" class=\"form-horizontal\" [formGroup]=\"patientForm\" (submit)=\"searchwith('name')\">\r\n\t\t\t\t \t<div class=\"panel panel-primary\">\r\n\t\t\t\t \t\t<div class=\"panel-heading\">\r\n\r\n\t\t\t\t \t\t\t<h3 class=\"panel-title\"><strong class=\"strong-css\">Search Patient</strong></h3>\r\n\t\t\t\t \t\t</div>\r\n\t\t\t\t \t\t<div class=\"panel-body\">\r\n\t\t\t\t \t\t\t<div class=\"form-group\">\r\n\t\t\t\t \t\t\t\t<label class=\"col-sm-2 control-label\">Search</label>\r\n\t\t\t\t \t\t\t\t\r\n\r\n\t\t\t\t \t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t \t\t\t\t\t<div class=\"dropdown\">\r\n\t\t\t\t \t\t\t\t\t\t<input type=\"text\" placeholder=\"Search\" formControlName=\"search\" name=\"search\" class=\"form-control\" #searchValue  (focus)=\"showDropdown()\">\r\n\t\t\t\t \t\t\t\t\t\t<div id=\"myDropdown\" class=\"dropdown-content\">\r\n\t\t\t\t\t\t\t\t\t\t    <a (click)=\"searchwith(searchValue.value,'name')\">Name</a>\r\n\t\t\t\t\t\t\t\t\t\t    <a (click)=\"searchwith(searchValue.value,'unique_no')\">Unique No.</a>\r\n\t\t\t\t\t\t\t\t\t  \t</div>\r\n\t\t\t\t\t\t\t\t  \t</div>\r\n\t\t\t\t \t\t\t\t</div>\r\n\t\t\t\t \t\t\t\r\n\r\n\t\t\t\t \t\t\t</div>\r\n\t\t\t\t \t\t</div>\r\n\t\t\t\t \t</div>\r\n\t\t\t\t </form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t</div>\r\n\t\t<notifier-container></notifier-container>\r\n\t</div>\r\n</app-shared>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, home_service, notifierService, cookieService) {
        this.router = router;
        this.home_service = home_service;
        this.notifierService = notifierService;
        this.cookieService = cookieService;
        this.notifier = notifierService;
        if (this.cookieService.get('token') == '' || !this.cookieService.get('token')) {
            this.router.navigate(['./login']);
        }
        this.cookieService.delete('unique_num');
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.patientForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
    };
    HomeComponent.prototype.showDropdown = function () {
        document.getElementById("myDropdown").classList.toggle("show");
    };
    HomeComponent.prototype.searchwith = function (searchValue, searchwith) {
        var _this = this;
        var patient_search = { "searchValue": searchValue, "searchwith": searchwith };
        this.home_service.searchPatient(patient_search)
            .subscribe(function (patient_data) {
            // console.log(patient_data.status);
            if (patient_data.status) {
                _this.cookieService.set('unique_num', patient_data.data[0]['unique_num'], 0.25);
                _this.router.navigate(['./home/patienttabs/information']);
            }
            else {
                _this.notifier.notify('danger', 'No record found');
            }
        });
        return false;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _shared_shared_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.component */ "./src/app/home/shared/shared.component.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _patient_tabs_patient_tabs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./patient-tabs/patient-tabs.component */ "./src/app/home/patient-tabs/patient-tabs.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/home/logout/logout.component.ts");
/* harmony import */ var _patient_tabs_information_information_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./patient-tabs/information/information.component */ "./src/app/home/patient-tabs/information/information.component.ts");
/* harmony import */ var _patient_tabs_medication_medication_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./patient-tabs/medication/medication.component */ "./src/app/home/patient-tabs/medication/medication.component.ts");
/* harmony import */ var _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-patient/add-patient.component */ "./src/app/home/add-patient/add-patient.component.ts");
/* harmony import */ var _csv_csv_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./csv/csv.component */ "./src/app/home/csv/csv.component.ts");
/* harmony import */ var _patient_tabs_medication_acc_medication_acc_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./patient-tabs/medication-acc/medication-acc.component */ "./src/app/home/patient-tabs/medication-acc/medication-acc.component.ts");
/* harmony import */ var ngx_accordion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-accordion */ "./node_modules/ngx-accordion/index.js");
/* harmony import */ var ngx_accordion__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ngx_accordion__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _strupper_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./strupper.pipe */ "./src/app/home/strupper.pipe.ts");






// import { NgDatepickerModule } from 'ng2-datepicker';
















var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _shared_shared_component__WEBPACK_IMPORTED_MODULE_11__["SharedComponent"],
                _patient_tabs_patient_tabs_component__WEBPACK_IMPORTED_MODULE_13__["PatientTabsComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_14__["LogoutComponent"],
                _patient_tabs_information_information_component__WEBPACK_IMPORTED_MODULE_15__["InformationComponent"],
                _patient_tabs_medication_medication_component__WEBPACK_IMPORTED_MODULE_16__["MedicationComponent"],
                _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_17__["AddPatientComponent"],
                _csv_csv_component__WEBPACK_IMPORTED_MODULE_18__["CsvComponent"],
                _patient_tabs_medication_acc_medication_acc_component__WEBPACK_IMPORTED_MODULE_19__["MedicationAccComponent"],
                _strupper_pipe__WEBPACK_IMPORTED_MODULE_21__["StrupperPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_10__["HomeRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                // NgDatepickerModule,
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ngx_accordion__WEBPACK_IMPORTED_MODULE_20__["AccordionModule"]
            ],
            providers: [_home_service__WEBPACK_IMPORTED_MODULE_12__["HomeService"]],
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _baseurl_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../baseurl.service */ "./src/app/baseurl.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");







// import { MyInterceptor } from '../my-interceptor';
var HomeService = /** @class */ (function () {
    function HomeService(httpClient, baseurl, cookieService) {
        this.httpClient = httpClient;
        this.baseurl = baseurl;
        this.cookieService = cookieService;
        this.baseUrl = this.baseurl.getBaseUrl();
    }
    HomeService.prototype.handleError = function (errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', errorResponse.error.message);
        }
        else {
            console.error('Server Side Error: ', errorResponse);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('There is a problem with the service. We are notified & working on it. Please try again later.');
    };
    HomeService.prototype.searchPatient = function (patient) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.cookieService.get('token')
            })
        };
        return this.httpClient.post(this.baseUrl + 'searchPatient', patient, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HomeService.prototype.getPatientDetails = function (unique_no) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.cookieService.get('token')
            })
        };
        return this.httpClient.post(this.baseUrl + 'getPatientDetails', unique_no, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HomeService.prototype.getPatientMedicationDetails = function (unique_no) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.cookieService.get('token')
            })
        };
        return this.httpClient.post(this.baseUrl + 'getPatientMedicationDetails', unique_no, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HomeService.prototype.getPatientMedicationAccDetails = function (unique_no) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.cookieService.get('token')
            })
        };
        return this.httpClient.post(this.baseUrl + 'getPatientMedicationDetails', unique_no, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HomeService.prototype.addNewPatient = function (addPatientValues) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.cookieService.get('token')
            })
        };
        return this.httpClient.post(this.baseUrl + 'addNewPatient', addPatientValues, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HomeService.prototype.getDrugDropdown = function (unique_no) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.cookieService.get('token')
            })
        };
        return this.httpClient.post(this.baseUrl + 'getDrugDropdown', unique_no, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HomeService.prototype.getCollectionList = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.cookieService.get('token')
            })
        };
        return this.httpClient.post(this.baseUrl + 'getCollectionList', httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HomeService.prototype.getSampleCollection = function (collection_name) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.cookieService.get('token')
            })
        };
        return this.httpClient.post(this.baseUrl + 'getSampleCollection', collection_name, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HomeService.prototype.uploadCsv = function (csvValues) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                Authorization: 'Bearer ' + this.cookieService.get('token')
            })
        };
        return this.httpClient.post(this.baseUrl + 'csvRecord', csvValues, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _baseurl_service__WEBPACK_IMPORTED_MODULE_5__["BaseurlService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/home/logout/logout.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/logout/logout.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqLyJdfQ== */"

/***/ }),

/***/ "./src/app/home/logout/logout.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/logout/logout.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/logout/logout.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/logout/logout.component.ts ***!
  \*************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
        cookieService.deleteAll('/');
        this.router.navigate(['./login']);
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/home/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/home/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/home/patient-tabs/information/information.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/home/patient-tabs/information/information.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-list-view{\r\n    width: 80%;\r\n    float: right;\r\n    margin-top: -17%;\r\n}\r\n\r\n.table-border {\r\n\tborder: none;\r\n\tborder-top : 0px;\r\n\twidth:15%;\r\n}\r\n\r\n.table-bold {\r\n\tfont-weight: bolder;\r\n\twidth:2%\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wYXRpZW50LXRhYnMvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkI7QUFDRCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGF0aWVudC10YWJzL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLWxpc3Qtdmlld3tcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTclO1xyXG59XHJcblxyXG4udGFibGUtYm9yZGVyIHtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLXRvcCA6IDBweDtcclxuXHR3aWR0aDoxNSU7XHJcbn1cclxuXHJcbi50YWJsZS1ib2xkIHtcclxuXHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdHdpZHRoOjIlXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/patient-tabs/information/information.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/home/patient-tabs/information/information.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-patient-tabs></app-patient-tabs>\n\n<div class=\"container\">\n    <div class=\"row\">\n\t\t<div class=\"col-xs-12 tab-list-view\">\n\t\t\t<div class=\"tab-content\">\n\t\t\t\t<div class=\"tab-pane active\"> \n\n\t\t\t\t\t<h2>Patient Information</h2>\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t    <tbody>\n\t\t\t\t    \t  <tr>\n\t\t\t\t\t        <td class=\"table-border table-bold\">Unique No.</td>\n\t\t\t\t\t        <td class=\"table-border table-bold\">:</td>\n\t\t\t\t\t        <td class=\"table-border\">{{patient_datas.unique_num}}</td>\n\t\t\t\t\t      </tr>\n\t\t\t\t\t      <tr>\n\t\t\t\t\t        <td class=\"table-border table-bold\">Name</td>\n\t\t\t\t\t        <td class=\"table-border table-bold\">:</td>\n\t\t\t\t\t        <td class=\"table-border\">{{patient_datas.name}}</td>\n\t\t\t\t\t      </tr>\n\t\t\t\t\t      <tr>\n\t\t\t\t\t        <td class=\"table-border table-bold\">Email</td>\n\t\t\t\t\t        <td class=\"table-border table-bold\">:</td>\n\t\t\t\t\t        <td class=\"table-border\">{{patient_datas.email}}</td>\n\t\t\t\t\t      </tr>\n\t\t\t\t\t      <tr>\n\t\t\t\t\t        <td class=\"table-border table-bold\">Mobile</td>\n\t\t\t\t\t        <td class=\"table-border table-bold\">:</td>\n\t\t\t\t\t        <td class=\"table-border\">{{patient_datas.mobile}}</td>\n\t\t\t\t\t      </tr>\n\t\t\t\t\t      <tr>\n\t\t\t\t\t        <td class=\"table-border table-bold\">DOB</td>\n\t\t\t\t\t        <td class=\"table-border table-bold\">:</td>\n\t\t\t\t\t        <td class=\"table-border\">{{patient_datas.dob}}</td>\n\t\t\t\t\t      </tr>\n\t\t\t\t\t      <tr>\n\t\t\t\t\t        <td class=\"table-border table-bold\">Address</td>\n\t\t\t\t\t        <td class=\"table-border table-bold\">:</td>\n\t\t\t\t\t        <td class=\"table-border\">{{patient_datas.address}}</td>\n\t\t\t\t\t      </tr>\n\t\t\t\t\t    </tbody>\n\t\t\t\t\t  </table>\n\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/home/patient-tabs/information/information.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/patient-tabs/information/information.component.ts ***!
  \************************************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");





var InformationComponent = /** @class */ (function () {
    function InformationComponent(router, home_service, cookieService) {
        this.router = router;
        this.home_service = home_service;
        this.cookieService = cookieService;
    }
    InformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.cookieService.get('unique_num') && this.cookieService.get('unique_num')) {
            var unique_no_patient = { "unique_num": this.cookieService.get('unique_num') };
            this.home_service.getPatientDetails(unique_no_patient)
                .subscribe(function (patient_data) {
                // console.log(patient_data);
                if (patient_data.status) {
                    _this.patient_datas = patient_data.data[0];
                }
                else {
                    _this.router.navigate(['./home']);
                }
            });
            return false;
        }
        else {
            this.router.navigate(['./home']);
        }
    };
    InformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-information',
            template: __webpack_require__(/*! ./information.component.html */ "./src/app/home/patient-tabs/information/information.component.html"),
            styles: [__webpack_require__(/*! ./information.component.css */ "./src/app/home/patient-tabs/information/information.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], InformationComponent);
    return InformationComponent;
}());



/***/ }),

/***/ "./src/app/home/patient-tabs/medication-acc/medication-acc.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/home/patient-tabs/medication-acc/medication-acc.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-list-view{\r\n    width: 80%;\r\n    float: right;\r\n    margin-top: -17%;\r\n}\r\n.filter{\r\n\tpadding: 20px;\r\n}\r\n.soflow {\r\n   -webkit-appearance: button;\r\n   -webkit-border-radius: 2px;\r\n   -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\r\n   -webkit-padding-end: 20px;\r\n   -webkit-padding-start: 2px;\r\n   -webkit-user-select: none;\r\n   border: 1px solid #AAA;\r\n   color: #555;\r\n   font-size: inherit;\r\n   padding: 5px 10px;\r\n   text-overflow: ellipsis;\r\n   white-space: nowrap;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wYXRpZW50LXRhYnMvbWVkaWNhdGlvbi1hY2MvbWVkaWNhdGlvbi1hY2MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtHQUNHLDBCQUEwQjtHQUMxQiwwQkFBMEI7R0FDMUIsa0RBQWtEO0dBQ2xELHlCQUF5QjtHQUN6QiwwQkFBMEI7R0FDMUIseUJBQXlCO0dBQ3pCLHNCQUFzQjtHQUN0QixXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLGlCQUFpQjtHQUNqQix1QkFBdUI7R0FDdkIsbUJBQW1CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wYXRpZW50LXRhYnMvbWVkaWNhdGlvbi1hY2MvbWVkaWNhdGlvbi1hY2MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItbGlzdC12aWV3e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC0xNyU7XHJcbn1cclxuLmZpbHRlcntcclxuXHRwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5zb2Zsb3cge1xyXG4gICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcclxuICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAtd2Via2l0LXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDJweDtcclxuICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgYm9yZGVyOiAxcHggc29saWQgI0FBQTtcclxuICAgY29sb3I6ICM1NTU7XHJcbiAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/patient-tabs/medication-acc/medication-acc.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/home/patient-tabs/medication-acc/medication-acc.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-patient-tabs></app-patient-tabs>\n\n<div class=\"container\">\n    <div class=\"row\">\n\t\t<div class=\"col-xs-12 tab-list-view\">\n\t\t\t<div class=\"tab-content\">\n\t\t\t\t<div class=\"tab-pane active\">                \n\t\t\t\t\t\n\t\t\t\t  <h2>Medication Accordian</h2>\n\t\t\t\t  <p></p> \n\t\t\t\t  <form>\n\t\t\t\t  \t<div class=\"row filter\">\n\t\t\t\t\t  \t<div class=\"col-md-4\">\n\t\t\t\t\t  \t\t<b> Select Drug : </b>\n\t\t\t\t\t\t\t<select class=\"soflow\" *ngIf= \"dropdown_data !=''\" (change)=\"drugDropdownOnChange($event)\">\n\t\t\t\t\t\t\t  \t<option value='' selected >Select Drug</option>\n\t\t\t\t\t\t\t \t<option *ngFor=\"let dropdown of dropdown_data; let counter=index\" [value]=\"dropdown\">{{dropdown}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t  \t<!-- <button type=\"button\" class=\"btn btn-primary\">Submit</button> -->\n\t\t\t\t\t</div>\n\t\t\t\t  </form>\n\n\t\t\t\t  <div *ngFor=\"let medications of patient_medication_data;\">\n\t\t\t\t\t<accordion>\n\t\t\t\t        <accordion-group>\n\t\t\t\t            <accordion-heading>\n\t\t\t\t                DRUG : {{medications[0].drug | uppercase}}\n\t\t\t\t            </accordion-heading>\n\t\t\t\t            \n\t\t\t\t            <table class=\"table table-bordered\" *ngIf=\"patient_medication_data != ''\">\n\t\t\t\t\t\t\t    <thead>\n\t\t\t\t\t\t\t      <tr>\n\t\t\t\t\t\t\t        <th class=\"text-center\">Sno.</th>\n\t\t\t\t\t\t\t        <th class=\"text-center\">Dose</th>\n\t\t\t\t\t\t\t        <th class=\"text-center\">Strength</th>\n\t\t\t\t\t\t\t        <th class=\"text-center\">Report Date</th>\n\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t    </thead>\n\t\t\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t\t      <tr *ngFor=\"let medication_record of medications; let j = index\" class=\"text-center\" >\n\t\t\t\t\t\t\t        <td>{{j+1}}</td>\n\t\t\t\t\t\t\t        <td>{{medication_record.dose}}</td>\n\t\t\t\t\t\t\t        <td>{{medication_record.strength}}</td>\n\t\t\t\t\t\t\t        <td>{{medication_record.report_date}}</td>\n\t\t\t\t\t\t\t      </tr>\n\t\t\t\t\t\t\t    </tbody>\n\t\t\t\t\t\t\t  </table>\n\n\n\t\t\t\t        </accordion-group>\n\t\t\t\t    </accordion>\n\t\t\t\t   </div>\n\t\t\t\t</div> \t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/home/patient-tabs/medication-acc/medication-acc.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/patient-tabs/medication-acc/medication-acc.component.ts ***!
  \******************************************************************************/
/*! exports provided: MedicationAccComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationAccComponent", function() { return MedicationAccComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");






var MedicationAccComponent = /** @class */ (function () {
    function MedicationAccComponent(router, home_service, spinner, cookieService) {
        var _this = this;
        this.router = router;
        this.home_service = home_service;
        this.spinner = spinner;
        this.cookieService = cookieService;
        this.p = 1;
        this.unique_no_patient = { "unique_num": this.cookieService.get('unique_num') };
        this.home_service.getDrugDropdown(this.unique_no_patient)
            .subscribe(function (dropdown_data) {
            if (dropdown_data.status) {
                _this.dropdown_data = dropdown_data.data;
            }
            else {
                _this.dropdown_data = '';
            }
        });
    }
    MedicationAccComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.cookieService.get('unique_num') != '0' && this.cookieService.get('unique_num')) {
            var unique_no_patient = { "unique_num": this.cookieService.get('unique_num') };
            this.spinner.show();
            this.home_service.getPatientMedicationAccDetails(unique_no_patient)
                .subscribe(function (medication_data) {
                if (medication_data.status) {
                    var data = [];
                    for (var i = 0; i < medication_data.data.length; i++) {
                        var name_1 = medication_data.data[i].drug;
                        if (name_1 in data == false) {
                            data[name_1] = [];
                        }
                        var k = 0;
                        for (var j = 0; j < medication_data.data.length; j++) {
                            if (medication_data.data[j].drug == name_1) {
                                data[name_1][k] = medication_data.data[j];
                                k++;
                            }
                        }
                    }
                    var newArray = [];
                    var count = 0;
                    for (var key in data) {
                        newArray[count] = data[key];
                        count++;
                    }
                    console.log(newArray);
                    _this.patient_medication_data = newArray;
                    _this.spinner.hide();
                }
                else {
                    _this.patient_medication_data = '';
                    _this.spinner.hide();
                }
            });
            return false;
        }
        else {
            this.router.navigate(['./home']);
        }
    };
    MedicationAccComponent.prototype.drugDropdownOnChange = function (event) {
        var _this = this;
        var dropdown_filter = '';
        if (event.target.value == '') {
            dropdown_filter = { "unique_num": this.cookieService.get('unique_num') };
        }
        else {
            dropdown_filter = { "unique_num": this.cookieService.get('unique_num'), 'drug': event.target.value };
        }
        this.home_service.getPatientMedicationAccDetails(dropdown_filter)
            .subscribe(function (medication_data) {
            if (medication_data.status) {
                var data = [];
                for (var i = 0; i < medication_data.data.length; i++) {
                    var name_2 = medication_data.data[i].drug;
                    if (name_2 in data == false) {
                        data[name_2] = [];
                    }
                    var k = 0;
                    for (var j = 0; j < medication_data.data.length; j++) {
                        if (medication_data.data[j].drug == name_2) {
                            data[name_2][k] = medication_data.data[j];
                            k++;
                        }
                    }
                }
                var newArray = [];
                var count = 0;
                for (var key in data) {
                    newArray[count] = data[key];
                    count++;
                }
                console.log(newArray);
                _this.patient_medication_data = newArray;
                _this.spinner.hide();
            }
            else {
                _this.patient_medication_data = '';
                _this.spinner.hide();
            }
        });
    };
    MedicationAccComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medication-acc',
            template: __webpack_require__(/*! ./medication-acc.component.html */ "./src/app/home/patient-tabs/medication-acc/medication-acc.component.html"),
            styles: [__webpack_require__(/*! ./medication-acc.component.css */ "./src/app/home/patient-tabs/medication-acc/medication-acc.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], MedicationAccComponent);
    return MedicationAccComponent;
}());



/***/ }),

/***/ "./src/app/home/patient-tabs/medication/medication.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/home/patient-tabs/medication/medication.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-list-view{\r\n    width: 80%;\r\n    float: right;\r\n    margin-top: -17%;\r\n}\r\n.filter{\r\n\tpadding: 20px;\r\n}\r\n.soflow {\r\n   -webkit-appearance: button;\r\n   -webkit-border-radius: 2px;\r\n   -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\r\n   -webkit-padding-end: 20px;\r\n   -webkit-padding-start: 2px;\r\n   -webkit-user-select: none;\r\n   border: 1px solid #AAA;\r\n   color: #555;\r\n   font-size: inherit;\r\n   padding: 5px 10px;\r\n   text-overflow: ellipsis;\r\n   white-space: nowrap;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wYXRpZW50LXRhYnMvbWVkaWNhdGlvbi9tZWRpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7R0FDRywwQkFBMEI7R0FDMUIsMEJBQTBCO0dBQzFCLGtEQUFrRDtHQUNsRCx5QkFBeUI7R0FDekIsMEJBQTBCO0dBQzFCLHlCQUF5QjtHQUN6QixzQkFBc0I7R0FDdEIsV0FBVztHQUNYLGtCQUFrQjtHQUNsQixpQkFBaUI7R0FDakIsdUJBQXVCO0dBQ3ZCLG1CQUFtQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGF0aWVudC10YWJzL21lZGljYXRpb24vbWVkaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1saXN0LXZpZXd7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogLTE3JTtcclxufVxyXG4uZmlsdGVye1xyXG5cdHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLnNvZmxvdyB7XHJcbiAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG4gICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogMnB4O1xyXG4gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjQUFBO1xyXG4gICBjb2xvcjogIzU1NTtcclxuICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/patient-tabs/medication/medication.component.html":
/*!************************************************************************!*\
  !*** ./src/app/home/patient-tabs/medication/medication.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-patient-tabs></app-patient-tabs>\n\n<div class=\"container\">\n    <div class=\"row\">\n\t\t<div class=\"col-xs-12 tab-list-view\">\n\t\t\t<div class=\"tab-content\">\n\t\t\t\t<div class=\"tab-pane active\">                \n\t\t\t\t\t\n\t\t\t\t  <h2>Medication</h2>\n\t\t\t\t  <p></p>\n\t\t\t\t  <form>\n\t\t\t\t  \t<div class=\"row filter\">\n\t\t\t\t\t  \t<div class=\"col-md-4\">\n\t\t\t\t\t  \t\t<b> Select Drug : </b>\n\t\t\t\t\t\t\t<select class=\"soflow\" *ngIf= \"dropdown_data !=''\" (change)=\"drugDropdownOnChange($event)\">\n\t\t\t\t\t\t\t  \t<option value='' selected >Select Drug</option>\n\t\t\t\t\t\t\t \t<option *ngFor=\"let dropdown of dropdown_data; let counter=index\" [value]=\"dropdown\">{{dropdown}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t  \t</div>\n\t\t\t\t\t  \t<!-- <button type=\"button\" class=\"btn btn-primary\">Submit</button> -->\n\t\t\t\t\t</div>\n\t\t\t\t  </form>\n\n\n\t\t\t\t  <table class=\"table table-bordered\" *ngIf=\"patient_medication_data != ''\">\n\t\t\t\t    <thead>\n\t\t\t\t      <tr>\n\t\t\t\t        <th class=\"text-center\">ID</th>\n\t\t\t\t        <th class=\"text-center\">Drug</th>\n\t\t\t\t        <th class=\"text-center\">Dose</th>\n\t\t\t\t        <th class=\"text-center\">Strength</th>\n\t\t\t\t        <th class=\"text-center\">Report Date</th>\n\t\t\t\t      </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t      <tr *ngFor=\"let medication of patient_medication_data | paginate: { itemsPerPage: 10, currentPage: p }; let j = index\" class=\"text-center\" >\n\t\t\t\t        <td>{{j+1}}</td>\n\t\t\t\t        <td>{{medication.drug | strupper}}</td>\n\t\t\t\t        <td>{{medication.dose}}</td>\n\t\t\t\t        <td>{{medication.strength}}</td>\n\t\t\t\t        <td>{{medication.report_date}}</td>\n\t\t\t\t      </tr>\n\t\t\t\t    </tbody>\n\t\t\t\t  </table>\n\t\t\t\t  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n\n\t\t\t\t  <table class=\"table table-bordered\" *ngIf=\"patient_medication_data === ''\">\n\t\t\t\t    <thead>\n\t\t\t\t      <tr>\n\t\t\t\t        <th class=\"text-center\">ID</th>\n\t\t\t\t        <th class=\"text-center\">Dose</th>\n\t\t\t\t        <th class=\"text-center\">Drug</th>\n\t\t\t\t        <th class=\"text-center\">Strength</th>\n\t\t\t\t        <th class=\"text-center\">Report Date</th>\n\t\t\t\t      </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t      <th colspan=\"5\">No Records</th>\n\t\t\t\t    </tbody>\n\t\t\t\t  </table>\n\t\t\t\t</div> \t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/home/patient-tabs/medication/medication.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/patient-tabs/medication/medication.component.ts ***!
  \**********************************************************************/
/*! exports provided: MedicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationComponent", function() { return MedicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");






var MedicationComponent = /** @class */ (function () {
    function MedicationComponent(router, home_service, spinner, cookieService) {
        var _this = this;
        this.router = router;
        this.home_service = home_service;
        this.spinner = spinner;
        this.cookieService = cookieService;
        this.p = 1;
        this.unique_no_patient = { "unique_num": this.cookieService.get('unique_num') };
        this.home_service.getDrugDropdown(this.unique_no_patient)
            .subscribe(function (dropdown_data) {
            if (dropdown_data.status) {
                _this.dropdown_data = dropdown_data.data;
            }
            else {
                _this.dropdown_data = '';
            }
        });
    }
    MedicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.cookieService.get('unique_num') != '0' && this.cookieService.get('unique_num')) {
            this.spinner.show();
            this.home_service.getPatientMedicationDetails(this.unique_no_patient)
                .subscribe(function (medication_data) {
                // console.log(medication_data);
                if (medication_data.status) {
                    _this.patient_medication_data = medication_data.data;
                    _this.spinner.hide();
                }
                else {
                    _this.patient_medication_data = '';
                    _this.spinner.hide();
                }
            });
            return false;
        }
        else {
            this.router.navigate(['./home']);
        }
    };
    MedicationComponent.prototype.pageChange = function (pageOfItems) {
        this.p = pageOfItems;
    };
    MedicationComponent.prototype.drugDropdownOnChange = function (event) {
        var _this = this;
        this.spinner.show();
        var dropdown_filter = '';
        if (event.target.value == '') {
            dropdown_filter = { "unique_num": this.cookieService.get('unique_num') };
        }
        else {
            dropdown_filter = { "unique_num": this.cookieService.get('unique_num'), 'drug': event.target.value };
        }
        this.home_service.getPatientMedicationDetails(dropdown_filter)
            .subscribe(function (medication_data) {
            if (medication_data.status) {
                _this.patient_medication_data = medication_data.data;
                _this.spinner.hide();
            }
            else {
                _this.patient_medication_data = '';
                _this.spinner.hide();
            }
        });
    };
    MedicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-medication',
            template: __webpack_require__(/*! ./medication.component.html */ "./src/app/home/patient-tabs/medication/medication.component.html"),
            styles: [__webpack_require__(/*! ./medication.component.css */ "./src/app/home/patient-tabs/medication/medication.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], MedicationComponent);
    return MedicationComponent;
}());



/***/ }),

/***/ "./src/app/home/patient-tabs/patient-tabs.component.css":
/*!**************************************************************!*\
  !*** ./src/app/home/patient-tabs/patient-tabs.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabs-left > .nav-tabs {\r\n  border-bottom: 0;\r\n}\r\n\r\n.tab-content > .tab-pane,\r\n.pill-content > .pill-pane {\r\n  display: none;\r\n}\r\n\r\n.tab-content > .active,\r\n.pill-content > .active {\r\n  display: block;\r\n}\r\n\r\n.tabs-left > .nav-tabs > li {\r\n  float: none;\r\n}\r\n\r\n.tabs-left > .nav-tabs > li > a {\r\n  min-width: 74px;\r\n  margin-right: 0;\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.tabs-left > .nav-tabs {\r\n  float: left;\r\n  margin-right: 19px;\r\n  border-right: 1px solid #ddd;\r\n}\r\n\r\n.tabs-left > .nav-tabs > li > a {\r\n  margin-right: -1px;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n\r\n.tabs-left > .nav-tabs > li > a:hover,\r\n.tabs-left > .nav-tabs > li > a:focus {\r\n  border-color: #eeeeee #dddddd #eeeeee #eeeeee;\r\n}\r\n\r\n.tabs-left > .nav-tabs .active > a,\r\n.tabs-left > .nav-tabs .active > a:hover,\r\n.tabs-left > .nav-tabs .active > a:focus {\r\n  border-color: #ddd transparent #ddd #ddd;\r\n  *border-right-color: #ffffff;\r\n}\r\n\r\n/***Custom Style***/\r\n\r\n.tab-list{\r\n  width:20%;\r\n  margin-top:5%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wYXRpZW50LXRhYnMvcGF0aWVudC10YWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBR1YsMEJBQTBCO0FBQ3BDOztBQUVBOztFQUVFLDZDQUE2QztBQUMvQzs7QUFFQTs7O0VBR0Usd0NBQXdDO0dBQ3hDLDJCQUE0QjtBQUM5Qjs7QUFJQSxtQkFBbUI7O0FBQ25CO0VBQ0UsU0FBUztFQUNULGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcGF0aWVudC10YWJzL3BhdGllbnQtdGFicy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnMtbGVmdCA+IC5uYXYtdGFicyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnRhYi1jb250ZW50ID4gLnRhYi1wYW5lLFxyXG4ucGlsbC1jb250ZW50ID4gLnBpbGwtcGFuZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRhYi1jb250ZW50ID4gLmFjdGl2ZSxcclxuLnBpbGwtY29udGVudCA+IC5hY3RpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udGFicy1sZWZ0ID4gLm5hdi10YWJzID4gbGkge1xyXG4gIGZsb2F0OiBub25lO1xyXG59XHJcblxyXG4udGFicy1sZWZ0ID4gLm5hdi10YWJzID4gbGkgPiBhIHtcclxuICBtaW4td2lkdGg6IDc0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5cclxuLnRhYnMtbGVmdCA+IC5uYXYtdGFicyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxOXB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi50YWJzLWxlZnQgPiAubmF2LXRhYnMgPiBsaSA+IGEge1xyXG4gIG1hcmdpbi1yaWdodDogLTFweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG4gICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxufVxyXG5cclxuLnRhYnMtbGVmdCA+IC5uYXYtdGFicyA+IGxpID4gYTpob3ZlcixcclxuLnRhYnMtbGVmdCA+IC5uYXYtdGFicyA+IGxpID4gYTpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWVlZWVlICNkZGRkZGQgI2VlZWVlZSAjZWVlZWVlO1xyXG59XHJcblxyXG4udGFicy1sZWZ0ID4gLm5hdi10YWJzIC5hY3RpdmUgPiBhLFxyXG4udGFicy1sZWZ0ID4gLm5hdi10YWJzIC5hY3RpdmUgPiBhOmhvdmVyLFxyXG4udGFicy1sZWZ0ID4gLm5hdi10YWJzIC5hY3RpdmUgPiBhOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICNkZGQgdHJhbnNwYXJlbnQgI2RkZCAjZGRkO1xyXG4gICpib3JkZXItcmlnaHQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqKkN1c3RvbSBTdHlsZSoqKi9cclxuLnRhYi1saXN0e1xyXG4gIHdpZHRoOjIwJTtcclxuICBtYXJnaW4tdG9wOjUlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/patient-tabs/patient-tabs.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/patient-tabs/patient-tabs.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-shared>\n\t<div class=\"container header_content\">\n\t    <div class=\"row\">\n\t\t\t<div class=\"col-xs-12 tab-list\">\n\t\t\t\t<div class=\"tabbable tabs-left\">\n\t\t\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t\t\t<li><a href=\"./home\">Search Patient</a></li>\n\t\t\t\t\t\t<li [ngClass]=\"(this.pageName=='information')?'active':''\"><a href=\"home/patienttabs/information\">Patient Details</a></li>\n\t\t\t\t\t\t<li  [ngClass]=\"(this.pageName=='medication')?'active':''\"><a href=\"home/patienttabs/medication\">Medication</a></li>\n\t\t\t\t\t\t<li  [ngClass]=\"(this.pageName=='medicationacc')?'active':''\"><a href=\"home/patienttabs/medicationacc\">Medication Accordian</a></li>\n\t\t\t\t\t</ul>\t\t\t\t\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</app-shared>"

/***/ }),

/***/ "./src/app/home/patient-tabs/patient-tabs.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/patient-tabs/patient-tabs.component.ts ***!
  \*************************************************************/
/*! exports provided: PatientTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientTabsComponent", function() { return PatientTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




var PatientTabsComponent = /** @class */ (function () {
    function PatientTabsComponent(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
        if (this.cookieService.get('token') != '' && this.cookieService.get('token')) {
            if (this.cookieService.get('unique_num') != '0' && this.cookieService.get('unique_num')) {
                this.unique_no_patient = this.cookieService.get('unique_num');
            }
            else {
                this.router.navigate(['./home']);
            }
        }
        else {
            this.router.navigate(['./login']);
        }
    }
    PatientTabsComponent.prototype.ngOnInit = function () {
        var getActivePageName = this.router.url.split("/");
        this.pageName = getActivePageName[getActivePageName.length - 1];
    };
    PatientTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient-tabs',
            template: __webpack_require__(/*! ./patient-tabs.component.html */ "./src/app/home/patient-tabs/patient-tabs.component.html"),
            styles: [__webpack_require__(/*! ./patient-tabs.component.css */ "./src/app/home/patient-tabs/patient-tabs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], PatientTabsComponent);
    return PatientTabsComponent;
}());



/***/ }),

/***/ "./src/app/home/shared/shared.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/shared/shared.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {box-sizing: border-box;}\r\n\r\n.header {\r\n  overflow: hidden;\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n.header a {\r\n  /*float: left;*/\r\n  color: black;\r\n  text-align: center;\r\n  padding: 12px;\r\n  text-decoration: none;\r\n  font-size: 18px; \r\n  line-height: 25px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.header a.logo {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n}\r\n\r\n.header a:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n}\r\n\r\n.header a.active {\r\n  background-color: dodgerblue;\r\n  color: white;\r\n}\r\n\r\n.header-right {\r\n  float: right;\r\n  margin-top: 2%;\r\n  margin-right: 2%;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  .header a {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n  \r\n  .header-right {\r\n    float: none;\r\n  }\r\n}\r\n\r\n.footer_content {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #337ab7;\r\n  color: white;\r\n  text-align: center;\r\n z-index: 1111;\r\n}\r\n\r\n/** Nav Bar **/\r\n\r\n.navbarCustom {\r\n  overflow: hidden;\r\n  background-color: #337ab7;\r\n  /*padding: 5px 5px;*/\r\n}\r\n\r\n/**DropDown On hover**/\r\n\r\n/* Dropdown Button */\r\n\r\n.dropbtn {\r\n  background-color: #337ab7/*#4CAF50*/;\r\n  color: white;\r\n  padding: 16px;\r\n  font-size: 16px;\r\n  border: none;\r\n}\r\n\r\n.dropbtn a {\r\n    color:white;\r\n}\r\n\r\n/* The container <div> - needed to position the dropdown content */\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n/* Dropdown Content (Hidden by Default) */\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: fixed;\r\n  background-color: #f1f1f1;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n/* Links inside the dropdown */\r\n\r\n.dropdown-content a {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n/* Change color of dropdown links on hover */\r\n\r\n.dropdown-content a:hover {background-color: #ddd;}\r\n\r\n/* Show the dropdown menu on hover */\r\n\r\n.dropdown:hover .dropdown-content {display: block;}\r\n\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n\r\n.dropdown:hover .dropbtn {background-color: #235784/*#3e8e41*/;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zaGFyZWQvc2hhcmVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyxzQkFBc0IsQ0FBQzs7QUFFMUI7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0NBQ25CLGFBQWE7QUFDZDs7QUFHQSxjQUFjOztBQUNkO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7O0FBR0Esc0JBQXNCOztBQUN0QixvQkFBb0I7O0FBQ3BCO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQSxrRUFBa0U7O0FBQ2xFO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQSx5Q0FBeUM7O0FBQ3pDO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7O0FBRUEsOEJBQThCOztBQUM5QjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUEsNENBQTRDOztBQUM1QywyQkFBMkIsc0JBQXNCLENBQUM7O0FBRWxELG9DQUFvQzs7QUFDcEMsbUNBQW1DLGNBQWMsQ0FBQzs7QUFFbEQsMEZBQTBGOztBQUMxRiwwQkFBMEIsb0NBQW9DLENBQUMiLCJmaWxlIjoic3JjL2FwcC9ob21lL3NoYXJlZC9zaGFyZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge2JveC1zaXppbmc6IGJvcmRlci1ib3g7fVxyXG5cclxuLmhlYWRlciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4uaGVhZGVyIGEge1xyXG4gIC8qZmxvYXQ6IGxlZnQ7Ki9cclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDsgXHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIGEubG9nbyB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaGVhZGVyIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uaGVhZGVyIGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWRlci1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1yaWdodDogMiU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLmhlYWRlciBhIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyLXJpZ2h0IHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmZvb3Rlcl9jb250ZW50IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gei1pbmRleDogMTExMTtcclxufVxyXG5cclxuXHJcbi8qKiBOYXYgQmFyICoqL1xyXG4ubmF2YmFyQ3VzdG9tIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XHJcbiAgLypwYWRkaW5nOiA1cHggNXB4OyovXHJcbn1cclxuXHJcblxyXG4vKipEcm9wRG93biBPbiBob3ZlcioqL1xyXG4vKiBEcm9wZG93biBCdXR0b24gKi9cclxuLmRyb3BidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjcvKiM0Q0FGNTAqLztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5kcm9wYnRuIGEge1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG4uZHJvcGRvd24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqL1xyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuXHJcbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtkaXNwbGF5OiBibG9jazt9XHJcblxyXG4vKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGRyb3Bkb3duIGJ1dHRvbiB3aGVuIHRoZSBkcm9wZG93biBjb250ZW50IGlzIHNob3duICovXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7YmFja2dyb3VuZC1jb2xvcjogIzIzNTc4NC8qIzNlOGU0MSovO30iXX0= */"

/***/ }),

/***/ "./src/app/home/shared/shared.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/shared/shared.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <a href=\"#\" class=\"logo\"><img src=\"./../../../assets/logo/logo.png\"  height=\"50\" width=\"70\" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hospital 93</a>\n  <span class=\"header-right\">Welcome {{username}}&nbsp;&nbsp;&nbsp;<a href=\"./home/logout\"><abbr title=\"LOGOUT\"><i class=\"fa fa-sign-out\" style=\"font-size:28px\"></i></abbr></a></span>\n</div>\n\n<div class=\"navbarCustom\">\n\t<div class=\"dropdown\">\n\t  <button class=\"dropbtn\"><a href=\"./home\">Home</a></button>\n\t</div>\n\t<div class=\"dropdown\">\n\t  <button class=\"dropbtn\">Administrator</button>\n\t  <div class=\"dropdown-content\">\n\t    <a href=\"./home/add-patient\">Add Patient</a>\n\t    <a href=\"./home/csv\">Upload Records</a>\n\t  </div>\n\t</div>\n\t<div class=\"dropdown\">\n\t  <button class=\"dropbtn\"><a href=\"#\">Contact</a></button>\n\t</div>\n\t<div class=\"dropdown\">\n\t  <button class=\"dropbtn\"><a href=\"#\">About</a></button>\n\t</div>\n</div>\n\n<ng-content select=\".header_content\"></ng-content>\n\n\n<div class=\"footer_content\">\n  <p>© Since 2019 - Hospital portal (+91 999999978) </p>\n</div>"

/***/ }),

/***/ "./src/app/home/shared/shared.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/shared/shared.component.ts ***!
  \*************************************************/
/*! exports provided: SharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return SharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");




var SharedComponent = /** @class */ (function () {
    function SharedComponent(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
        this.username = '';
        if (this.cookieService.get('token') == '') {
            this.router.navigate(['./login']);
        }
        else {
            this.username = this.cookieService.get('name');
            // console.log(this.username);
        }
    }
    SharedComponent.prototype.ngOnInit = function () {
    };
    SharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shared',
            template: __webpack_require__(/*! ./shared.component.html */ "./src/app/home/shared/shared.component.html"),
            styles: [__webpack_require__(/*! ./shared.component.css */ "./src/app/home/shared/shared.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], SharedComponent);
    return SharedComponent;
}());



/***/ }),

/***/ "./src/app/home/strupper.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/home/strupper.pipe.ts ***!
  \***************************************/
/*! exports provided: StrupperPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrupperPipe", function() { return StrupperPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StrupperPipe = /** @class */ (function () {
    function StrupperPipe() {
    }
    StrupperPipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        return value.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    StrupperPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'strupper'
        })
    ], StrupperPipe);
    return StrupperPipe;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Absolute-Center {\r\n  margin: auto;\r\n  position: absolute;\r\n  top: 0; left: 0; bottom: 0; right: 0;\r\n}\r\n\r\n.Absolute-Center.is-Responsive {\r\n  width: 50%; \r\n  height: 60%;\r\n  min-width: 60%;\r\n  max-width: 400px;\r\n  padding: 40px;\r\n}\r\n\r\n.strong-css{\r\n\tmargin-left: 35%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUTtBQUN0Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkFic29sdXRlLUNlbnRlciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7IGxlZnQ6IDA7IGJvdHRvbTogMDsgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5BYnNvbHV0ZS1DZW50ZXIuaXMtUmVzcG9uc2l2ZSB7XHJcbiAgd2lkdGg6IDUwJTsgXHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgbWluLXdpZHRoOiA2MCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG59XHJcbi5zdHJvbmctY3Nze1xyXG5cdG1hcmdpbi1sZWZ0OiAzNSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"Absolute-Center is-Responsive\">\n      <div class=\"col-sm-12\">\n\t\t <form id=\"form_login\" class=\"form-horizontal\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\t\t \t<div class=\"panel panel-primary\">\n\t\t \t\t<div class=\"panel-heading\">\n\n\t\t \t\t\t<h3 class=\"panel-title\"><img src=\"./../assets/logo/logo.png\"  height=\"30\" width=\"30\" /><strong class=\"strong-css\">Login</strong></h3>\n\t\t \t\t</div>\n\t\t \t\t<div class=\"panel-body\">\n\t\t \t\t\t<notifier-container></notifier-container>\n\t\t \t\t\t<div class=\"form-group\" [ngClass] = \"{'has-error' : loginForm.get('email').errors  && (loginForm.get('email').touched || loginForm.get('email').dirty)}\">\n\t\t \t\t\t\t<label class=\"col-sm-2 control-label\">Email</label>\n\t\t \t\t\t\t<div class=\"col-sm-8\">\n\t\t \t\t\t\t\t<input type=\"text\" id=\"email\" formControlName=\"email\" name=\"email\" class=\"form-control\">\n\t\t \t\t\t\t\t<span *ngIf=\"loginForm.get('email').errors && (loginForm.get('email').touched || loginForm.get('email').dirty)\">Full name is required</span>\n\t\t \t\t\t\t</div>\n\t\t \t\t\t</div> \n\t\t \t\t\t<div class=\"form-group\" [ngClass] = \"{'has-error' : loginForm.get('password').errors  && (loginForm.get('password').touched || loginForm.get('password').dirty)}\">\n\t\t \t\t\t\t<label class=\"col-sm-2 control-label\">Password</label>\n\t\t \t\t\t\t<div class=\"col-sm-8\">\n\t\t \t\t\t\t\t<input type=\"password\" id=\"password\" formControlName=\"password\" name=\"password\" class=\"form-control\">\n\t\t \t\t\t\t\t<span *ngIf=\"loginForm.get('password').errors && (loginForm.get('password').touched || loginForm.get('password').dirty)\">Password is required</span>\n\t\t \t\t\t\t</div>\n\t\t \t\t\t</div>\n\t\t \t\t</div>\n\t\t \t\t<div class=\"panel-footer\">\n\t\t \t\t\t<div class=\"btn-toolbar\">\n\t\t\t \t\t\t<button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"loginForm.invalid\">Login</button>\n\t\t\t \t\t</div>\n\t\t \t\t</div>\n\t\t \t</div>\n\t\t </form>\n\t\t</div>\n\t</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(lf, user_service, router, notifierService, cookieService) {
        this.lf = lf;
        this.user_service = user_service;
        this.router = router;
        this.notifierService = notifierService;
        this.cookieService = cookieService;
        this.notifier = notifierService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.lf.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.user_service.loginUser(this.loginForm.value)
            .subscribe(function (data) {
            // console.log(data);
            if (!isEmpty(data) && data[0]) {
                _this.cookieService.set('token', data[1]['token'], 0.25);
                _this.cookieService.set('name', data[0]['name'], 0.25);
                _this.router.navigate(['./home']);
            }
            else {
                _this.notifier.notify('danger', 'Wrong Credentials');
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


/***/ }),

/***/ "./src/app/pnf/page-not-found.component.css":
/*!**************************************************!*\
  !*** ./src/app/pnf/page-not-found.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG5mL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsR0FBRyIsImZpbGUiOiJzcmMvYXBwL3BuZi9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqLyJdfQ== */"

/***/ }),

/***/ "./src/app/pnf/page-not-found.component.html":
/*!***************************************************!*\
  !*** ./src/app/pnf/page-not-found.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-left:20px\">\n  <h1>NO PAGE FOUND</h1>\n  <p>HARD LUCK</p>\n  <p>GO TO LOGIN PAGE <a href=\"./login\">Click Here</a></p>\n</div>"

/***/ }),

/***/ "./src/app/pnf/page-not-found.component.ts":
/*!*************************************************!*\
  !*** ./src/app/pnf/page-not-found.component.ts ***!
  \*************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pnf/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/pnf/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _baseurl_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./baseurl.service */ "./src/app/baseurl.service.ts");






var UserService = /** @class */ (function () {
    function UserService(httpClient, baseurl) {
        this.httpClient = httpClient;
        this.baseurl = baseurl;
        this.baseUrl = this.baseurl.getBaseUrl();
    }
    UserService.prototype.handleError = function (errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', errorResponse.error.message);
        }
        else {
            console.error('Server Side Error: ', errorResponse);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('There is a problem with the service. We are notified & working on it. Please try again later.');
    };
    UserService.prototype.addUser = function (user) {
        return this.httpClient.post(this.baseUrl + 'register.php', user)
            // return this.httpClient.post<Iuser>(this.baseUrl+'user', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    UserService.prototype.loginUser = function (user) {
        return this.httpClient.post(this.baseUrl + 'user/login', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _baseurl_service__WEBPACK_IMPORTED_MODULE_5__["BaseurlService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Praveen\Documents\HealthCare\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map