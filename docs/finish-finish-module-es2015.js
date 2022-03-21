(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finish-finish-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/finish/finish.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/finish/finish.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-img id=\"headlogo\" src=\"assets/images/HEAD_LOGO.png\"></ion-img>\n    </ion-buttons>\n    <ion-title>{{ mydata.allmessages.finish_title }}</ion-title>\n    <ion-buttons slot=\"end\" (click)=\"exitPage()\">\n      <ion-button>\n        {{ mydata.allmessages.finish_quit }}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div id=\"containerflex\">\n    <div id=\"container\">\n\n\n      <ion-grid>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-col size-lg=\"8\" size-xs=\"12\">\n\n\n            <ion-card>\n            \n              <ion-card-content>\n\n                <table style=\"width:100%\">\n                  <tr>\n                    <td>\n                      <ion-img class=\"egg\" src=\"assets/images/Easter-Egg-left2.png\"></ion-img>\n                    </td>\n                    <td>\n                      <ion-card-title>{{ mydata.allmessages.finish_card_title }}</ion-card-title>\n                      {{ mydata.allmessages.finish_card_content }}\n                      \n                    </td>\n                    <td>\n                      <ion-img class=\"egg\" src=\"assets/images/Easter-Egg-right2.png\"></ion-img>\n                    </td>\n                  </tr>\n                </table>\n\n                <br>\n                      <img id=\"finishimg\" src=\"assets/images/FINISH.png\" alt=\"\">\n\n              </ion-card-content>\n            </ion-card>\n\n            <ion-card>\n              <ion-card-header>\n                <ion-card-title>{{ mydata.allmessages.finish_cardcomment_title }}</ion-card-title>\n              </ion-card-header>\n            \n              <ion-card-content>\n                <p class=\"score\">{{ mydata.allmessages.finish_cardcomment_content }} {{mytime_min}} min. {{mytime_sec}} sec.</p>\n                <p class=\"saving\"><ion-item>\n                  <ion-textarea [(ngModel)]=\"mycomment\"></ion-textarea>\n                  </ion-item>\n                </p>\n                <p class=\"saving\"><ion-button (click)=\"sendFeedback()\">{{mydata.allmessages.finish_cardcomment_button}} &nbsp;<ion-icon name=\"send-outline\"></ion-icon></ion-button></p>\n              \n              </ion-card-content>\n            </ion-card>\n\n            <ion-card>\n              <ion-card-header>\n                <ion-card-title>{{ mydata.allmessages.finish_cardtime_title }}</ion-card-title>\n              </ion-card-header>\n            \n              <ion-card-content>\n                <p class=\"score\">{{ mydata.allmessages.finish_cardtime_content }} {{mytime_min}} min. {{mytime_sec}} sec.</p>\n                <p class=\"saving\"*ngIf=\"spinner && mydata.allvariables.with_db\" ><ion-spinner name=\"bubbles\"></ion-spinner> <span>{{ mydata.allmessages.finish_cardtime_saving }}</span></p>\n                <p class=\"saving\" ><ion-button color=\"success\" (click)=\"GoToRanking()\">{{ mydata.allmessages.finish_ranking }}</ion-button></p>\n              \n              </ion-card-content>\n            </ion-card>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div id=\"margin\" >\n        \n      </div>\n\n    </div>\n    <div id=\"footer\"></div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/finish/finish-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/finish/finish-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FinishPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishPageRoutingModule", function() { return FinishPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _finish_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finish.page */ "./src/app/finish/finish.page.ts");




const routes = [
    {
        path: '',
        component: _finish_page__WEBPACK_IMPORTED_MODULE_3__["FinishPage"]
    }
];
let FinishPageRoutingModule = class FinishPageRoutingModule {
};
FinishPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FinishPageRoutingModule);



/***/ }),

/***/ "./src/app/finish/finish.module.ts":
/*!*****************************************!*\
  !*** ./src/app/finish/finish.module.ts ***!
  \*****************************************/
