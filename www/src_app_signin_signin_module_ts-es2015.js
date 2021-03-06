(self["webpackChunkuserapp"] = self["webpackChunkuserapp"] || []).push([["src_app_signin_signin_module_ts"],{

/***/ 11644:
/*!*************************************************!*\
  !*** ./src/app/signin/signin-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPageRoutingModule": function() { return /* binding */ SigninPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.page */ 61895);




const routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_0__.SigninPage
    }
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SigninPageRoutingModule);



/***/ }),

/***/ 87445:
/*!*****************************************!*\
  !*** ./src/app/signin/signin.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPageModule": function() { return /* binding */ SigninPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin-routing.module */ 11644);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page */ 61895);







let SigninPageModule = class SigninPageModule {
};
SigninPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SigninPageRoutingModule
        ],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_1__.SigninPage]
    })
], SigninPageModule);



/***/ }),

/***/ 61895:
/*!***************************************!*\
  !*** ./src/app/signin/signin.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPage": function() { return /* binding */ SigninPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signin.page.html */ 13746);
/* harmony import */ var _signin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page.scss */ 49180);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 55160);









let SigninPage = class SigninPage {
    constructor(router, http, toastCtrl) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.signinemailid = '';
        this.signinpassword = '';
    }
    ngOnInit() {
    }
    signin() {
        const Data = {
            email_id: this.signinemailid,
            password: this.signinpassword
        };
        this.http.post('/user_login', Data).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                const obj = {
                    "id": response.tbid,
                    "username": response.user_name,
                    "mobile": response.mobile_number,
                    "email": response.email_id,
                    "token": response.token
                };
                const encodeText = btoa(JSON.stringify(obj));
                localStorage.setItem("24hrs-user-data", encodeText);
                localStorage.setItem("token", response.token);
                console.log(encodeText);
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                });
                this.navigateTabs();
            }
            else {
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'error',
                    title: 'Please enter a valid email (or) password'
                });
            }
        }, (error) => {
            console.log(error);
        });
    }
    navigateTabs() {
        this.signinemailid = '';
        this.signinpassword = '';
        this.router.navigate(['/selectcategories']);
    }
    signupPage() {
        this.router.navigate(['/signuppage']);
    }
};
SigninPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
SigninPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-signin',
        template: _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        animations: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('fadein', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 1 }))
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slidelefttitle', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0, transform: 'translateX(150%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms 300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateX(0%)', opacity: 1 }))
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('slideup', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)('void => *', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ opacity: 0, transform: 'translateY(150%)' }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('900ms 300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({ transform: 'translateY(0%)', opacity: 1 }))
                ])
            ])
        ],
        styles: [_signin_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SigninPage);



/***/ }),

