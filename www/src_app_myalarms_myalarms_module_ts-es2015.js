(self["webpackChunkuserapp"] = self["webpackChunkuserapp"] || []).push([["src_app_myalarms_myalarms_module_ts"],{

/***/ 5858:
/*!*****************************************************!*\
  !*** ./src/app/myalarms/myalarms-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyalarmsPageRoutingModule": function() { return /* binding */ MyalarmsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _myalarms_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myalarms.page */ 53373);




const routes = [
    {
        path: '',
        component: _myalarms_page__WEBPACK_IMPORTED_MODULE_0__.MyalarmsPage
    }
];
let MyalarmsPageRoutingModule = class MyalarmsPageRoutingModule {
};
MyalarmsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyalarmsPageRoutingModule);



/***/ }),

/***/ 51881:
/*!*********************************************!*\
  !*** ./src/app/myalarms/myalarms.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyalarmsPageModule": function() { return /* binding */ MyalarmsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _myalarms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myalarms-routing.module */ 5858);
/* harmony import */ var _myalarms_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myalarms.page */ 53373);







let MyalarmsPageModule = class MyalarmsPageModule {
};
MyalarmsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _myalarms_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyalarmsPageRoutingModule
        ],
        declarations: [_myalarms_page__WEBPACK_IMPORTED_MODULE_1__.MyalarmsPage]
    })
], MyalarmsPageModule);



/***/ }),

/***/ 53373:
/*!*******************************************!*\
  !*** ./src/app/myalarms/myalarms.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyalarmsPage": function() { return /* binding */ MyalarmsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_myalarms_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./myalarms.page.html */ 14286);
/* harmony import */ var _myalarms_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myalarms.page.scss */ 15349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 55160);










let MyalarmsPage = class MyalarmsPage {
    constructor(router, http, toastCtrl, route, alertController) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.isVisible = false;
        this.alarmList = [];
        route.params.subscribe(val => {
            this.getAlarmList();
        });
    }
    ngOnInit() {
    }
    searchPage() {
        this.router.navigate(['/searchpage']);
    }
    notification() {
        this.router.navigate(['/notification']);
    }
    newAlarm() {
        this.router.navigate(['/setalarm']);
    }
    getAlarmList() {
        this.http.get('/store_read_alarm').subscribe((response) => {
            console.log(response);
            if (response.success == "false") {
                this.isVisible = true;
            }
            else {
                this.alarmList = response.records;
            }
        }, (error) => {
            console.log(error);
        });
    }
};
MyalarmsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
MyalarmsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-myalarms',
        template: _raw_loader_myalarms_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('fadein', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('900ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 1 }))
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slidelefttitle', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0, transform: 'translateX(150%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('900ms 300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ transform: 'translateX(0%)', opacity: 1 }))
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('slideup', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ opacity: 0, transform: 'translateY(150%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('900ms 300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({ transform: 'translateY(0%)', opacity: 1 }))
                ])
            ])
        ],
        styles: [_myalarms_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyalarmsPage);



/***/ }),

/***/ 15349:
/*!*********************************************!*\
  !*** ./src/app/myalarms/myalarms.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n  height: 50px;\n}\n\n.dot {\n  margin: 2px;\n  height: 27px;\n  width: 30px;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.btn-set-new-alarm {\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  width: 80%;\n  margin: 15px;\n  margin-left: -20px;\n}\n\nion-content {\n  background-color: #F4F7FA !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15YWxhcm1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhEQUFBO0VBR0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHRTtFQUNFLDhEQUFBO0VBR0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJLG9DQUFBO0VBS0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFOSjs7QUFPSTtFQUNJLGFBQUE7QUFMUiIsImZpbGUiOiJteWFsYXJtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmRvdCB7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjNhNmQ1XG4gICAgMCUsICMyM2Q1YWJcbiAgICAxMDAlKTtcbiAgICBjb2xvcjojZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAuYnRuLXNldC1uZXctYWxhcm17XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDVcbiAgICAwJSwgIzIzZDVhYlxuICAgIDEwMCUpO1xuICAgIGNvbG9yOiNmZmY7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46MTVweDtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIH1cblxuaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6I0Y0RjdGQSAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM4Y2RiZTJcbiAgICAvLyAwJSwgI2QxZjJlN1xuICAgIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG4gIFxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH0iXX0= */");

