(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imageviewerpan-imageviewerpan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewerpan/imageviewerpan.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewerpan/imageviewerpan.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title><span hideWhen=\"mobile,mobileweb\">{{ mydata.allmessages.imageviewer_title }} </span>{{mydata.alldata[area].area}}!</ion-title>\n    <ion-title slot=\"end\">{{ mydata.allmessages.imageviewer_found }} {{total-remaining}}/{{total}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<div *ngFor=\"let picture of pictures, index as i\">\n  <figure *ngIf=\"i===showing\" class=\"burj\" >\n    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 1200 900\" preserveAspectRatio=\"xMinYMin meet\" >\n    <image width=\"1200\" height=\"900\" [attr.xlink:href]=\"picture.url\">\n    </image>\n    <a  *ngFor=\"let rectangle of picture.rectangles\" (click)=\"foundEgg(rectangle.code)\">\n      <rect [attr.x]=\"rectangle.x\" [attr.y]=\"rectangle.y\" fill=\"transparent\" opacity=\"20\" [attr.width]=\"rectangle.width\" [attr.height]=\"rectangle.height\" />\n      <rect *ngIf=\"mydata.iHaveIt(rectangle.code)\" [attr.x]=\"rectangle.x\" [attr.y]=\"rectangle.y\" stroke=\"green\" stroke-width=\"5\" fill=\"transparent\" opacity=\"20\" [attr.width]=\"rectangle.width\" [attr.height]=\"rectangle.height\" />\n    </a>\n    </svg>\n    <div id=\"arrowleft\" class=\"arrow\" (click)=\"updateShowing(-1)\"><ion-icon name=\"chevron-back-outline\"></ion-icon></div>\n    <div id=\"arrowright\" class=\"arrow\" (click)=\"updateShowing(1)\"><ion-icon name=\"chevron-forward-outline\"></ion-icon></div>\n  </figure>\n\n  \n</div>  \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/imageviewerpan/imageviewerpan-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/imageviewerpan/imageviewerpan-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ImageviewerpanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageviewerpanPageRoutingModule", function() { return ImageviewerpanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _imageviewerpan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageviewerpan.page */ "./src/app/imageviewerpan/imageviewerpan.page.ts");




const routes = [
    {
        path: '',
        component: _imageviewerpan_page__WEBPACK_IMPORTED_MODULE_3__["ImageviewerpanPage"]
    }
];
let ImageviewerpanPageRoutingModule = class ImageviewerpanPageRoutingModule {
};
ImageviewerpanPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ImageviewerpanPageRoutingModule);



/***/ }),

/***/ "./src/app/imageviewerpan/imageviewerpan.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/imageviewerpan/imageviewerpan.module.ts ***!
  \*********************************************************/
/*! exports provided: ImageviewerpanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageviewerpanPageModule", function() { return ImageviewerpanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _imageviewerpan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imageviewerpan-routing.module */ "./src/app/imageviewerpan/imageviewerpan-routing.module.ts");
/* harmony import */ var _imageviewerpan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imageviewerpan.page */ "./src/app/imageviewerpan/imageviewerpan.page.ts");







let ImageviewerpanPageModule = class ImageviewerpanPageModule {
};
ImageviewerpanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _imageviewerpan_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImageviewerpanPageRoutingModule"]
        ],
        declarations: [_imageviewerpan_page__WEBPACK_IMPORTED_MODULE_6__["ImageviewerpanPage"]]
    })
], ImageviewerpanPageModule);



/***/ }),

