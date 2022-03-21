function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["areas-areas-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/areas.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/areas/areas.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAreasAreasPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-img id=\"headlogo\" src=\"assets/images/HEAD_LOGO.png\"></ion-img>\n    </ion-buttons>\n    \n\n    <ion-title>\n      {{ mydata.allmessages.areas_title }}\n    </ion-title>\n    <ion-buttons slot=\"end\" *ngIf=\"mydata.allvariables.with_db\" (click)=\"quitGame()\">\n      <ion-button>\n        Quitter\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div id=\"containerflex\">\n    <div id=\"container\">\n\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size-lg=\"8\" size-xs=\"12\">\n\n            <ion-card>\n            \n              <ion-card-content>\n                <table id=\"cardtable\" style=\"width:100%\">\n                  <tr>\n                    <td>\n                      <ion-img class=\"egg\" src=\"assets/images/Easter-Egg-left.png\"></ion-img>\n                    </td>\n                    <td>\n                      <ion-card-title>{{ mydata.allmessages.areas_card_title }}</ion-card-title>\n                      <p class=\"card_p\">{{ mydata.allmessages.areas_card_desc }}</p>\n                    </td>\n                    <td>\n                      <ion-img class=\"egg\" src=\"assets/images/Easter-Egg-right.png\"></ion-img>\n                    </td>\n                  </tr>\n                </table>\n                \n              </ion-card-content>\n            </ion-card>\n\n            <ion-card>\n            \n              <ion-card-content>\n                <div *ngFor=\"let area of mydata.alldata, index as i\">\n                  <ion-button class=\"areabuttons\" size=\"large\" (click)=\"GoToArea(i)\" [ngClass]=\"{'areadone' : mydata.calcRemaining(i)[0]==0}\"><span>{{area.area}}<br><span class=\"subtitlebutton\">{{mydata.allmessages.areas_remaining}} {{mydata.calcRemaining(i)[0]}}</span></span></ion-button>\n                </div>\n              </ion-card-content>\n            </ion-card>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n    </div>\n    <div id=\"footer\"></div>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/areas/areas-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/areas/areas-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AreasPageRoutingModule */

  /***/
  function srcAppAreasAreasRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AreasPageRoutingModule", function () {
      return AreasPageRoutingModule;
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


    var _areas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./areas.page */
    "./src/app/areas/areas.page.ts");

    var routes = [{
      path: '',
      component: _areas_page__WEBPACK_IMPORTED_MODULE_3__["AreasPage"]
    }];

    var AreasPageRoutingModule = function AreasPageRoutingModule() {
      _classCallCheck(this, AreasPageRoutingModule);
    };

    AreasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AreasPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/areas/areas.module.ts":
  /*!***************************************!*\
    !*** ./src/app/areas/areas.module.ts ***!
    \***************************************/

  /*! exports provided: AreasPageModule */

  /***/
  function srcAppAreasAreasModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AreasPageModule", function () {
      return AreasPageModule;
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


    var _areas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./areas-routing.module */
    "./src/app/areas/areas-routing.module.ts");
    /* harmony import */


    var _areas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./areas.page */
    "./src/app/areas/areas.page.ts");

    var AreasPageModule = function AreasPageModule() {
      _classCallCheck(this, AreasPageModule);
    };

    AreasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _areas_routing_module__WEBPACK_IMPORTED_MODULE_5__["AreasPageRoutingModule"]],
      declarations: [_areas_page__WEBPACK_IMPORTED_MODULE_6__["AreasPage"]]
    })], AreasPageModule);
    /***/
  },

  /***/
  "./src/app/areas/areas.page.scss":
  /*!***************************************!*\
    !*** ./src/app/areas/areas.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppAreasAreasPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n#container {\n  text-align: center;\n  margin: auto auto;\n}\n#containerflex {\n  text-align: center;\n  margin: auto auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-image: url('BACKGROUND.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n#container a {\n  text-decoration: none;\n}\nion-content ion-toolbar {\n  --background: translucent;\n}\n.subtitlebutton {\n  font-size: x-small;\n  clear: both;\n}\n.buttontext {\n  width: 100%;\n}\n.areabuttons {\n  width: 90%;\n  height: 4em;\n  background-color: #3764b8;\n  color: white;\n  border-radius: 5px;\n  font-size: medium;\n}\n.areadone {\n  --background: #25992b;\n}\n#headlogo {\n  max-width: 50px;\n  max-height: 100px;\n}\nion-button {\n  --background:rgb(40, 118, 219);\n}\n.egg {\n  max-width: 100px;\n}\ntable#cardtable  {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvYXJlYXMucGFnZS5zY3NzIiwiL1VzZXJzL2Nlc2FyL0RvY3VtZW50cy9EZXZlbG9wbWVudC9DU19FYXN0ZXIyMDIyL3NyYy9hcHAvYXJlYXMvYXJlYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QURFSjtBQ0VFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FEQ0o7QUNHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBREFKO0FDR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBREZKO0FDS0U7RUFDRSxxQkFBQTtBREZKO0FDS0U7RUFDRSx5QkFBQTtBREZKO0FDS0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QURGSjtBQ0tFO0VBQ0UsV0FBQTtBREZKO0FDS0U7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNGLGtCQUFBO0VBQ0EsaUJBQUE7QURGSjtBQ01FO0VBQ0kscUJBQUE7QURITjtBQ01FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FESEo7QUNNRTtFQUNFLDhCQUFBO0FESEo7QUNNRTtFQUNFLGdCQUFBO0FESEo7QUNNRTtFQUNFLHNCQUFBO0FESEoiLCJmaWxlIjoic3JjL2FwcC9hcmVhcy9hcmVhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG8gYXV0bztcbn1cblxuI2NvbnRhaW5lcmZsZXgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9CQUNLR1JPVU5ELmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uc3VidGl0bGVidXR0b24ge1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uYnV0dG9udGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYXJlYWJ1dHRvbnMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDRlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NjRiODtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4uYXJlYWRvbmUge1xuICAtLWJhY2tncm91bmQ6ICMyNTk5MmI7XG59XG5cbiNoZWFkbG9nbyB7XG4gIG1heC13aWR0aDogNTBweDtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6cmdiKDQwLCAxMTgsIDIxOSk7XG59XG5cbi5lZ2cge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG50YWJsZSNjYXJkdGFibGXCoCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59IiwiI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjphdXRvIGF1dG87XG4gICAgLy93aWR0aDo5MCU7XG4gIFxuICB9XG4gICNjb250YWluZXJmbGV4IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOmF1dG8gYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL0JBQ0tHUk9VTkQuanBnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgXG4gIH1cbiAgXG4gICNjb250YWluZXIgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgXG4gICNjb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBcbiAgICBjb2xvcjogIzhjOGM4YztcbiAgXG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAjY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG4gIH1cbiAgXG4gIC5zdWJ0aXRsZWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG4gIFxuICAuYnV0dG9udGV4dHtcbiAgICB3aWR0aDoxMDAlO1xuICB9XG5cbiAgLmFyZWFidXR0b25zIHtcbiAgICAgIHdpZHRoOjkwJTtcbiAgICAgIGhlaWdodDo0ZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTUsIDEwMCwgMTg0KTtcbiAgICAgIGNvbG9yOndoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6bWVkaXVtO1xuXG4gIH1cblxuICAuYXJlYWRvbmUge1xuICAgICAgLS1iYWNrZ3JvdW5kOiAjMjU5OTJiOyAgXG4gIH1cblxuICAjaGVhZGxvZ28ge1xuICAgIG1heC13aWR0aDogNTBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgfVxuXG4gIGlvbi1idXR0b257XG4gICAgLS1iYWNrZ3JvdW5kOnJnYig0MCwgMTE4LCAyMTkpO1xuICB9XG5cbiAgLmVnZyB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgfVxuXG4gIHRhYmxlI2NhcmR0YWJsZcKge1xuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/areas/areas.page.ts":
  /*!*************************************!*\
    !*** ./src/app/areas/areas.page.ts ***!
    \*************************************/

  /*! exports provided: AreasPage */

  /***/
  function srcAppAreasAreasPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AreasPage", function () {
      return AreasPage;
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

    var AreasPage = /*#__PURE__*/function () {
      function AreasPage(router, mydata) {
        _classCallCheck(this, AreasPage);

        this.router = router;
        this.mydata = mydata;
      }

      _createClass(AreasPage, [{
        key: "GoToArea",
        value: function GoToArea(num) {
          var navigationExtras = {
            state: {
              area: num
            }
          };

          switch (this.mydata.alldata[num].type) {
            case 'image360':
              {
                this.router.navigate(['/imageviewer360'], navigationExtras);
                break;
              }

            case 'horizontal':
              {
                this.router.navigate(['/imageviewerpan'], navigationExtras);
                break;
              }

            default:
              {
                this.router.navigate(['/imageviewer'], navigationExtras);
                break;
              }
          }

          ;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          console.log("IONVIEWWILLENTER");
          this.mydata.checkFinish();
        }
      }, {
        key: "quitGame",
        value: function quitGame() {
          this.router.navigate(['/home']);
          this.mydata.email = "";
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {}
      }]);

      return AreasPage;
    }();

    AreasPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    AreasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-areas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./areas.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/areas/areas.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./areas.page.scss */
      "./src/app/areas/areas.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])], AreasPage);
    /***/
  }
}]);
//# sourceMappingURL=areas-areas-module-es5.js.map