/***/ 49180:
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#logo {\n  margin: 5px;\n  width: 90%;\n  height: 90%;\n  border-radius: 50%;\n}\n\n.dot {\n  text-align: center;\n  margin-top: -20px;\n  height: 120px !important;\n  width: 125px !important;\n  background-color: #fff;\n  border-radius: 20%;\n  display: inline-block;\n  box-shadow: 1px 1px 36px -9px #ccc;\n}\n\n.signin-btn {\n  background-color: #23d5ab;\n  color: #fff;\n  text-align: right;\n  margin: 10%;\n  padding: 5px;\n}\n\n.facebook-btn {\n  background-color: #fff;\n  color: #23d5ab;\n  text-align: center;\n  width: 90%;\n  border: none;\n  margin: 10px;\n  font-size: 15px;\n}\n\n@media screen and (max-width: 300px) {\n  .signin-btn {\n    text-align: center;\n    margin-left: -15px !important;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .signin-btn {\n    margin-left: 55px !important;\n  }\n}\n\nion-label {\n  font-size: 12px !important;\n  color: #4c4c4d !important;\n}\n\nion-item {\n  --background: transparent !important;\n}\n\nion-input:focus {\n  --border-bottom: 2px solid #23d5ab !important;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsNkJBQUE7RUFHTjtBQUNGOztBQUFFO0VBQ0U7SUFDSSw0QkFBQTtFQUVOO0FBQ0Y7O0FBQUE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQUE7RUFDSSxvQ0FBQTtBQUdKOztBQURBO0VBQ0ksNkNBQUE7QUFJSjs7QUFGQTtFQUNJLGlDQUFBO0VBSUEsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFESTtFQUNJLGFBQUE7QUFHUiIsImZpbGUiOiJzaWduaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ297XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6OTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5kb3Qge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEyNXB4ICFpbXBvcnRhbnQ7XG4gICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzNnB4IC05cHggI2NjYztcbiAgICAvLyBib3JkZXI6MnB4IHNvbGlkICMyM2Q1YWI7XG4gIH1cbi5zaWduaW4tYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyM2Q1YWI7XG4gICAgY29sb3I6I2ZmZjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW46MTAlO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbi5mYWNlYm9vay1idG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjojMjNkNWFiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJvcmRlcjpub25lO1xuICAgIG1hcmdpbjoxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gICAgLnNpZ25pbi1idG4ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnNpZ25pbi1idG4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNTVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuaW9uLWxhYmVse1xuICAgIGZvbnQtc2l6ZToxMnB4ICAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiM0YzRjNGQgIWltcG9ydGFudDtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbmlvbi1pbnB1dDpmb2N1c3tcbiAgICAtLWJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjNkNWFiICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgZGFya3R1cnF1b2lzZVxuICAgIC8vIDAlLCAjZDFmMmU3XG4gICAgLy8gMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ 13746:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content class=\"bg-class\" >\n  <div class=\"container\" >\n    <div class=\"row title\">\n      <div class=\"col-12 ion-text-center\">\n       <div  @fadein class=\"dot\">\n        <img id=\"logo\" height=\"125px\" width=\"150px\" src=\"assets/logo.jpeg\" alt=\"\">\n       </div>\n      </div>\n       \n          \n      <div @slideup class=\"col-12 ion-text-center\">\n        <span class=\"welcome\">Welcome to</span> <br>\n        <span class=\"seller\"><b>24hrs</b></span>\n      </div>\n    </div>\n  \n    <div @slideup class=\"signin-div mb-4\">\n      <div class=\"row \"style=\"padding:15px;\">\n        <div class=\"col-6 signin\">\n          Sign in\n        </div>\n        <div style=\"cursor: pointer;\" (click)=\"signupPage()\" class=\"col-6 signup\">\n          Sign up\n        </div>\n      </div>\n      <p class=\"signin-seller\"><b>Sign in to  24hrs </b></p>\n      <p class=\"emailTo-continue\">Enter email & password to continue</p>\n  \n      <div class=\"input-field\" >\n        <ion-item>\n          <ion-label position=\"floating\">  <ion-icon name=\"mail\"></ion-icon> EMAIL</ion-label>\n          <ion-input [(ngModel)]=\"signinemailid\" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\"> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-lock2-fill\" viewBox=\"0 0 16 16\">\n            <path d=\"M7 6a1 1 0 0 1 2 0v1H7V6z\"/>\n            <path d=\"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0z\"/>\n          </svg> PASSWORD</ion-label>\n          <ion-input type=\"password\" [(ngModel)]=\"signinpassword\"> </ion-input>\n        </ion-item>   \n      </div>\n  \n      <div class=\"row mt-3\">\n        <div class=\"col-8 forgot-pw\">\n          Forgot password?\n        </div>\n        <div class=\"col-2 \">\n          <button  (click)=\"signin()\" class=\"btn btn-success btn-sm signin-btn mt-1\">SIGNIN</button>\n        </div>\n\n        <div class=\"col-12 ion-text-center\">\n          <button  (click)=\"fb()\" class=\"btn btn-primary btn-sm btn-outline facebook-btn\">\n            <svg style=\"margin-top: -5px;color:#23d5ab\" xmlns=\"http://www.w3.org/2000/svg\" width=\"36\" height=\"15\" fill=\"currentColor\" class=\"bi bi-facebook\" viewBox=\"0 0 16 16\">\n            <path d=\"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z\"/>\n          </svg>Log in with Facebook</button>\n        </div>\n      </div>\n  \n    </div>\n  </div>\n  </ion-content>\n  ");

/***/ })

}]);
//# sourceMappingURL=src_app_signin_signin_module_ts-es2015.js.map