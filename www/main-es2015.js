(self["webpackChunkuserapp"] = self["webpackChunkuserapp"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        redirectTo: 'folder/Inbox',
        pathMatch: 'full'
    },
    {
        path: 'homepage',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 3412)).then(m => m.FolderPageModule)
    },
    {
        path: 'signinpage',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_signin_signin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signin/signin.module */ 87445)).then(m => m.SigninPageModule)
    },
    {
        path: 'signuppage',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("src_app_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 77648)).then(m => m.SignupPageModule)
    },
    {
        path: 'selectcategories',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_selectcategories_selectcategories_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./selectcategories/selectcategories.module */ 88853)).then(m => m.SelectcategoriesPageModule)
    },
    {
        path: 'myprofile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_myprofile_myprofile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./myprofile/myprofile.module */ 22913)).then(m => m.MyprofilePageModule)
    },
    {
        path: 'support',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_support_support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./support/support.module */ 96758)).then(m => m.SupportPageModule)
    },
    {
        path: 'setalarm',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_setalarm_setalarm_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./setalarm/setalarm.module */ 98191)).then(m => m.SetalarmPageModule)
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_splashscreen_splashscreen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./splashscreen/splashscreen.module */ 85481)).then(m => m.SplashscreenPageModule)
    },
    {
        path: 'searchpage',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_searchpage_searchpage_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./searchpage/searchpage.module */ 31895)).then(m => m.SearchpagePageModule)
    },
    {
        path: 'terms-and-condition',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_terms-and-condition_terms-and-condition_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./terms-and-condition/terms-and-condition.module */ 97756)).then(m => m.TermsAndConditionPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notification/notification.module */ 22154)).then(m => m.NotificationPageModule)
    },
    {
        path: 'modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modal_modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modal/modal.module */ 22641)).then(m => m.ModalPageModule)
    },
    {
        path: 'myalarms',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_myalarms_myalarms_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./myalarms/myalarms.module */ 51881)).then(m => m.MyalarmsPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/http.service */ 28191);








let AppComponent = class AppComponent {
    constructor(http, router, route, platform, animaionCtrl) {
        this.http = http;
        this.router = router;
        this.platform = platform;
        this.animaionCtrl = animaionCtrl;
        this.activeItem = "home";
        route.params.subscribe(val => {
        });
    }
    ngOnInit() {
        this.activeItem = "home";
    }
    close() {
        this.router.navigate(['/']);
    }
    home() {
        this.activeItem = "home";
        this.router.navigate(['/homepage']);
    }
    setalarm() {
        this.activeItem = "setalarm";
        this.router.navigate(['/setalarm']);
    }
    myAlarm() {
        this.activeItem = "myalarms";
        this.router.navigate(['/myalarms']);
    }
    myprofile() {
        this.activeItem = "myprofile";
        this.router.navigate(['/myprofile']);
    }
    support() {
        this.activeItem = "support";
        this.router.navigate(['/support']);
    }
    logout() {
        this.activeItem = "home";
        localStorage.removeItem("24hrs-user-data");
        localStorage.removeItem("token");
        this.router.navigate(['/']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AnimationController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _report_seller_report_seller_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-seller/report-seller.component */ 70217);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);










let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _report_seller_report_seller_component__WEBPACK_IMPORTED_MODULE_0__.ReportSellerComponent],
        entryComponents: [],
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 70217:
/*!**********************************************************!*\
  !*** ./src/app/report-seller/report-seller.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportSellerComponent": function() { return /* binding */ ReportSellerComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_report_seller_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./report-seller.component.html */ 20056);
/* harmony import */ var _report_seller_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report-seller.component.scss */ 99201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let ReportSellerComponent = class ReportSellerComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
};
ReportSellerComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ReportSellerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-report-seller',
        template: _raw_loader_report_seller_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_report_seller_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReportSellerComponent);



/***/ }),

/***/ 28191:
/*!****************************************!*\
  !*** ./src/app/shared/http.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": function() { return /* binding */ HttpService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);




