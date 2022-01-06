(self["webpackChunkuserapp"] = self["webpackChunkuserapp"] || []).push([["src_app_myprofile_myprofile_module_ts"],{

/***/ 4790:
/*!*******************************************************!*\
  !*** ./src/app/myprofile/myprofile-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyprofilePageRoutingModule": function() { return /* binding */ MyprofilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _myprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myprofile.page */ 47343);




const routes = [
    {
        path: '',
        component: _myprofile_page__WEBPACK_IMPORTED_MODULE_0__.MyprofilePage
    }
];
let MyprofilePageRoutingModule = class MyprofilePageRoutingModule {
};
MyprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyprofilePageRoutingModule);



/***/ }),

/***/ 22913:
/*!***********************************************!*\
  !*** ./src/app/myprofile/myprofile.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyprofilePageModule": function() { return /* binding */ MyprofilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _myprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myprofile-routing.module */ 4790);
/* harmony import */ var _myprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myprofile.page */ 47343);







let MyprofilePageModule = class MyprofilePageModule {
};
MyprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _myprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyprofilePageRoutingModule
        ],
        declarations: [_myprofile_page__WEBPACK_IMPORTED_MODULE_1__.MyprofilePage]
    })
], MyprofilePageModule);



/***/ }),

/***/ 47343:
/*!*********************************************!*\
  !*** ./src/app/myprofile/myprofile.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyprofilePage": function() { return /* binding */ MyprofilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_myprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./myprofile.page.html */ 95349);
/* harmony import */ var _myprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myprofile.page.scss */ 40877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 55160);