/***/ "./src/app/imageviewerpan/imageviewerpan.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/imageviewerpan/imageviewerpan.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".burj {\n  position: relative;\n  width: 100%;\n  padding-bottom: 77%;\n  vertical-align: middle;\n  margin: 0;\n  overflow: hidden;\n}\n\n.burj svg {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.arrow {\n  position: absolute;\n  height: 100%;\n  width: 6%;\n  display: flex;\n  padding: 0px;\n}\n\n#arrowleft {\n  left: 0px;\n  background: black;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.902879902) 0%, black 18%, rgba(0, 0, 0, 0.5079219188) 78%, rgba(0, 0, 0, 0) 100%);\n}\n\n#arrowright {\n  right: 0px;\n  background: black;\n  background: linear-gradient(270deg, rgba(0, 0, 0, 0.902879902) 0%, black 18%, rgba(0, 0, 0, 0.5079219188) 78%, rgba(0, 0, 0, 0) 100%);\n}\n\n.arrow ion-icon {\n  display: block;\n  margin: auto auto;\n  font-size: 6vw;\n  color: #a8a8a8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhci9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvQ1NfRWFzdGVyMjAyMi9zcmMvYXBwL2ltYWdldmlld2VycGFuL2ltYWdldmlld2VycGFuLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW1hZ2V2aWV3ZXJwYW4vaW1hZ2V2aWV3ZXJwYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0NEOztBRENBO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFBUSxPQUFBO0FDR1Q7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNHSjs7QUREQTtFQUNJLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG9JQUFBO0FDSUo7O0FEREE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxxSUFBQTtBQ0lKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2ltYWdldmlld2VycGFuL2ltYWdldmlld2VycGFuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXJqIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZy1ib3R0b206IDc3JTtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0bWFyZ2luOiAwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuLmJ1cmogc3ZnIHsgXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7IGxlZnQ6IDA7XG59XG5cbi5hcnJvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHdpZHRoOjYlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzowcHg7XG59XG4jYXJyb3dsZWZ0IHtcbiAgICBsZWZ0OjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwwLDApO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgwLDAsMCwwLjkwMjg3OTkwMTk2MDc4NDMpIDAlLCByZ2JhKDAsMCwwLDEpIDE4JSwgcmdiYSgwLDAsMCwwLjUwNzkyMTkxODc2NzUwNykgNzglLCByZ2JhKDAsMCwwLDApIDEwMCUpO1xufVxuXG4jYXJyb3dyaWdodCB7XG4gICAgcmlnaHQ6MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigwLDAsMCk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgwLDAsMCwwLjkwMjg3OTkwMTk2MDc4NDMpIDAlLCByZ2JhKDAsMCwwLDEpIDE4JSwgcmdiYSgwLDAsMCwwLjUwNzkyMTkxODc2NzUwNykgNzglLCByZ2JhKDAsMCwwLDApIDEwMCUpO1xuXG59XG5cbi5hcnJvdyBpb24taWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOmF1dG8gYXV0bztcbiAgICBmb250LXNpemU6IDZ2dztcbiAgICBjb2xvcjpyZ2IoMTY4LCAxNjgsIDE2OCk7XG59IiwiLmJ1cmoge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogNzclO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5idXJqIHN2ZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNiU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuI2Fycm93bGVmdCB7XG4gIGxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgwLCAwLCAwLCAwLjkwMjg3OTkwMikgMCUsIGJsYWNrIDE4JSwgcmdiYSgwLCAwLCAwLCAwLjUwNzkyMTkxODgpIDc4JSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcbn1cblxuI2Fycm93cmlnaHQge1xuICByaWdodDogMHB4O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSgwLCAwLCAwLCAwLjkwMjg3OTkwMikgMCUsIGJsYWNrIDE4JSwgcmdiYSgwLCAwLCAwLCAwLjUwNzkyMTkxODgpIDc4JSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcbn1cblxuLmFycm93IGlvbi1pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuICBmb250LXNpemU6IDZ2dztcbiAgY29sb3I6ICNhOGE4YTg7XG59Il19 */");

/***/ }),

/***/ "./src/app/imageviewerpan/imageviewerpan.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/imageviewerpan/imageviewerpan.page.ts ***!
  \*******************************************************/
/*! exports provided: ImageviewerpanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageviewerpanPage", function() { return ImageviewerpanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ImageviewerpanPage = class ImageviewerpanPage {
    constructor(route, router, mydata) {
        this.route = route;
        this.router = router;
        this.mydata = mydata;
        this.pictures = [];
        this.total = 0;
        this.remaining = 0;
        this.showing = 0;
        console.log(mydata);
        //GET AREA FROM PARAMS ROUTER
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.area = this.router.getCurrentNavigation().extras.state.area;
                this.pictures = mydata.alldata[this.area].pictures;
                [this.remaining, this.total] = this.mydata.calcRemaining(this.area);
                this.mydata.checkDone(this.area);
            }
        });
    }
    ngOnInit() {
    }
    foundEgg(num) {
        this.mydata.addEgg(num, this.area);
        [this.remaining, this.total] = this.mydata.calcRemaining(this.area);
    }
    updateShowing(num) {
        var numpictures = this.pictures.length;
        var newShowing = this.showing + num;
        this.showing = ((newShowing % numpictures) + numpictures) % numpictures;
        console.log(this.showing);
    }
};
ImageviewerpanPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
];
ImageviewerpanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-imageviewerpan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./imageviewerpan.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewerpan/imageviewerpan.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./imageviewerpan.page.scss */ "./src/app/imageviewerpan/imageviewerpan.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
], ImageviewerpanPage);



/***/ })

}]);
//# sourceMappingURL=imageviewerpan-imageviewerpan-module-es2015.js.map