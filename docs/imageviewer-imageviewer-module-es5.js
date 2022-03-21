function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imageviewer-imageviewer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewer/imageviewer.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewer/imageviewer.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppImageviewerImageviewerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title><span hideWhen=\"mobile,mobileweb\">{{ mydata.allmessages.imageviewer_title }} </span>{{mydata.alldata[area].area}}!</ion-title>\n    <ion-title slot=\"end\">{{ mydata.allmessages.imageviewer_found }} {{total-remaining}}/{{total}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <figure *ngFor=\"let picture of pictures, index as i\" class=\"burj\">\n    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 1600 1200\" preserveAspectRatio=\"xMinYMin meet\" >\n    <image width=\"1600\" height=\"1200\" [attr.xlink:href]=\"picture.url\">\n    </image>\n    <a  *ngFor=\"let rectangle of picture.rectangles\" (click)=\"foundEgg(rectangle.code)\">\n      <rect [attr.x]=\"rectangle.x\" [attr.y]=\"rectangle.y\" fill=\"transparent\" opacity=\"20\" [attr.width]=\"rectangle.width\" [attr.height]=\"rectangle.height\" />\n      <rect *ngIf=\"mydata.iHaveIt(rectangle.code)\" [attr.x]=\"rectangle.x\" [attr.y]=\"rectangle.y\" stroke=\"green\" stroke-width=\"5\" fill=\"transparent\" opacity=\"20\" [attr.width]=\"rectangle.width\" [attr.height]=\"rectangle.height\" />\n    </a>\n    </svg>\n\n   \n\n    <div id=\"scrolldown\" *ngIf=\"i<(pictures.length-1) && pictures.length>1\">\n      <div class=\"containerchevron\">\n        <div class=\"chevron\"></div>\n        <div class=\"chevron\"></div>\n        <div class=\"chevron\"></div>\n      </div>\n    </div>\n  </figure>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/imageviewer/imageviewer-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/imageviewer/imageviewer-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ImageviewerPageRoutingModule */

  /***/
  function srcAppImageviewerImageviewerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageviewerPageRoutingModule", function () {
      return ImageviewerPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _imageviewer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./imageviewer.page */
    "./src/app/imageviewer/imageviewer.page.ts");

    var routes = [{
      path: '',
      component: _imageviewer_page__WEBPACK_IMPORTED_MODULE_3__["ImageviewerPage"]
    }];

    var ImageviewerPageRoutingModule = function ImageviewerPageRoutingModule() {
      _classCallCheck(this, ImageviewerPageRoutingModule);
    };

    ImageviewerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ImageviewerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/imageviewer/imageviewer.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/imageviewer/imageviewer.module.ts ***!
    \***************************************************/

  /*! exports provided: ImageviewerPageModule */

  /***/
  function srcAppImageviewerImageviewerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageviewerPageModule", function () {
      return ImageviewerPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _imageviewer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./imageviewer-routing.module */
    "./src/app/imageviewer/imageviewer-routing.module.ts");
    /* harmony import */


    var _imageviewer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./imageviewer.page */
    "./src/app/imageviewer/imageviewer.page.ts");

    var ImageviewerPageModule = function ImageviewerPageModule() {
      _classCallCheck(this, ImageviewerPageModule);
    };

    ImageviewerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _imageviewer_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImageviewerPageRoutingModule"]],
      declarations: [_imageviewer_page__WEBPACK_IMPORTED_MODULE_6__["ImageviewerPage"]]
    })], ImageviewerPageModule);
    /***/
  },

  /***/
  "./src/app/imageviewer/imageviewer.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/imageviewer/imageviewer.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppImageviewerImageviewerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".burj {\n  position: relative;\n  width: 100%;\n  padding-bottom: 77%;\n  vertical-align: middle;\n  margin: 0;\n  overflow: hidden;\n}\n\n.burj svg {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.containerchevron {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.chevron {\n  position: absolute;\n  width: 2.1rem;\n  height: 0.48rem;\n  opacity: 0;\n  transform: scale(0.3);\n  -webkit-animation: move-chevron 3s ease-out infinite;\n          animation: move-chevron 3s ease-out infinite;\n}\n\n.chevron:first-child {\n  -webkit-animation: move-chevron 3s ease-out 1s infinite;\n          animation: move-chevron 3s ease-out 1s infinite;\n}\n\n.chevron:nth-child(2) {\n  -webkit-animation: move-chevron 3s ease-out 2s infinite;\n          animation: move-chevron 3s ease-out 2s infinite;\n}\n\n.chevron:before,\n.chevron:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 50%;\n  background: #d4d8db;\n}\n\n.chevron:before {\n  left: 0;\n  transform: skewY(30deg);\n}\n\n.chevron:after {\n  right: 0;\n  width: 50%;\n  transform: skewY(-30deg);\n}\n\n@-webkit-keyframes move-chevron {\n  25% {\n    opacity: 1;\n  }\n  33.3% {\n    opacity: 1;\n    transform: translateY(2.28rem);\n  }\n  66.6% {\n    opacity: 1;\n    transform: translateY(3.12rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(4.8rem) scale(0.5);\n  }\n}\n\n@keyframes move-chevron {\n  25% {\n    opacity: 1;\n  }\n  33.3% {\n    opacity: 1;\n    transform: translateY(2.28rem);\n  }\n  66.6% {\n    opacity: 1;\n    transform: translateY(3.12rem);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(4.8rem) scale(0.5);\n  }\n}\n\n#scrolldown {\n  position: absolute;\n  bottom: 0px;\n  right: 50px;\n  height: 20%;\n}\n\nion-content {\n  --background: rgb(92, 92, 92);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhci9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvQ1NfRWFzdGVyMjAyMi9zcmMvYXBwL2ltYWdldmlld2VyL2ltYWdldmlld2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW1hZ2V2aWV3ZXIvaW1hZ2V2aWV3ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0NEOztBRENBO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFBUSxPQUFBO0FDR1Q7O0FERUE7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NEOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLG9EQUFBO1VBQUEsNENBQUE7QUNBRjs7QURHQTtFQUNFLHVEQUFBO1VBQUEsK0NBQUE7QUNBRjs7QURHQTtFQUNFLHVEQUFBO1VBQUEsK0NBQUE7QUNBRjs7QURHQTs7RUFFQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0FEOztBREdBO0VBQ0MsT0FBQTtFQUNBLHVCQUFBO0FDQUQ7O0FER0E7RUFDQyxRQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FDQUQ7O0FER0E7RUFDQztJQUNDLFVBQUE7RUNBQTtFREVEO0lBQ0MsVUFBQTtJQUNBLDhCQUFBO0VDQUE7RURFRDtJQUNDLFVBQUE7SUFDQSw4QkFBQTtFQ0FBO0VERUQ7SUFDQyxVQUFBO0lBQ0Esd0NBQUE7RUNBQTtBQUNGOztBRGZBO0VBQ0M7SUFDQyxVQUFBO0VDQUE7RURFRDtJQUNDLFVBQUE7SUFDQSw4QkFBQTtFQ0FBO0VERUQ7SUFDQyxVQUFBO0lBQ0EsOEJBQUE7RUNBQTtFREVEO0lBQ0MsVUFBQTtJQUNBLHdDQUFBO0VDQUE7QUFDRjs7QURHQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDREQ7O0FER0E7RUFDRSw2QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvaW1hZ2V2aWV3ZXIvaW1hZ2V2aWV3ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1cmoge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nLWJvdHRvbTogNzclO1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRtYXJnaW46IDA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59XG4uYnVyaiBzdmcgeyBcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDsgbGVmdDogMDtcbn1cblxuJGJhc2U6IDAuNnJlbTtcblxuLmNvbnRhaW5lcmNoZXZyb24ge1xuIGRpc3BsYXk6IGZsZXg7XG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG4uY2hldnJvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6ICRiYXNlICogMy41O1xuICBoZWlnaHQ6ICRiYXNlICogMC44O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XG4gIGFuaW1hdGlvbjogbW92ZS1jaGV2cm9uIDNzIGVhc2Utb3V0IGluZmluaXRlO1xufVxuXG4uY2hldnJvbjpmaXJzdC1jaGlsZCB7XG4gIGFuaW1hdGlvbjogbW92ZS1jaGV2cm9uIDNzIGVhc2Utb3V0IDFzIGluZmluaXRlO1xufVxuXG4uY2hldnJvbjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb246IG1vdmUtY2hldnJvbiAzcyBlYXNlLW91dCAycyBpbmZpbml0ZTtcbn1cblxuLmNoZXZyb246YmVmb3JlLFxuLmNoZXZyb246YWZ0ZXIge1xuIGNvbnRlbnQ6ICcnO1xuIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiB0b3A6IDA7XG4gaGVpZ2h0OiAxMDAlO1xuIHdpZHRoOiA1MCU7XG4gYmFja2dyb3VuZDogI2Q0ZDhkYjtcbn1cblxuLmNoZXZyb246YmVmb3JlIHtcbiBsZWZ0OiAwO1xuIHRyYW5zZm9ybTogc2tld1koMzBkZWcpO1xufVxuXG4uY2hldnJvbjphZnRlciB7XG4gcmlnaHQ6IDA7XG4gd2lkdGg6IDUwJTtcbiB0cmFuc2Zvcm06IHNrZXdZKC0zMGRlZyk7XG59XG5cbkBrZXlmcmFtZXMgbW92ZS1jaGV2cm9uIHtcbiAyNSUge1xuICBvcGFjaXR5OiAxO1xuXHR9XG4gMzMuMyUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJGJhc2UgKiAzLjgpO1xuIH1cbiA2Ni42JSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgkYmFzZSAqIDUuMik7XG4gfVxuIDEwMCUge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoJGJhc2UgKiA4KSBzY2FsZSgwLjUpO1xuIH1cbn1cblxuI3Njcm9sbGRvd24ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTowcHg7XG5cdHJpZ2h0OjUwcHg7XG5cdGhlaWdodDoyMCVcbn1cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoOTIsIDkyLCA5Mik7XG59XG4iLCIuYnVyaiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA3NyU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJ1cmogc3ZnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmNvbnRhaW5lcmNoZXZyb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNoZXZyb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyLjFyZW07XG4gIGhlaWdodDogMC40OHJlbTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICBhbmltYXRpb246IG1vdmUtY2hldnJvbiAzcyBlYXNlLW91dCBpbmZpbml0ZTtcbn1cblxuLmNoZXZyb246Zmlyc3QtY2hpbGQge1xuICBhbmltYXRpb246IG1vdmUtY2hldnJvbiAzcyBlYXNlLW91dCAxcyBpbmZpbml0ZTtcbn1cblxuLmNoZXZyb246bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uOiBtb3ZlLWNoZXZyb24gM3MgZWFzZS1vdXQgMnMgaW5maW5pdGU7XG59XG5cbi5jaGV2cm9uOmJlZm9yZSxcbi5jaGV2cm9uOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZDogI2Q0ZDhkYjtcbn1cblxuLmNoZXZyb246YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiBza2V3WSgzMGRlZyk7XG59XG5cbi5jaGV2cm9uOmFmdGVyIHtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIHRyYW5zZm9ybTogc2tld1koLTMwZGVnKTtcbn1cblxuQGtleWZyYW1lcyBtb3ZlLWNoZXZyb24ge1xuICAyNSUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMzMuMyUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIuMjhyZW0pO1xuICB9XG4gIDY2LjYlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzLjEycmVtKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0LjhyZW0pIHNjYWxlKDAuNSk7XG4gIH1cbn1cbiNzY3JvbGxkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDUwcHg7XG4gIGhlaWdodDogMjAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDkyLCA5MiwgOTIpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/imageviewer/imageviewer.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/imageviewer/imageviewer.page.ts ***!
    \*************************************************/

  /*! exports provided: ImageviewerPage */

  /***/
  function srcAppImageviewerImageviewerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageviewerPage", function () {
      return ImageviewerPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../data.service */
    "./src/app/data.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ImageviewerPage = /*#__PURE__*/function () {
      function ImageviewerPage(route, router, mydata) {
        var _this = this;

        _classCallCheck(this, ImageviewerPage);

        this.route = route;
        this.router = router;
        this.mydata = mydata;
        this.pictures = [];
        this.total = 0;
        this.remaining = 0;
        console.log(mydata); //GET AREA FROM PARAMS ROUTER

        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation().extras.state) {
            _this.area = _this.router.getCurrentNavigation().extras.state.area;
            _this.pictures = mydata.alldata[_this.area].pictures;

            var _this$mydata$calcRema = _this.mydata.calcRemaining(_this.area);

            var _this$mydata$calcRema2 = _slicedToArray(_this$mydata$calcRema, 2);

            _this.remaining = _this$mydata$calcRema2[0];
            _this.total = _this$mydata$calcRema2[1];

            _this.mydata.checkDone(_this.area);
          }
        });
      }

      _createClass(ImageviewerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "foundEgg",
        value: function foundEgg(num) {
          this.mydata.addEgg(num, this.area);

          var _this$mydata$calcRema3 = this.mydata.calcRemaining(this.area);

          var _this$mydata$calcRema4 = _slicedToArray(_this$mydata$calcRema3, 2);

          this.remaining = _this$mydata$calcRema4[0];
          this.total = _this$mydata$calcRema4[1];
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {}
      }]);

      return ImageviewerPage;
    }();

    ImageviewerPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
      }];
    };

    ImageviewerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-imageviewer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./imageviewer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/imageviewer/imageviewer.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./imageviewer.page.scss */
      "./src/app/imageviewer/imageviewer.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])], ImageviewerPage);
    /***/
  }
}]);
//# sourceMappingURL=imageviewer-imageviewer-module-es5.js.map