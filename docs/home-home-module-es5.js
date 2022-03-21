function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content [fullscreen]=\"true\">\n  <div id=\"containerflex\">\n\n    <ion-button *ngIf=\"mydata.lang==='fr'\" fill=\"outline\" (click)=\"switchLang('en')\" id=\"switch\" slot=\"end\">{{mydata.allmessages.switch_lang}}</ion-button>\n          <ion-button *ngIf=\"mydata.lang==='en'\" fill=\"outline\" (click)=\"switchLang('fr')\" id=\"switch\" slot=\"end\">{{mydata.allmessages.switch_lang}}</ion-button>\n    <div id=\"container\">\n\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size-lg=\"8\" size-xs=\"12\">\n            <div>\n\n\n              <ion-card>\n\n                <img id=\"homelogo\" src=\"assets/images/HOME_LOGO.png\"/>\n                <ion-card-content>\n\n                  <ion-card-title>{{mydata.allmessages.home_title}}</ion-card-title>\n                  <p id=\"home_p\">{{mydata.allmessages.home_desc}}</p>\n                </ion-card-content>\n              </ion-card>\n\n              <ion-card *ngIf=\"mydata.allvariables.with_db\" class=\"cardform\">\n\n                <ion-card-content>\n\n                  <ion-list lines=\"full\" class=\"myform\">\n\n                    <ion-item>\n                      <ion-label position=\"stacked\">{{mydata.allmessages.home_nickname}}<ion-text color=\"danger\"> *</ion-text></ion-label>\n                      <ion-input required type=\"email\" [(ngModel)]=\"nickname\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label position=\"stacked\">{{mydata.allmessages.home_email}}<ion-text color=\"danger\"> *</ion-text></ion-label>\n                      <ion-input required type=\"email\" [(ngModel)]=\"email\"></ion-input>\n                    </ion-item>\n\n                  </ion-list>\n\n                  <div class=\"ion-padding\">\n                    <ion-button expand=\"block\" (click)=\"GoToAreaPage()\" class=\"ion-no-margin\" disabled=\"{{blockStart()}}\">{{mydata.allmessages.home_start}} <ion-spinner *ngIf=\"spinner\" name=\"bubbles\"></ion-spinner></ion-button>\n                  </div>\n                </ion-card-content>\n              </ion-card>\n\n              <ion-card *ngIf=\"!mydata.allvariables.with_db\">\n                <ion-card-content>\n                  <div class=\"ion-padding\">\n                    <ion-button expand=\"block\" (click)=\"GoToAreaPage()\" class=\"ion-no-margin\">{{mydata.allmessages.home_start}}<ion-spinner *ngIf=\"spinner\" name=\"bubbles\"></ion-spinner></ion-button>\n                  </div>\n                </ion-card-content>\n              </ion-card>\n              <div id=\"ranking\" *ngIf=\"mydata.allvariables.with_db\">\n                <ion-button color=\"success\" (click)=\"GoToRanking()\">{{ mydata.allmessages.finish_ranking }}</ion-button>\n              </div>\n\n\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n\n\n\n      <div id=\"margin\" >\n\n      </div>\n    </div>\n    <div id=\"footer\"></div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  margin: auto auto;\n  width: 90%;\n}\n\n#containerflex {\n  text-align: center;\n  margin: auto auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-image: url('BACKGROUND.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.subtitlebutton {\n  font-size: x-small;\n  clear: both;\n}\n\n.buttontext {\n  width: 100%;\n}\n\n.labelaccept {\n  font-size: 14px;\n}\n\n#footer {\n  position: absolute;\n  height: 10%;\n  width: 100%;\n  bottom: 0px;\n  background-image: url('eggs_footer.png');\n  background-position: center;\n  background-repeat: repeat-x;\n  background-size: contain;\n}\n\n.myform {\n  width: 100%;\n  margin: auto auto;\n}\n\n#ranking {\n  margin-bottom: 4em;\n  margin-top: 1em;\n}\n\nion-card {\n  --ion-background-color: rgba(255, 255, 255, 0.9);\n  --color:black;\n}\n\nion-list {\n  --ion-item-background: rgba(255, 255, 255, 0.6);\n}\n\n.cardform {\n  width: 80%;\n  margin: auto auto;\n  --ion-item-background: rgba(255, 255, 255, 0.95);\n}\n\n#homelogo {\n  height: 120px;\n  margin-top: 1em;\n}\n\n#home_p {\n  font-size: 14px !important;\n  color: black !important;\n  margin-top: 1em !important;\n}\n\n#switch {\n  margin: 1em 1em auto auto;\n  --background:white;\n}\n\n#margin {\n  width: 100%;\n  height: 5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhci9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvQ1NfRWFzdGVyMjAyMi9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGOztBREtBO0VBQ0UseUJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtBQ0ZGOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQ0ZGOztBRElBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDREY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNBRjs7QURHQTtFQUNFLGdEQUFBO0VBQ0EsYUFBQTtBQ0FGOztBRElBO0VBQ0UsK0NBQUE7QUNERjs7QURJQTtFQUNFLFVBQUE7RUFBVSxpQkFBQTtFQUNWLGdEQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjphdXRvIGF1dG87XG4gIHdpZHRoOjkwJTtcblxufVxuI2NvbnRhaW5lcmZsZXgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjphdXRvIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9CQUNLR1JPVU5ELmpwZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5zdWJ0aXRsZWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5idXR0b250ZXh0e1xuICB3aWR0aDoxMDAlO1xufVxuLmxhYmVsYWNjZXB0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG59XG5cbiNmb290ZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2VnZ3NfZm9vdGVyLnBuZycpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLm15Zm9ybSB7XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbjphdXRvIGF1dG87XG59XG4jcmFua2luZyB7XG4gIG1hcmdpbi1ib3R0b206NGVtO1xuICBtYXJnaW4tdG9wOjFlbTtcbn1cblxuaW9uLWNhcmQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIC0tY29sb3I6YmxhY2s7XG4gIFxufVxuXG5pb24tbGlzdCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpOztcbn1cblxuLmNhcmRmb3JtIHtcbiAgd2lkdGg6ODAlO21hcmdpbjphdXRvIGF1dG87XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTs7XG59XG5cbiNob21lbG9nbyB7XG4gIGhlaWdodDoxMjBweDtcbiAgbWFyZ2luLXRvcDoxZW07XG59XG5cbiNob21lX3Age1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDFlbSAhaW1wb3J0YW50O1xufVxuXG4jc3dpdGNoIHtcbiAgbWFyZ2luOjFlbSAxZW0gYXV0byBhdXRvO1xuICAtLWJhY2tncm91bmQ6d2hpdGU7XG59XG5cblxuI21hcmdpbiB7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDogNWVtO1xuXG59IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIHdpZHRoOiA5MCU7XG59XG5cbiNjb250YWluZXJmbGV4IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvQkFDS0dST1VORC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLnN1YnRpdGxlYnV0dG9uIHtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmJ1dHRvbnRleHQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxhYmVsYWNjZXB0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4jZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2VnZ3NfZm9vdGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLm15Zm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG8gYXV0bztcbn1cblxuI3Jhbmtpbmcge1xuICBtYXJnaW4tYm90dG9tOiA0ZW07XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuaW9uLWNhcmQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIC0tY29sb3I6YmxhY2s7XG59XG5cbmlvbi1saXN0IHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5cbi5jYXJkZm9ybSB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG59XG5cbiNob21lbG9nbyB7XG4gIGhlaWdodDogMTIwcHg7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuI2hvbWVfcCB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMWVtICFpbXBvcnRhbnQ7XG59XG5cbiNzd2l0Y2gge1xuICBtYXJnaW46IDFlbSAxZW0gYXV0byBhdXRvO1xuICAtLWJhY2tncm91bmQ6d2hpdGU7XG59XG5cbiNtYXJnaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1ZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(router, mydata, http, route) {
        var _this = this;

        _classCallCheck(this, HomePage);

        this.router = router;
        this.mydata = mydata;
        this.http = http;
        this.route = route;
        this.accept = false;
        this.email = "";
        this.nickname = "";
        this.spinner = false;
        this.lang = 'fr';
        this.route.queryParams.subscribe(function (params) {
          if (params) {
            _this.mydata.switchLang(params.lang);
          }
        });
      }

      _createClass(HomePage, [{
        key: "GoToAreaPage",
        value: function GoToAreaPage() {
          this.spinner = true;
          console.log("Launching http request");
          this.mydata.email = this.email;
          this.mydata.nickname = this.nickname;
          this.mydata.timestart = new Date();
          this.mydata.sent = false;
          this.spinner = false;
          this.router.navigate(['/areas']);
        }
      }, {
        key: "GoToRanking",
        value: function GoToRanking() {
          this.router.navigate(['/ranking']);
        }
      }, {
        key: "switchLang",
        value: function switchLang(lang) {
          this.mydata.switchLang(lang);
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "blockStart",
        value: function blockStart() {
          var regExp = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;

          if (this.nickname.length > 1 && regExp.test(this.email)) {
            if (this.email.indexOf(this.mydata.allvariables.valid_domain) >= 0) {
              return false;
            }
          }

          return true;
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map