/***/ }),

/***/ 14286:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myalarms/myalarms.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#fff\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <h5 style=\"color:#fff;margin-top:30px\">24HRS</h5>\n      </div>\n      <div class=\"col-8\" style=\"text-align: right;width: 90%;margin-top: -40px;\">\n        <svg  (click)=\"searchPage()\" style=\"margin:10px;\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path\n            d=\"M14.2998 12.5863H13.3974L13.0775 12.2779C14.3299 10.8187 14.9685 8.93097 14.8587 7.01111C14.749 5.09124 13.8996 3.28856 12.489 1.98152C11.0785 0.674474 9.21659 -0.0352438 7.29394 0.00134777C5.3713 0.0379394 3.53754 0.817948 2.17778 2.17771C0.818015 3.53748 0.0379393 5.37125 0.00134789 7.2939C-0.0352436 9.21655 0.674402 11.0786 1.98144 12.4891C3.28848 13.8996 5.09129 14.7489 7.01115 14.8586C8.93101 14.9683 10.8187 14.33 12.2779 13.0775L12.5864 13.3974V14.2998L18.298 20L20 18.298L14.2998 12.5863ZM7.44594 12.5863C6.42926 12.5863 5.43548 12.2849 4.59014 11.72C3.7448 11.1552 3.08585 10.3523 2.69678 9.41302C2.30772 8.47373 2.20589 7.44016 2.40423 6.44301C2.60258 5.44586 3.09231 4.52992 3.81121 3.81102C4.53011 3.09211 5.44592 2.60259 6.44306 2.40424C7.44021 2.20589 8.47391 2.30765 9.4132 2.69672C10.3525 3.08579 11.1553 3.74468 11.7201 4.59002C12.285 5.43536 12.5864 6.42921 12.5864 7.44589C12.5873 8.1212 12.4551 8.79006 12.197 9.41414C11.939 10.0382 11.5604 10.6052 11.0829 11.0827C10.6054 11.5602 10.0381 11.9389 9.41404 12.1969C8.78996 12.4549 8.12124 12.5872 7.44594 12.5863Z\"\n            fill=\"white\" />\n        </svg>\n        <svg (click)=\"notification()\" style=\"margin:10px;\" width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M8.0002 0C7.11654 0 6.4002 0.716344 6.4002 1.6V1.80156C3.63963 2.51189 1.5998 5.01775 1.5998 8.00003V13.6H2C0.895431 13.6 0 14.4955 0 15.6V15.8C0 16.3523 0.447715 16.8 1 16.8H15C15.5523 16.8 16 16.3523 16 15.8V15.6C16 14.4955 15.1046 13.6 14 13.6H14.3998V8.00003C14.3998 5.01803 12.3604 2.51237 9.60019 1.80176V1.6C9.60019 0.716344 8.88385 0 8.0002 0ZM5.5998 17.6C5.5998 18.9255 6.67432 20 7.9998 20C9.32529 20 10.3998 18.9255 10.3998 17.6H5.5998Z\"\n            fill=\"white\" />\n        </svg>\n        <!-- <svg  (click)=\"setalarm()\" style=\"margin-left:15px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"24\" fill=\"#fff\"\n          class=\"bi bi-alarm\" viewBox=\"0 0 16 16\">\n          <path d=\"M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z\" />\n          <path\n            d=\"M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z\" />\n        </svg> -->\n      </div>\n    </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content >\n  <div class=\"container\">\n    <div class=\"row\">\n      <div @slidelefttitle class=\"col-6\">\n        <h3>My Alarms:</h3>\n      </div>\n      <div @slidelefttitle class=\"col-6 ion-text-right\">\n        <button (click)=\"newAlarm()\" class=\"btn btn-sm btn-set-new-alarm\">\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-plus-circle\" viewBox=\"0 0 16 16\">\n            <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n            <path d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"/>\n          </svg>\n          New Alaram</button>\n      </div>\n    </div>\n    \n    <div *ngIf=\"isVisible\">\n      <lottie-player src=\"https://assets9.lottiefiles.com/private_files/lf30_bn5winlb.json\" background=\"transparent\"\n        speed=\"1.5\" style=\"width:100%;margin-left:0px;\" loop autoplay></lottie-player>\n    </div>\n\n    <div @slidelefttitle class=\" card mt-4\">\n      <div class=\"row\">\n        <div class=\"col-9\">\n          <img style=\"margin: 7px;\" height=\"30px\" width=\"30px\" src=\"assets/storelogo.png\" alt=\"\">\n          <span>Geekstack/ Onion</span>\n        </div>\n        <div class=\"col-3 mt-2\">\n          <span class=\"dot ion-text-center\"><span style=\"margin-top:15px;font-size: 14px;\">\n            <svg style=\"margin:2px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"25\" fill=\"currentColor\" class=\"bi bi-bell-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z\"/>\n            </svg>\n          </span></span>\n        </div>\n      </div>\n    </div>\n\n    <div @slidelefttitle class=\" card mt-4\">\n      <div class=\"row\">\n        <div class=\"col-9\">\n          <img style=\"margin: 7px;\" height=\"30px\" width=\"30px\" src=\"assets/storelogo.png\" alt=\"\">\n          <span>Geekstack/ Onion</span>\n        </div>\n        <div class=\"col-3 mt-2\">\n          <span class=\"dot ion-text-center\"><span style=\"margin-top:15px;font-size: 14px;\">\n            <svg style=\"margin:2px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"25\" fill=\"currentColor\" class=\"bi bi-bell-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z\"/>\n            </svg>\n          </span></span>\n        </div>\n      </div>\n    </div>\n\n    <div @slidelefttitle class=\" card mt-4\">\n      <div class=\"row\">\n        <div class=\"col-9\">\n          <img style=\"margin: 7px;\" height=\"30px\" width=\"30px\" src=\"assets/storelogo.png\" alt=\"\">\n          <span>Geekstack/ Onion</span>\n        </div>\n        <div class=\"col-3 mt-2\">\n          <span class=\"dot ion-text-center\"><span style=\"margin-top:15px;font-size: 14px;\">\n            <svg style=\"margin:2px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"25\" fill=\"currentColor\" class=\"bi bi-bell-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z\"/>\n            </svg>\n          </span></span>\n        </div>\n      </div>\n    </div>\n\n    <div @slidelefttitle class=\" card mt-4\">\n      <div class=\"row\">\n        <div class=\"col-9\">\n          <img style=\"margin: 7px;\" height=\"30px\" width=\"30px\" src=\"assets/storelogo.png\" alt=\"\">\n          <span>Geekstack/ Onion</span>\n        </div>\n        <div class=\"col-3 mt-2\">\n          <span class=\"dot ion-text-center\"><span style=\"margin-top:15px;font-size: 14px;\">\n            <svg style=\"margin:2px\" xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"25\" fill=\"currentColor\" class=\"bi bi-bell-fill\" viewBox=\"0 0 16 16\">\n              <path d=\"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z\"/>\n            </svg>\n          </span></span>\n        </div>\n      </div>\n    </div>\n  \n   \n  \n   \n  </div>\n  </ion-content>\n  \n");

/***/ })

}]);
//# sourceMappingURL=src_app_myalarms_myalarms_module_ts-es2015.js.map