/*! exports provided: FinishPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishPageModule", function() { return FinishPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _finish_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finish-routing.module */ "./src/app/finish/finish-routing.module.ts");
/* harmony import */ var _finish_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finish.page */ "./src/app/finish/finish.page.ts");







let FinishPageModule = class FinishPageModule {
};
FinishPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _finish_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinishPageRoutingModule"]
        ],
        declarations: [_finish_page__WEBPACK_IMPORTED_MODULE_6__["FinishPage"]]
    })
], FinishPageModule);



/***/ }),

/***/ "./src/app/finish/finish.page.scss":
/*!*****************************************!*\
  !*** ./src/app/finish/finish.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  margin: auto auto;\n  width: 90%;\n  white-space: pre-wrap;\n}\n\n#containerflex {\n  text-align: center;\n  margin: auto auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-image: url('BACKGROUND.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  overflow: auto;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n#footer {\n  position: absolute;\n  height: 10%;\n  width: 100%;\n  bottom: 0px;\n  background-image: url('eggs_footer.png');\n  background-position: center;\n  background-repeat: repeat-x;\n  background-size: contain;\n}\n\n#ranking {\n  margin-bottom: 6em;\n}\n\n#finishimg {\n  width: 400px;\n  max-width: 70vw;\n  max-height: 15%;\n  margin-top: 1em;\n}\n\nion-card {\n  --ion-background-color: rgba(255, 255, 255, 0.9);\n  --color:black;\n}\n\n#headlogo {\n  max-width: 50px;\n  max-height: 100px;\n}\n\n.egg {\n  max-width: 100px;\n}\n\nion-card, ion-card-content {\n  --color:black;\n}\n\n.score {\n  color: black;\n}\n\n.saving span {\n  margin: auto auto;\n  display: block;\n}\n\n.saving {\n  margin-top: 1em !important;\n}\n\n#margin {\n  width: 100%;\n  height: 5em;\n}\n\na:link, a:active, a:visited, a:hover {\n  text-decoration: inherit;\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZXNhci9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvQ1NfRWFzdGVyMjAyMi9zcmMvYXBwL2ZpbmlzaC9maW5pc2gucGFnZS5zY3NzIiwic3JjL2FwcC9maW5pc2gvZmluaXNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURJRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNISjs7QURNRTtFQUNFLHFCQUFBO0FDSEo7O0FETUU7RUFDRSx5QkFBQTtBQ0hKOztBRE9FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQ0pKOztBRE9FO0VBQ0Usa0JBQUE7QUNKSjs7QURPRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNKSjs7QURPRTtFQUNFLGdEQUFBO0VBQ0EsYUFBQTtBQ0pKOztBRE9FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDSko7O0FEUUU7RUFDRSxnQkFBQTtBQ0xKOztBRFFFO0VBQ0UsYUFBQTtBQ0xKOztBRFFFO0VBQ0UsWUFBQTtBQ0xKOztBRFFFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FDTEo7O0FEU0U7RUFDRSwwQkFBQTtBQ05KOztBRFNFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNOSjs7QURVRTtFQUNFLHdCQUFBO0VBQ0EsY0FBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvZmluaXNoL2ZpbmlzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOmF1dG8gYXV0bztcbiAgICB3aWR0aDo5MCU7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBcbiAgfVxuICAjY29udGFpbmVyZmxleCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjphdXRvIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9CQUNLR1JPVU5ELmpwZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIFxuICB9XG5cbiAgXG4gICNjb250YWluZXIgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgXG4gICNjb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBcbiAgICBjb2xvcjogIzhjOGM4YztcbiAgXG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAjY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG4gIH1cblxuXG4gICNmb290ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9lZ2dzX2Zvb3Rlci5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgfVxuXG4gICNyYW5raW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOjZlbTtcbiAgfVxuXG4gICNmaW5pc2hpbWcge1xuICAgIHdpZHRoOjQwMHB4O1xuICAgIG1heC13aWR0aDo3MHZ3O1xuICAgIG1heC1oZWlnaHQ6MTUlO1xuICAgIG1hcmdpbi10b3A6MWVtO1xuICB9XG5cbiAgaW9uLWNhcmQge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAtLWNvbG9yOmJsYWNrO1xuICAgIFxuICB9XG4gICNoZWFkbG9nbyB7XG4gICAgbWF4LXdpZHRoOiA1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICB9XG5cblxuICAuZWdnIHtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICB9XG5cbiAgaW9uLWNhcmQsIGlvbi1jYXJkLWNvbnRlbnR7XG4gICAgLS1jb2xvcjpibGFjaztcbiAgfVxuXG4gIC5zY29yZSB7XG4gICAgY29sb3I6YmxhY2s7XG4gIH1cblxuICAuc2F2aW5nIHNwYW57XG4gICAgbWFyZ2luOmF1dG8gYXV0bztcbiAgICBkaXNwbGF5OmJsb2NrO1xuXG4gIH1cblxuICAuc2F2aW5nIHtcbiAgICBtYXJnaW4tdG9wOjFlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgI21hcmdpbiB7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDVlbTtcblxuICB9XG5cbiAgYTpsaW5rLCAgYTphY3RpdmUsICBhOnZpc2l0ZWQsICBhOmhvdmVyICAge1xuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBcbiAgfVxuICAiLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG8gYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4jY29udGFpbmVyZmxleCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL0JBQ0tHUk9VTkQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4jZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2VnZ3NfZm9vdGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuI3Jhbmtpbmcge1xuICBtYXJnaW4tYm90dG9tOiA2ZW07XG59XG5cbiNmaW5pc2hpbWcge1xuICB3aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogNzB2dztcbiAgbWF4LWhlaWdodDogMTUlO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbmlvbi1jYXJkIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAtLWNvbG9yOmJsYWNrO1xufVxuXG4jaGVhZGxvZ28ge1xuICBtYXgtd2lkdGg6IDUwcHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xufVxuXG4uZWdnIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbn1cblxuaW9uLWNhcmQsIGlvbi1jYXJkLWNvbnRlbnQge1xuICAtLWNvbG9yOmJsYWNrO1xufVxuXG4uc2NvcmUge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zYXZpbmcgc3BhbiB7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNhdmluZyB7XG4gIG1hcmdpbi10b3A6IDFlbSAhaW1wb3J0YW50O1xufVxuXG4jbWFyZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNWVtO1xufVxuXG5hOmxpbmssIGE6YWN0aXZlLCBhOnZpc2l0ZWQsIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/finish/finish.page.ts":
/*!***************************************!*\
  !*** ./src/app/finish/finish.page.ts ***!
  \***************************************/