let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    get(serviceName) {
        const userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
        const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            // .set("Access-Control-Allow-Origin", "*")
            // .set("Access-Control-Allow-Methods", "GET,POST")
            // .set('Accept','application/json')
            // .set('Content-Type','application/json')
            // .set("Access-Control-Allow-Headers", "Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
            .set("Token", userdetails.token);
        //   let httpOptions = {
        //     headers: new HttpHeaders({
        //       "Access-Control-Allow-Origin": "*",
        //       "Access-Control-Allow-Methods": "*",
        //       "Access-Control-Allow-Headers":"Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        //       'Authorization':userdetails.token,
        //       "Content-Type": "application/json"
        //     })
        // };
        const options = { headers: header, withCredentials: true };
        return this.http.get(url, { headers: header });
    }
    post(serviceName, data) {
        const token = ((localStorage.getItem("token")));
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl + serviceName;
        if (serviceName == '/user_login' || serviceName == '/user_register') {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
            const options = { headers: headers, withCredentials: false };
            return this.http.post(url, JSON.stringify(data), { headers: headers });
        }
        else {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders().set("Token", token);
            const options = { headers: headers, withCredentials: true };
            return this.http.post(url, JSON.stringify(data), { headers: headers });
        }
    }
};
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
HttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], HttpService);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'https://dhya.in/24Hrs/api',
    // firebaseConfig : {
    //   apiKey: "AIzaSyAod1HC8Uhiw-1A-tIqK-QP4sUwBwDF0BM",
    //   authDomain: "429707768959-dtsdjegmqfpgt0fhfosoq8at5ielt33a.apps.googleusercontent.com",
    //   databaseURL: "***********************",
    //   projectId: "hrs-b4daa",
    //   storageBucket: "hrs-b4daa.appspot.com",
    //   messagingSenderId: "**********",
    //   appId: "1:429707768959:android:ccddb9e48302aaeea7bb4a"
    //   }
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

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".test {\n  --ion-color-primary: #eb4b58 !important;\n  --ion-color-primary-rgb: 235,75,88 !important;\n  --ion-color--primary-contrast: #ffffff !important;\n  --ion-color--primary-contrast-rgb: 255,255,255 !important;\n  --ion-color-primary-shade: #cf424d !important;\n  --ion-color-primary-tint: #ed5d69 !important;\n}\n.test ion-content {\n  --background: #121211 !important;\n}\n.list {\n  color: #272A3F;\n  font-size: 15px;\n  margin: 18px -5px;\n}\n#icon {\n  background-color: #c5f893 !important;\n  border-radius: 15px !important;\n  width: 25px;\n  height: 30px;\n}\nion-item {\n  --border-color: #fff;\n}\n.row {\n  margin: 25px;\n  margin-left: 0 !important;\n}\nion-menu-button {\n  margin: 20px;\n}\nimg:hover {\n  cursor: pointer;\n}\nion-menu-button:hover {\n  --color:#fff;\n}\n.close {\n  margin-left: 30px;\n  color: #676767;\n}\n.close:hover {\n  color: #23d5ab;\n}\n.row {\n  margin-bottom: 8px;\n}\n#sideMenuList .active {\n  color: #23d5ab;\n  font-weight: 700;\n}\n.dot {\n  text-align: center;\n  margin-top: 0 !important;\n  height: 110px !important;\n  width: 95% !important;\n  background-color: #fff;\n  border-radius: 20px;\n  display: inline-block;\n  box-shadow: 3px -2px 11px 3px #ccc;\n}\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHVDQUFBO0VBQ0EsNkNBQUE7RUFDQSxpREFBQTtFQUNBLHlEQUFBO0VBQ0EsNkNBQUE7RUFDQSw0Q0FBQTtBQUFGO0FBRUU7RUFDRSxnQ0FBQTtBQUFKO0FBT0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSkY7QUFNQTtFQUNFLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhGO0FBTUE7RUFDRSxvQkFBQTtBQUhGO0FBS0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUFGRjtBQUlBO0VBQ0UsWUFBQTtBQURGO0FBR0E7RUFDQSxlQUFBO0FBQUE7QUFFQTtFQUNFLFlBQUE7QUFDRjtBQUVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDQTtFQUNFLGNBQUE7QUFFRjtBQUFBO0VBQ0Usa0JBQUE7QUFHRjtBQUFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBR0Y7QUFBQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7QUFHRjtBQUNBO0VBQ0UsaUNBQUE7RUFJQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQURGO0FBRUU7RUFDSSxhQUFBO0FBQU4iLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGVzdCB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICNlYjRiNTggIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDIzNSw3NSw4OCAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci0tcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci0tcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1ICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGU6ICNjZjQyNGQgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjZWQ1ZDY5ICFpbXBvcnRhbnQ7XG5cbiAgaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMTIxMjExICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG59XG5cblxuXG4ubGlzdHtcbiAgY29sb3I6ICMyNzJBM0Y7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAxOHB4IC01cHg7XG59XG4jaWNvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMjQ4LCAxNDcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6MjVweDtcbiAgaGVpZ2h0OjMwcHg7XG4gIFxufVxuaW9uLWl0ZW17XG4gIC0tYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuLnJvd3tcbiAgbWFyZ2luOjI1cHg7XG4gIG1hcmdpbi1sZWZ0OjAhaW1wb3J0YW50XG59XG5pb24tbWVudS1idXR0b24ge1xuICBtYXJnaW46MjBweDtcbn1cbmltZzpob3ZlcntcbmN1cnNvcjogcG9pbnRlcjtcbn1cbmlvbi1tZW51LWJ1dHRvbjpob3ZlcntcbiAgLS1jb2xvcjojZmZmO1xuIFxufVxuLmNsb3Nle1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgY29sb3I6IzY3Njc2Nztcbn1cbi5jbG9zZTpob3ZlcntcbiAgY29sb3I6IzIzZDVhYjtcbn1cbi5yb3d7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuI3NpZGVNZW51TGlzdCAuYWN0aXZle1xuICBjb2xvcjogIzIzZDVhYjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmRvdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDExMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiAzcHggLTJweCAxMXB4IDNweCNjY2M7XG59XG5cblxuaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmYgIWltcG9ydGFudDtcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgZGFya3R1cnF1b2lzZVxuICAvLyAwJSwgI2QxZjJlN1xuICAvLyAxMDAlKSAhaW1wb3J0YW50O1xuICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93OiBhdXRvO1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 99201:
/*!************************************************************!*\
  !*** ./src/app/report-seller/report-seller.component.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  font-size: 11px !important;\n}\n\nion-checkbox {\n  margin: 10px;\n}\n\n.card {\n  width: 100% !important;\n  height: 100% !important;\n  box-shadow: 2px 2px 2px 2px #fff;\n}\n\ninput {\n  border-radius: 3px;\n  width: 90%;\n}\n\n.submit-btn {\n  text-align: center;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  margin: 5px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC1zZWxsZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsOERBQUE7RUFHQSxXQUFBO0VBQ0EsV0FBQTtBQUdKIiwiZmlsZSI6InJlcG9ydC1zZWxsZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY2hlY2tib3h7XG4gICAgbWFyZ2luOjEwcHg7XG59XG4uY2FyZHtcbiAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OjEwMCUgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2ZmZjtcbn1cbmlucHV0e1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB3aWR0aDogOTAlO1xufVxuLnN1Ym1pdC1idG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gIDAlLCAjMjNkNWFiXG4gIDEwMCUpO1xuICAgIG1hcmdpbjo1cHg7XG4gICAgY29sb3I6ICNmZmY7XG59Il19 */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu swipeGesture=\"false\"   side=\"start\" type=\"push\" contentId=\"main\">\n  <ion-toolbar>\n    <div class=\"row mt-5\">\n      <div class=\"col-4 mt-2\">\n        <ion-menu-button style=\"display: table-row;\" >\n          <ion-icon style=\"margin-left: 20px;\" class=\"close\"  name=\"close\"></ion-icon>\n        </ion-menu-button>\n      </div>\n      <div class=\"col-8 ion-text-center\" style=\"margin-left: -20px;\">\n        <span class=\"dot ion-text-center\">\n          <img  height=\"100px\" style=\"margin: 5px;\" width=\"105\" src=\"assets/logo.jpeg\" alt=\"\">\n        </span>                \n      </div>\n    </div>\n  </ion-toolbar>\n\n<ion-content >\n  \n\n  <ion-list id=\"sideMenuList\" class=\"mt-1\"  >\n    <div class=\"row \">\n      <div class=\"col-5\">\n          <ion-item>\n            <img  height=\"45px\"  width=\"50px\" src=\"assets/icon/home.PNG\" alt=\"\">\n          </ion-item>\n      </div>\n      <div class=\"col-4\" style=\"margin-left: -15px;\">\n        <ion-menu-button style=\"display: table-row;\" >\n          <p [class]=\"activeItem == 'home' ? 'active list': 'list' \"  (click)=\"home()\">Home</p> \n        </ion-menu-button>\n        \n      </div>\n    </div>      \n    <div class=\"row\">\n      <div class=\"col-5\">\n          <ion-item>\n            <img  height=\"45px\"  width=\"50px\" src=\"assets/icon/setalarm.png\" alt=\"\">\n          </ion-item>\n      </div>\n      <div class=\"col-4\" style=\"margin-left: -15px;\">\n        <ion-menu-button style=\"display: table-row;\" >\n          <p [class]=\"activeItem == 'setalarm' ? 'active list': 'list' \"(click)=\"setalarm()\">Set Alarm</p>\n        </ion-menu-button>\n        \n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n          <ion-item>\n            <img  height=\"45px\"  width=\"50px\" src=\"assets/icon/myalarms.png\" alt=\"\">\n          </ion-item>\n      </div>\n      <div class=\"col-4\" style=\"margin-left: -15px;\">\n        <ion-menu-button style=\"display: table-row;\" >\n          <p [class]=\"activeItem == 'myalarms' ? 'active list': 'list' \"(click)=\"myAlarm()\">My Alarms</p>\n        </ion-menu-button>\n        \n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n          <ion-item>\n            <img  height=\"45px\"  width=\"50px\" src=\"assets/icon/myprofile.png\" alt=\"\">\n          </ion-item>\n      </div>\n      <div class=\"col-4\" style=\"margin-left: -15px;\">\n        <ion-menu-button style=\"display: table-row;\" >\n          <p [class]=\"activeItem == 'myprofile' ? 'active list': 'list' \"  (click)=\"myprofile()\">My Profile</p> \n        </ion-menu-button>\n       \n      </div>\n    </div>\n\n      \n    <div class=\"row\">\n      <div class=\"col-5\">\n          <ion-item>\n            <img  height=\"45px\"  width=\"50px\" src=\"assets/icon/support.png\" alt=\"\">\n          </ion-item>\n      </div>\n      <div class=\"col-4\" style=\"margin-left: -15px;\">\n        <ion-menu-button style=\"display: table-row;\" >\n          <p [class]=\"activeItem == 'support' ? 'active list': 'list' \"  (click)=\"support()\">Support</p> \n        </ion-menu-button>\n       \n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n          <ion-item>\n            <img height=\"45px\"  width=\"50px\" src=\"assets/icon/logout.png\" alt=\"\">\n            \n          </ion-item>\n      </div>\n      <div class=\"col-4\" style=\"margin-left: -15px;\">\n        <ion-menu-button style=\"display: table-row;\" >\n          <p [class]=\"activeItem == 'logout' ? 'active list': 'list' \" style=\"cursor: pointer;\" (click)=\"logout()\" class=\"list\">Log out </p>\n        </ion-menu-button>\n       \n      </div>\n    </div>\n    \n  \n    \n  </ion-list>\n\n  \n</ion-content>\n</ion-menu>\n\n<ion-router-outlet [animation] = \"myCustomPageTransition\"  id=\"main\"></ion-router-outlet>");

