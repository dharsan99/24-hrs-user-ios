(self["webpackChunkuserapp"] = self["webpackChunkuserapp"] || []).push([["src_app_searchpage_searchpage_module_ts"],{

/***/ 56432:
/*!*********************************************************!*\
  !*** ./src/app/searchpage/searchpage-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchpagePageRoutingModule": function() { return /* binding */ SearchpagePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _searchpage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchpage.page */ 59992);




const routes = [
    {
        path: '',
        component: _searchpage_page__WEBPACK_IMPORTED_MODULE_0__.SearchpagePage
    }
];
let SearchpagePageRoutingModule = class SearchpagePageRoutingModule {
};
SearchpagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SearchpagePageRoutingModule);



/***/ }),

/***/ 31895:
/*!*************************************************!*\
  !*** ./src/app/searchpage/searchpage.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchpagePageModule": function() { return /* binding */ SearchpagePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 44981);
/* harmony import */ var _searchpage_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchpage-routing.module */ 56432);
/* harmony import */ var _searchpage_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchpage.page */ 59992);








let SearchpagePageModule = class SearchpagePageModule {
};
SearchpagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipeModule,
            _searchpage_routing_module__WEBPACK_IMPORTED_MODULE_1__.SearchpagePageRoutingModule
        ],
        declarations: [_searchpage_page__WEBPACK_IMPORTED_MODULE_2__.SearchpagePage]
    })
], SearchpagePageModule);



/***/ }),

/***/ 59992:
/*!***********************************************!*\
  !*** ./src/app/searchpage/searchpage.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchpagePage": function() { return /* binding */ SearchpagePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_searchpage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./searchpage.page.html */ 23437);
/* harmony import */ var _searchpage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchpage.page.scss */ 93082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 28191);







let SearchpagePage = class SearchpagePage {
    constructor(router, activatedRoute, http, route) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.isVisible = false;
        this.isShown = true;
        this.list = [
            {
                "id": "1",
                "firstName": "onion",
                "lastName": "Cruise"
            },
            {
                "id": "2",
                "firstName": "tomato",
                "lastName": "Sharapova"
            },
            {
                "id": "3",
                "firstName": "apple",
                "lastName": "Bond"
            }, {
                "id": "4",
                "firstName": "banana",
                "lastName": "Bond"
            },
            {
                "id": "5",
                "firstName": "jack fruits",
                "lastName": "Bond"
            },
            {
                "id": "6",
                "firstName": "mango",
                "lastName": "Bond"
            },
            {
                "id": "7",
                "firstName": "ginger",
                "lastName": "Bond"
            }, {
                "id": "8",
                "firstName": "orange",
                "lastName": "Bond"
            }
        ];
    }
    ngOnInit() {
    }
    searchProduct() {
        this.isVisible = true;
        this.isShown = false;
    }
    backToHome() {
        this.router.navigate(['/homepage']);
    }
};
SearchpagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
SearchpagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-searchpage',
        template: _raw_loader_searchpage_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_searchpage_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SearchpagePage);



/***/ }),

/***/ 93082:
/*!*************************************************!*\
  !*** ./src/app/searchpage/searchpage.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-searchbar {\n  --background: #fff !important;\n  margin: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaHBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoic2VhcmNocGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFye1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogM3B4O1xuICBcblxufSJdfQ== */");

/***/ }),

/***/ 23437:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/searchpage/searchpage.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-1 mt-4 \">\n        <ion-icon (click)=\"backToHome()\" style=\"width:30px;height:25px;color:#fff;margin-top:11px;cursor: pointer;\" name=\"arrow-back-outline\"></ion-icon>\n      </div>\n      <div class=\"col-11 mt-4 \">\n        <ion-searchbar (keypress)=\"searchProduct()\"  [(ngModel)]=\"term\" type=\"text\"></ion-searchbar>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list *ngIf=\"isVisible\" >\n  <ion-item  *ngFor=\"let search of list |filter:term\">\n    <ion-label >{{search.firstName}}</ion-label>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-up-left\" viewBox=\"0 0 16 16\">\n      <path fill-rule=\"evenodd\" d=\"M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z\"/>\n    </svg>\n  </ion-item>\n</ion-list>\n\n<lottie-player *ngIf=\"isShown\" (click)=\"getPicture()\" src=\"https://assets6.lottiefiles.com/packages/lf20_e2zcy5pu.json\" background=\"transparent\"\nspeed=\"1.5\" style=\"width:100%;margin-left:0px;\" loop autoplay></lottie-player>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_searchpage_searchpage_module_ts-es2015.js.map