/*! exports provided: FinishPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishPage", function() { return FinishPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let FinishPage = class FinishPage {
    constructor(mydata, router, http) {
        this.mydata = mydata;
        this.router = router;
        this.http = http;
        this.mytime_min = 0;
        this.mytime_sec = 0;
        this.spinner = true;
        this.share = true;
        this.linkedinlink = "";
        this.mycomment = "";
        this.mydata.timeend = new Date();
        this.mytime_min = Math.trunc((this.mydata.timeend - this.mydata.timestart) / 1000 / 60);
        this.mytime_sec = Math.trunc((this.mydata.timeend - this.mydata.timestart) / 1000 - this.mytime_min * 60);
        if (this.mydata.allvariables.with_db)
            this.sendInfoToDB();
        if (isNaN(this.mytime_min) || isNaN(this.mytime_sec)) {
            //Not sharing
        }
        else {
            this.share = true;
            this.linkedinlink = "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//cesarmiguel85.github.io/EggHunt2020/&title=Virtual%20Easter%20Egg%20Hunt%202020&summary=Take%20a%20short%20trip%20around%20the%20world%20with%20this%20virtual%20Easter%20egg%20hunt!%0AI%20just%20did%20it%20and%20got%20a%20score%20of%20" + this.mytime_min + "min.%20" + this.mytime_sec + "sec.";
        }
    }
    ngOnInit() { }
    exitPage() {
        window.location.replace(this.mydata.allvariables.root);
        this.router.navigate(['/home']);
    }
    sendInfoToDB() {
        this.mydata.mytime = Math.round((this.mydata.timeend - this.mydata.timestart) / 1000);
        if (this.mydata.nickname.length > 0 &&
            this.mydata.email.length > 0 &&
            this.mydata.mytime > 0 &&
            !this.mydata.sent) {
            // Http Headers
            let postData = {
                "nickname": this.mydata.nickname,
                "email": this.mydata.email,
                "time": this.mydata.mytime,
            };
            console.log("Launching http request score");
            this.mydata.requestPostJQForm(this.mydata.allvariables.db_endpoint_log, postData)
                .then(data => {
                console.log(data);
                console.log("DATA PARSED");
                //var JSONdata = JSON.parse(data.toString());
                var JSONdata = data;
                console.log(JSONdata);
                if (JSONdata.ok == 1) {
                    this.mydata.presentToastBottom(JSONdata.message);
                }
                else {
                    this.mydata.presentToastBottom(JSONdata.error);
                }
                this.mydata.sent = true;
                this.spinner = false;
            })
                .catch(error => {
                console.log(error);
                this.mydata.presentToastBottom("On n'arrive pas à enregistrer votre score... désolé...");
                this.spinner = false;
            });
        }
        else {
            if (this.mydata.nickname.length <= 0 &&
                this.mydata.email.length <= 0 &&
                (this.mydata.mytime === 0 || isNaN(this.mydata.mytime)))
                this.mydata.presentToastBottom("Des données sont manquantes... vous n'avez pas suivi le parcours du jeu :-(");
            if (this.mydata.sent)
                this.mydata.presentToastBottom("Données déjà envoyées...");
        }
    }
    formatDate(mydate) {
        if (mydate == undefined) {
            mydate = new Date();
        }
        let yyyy = mydate.getFullYear().toString();
        let mm = (mydate.getMonth() + 1).toString();
        let dd = mydate.getDate().toString();
        let H = mydate.getHours().toString();
        let M = mydate.getMinutes().toString();
        let S = mydate.getSeconds().toString();
        return yyyy + '-' + (mm[1] ? mm : "0" + mm[0]) + '-' + (dd[1] ? dd : "0" + dd[0]) + ' ' + (H[1] ? H : "0" + H[0]) + ':' + (M[1] ? M : "0" + M[0]) + ':' + (S[1] ? S : "0" + S[0]);
    }
    GoToRanking() {
        this.router.navigate(['/ranking']);
    }
    ionViewDidEnter() {
        console.log({
            "nickname": this.mydata.nickname,
            "email": this.mydata.email,
            "comment": this.mycomment,
            "time": this.mydata.mytime,
            "sent": this.mydata.sent
        });
    }
    shareLinkedIn() {
    }
    sendFeedback() {
        let postData = {
            "nickname": this.mydata.nickname,
            "email": this.mydata.email,
            "comment": this.mycomment
        };
        console.log("Launching hhtp request comment");
        this.mydata.requestPostJQForm(this.mydata.allvariables.db_endpoint_comment, postData)
            .then(data => {
            console.log(data);
            console.log("DATA PARSED");
            //var JSONdata = JSON.parse(data.toString());
            var JSONdata = data;
            console.log(JSONdata);
            if (JSONdata.ok == 1) {
                this.mydata.presentToastBottom(JSONdata.message);
            }
            else {
                this.mydata.presentToastBottom(JSONdata.error);
            }
            this.spinner = false;
        })
            .catch(error => {
            console.log(error);
            this.mydata.presentToastBottom("On n'arrive pas à enregistrer votre commentaire... désolé :-(");
            this.spinner = false;
        });
    }
};
FinishPage.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
FinishPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-finish',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finish.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/finish/finish.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./finish.page.scss */ "./src/app/finish/finish.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], FinishPage);



/***/ })

}]);
//# sourceMappingURL=finish-finish-module-es2015.js.map