/***/ }),

/***/ 20056:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report-seller/report-seller.component.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-9\">\n                <h5>Report Seller</h5>\n            </div>\n            <!-- <div class=\"col-3\">\n                <ion-icon (click)=\"dismiss()\" style=\"margin:15px;cursor:pointer;color:#FF6000\" name=\"close\"></ion-icon>\n            </div> -->\n            <div class=\"col-4\">\n               <div>\n                <ion-label>Spam Msg</ion-label>\n               </div>\n                <div>\n                    <ion-checkbox color=\"success\"></ion-checkbox>\n                </div>\n            </div>\n            <div class=\"col-4\">\n                <div>\n                    <ion-label>Offer denied</ion-label>\n                </div>\n                <div>\n                    <ion-checkbox color=\"success\"></ion-checkbox>\n                </div>\n            </div>\n            <div class=\"col-4\">\n                <div>\n                    <ion-label>store N/A</ion-label>\n                </div>\n                <div>\n                    <ion-checkbox color=\"success\"></ion-checkbox>\n                </div>\n            </div>\n            <div class=\"col-12\">\n                <p>Others:</p>\n            </div>\n            <div class=\"col-12 ion-text-center\">\n                \n                <input type=\"text\">\n                <button class=\"btn btn-sm submit-btn\">Submit</button>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map