let MyprofilePage = class MyprofilePage {
    constructor(router, http, toastCtrl, route, alertController) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.userdetails = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
        this.PopupModel = false;
        this.updateUsername = this.userdetails.username;
        this.updateMobile = this.userdetails.mobile;
        this.updateEmail = this.userdetails.email;
        this.getCategoryList = [];
        route.params.subscribe(val => {
            this.PopupModel = false;
            console.log(this.userdetails);
            this.updateProfile();
            this.getSelectCategory();
        });
    }
    ngOnInit() {
        console.log(this.userdetails);
    }
    support() {
        this.router.navigate(['/support']);
    }
    backToprivious() {
        this.PopupModel = false;
    }
    popupModelOpen() {
        this.PopupModel = true;
    }
    changeCategory() {
        this.router.navigate(['selectcategories']);
    }
    updateProfile() {
        const updateData = {
            tbid: this.userdetails.id,
            user_name: this.updateUsername,
            email_id: this.updateEmail,
            mobile_number: this.updateMobile
        };
        this.http.get('/user_update_profile').subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                this.PopupModel = false;
            }
            else {
            }
        }, (error) => {
            console.log(error);
        });
    }
    back() {
        this.router.navigate(['/homepage']);
    }
    logout() {
        localStorage.removeItem("24hrs-user-data");
        this.router.navigate(['/']);
    }
    deleteAccount() {
        this.presentAlertConfirm();
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'buttonCss ',
                header: 'Delete Your Account!',
                message: 'Are You <strong>Sure</strong>!!!',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'alert-danger',
                        handler: (blah) => {
                            console.log('Confirm Cancel: No');
                        }
                    }, {
                        text: 'Yes',
                        cssClass: 'buttonCss',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.showPrompt();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    showPrompt() {
        this.alertController.create({
            cssClass: 'buttonCss ',
            header: 'Enter The Password To Delete Your Account',
            inputs: [
                {
                    name: 'Place',
                    placeholder: 'Password',
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: (data) => {
                        console.log('Canceled', data);
                    }
                },
                {
                    text: 'Delete Account!',
                    handler: (data) => {
                        console.log('Saved Information', data);
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
    getSelectCategory() {
        this.http.get('/store_category').subscribe((response) => {
            this.getCategoryList = response.records;
            console.log(response);
        }, (error) => {
            console.log(error);
        });
    }
};
MyprofilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
MyprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-myprofile',
        template: _raw_loader_myprofile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
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
        styles: [_myprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MyprofilePage);



/***/ }),

/***/ 40877:
/*!***********************************************!*\
  !*** ./src/app/myprofile/myprofile.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.top-container {\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  height: 28%;\n  border-bottom-left-radius: 25%;\n  border-bottom-right-radius: 25%;\n}\n\n.name {\n  font-size: 16px;\n  color: #5C5C5C;\n  text-align: left;\n  font-style: bold;\n  font-weight: 550;\n  margin: 6px;\n}\n\n.edit-name {\n  font-size: 15px;\n  margin-top: 5px;\n}\n\n.profile {\n  width: 160px;\n  height: 125px;\n  position: relative;\n  margin-top: 15%;\n  border: 2px solid #ffffff;\n  border-radius: 30px;\n  z-index: 999;\n}\n\n.editprofile {\n  width: 155px;\n  height: 150px;\n  border-radius: 5%;\n  margin-bottom: 5px !important;\n}\n\n.card {\n  box-shadow: 2px 2px 2px 2px #ccc;\n  border-radius: 10px;\n  margin: 5px;\n  width: 80%;\n  text-align: left;\n}\n\n.col-6 {\n  margin-bottom: 7px !important;\n}\n\nspan {\n  margin: 15px !important;\n  font-size: 14px !important;\n}\n\nsvg {\n  margin-left: 5px !important;\n}\n\n.myproduct-div {\n  align-items: center !important;\n  justify-content: center !important;\n  text-align: center !important;\n  background-color: #fff;\n  border: 1px solid #ebe6e6;\n  border-radius: 8px;\n  margin-left: 2% !important;\n  margin-right: 5% !important;\n  box-shadow: 2px 2px 2px 2px #ebe6e6;\n  width: 95% !important;\n  border-top-left-radius: 25%;\n  border-top-right-radius: 25%;\n}\n\nion-item {\n  --border-color: #fff;\n  text-align: left;\n  margin: 5px;\n}\n\ninput[type=text] {\n  font-size: 13px;\n  margin-top: -12px;\n  margin-left: -25px;\n  width: 100%;\n  box-sizing: border-box;\n  border: none;\n  background-color: #fff;\n  border-bottom: 2px solid #23d5ab;\n}\n\ninput:focus {\n  outline: none !important;\n  border: 2px solid #23d5ab !important;\n  box-shadow: 0 0 2px #e9f3ff;\n}\n\n#card {\n  position: absolute;\n  height: 150%;\n  width: 1500px !important;\n  margin-left: -10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  margin-top: -215px !important;\n  z-index: 999;\n}\n\n#modal {\n  position: fixed;\n  top: 20% !important;\n  margin: 5%;\n  background-color: #fff;\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  width: 94% !important;\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.update-btn {\n  border-radius: 5px !important;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  height: 25px;\n  width: 25%;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  padding: 3px;\n  margin: 15px !important;\n}\n\n.update-category-btn {\n  border-radius: 5px !important;\n  background: linear-gradient(to left, #23a6d5 0%, #23d5ab 100%);\n  color: #fff;\n  height: 25px;\n  text-align: center;\n  border: 1px solid #fff;\n  font-size: 12px !important;\n  margin-top: 6px;\n  margin-right: 10%;\n}\n\n.delete-acc-btn {\n  text-align: center !important;\n  background: linear-gradient(to right, #ff80a0 0%, #eb154b 100%);\n  margin: 5px;\n  color: #fff;\n  width: 60% !important;\n}\n\n.buttonCss button.alert-button:nth-child(1) {\n  color: red;\n}\n\n.buttonCss button.alert-button:nth-child(2) {\n  color: green;\n}\n\nion-chip {\n  box-shadow: 0px 5px 17px -7px black;\n  margin-bottom: 10px;\n  color: #fff !important;\n  background: linear-gradient(to right, #555c59 0%, #1d1f1e 100%);\n}\n\nion-content {\n  --overflow: hidden;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtBQUNGOztBQUdBO0VBQ0UsOERBQUE7RUFRQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBUEY7O0FBV0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQVJKOztBQVVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUdBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVRGOztBQVlBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBVEY7O0FBV0E7RUFDRSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVVBO0VBQ0UsNkJBQUE7QUFQRjs7QUFTQTtFQUNFLHVCQUFBO0VBQ0EsMEJBQUE7QUFORjs7QUFTQTtFQUNFLDJCQUFBO0FBTkY7O0FBUUE7RUFDRSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFMRjs7QUFZQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBVEY7O0FBV0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBVEY7O0FBV0E7RUFDRSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7QUFSRjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQVBGOztBQVNBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLHFCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FBUEY7O0FBVUE7RUFDRSw2QkFBQTtFQUNBLDhEQUFBO0VBR0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBVEY7O0FBV0E7RUFDRSw2QkFBQTtFQUNBLDhEQUFBO0VBR0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFWRjs7QUFhQTtFQUNFLDZCQUFBO0VBQ0EsK0RBQUE7RUFHQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBWkY7O0FBaUJFO0VBQ0UsVUFBQTtBQWRKOztBQWlCRTtFQUNFLFlBQUE7QUFmSjs7QUFrQkE7RUFDRSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDRSwrREFBQTtBQWZKOztBQXNCQTtFQUNFLGtCQUFBO0FBbkJGOztBQW9CRTtFQUNJLGFBQUE7QUFsQk4iLCJmaWxlIjoibXlwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuXG4udG9wLWNvbnRhaW5lcntcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDVcbiAgMCUsICMyM2Q1YWJcbiAgMTAwJSk7XG4gIC8vIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyNiwgMTg4LCAxNTYsIDEpIDAlLCByZ2JhKDE0MiwgNjgsIDE3MywgMSkgMTAwJSk7XG5cdC8vIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgyNiwgMTg4LCAxNTYsIDEpIDAlLCByZ2JhKDE0MiwgNjgsIDE3MywgMSkgMTAwJSk7XG5cdC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjYsIDE4OCwgMTU2LCAxKSAwJSwgcmdiYSgxNDIsIDY4LCAxNzMsIDEpIDEwMCUpO1xuXG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2FhNDZlMCAyMyUsICM1YzYzZjcgNzYlKTtcbiAgaGVpZ2h0OjI4JTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjUlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogIDI1JTtcblxufVxuLm5hbWV7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1QzVDNUM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc3R5bGU6IGJvbGQ7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIG1hcmdpbjogNnB4O1xufVxuXG5cbi5lZGl0LW5hbWV7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi5wcm9maWxle1xuICB3aWR0aDoxNjBweDtcbiAgaGVpZ2h0OjEyNXB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgLy8gdG9wOjIwJTtcbiAgLy8gbGVmdDo1JTtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOjMwcHg7XG4gIHotaW5kZXg6IDk5OTtcblxufVxuLmVkaXRwcm9maWxle1xuICB3aWR0aDoxNTVweDtcbiAgaGVpZ2h0OjE1MHB4O1xuICBib3JkZXItcmFkaXVzOjUlO1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cbi5jYXJke1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA4MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY29sLTZ7XG4gIG1hcmdpbi1ib3R0b206IDdweCAhaW1wb3J0YW50O1xufVxuc3BhbntcbiAgbWFyZ2luOjE1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbnN2Z3tcbiAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xufVxuLm15cHJvZHVjdC1kaXZ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjoxcHggc29saWQgI2ViZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tbGVmdDogMiUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA1JSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2ViZTZlNjtcbiAgd2lkdGg6OTUlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1JTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICAyNSU7XG4gIFxuICB9XG5cbi8vIGlvbi1sYWJlbHtcbi8vICAgbWFyZ2luLWJvdHRvbToyNXB4O1xuLy8gfVxuaW9uLWl0ZW17XG4gIC0tYm9yZGVyLWNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46NXB4O1xufVxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgXG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjNkNWFiO1xufVxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjoycHggc29saWQgIzIzZDVhYiFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggI2U5ZjNmZjtcbn1cbiNjYXJke1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgaGVpZ2h0OjE1MCU7XG4gIHdpZHRoOjE1MDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbiAgYm9yZGVyOjFweCBzb2xpZCAjZWJlNmU2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjY2NjO1xuICBtYXJnaW4tdG9wOiAtMjE1cHggIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5O1xufVxuI21vZGFse1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgdG9wOjIwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46NSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjoxcHggc29saWQgI2ViZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAvLyBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2NjYztcbiAgd2lkdGg6OTQlICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzOyAgXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBcbn1cbi51cGRhdGUtYnRue1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyM2E2ZDVcbiAgMCUsICMyM2Q1YWJcbiAgMTAwJSk7XG4gIGNvbG9yOiNmZmY7XG4gIGhlaWdodDoyNXB4O1xuICB3aWR0aDoyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW46MTVweCAhaW1wb3J0YW50O1xufVxuLnVwZGF0ZS1jYXRlZ29yeS1idG57XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIzYTZkNVxuICAwJSwgIzIzZDVhYlxuICAxMDAlKTtcbiAgY29sb3I6I2ZmZjtcbiAgaGVpZ2h0OjI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuLmRlbGV0ZS1hY2MtYnRue1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY4MGEwXG4gIDAlLCAjZWIxNTRiXG4gIDEwMCUpO1xuICBtYXJnaW46NXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uQ3NzIHtcblxuICBidXR0b24uYWxlcnQtYnV0dG9uOm50aC1jaGlsZCgxKXtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5cbiAgYnV0dG9uLmFsZXJ0LWJ1dHRvbjpudGgtY2hpbGQoMil7XG4gICAgY29sb3I6IGdyZWVuO1xuICB9XG59XG5pb24tY2hpcHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxN3B4IC03cHggcmdiYSgwLCAwLCAwLCA1LjUpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzU1NWM1OVxuICAgIDAlLCAjMWQxZjFlXG4gICAgMTAwJSk7XG59XG5cblxuXG5pb24tY29udGVudCB7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4iXX0= */");

/***/ }),

/***/ 95349:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myprofile/myprofile.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content  >\n  <div class=\"top-container\">\n    <div class=\"row\">\n\n      <div class=\"col-3 ion-text-center mt-4\">\n        <ion-buttons slot=\"end\">\n          <ion-menu-button style=\"color:#fff;margin:0px;\" autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n        <!-- <svg (click)=\"back()\" style=\"color:#fff;cursor:pointer\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"40\" fill=\"#fff\" class=\"bi bi-chevron-left\" viewBox=\"0 0 16 16\">\n          <path fill-rule=\"evenodd\" d=\"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z\"/>\n        </svg> -->\n      </div>\n      <div class=\"col-6 mt-4\">\n        <!-- <p style=\"color: #fff;font-size: 30px;\">My profile</p> -->\n      </div>\n      <div class=\"col-3 ion-text-center mt-5\">\n        <ion-icon name=\"home\" (click)=\"back()\"\n          style=\"color:#fff;cursor:pointer;height:25px;width: 30px;margin-top: -10px;\"></ion-icon>\n      </div>\n    </div>\n\n    <div @slidelefttitle class=\"row\">\n      <div class=\"col-9 mt-1 mx-3\">\n        <p style=\"color: #fff;font-size: 30px;\">{{updateUsername}}</p>\n        <p style=\"color: #fff;font-size: 15px;margin-top: -15px\">{{updateMobile}}</p>\n        <p style=\"color: #fff;font-size: 12px;margin-top: -15px;\">{{updateEmail}}\n          <svg (click)=\"popupModelOpen()\" style=\"margin: 5px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"18\"\n            fill=\"currentColor\" class=\"bi bi-pencil-square\" viewBox=\"0 0 16 16\">\n            <path\n              d=\"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z\" />\n            <path fill-rule=\"evenodd\"\n              d=\"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z\" />\n          </svg>\n        </p>\n\n      </div>\n      <!-- <div class=\"col-12 ion-text-center\">\n        <img class=\"profile\" src=\"assets/sparrow.JPG\" alt=\"\">\n      </div> -->\n    </div>\n\n  </div>\n\n  <div @slideup class=\"container\">\n    <div class=\"row mt-5\">\n      <!-- <div class=\"col-6 \">\n        <p class=\"name\">Mobile :</p>\n      </div>\n      <div class=\"col-6 \">\n        <input type=\"text\" id=\"edit-field\" disabled [value]=\"userdetails.mobile\">\n      </div> -->\n\n      <!-- <div class=\"col-6\">\n        <p class=\"name\">Mylocation :</p>\n      </div>\n      <div class=\"col-6\">\n        <input type=\"text\" id=\"edit-field\" disabled value=\"Coimbatore\">\n      </div> -->\n\n      <div class=\"col-6\">\n        <p class=\"name\">Categories :</p>\n      </div>\n      <div class=\"col-6\">\n        <!-- <input type=\"text\" id=\"edit-field\" disabled value=\"Meat,Fruits\"> -->\n        <button type=\"button\" (click)=\"changeCategory()\" class=\"btn btn-success btn-sm update-category-btn\">Change Preference</button>\n       \n      </div>\n      <div class=\"col-12\">\n        <div class=\"container mt-1\" id=\"SelectedList\">\n          <ion-chip *ngFor=\"let category of getCategoryList\">\n            <ion-label>{{category.category}}</ion-label>\n          </ion-chip>\n      </div>\n      </div>\n    </div>\n  </div>\n\n  <div @slideup class=\"ion-text-center\" style=\"margin-top: 20%;\">\n    <button (click)=\"deleteAccount()\" class=\"btn btn-sm delete-acc-btn \">Delete My Account</button>\n  </div>\n\n  <div class=\"card\" *ngIf=\"PopupModel\" style=\"margin-top: 20px;\" id=\"card\">\n    <div class=\"row\" id=\"modal\">\n      <div class=\"hidden\">\n        <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n          <svg (click)=\"backToprivious()\" style=\"margin-top:-8px;cursor:pointer\" xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"16\" height=\"16\" fill=\"#23d5ab\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n            <path fill-rule=\"evenodd\"\n              d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\" />\n          </svg>\n        </div>\n        <h5 style=\"margin:10px; color: #5C5C5C;\"> <b>Edit Here:</b></h5>\n        <div class=\"row\" style=\"padding-left: 10px;\">\n          <!-- <div class=\"col-12 ion-text-center\">\n            <img class=\"editprofile\" src=\"assets/sparrow.JPG\" alt=\"\">\n          </div> -->\n          <div class=\"col-6\">\n            <p class=\"edit-name\">Username :</p>\n          </div>\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"updateUsername\"    type=\"text\">\n            <!-- <input  type=\"text\" value=\"{{userdetails.username}}\"  [(ngModel)]=\"username\"> -->\n          </div>\n          <div class=\"col-6\">\n            <p class=\"edit-name\">Mobile number :</p>\n          </div>\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"updateMobile\" type=\"text\" id=\"edit-field\" >\n          </div>\n        </div>\n\n        <div class=\"row\" style=\"padding-left: 10px;\">\n          <div class=\"col-6\">\n            <p class=\"edit-name\">Email:</p>\n          </div>\n          <div class=\"col-6\">\n            <input [(ngModel)]=\"updateEmail\" type=\"text\" id=\"edit-field\" >\n          </div>\n        </div>\n        <div style=\"width: 100%; text-align: center;\">\n          <button type=\"button\" (click)=\"updateProfile()\" class=\"btn btn-success btn-sm update-btn\">Update</button>\n        </div>\n      </div>\n    </div>\n\n    \n  </div>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_myprofile_myprofile_module_ts-es2015.js.map