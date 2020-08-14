(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts"
	],
	"./never-forget-atext/never-forget-atext.module": [
		"./src/app/never-forget-atext/never-forget-atext.module.ts"
	],
	"./profile/profile.module": [
		"./src/app/profile/profile.module.ts",
		"profile-profile-module"
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
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _utilities_services_neverForgetAText_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/services/neverForgetAText/auth.service */ "./src/app/utilities/services/neverForgetAText/auth.service.ts");
/* harmony import */ var _never_forget_atext_events_default_events_default_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./never-forget-atext/events/default-events/default-events.component */ "./src/app/never-forget-atext/events/default-events/default-events.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _auth_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/settings/settings.component */ "./src/app/auth/settings/settings.component.ts");
/* harmony import */ var _never_forget_atext_messages_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./never-forget-atext/messages/messages.component */ "./src/app/never-forget-atext/messages/messages.component.ts");










const routes = [
    {
        path: 'login',
        loadChildren: './auth/auth.module#AuthModule',
    },
    {
        path: 'register',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: 'settings',
        component: _auth_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
        canActivate: [_utilities_services_neverForgetAText_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]]
    },
    {
        path: '',
        redirectTo: 'text',
        pathMatch: 'full',
    },
    {
        path: 'text',
        loadChildren: './never-forget-atext/never-forget-atext.module#NeverForgetATextModule',
        canActivate: [_utilities_services_neverForgetAText_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]]
    },
    {
        path: 'defaultEvent',
        component: _never_forget_atext_events_default_events_default_events_component__WEBPACK_IMPORTED_MODULE_3__["DefaultEventsComponent"],
        canActivate: [_utilities_services_neverForgetAText_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]]
    },
    {
        path: 'resume',
        component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"],
    },
    {
        path: 'portfolio',
        component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"]
    },
    {
        path: 'messages',
        component: _never_forget_atext_messages_messages_component__WEBPACK_IMPORTED_MODULE_7__["MessagesComponent"],
        canActivate: [_utilities_services_neverForgetAText_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { anchorScrolling: 'enabled' })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { anchorScrolling: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _never_forget_atext_never_forget_atext_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./never-forget-atext/never-forget-atext.module */ "./src/app/never-forget-atext/never-forget-atext.module.ts");
/* harmony import */ var _icons_icons_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/icons.module */ "./src/app/icons/icons.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _send_sms_send_sms_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./send-sms/send-sms.component */ "./src/app/send-sms/send-sms.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _never_forget_atext_messages_messages_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./never-forget-atext/messages/messages.component */ "./src/app/never-forget-atext/messages/messages.component.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./profile/profile/profile.component */ "./src/app/profile/profile/profile.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
            _never_forget_atext_never_forget_atext_module__WEBPACK_IMPORTED_MODULE_10__["NeverForgetATextModule"],
            _icons_icons_module__WEBPACK_IMPORTED_MODULE_11__["IconsModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_12__["AuthModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
        _send_sms_send_sms_component__WEBPACK_IMPORTED_MODULE_16__["SendSmsComponent"],
        _resume_resume_component__WEBPACK_IMPORTED_MODULE_23__["ResumeComponent"],
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_24__["PortfolioComponent"],
        _never_forget_atext_messages_messages_component__WEBPACK_IMPORTED_MODULE_25__["MessagesComponent"],
        _profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_28__["ProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
        _never_forget_atext_never_forget_atext_module__WEBPACK_IMPORTED_MODULE_10__["NeverForgetATextModule"],
        _icons_icons_module__WEBPACK_IMPORTED_MODULE_11__["IconsModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_12__["AuthModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
                    _send_sms_send_sms_component__WEBPACK_IMPORTED_MODULE_16__["SendSmsComponent"],
                    _resume_resume_component__WEBPACK_IMPORTED_MODULE_23__["ResumeComponent"],
                    _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_24__["PortfolioComponent"],
                    _never_forget_atext_messages_messages_component__WEBPACK_IMPORTED_MODULE_25__["MessagesComponent"],
                    _profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_28__["ProfileComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                    _never_forget_atext_never_forget_atext_module__WEBPACK_IMPORTED_MODULE_10__["NeverForgetATextModule"],
                    _icons_icons_module__WEBPACK_IMPORTED_MODULE_11__["IconsModule"],
                    _auth_auth_module__WEBPACK_IMPORTED_MODULE_12__["AuthModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth/auth.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.routing */ "./src/app/auth/auth.routing.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/auth/settings/settings.component.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");















class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_auth_routing__WEBPACK_IMPORTED_MODULE_6__["AuthRouting"]),
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_auth_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_auth_routing__WEBPACK_IMPORTED_MODULE_6__["AuthRouting"]),
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.routing.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.routing.ts ***!
  \**************************************/
/*! exports provided: AuthRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRouting", function() { return AuthRouting; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth/auth.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/auth/settings/settings.component.ts");




const AuthRouting = [
    {
        path: '',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    },
    {
        path: 'registerForm',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    },
    {
        path: 'userSettings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]
    }
];


/***/ }),

/***/ "./src/app/auth/auth/auth.component.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth/auth.component.ts ***!
  \*********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "./src/app/auth/login/login.component.ts");




class AuthComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 4, vars: 0, consts: [[2, "text-align", "center"], [2, "display", "inline-block"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-login");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utilities_services_neverForgetAText_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/services/neverForgetAText/auth.service */ "./src/app/utilities/services/neverForgetAText/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");










const _c0 = function () { return ["/registerForm"]; };
class LoginComponent {
    constructor(authService, router, matSnackBar) {
        this.authService = authService;
        this.router = router;
        this.matSnackBar = matSnackBar;
    }
    ngOnInit() {
    }
    submitForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.email) {
                alert('No email entered');
            }
            if (!this.password) {
                alert('No password entered');
            }
            else {
                let formData = new FormData();
                formData.append('email', this.email ? this.email : '');
                formData.append('password', this.password ? this.password : '');
                this.userLogged = yield this.authService.userLogin(formData);
                if (this.userLogged) {
                    sessionStorage.setItem('user', this.userLogged.name);
                    sessionStorage.setItem('id', this.userLogged.id);
                    sessionStorage.setItem('remember_token', this.userLogged.remember_token);
                    yield this.router.navigate(['']);
                    window.location.reload();
                }
                else {
                    alert('Username or password do not match records');
                }
            }
        });
    }
    onKeydown(event) {
        if (event.key === "Enter") {
            this.submitForm();
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 18, vars: 4, consts: [["matInput", "", "required", "required", "type", "email", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "required", "type", "password", 3, "ngModel", "keydown.enter", "ngModelChange"], ["color", "primary", "mat-raised-button", "", 3, "routerLink"], ["color", "primary", "mat-raised-button", "", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function LoginComponent_Template_input_keydown_enter_12_listener($event) { return ctx.onKeydown($event); })("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_16_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["div[_ngcontent-%COMP%] {\n  margin-top: 10em;\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0.5em;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 15em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gIG1hcmdpbi10b3A6IDEwZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAuNWVtO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxNWVtO1xufVxuIiwiZGl2IHtcbiAgbWFyZ2luLXRvcDogMTBlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDAuNWVtO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxNWVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _utilities_services_neverForgetAText_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _utilities_services_neverForgetAText_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/services/neverForgetAText/auth.service */ "./src/app/utilities/services/neverForgetAText/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function RegisterComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "First Name");
} }
function RegisterComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r159.message, " ");
} }
function RegisterComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_ng_container_7_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r159 = ctx.$implicit;
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r146.loginForm.get("fname").hasError(error_r159.type) && (ctx_r146.loginForm.get("fname").dirty || ctx_r146.loginForm.get("fname").touched));
} }
function RegisterComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Last Name");
} }
function RegisterComponent_ng_container_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r162.message, " ");
} }
function RegisterComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_ng_container_14_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r162 = ctx.$implicit;
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r148.loginForm.get("lname").hasError(error_r162.type) && (ctx_r148.loginForm.get("lname").dirty || ctx_r148.loginForm.get("lname").touched));
} }
function RegisterComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Email");
} }
function RegisterComponent_ng_container_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r165.message, " ");
} }
function RegisterComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_ng_container_23_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r165 = ctx.$implicit;
    const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r151.loginForm.get("email").hasError(error_r165.type) && (ctx_r151.loginForm.get("email").dirty || ctx_r151.loginForm.get("email").touched));
} }
function RegisterComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_div_28_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r169); const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r168.checkEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Password");
} }
function RegisterComponent_ng_container_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r170.message, " ");
} }
function RegisterComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_ng_container_32_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r170 = ctx.$implicit;
    const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r154.loginForm.get("password").hasError(error_r170.type) && (ctx_r154.loginForm.get("password").dirty || ctx_r154.loginForm.get("password").touched));
} }
function RegisterComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Confirm Password");
} }
function RegisterComponent_ng_container_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", error_r173.message, " ");
} }
function RegisterComponent_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_ng_container_39_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r173 = ctx.$implicit;
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r156.loginForm.get("confirmpassword").hasError(error_r173.type) && (ctx_r156.loginForm.get("confirmpassword").dirty || ctx_r156.loginForm.get("confirmpassword").touched));
} }
function RegisterComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Review Info");
} }
class RegisterComponent {
    constructor(authService, router, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.error_messages = {
            'fname': [
                { type: 'required', message: 'First/Laste Name is required.' },
            ],
            'lname': [
                { type: 'required', message: 'Last Name is required.' }
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'minlength', message: 'Email length.' },
                { type: 'maxlength', message: 'Email length.' },
                { type: 'email', message: 'please enter a valid email address.' },
            ],
            'password': [
                { type: 'required', message: 'password is required.' },
                { type: 'minlength', message: 'password length.' },
                { type: 'maxlength', message: 'password length.' }
            ],
            'confirmpassword': [
                { type: 'required', message: 'password is required.' },
                { type: 'minlength', message: 'password length.' },
                { type: 'maxlength', message: 'password length.' }
            ],
        };
        this.loginForm = this.formBuilder.group({
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)
            ])),
            confirmpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)
            ])),
        }, {
            validators: this.password.bind(this)
        });
    }
    ngOnInit() {
    }
    password(formGroup) {
        const { value: password } = formGroup.get('password');
        const { value: confirmPassword } = formGroup.get('confirmpassword');
        return password === confirmPassword ? null : { passwordNotMatch: true };
    }
    canMoveForward(question) {
        for (let error of this.error_messages.email) {
            if (this.loginForm.get(question).hasError(error.type)
                && (this.loginForm.get(question).dirty || this.loginForm.get(question).touched)) {
                return false;
            }
        }
        return true;
    }
    checkEmail() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let emailAlreadyUsed = yield this.authService.checkIfEmailUsed((_c = (_b = (_a = this) === null || _a === void 0 ? void 0 : _a.loginForm) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.email);
        });
    }
    submitForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let formData = new FormData();
            formData.append('name', this.loginForm.value.fname);
            formData.append('email', this.loginForm.value.email);
            formData.append('password', this.loginForm.value.password);
            this.userRegistered = yield this.authService.saveUser(formData);
            if (this.userRegistered) {
                sessionStorage.setItem('user', this.userRegistered);
                this.router.navigate(['']);
            }
            else {
                alert('Email is already used.');
            }
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 54, vars: 17, consts: [[1, "centerHeading"], [1, "mat-elevation-z4", "stepper"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [4, "ngFor", "ngForOf"], ["appearance", "fill"], ["matInput", "", "placeholder", "First name", "formControlName", "fname", "required", ""], ["matInput", "", "placeholder", "Last name", "formControlName", "lname", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "password", "required", "", "type", "password"], ["matInput", "", "formControlName", "confirmpassword", "required", "", "type", "password"], ["mat-raised-button", "", "matStepperPrevious", ""], ["mat-raised-button", "", 3, "disabled", "click"], ["class", "error-message", 4, "ngIf"], [1, "error-message"], ["mat-raised-button", "", "matStepperNext", ""], ["mat-raised-button", "", "matStepperNext", "", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "User Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-vertical-stepper", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RegisterComponent_ng_template_6_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RegisterComponent_ng_container_7_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RegisterComponent_ng_template_13_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, RegisterComponent_ng_container_14_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterComponent_div_19_Template, 5, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, RegisterComponent_ng_template_22_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RegisterComponent_ng_container_23_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, RegisterComponent_div_28_Template, 5, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-step", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, RegisterComponent_ng_template_31_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, RegisterComponent_ng_container_32_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, RegisterComponent_ng_template_38_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, RegisterComponent_ng_container_39_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, RegisterComponent_div_44_Template, 5, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, RegisterComponent_ng_template_46_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_52_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.loginForm["fname"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.error_messages.fname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.error_messages.lname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.canMoveForward("lname") && ctx.canMoveForward("fname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.loginForm["email"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.error_messages.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.canMoveForward("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepControl", ctx.loginForm["password"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.error_messages.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.error_messages.confirmpassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.canMoveForward("confirmpassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperNext"]], styles: [".stepper[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n  margin-right: auto !important;\n  width: 80% !important;\n}\n\n.centerHeading[_ngcontent-%COMP%] {\n  margin: 1em;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 300px !important;\n  margin: 2em;\n}\n\n  .mat-focused .mat-form-field-label {\n  \n  color: rebeccapurple !important;\n}\n\n .mat-form-field-underline {\n  \n  background-color: rebeccapurple !important;\n}\n\n .mat-form-field-ripple {\n  \n  background-color: rebeccapurple !important;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwcGVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbn1cblxuLmNlbnRlckhlYWRpbmcge1xuICBtYXJnaW46IDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDJlbTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiByZWJlY2NhcHVycGxlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZSAhaW1wb3J0YW50O1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiByZWQ7XG59XG4iLCIuc3RlcHBlciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG59XG5cbi5jZW50ZXJIZWFkaW5nIHtcbiAgbWFyZ2luOiAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAyZW07XG59XG5cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xuICBjb2xvcjogcmViZWNjYXB1cnBsZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGUgIWltcG9ydGFudDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _utilities_services_neverForgetAText_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/settings/settings.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/settings/settings.component.ts ***!
  \*****************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SettingsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 2, vars: 0, template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "settings works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/icons/icons.component.ts":
/*!******************************************!*\
  !*** ./src/app/icons/icons.component.ts ***!
  \******************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IconsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
IconsComponent.ɵfac = function IconsComponent_Factory(t) { return new (t || IconsComponent)(); };
IconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconsComponent, selectors: [["app-icons"]], inputs: { name: "name" }, decls: 0, vars: 0, template: function IconsComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ljb25zL2ljb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-icons',
                templateUrl: './icons.component.html',
                styleUrls: ['./icons.component.scss']
            }]
    }], function () { return []; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/icons/icons.module.ts":
/*!***************************************!*\
  !*** ./src/app/icons/icons.module.ts ***!
  \***************************************/
/*! exports provided: IconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsModule", function() { return IconsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons.component */ "./src/app/icons/icons.component.ts");




class IconsModule {
}
IconsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IconsModule });
IconsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IconsModule_Factory(t) { return new (t || IconsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsModule, { declarations: [_icons_component__WEBPACK_IMPORTED_MODULE_2__["IconsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_icons_component__WEBPACK_IMPORTED_MODULE_2__["IconsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_icons_component__WEBPACK_IMPORTED_MODULE_2__["IconsComponent"]],
                exports: [
                    _icons_component__WEBPACK_IMPORTED_MODULE_2__["IconsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _utilities_services_neverForgetAText_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/services/neverForgetAText/auth.service */ "./src/app/utilities/services/neverForgetAText/auth.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");











function NavigationComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hi, ", ctx_r21.userName, "!");
} }
function NavigationComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavigationComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register/Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "login");
} }
class NavigationComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.userName = sessionStorage.user;
        this.user = this.authService.canActivate();
    }
    ngOnDestroy() {
        this.user.unsubscribe;
    }
    logout() {
        sessionStorage.clear();
        this.authService.canActivate();
        this.router.navigate(['login']);
        window.location.reload();
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 47, vars: 18, consts: [[1, "toolBar"], ["color", "primary"], ["mat-icon-button", "", 3, "click"], [1, "alignContent"], ["mat-button", "", "routerLink", "/"], ["src", "/assets/img/mainLogo.jpeg", 1, "logoImage"], ["mat-raised-button", "", "mat-icon-button", "", 3, "matMenuTriggerFor"], ["profileMenu", "matMenu"], ["mat-menu-item", "", 4, "ngIf"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "routerLink", 4, "ngIf"], ["sidenav", ""], ["mat-list-item", "", 1, "whiteFont", 3, "matMenuTriggerFor"], [2, "margin-left", "2em", 3, "routerLink"], ["mat-list-item", "", 1, "whiteFont", 3, "mat-menu-trigger-for", "disabled"], [1, "mat-background-primary"], ["neverForgetATextMenu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], [2, "height", "100vh"], ["mat-menu-item", "", 3, "click"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r24.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-menu", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavigationComponent_span_14_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavigationComponent_button_19_Template, 4, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavigationComponent_button_20_Template, 2, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-sidenav", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Never Forget A Text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-menu", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-elevation-z2", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-elevation-z2", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userName ? ctx.userName : "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-elevation-z2", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("disabled", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-menu-trigger-for", _r25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/text/contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/messages");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".logoImage[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.alignContent[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 275px;\n  height: auto;\n  background-color: #212121;\n}\n\n.toolBar[_ngcontent-%COMP%] {\n  position: sticky;\n  position: -webkit-sticky;\n  \n  top: 0;\n  \n  z-index: 1000;\n  \n  color: #212121;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  left: 200px;\n  top: 200px;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  top: 0 !important;\n}\n\n.whiteFont[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.darkMenu[_ngcontent-%COMP%] {\n  background: #212121 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLHdCQUFBO0VBQTBCLHlCQUFBO0VBQzFCLE1BQUE7RUFBUSx5Q0FBQTtFQUNSLGFBQUE7RUFBZSwrREFBQTtFQUNmLGNBQUE7QUNJRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDSUY7O0FERkE7RUFDRSxpQkFBQTtBQ0tGOztBREZBO0VBQ0UsWUFBQTtBQ0tGOztBREZBO0VBQ0UsOEJBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvSW1hZ2Uge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFsaWduQ29udGVudCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyNzVweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xufVxuXG4udG9vbEJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cbiAgdG9wOiAwOyAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cbiAgei1pbmRleDogMTAwMDsgLyogRW5zdXJlIHRoYXQgeW91ciBhcHAncyBjb250ZW50IGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgdG9vbGJhciAqL1xuICBjb2xvcjogIzIxMjEyMTtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lcntcbiAgbGVmdDoyMDBweDtcbiAgdG9wOjIwMHB4O1xufVxuLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3h7XG4gIHRvcDowICFpbXBvcnRhbnQ7XG59XG5cbi53aGl0ZUZvbnQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kYXJrTWVudSB7XG4gIGJhY2tncm91bmQ6ICMyMTIxMjEgIWltcG9ydGFudDtcbn1cbiIsIi5sb2dvSW1hZ2Uge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFsaWduQ29udGVudCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyNzVweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xufVxuXG4udG9vbEJhciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cbiAgdG9wOiAwO1xuICAvKiBTZXRzIHRoZSBzdGlja3kgdG9vbGJhciB0byBiZSBvbiB0b3AgKi9cbiAgei1pbmRleDogMTAwMDtcbiAgLyogRW5zdXJlIHRoYXQgeW91ciBhcHAncyBjb250ZW50IGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgdG9vbGJhciAqL1xuICBjb2xvcjogIzIxMjEyMTtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIGxlZnQ6IDIwMHB4O1xuICB0b3A6IDIwMHB4O1xufVxuXG4uY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4ud2hpdGVGb250IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGFya01lbnUge1xuICBiYWNrZ3JvdW5kOiAjMjEyMTIxICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _utilities_services_neverForgetAText_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/never-forget-atext/contacts/contact-form/contact-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/never-forget-atext/contacts/contact-form/contact-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/services/neverForgetAText/contact.service */ "./src/app/utilities/services/neverForgetAText/contact.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class ContactFormComponent {
    constructor(snackBar, contactService, router) {
        this.snackBar = snackBar;
        this.contactService = contactService;
        this.router = router;
    }
    ngOnInit() {
        if (this.contactToEdit) {
            this.fName = this.contactToEdit.fname;
            this.lName = this.contactToEdit.lname;
            this.email = this.contactToEdit.email;
            this.cell = this.contactToEdit.cell;
        }
        else {
            this.assignContactToEdit();
        }
    }
    assignContactToEdit() {
        this.getCurrentUser();
        if (this.contactToEdit) {
            this.fName = this.contactToEdit.fName;
            this.lName = this.contactToEdit.lName;
            this.cell = this.contactToEdit.cell;
            this.email = this.contactToEdit.email;
        }
    }
    getCurrentUser() {
        this.userID = sessionStorage.id;
    }
    saveForm() {
        if (!this.fName || !this.lName || !this.email || !this.cell) {
            alert('Missing required information');
        }
        else {
            let formData = new FormData();
            formData.append('fname', this.fName ? this.fName : '');
            formData.append('lname', this.lName ? this.lName : '');
            formData.append('cell', this.cell ? this.cell : '');
            formData.append('email', this.email ? this.email : '');
            formData.append('userID', this.userID ? this.userID : '');
            let contactID = false;
            if (typeof this.contactToEdit === 'object') {
                contactID = this.contactToEdit.id;
            }
            this.contactService.saveContact(formData, contactID);
            this.snackBar.open('Saved', 'X', {
                duration: 4000
            });
            // this.router.navigate(['']);
        }
    }
}
ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"])); };
ContactFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFormComponent, selectors: [["app-contact-form"]], inputs: { contactToEdit: "contactToEdit" }, decls: 0, vars: 0, template: function ContactFormComponent_Template(rf, ctx) { }, styles: ["div[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 3em;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 20em;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvY29udGFjdHMvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmV2ZXItZm9yZ2V0LWF0ZXh0L2NvbnRhY3RzL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbmV2ZXItZm9yZ2V0LWF0ZXh0L2NvbnRhY3RzL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogM2VtO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAyMGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCJkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogM2VtO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAyMGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-form',
                templateUrl: './contact-form.component.html',
                styleUrls: ['./contact-form.component.scss']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }, { type: _utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"] }]; }, { contactToEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/never-forget-atext/contacts/create-contact-dialog/create-contact-dialog.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/never-forget-atext/contacts/create-contact-dialog/create-contact-dialog.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CreateContactDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateContactDialogComponent", function() { return CreateContactDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/services/neverForgetAText/contact.service */ "./src/app/utilities/services/neverForgetAText/contact.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");














function CreateContactDialogComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Contact Name");
} }
function CreateContactDialogComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r57.message, " ");
} }
function CreateContactDialogComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateContactDialogComponent_ng_container_6_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r57 = ctx.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r47.loginForm.get("fname").hasError(error_r57.type) && (ctx_r47.loginForm.get("fname").dirty || ctx_r47.loginForm.get("fname").touched));
} }
function CreateContactDialogComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Last Name");
} }
function CreateContactDialogComponent_ng_container_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r60.message, " ");
} }
function CreateContactDialogComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateContactDialogComponent_ng_container_13_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r60 = ctx.$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r49.loginForm.get("lname").hasError(error_r60.type) && (ctx_r49.loginForm.get("lname").dirty || ctx_r49.loginForm.get("lname").touched));
} }
function CreateContactDialogComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateContactDialogComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Contact Info");
} }
function CreateContactDialogComponent_ng_container_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r63.message, " ");
} }
function CreateContactDialogComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateContactDialogComponent_ng_container_22_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r63 = ctx.$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.loginForm.get("email").hasError(error_r63.type) && (ctx_r52.loginForm.get("email").dirty || ctx_r52.loginForm.get("email").touched));
} }
function CreateContactDialogComponent_ng_template_28_Template(rf, ctx) { }
function CreateContactDialogComponent_ng_container_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r66.message, " ");
} }
function CreateContactDialogComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateContactDialogComponent_ng_container_29_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r66 = ctx.$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r54.loginForm.get("cell").hasError(error_r66.type) && (ctx_r54.loginForm.get("cell").dirty || ctx_r54.loginForm.get("cell").touched));
} }
function CreateContactDialogComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateContactDialogComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Review Contact Info");
} }
class CreateContactDialogComponent {
    constructor(snackBar, contactService, router, formBuilder) {
        this.snackBar = snackBar;
        this.contactService = contactService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.error_messages = {
            'fname': [
                { type: 'required', message: 'First/Last Name is required.' },
            ],
            'lname': [
                { type: 'required', message: 'Last Name is required.' }
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'minlength', message: 'Email length.' },
                { type: 'maxlength', message: 'Email length.' },
                { type: 'email', message: 'Please enter a valid email address.' },
            ],
            'cell': [
                { type: 'required', message: 'Cell number is required.' },
                { type: 'minlength', message: 'Invalid cell number.' },
                { type: 'maxlength', message: 'Invalid cell number.' }
            ],
        };
        this.loginForm = this.formBuilder.group({
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
            ])),
            cell: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)
            ]))
        });
    }
    ngOnInit() {
    }
    saveForm() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        let formData = new FormData();
        formData.append('fname', (_c = (_b = (_a = this) === null || _a === void 0 ? void 0 : _a.loginForm) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.fname);
        formData.append('lname', (_f = (_e = (_d = this) === null || _d === void 0 ? void 0 : _d.loginForm) === null || _e === void 0 ? void 0 : _e.value) === null || _f === void 0 ? void 0 : _f.lname);
        formData.append('cell', (_j = (_h = (_g = this) === null || _g === void 0 ? void 0 : _g.loginForm) === null || _h === void 0 ? void 0 : _h.value) === null || _j === void 0 ? void 0 : _j.email);
        formData.append('email', (_m = (_l = (_k = this) === null || _k === void 0 ? void 0 : _k.loginForm) === null || _l === void 0 ? void 0 : _l.value) === null || _m === void 0 ? void 0 : _m.email);
        formData.append('userID', (_o = sessionStorage) === null || _o === void 0 ? void 0 : _o.id);
        let contactID = false;
        console.log(formData, contactID);
        this.contactService.saveContact(formData, contactID);
        this.snackBar.open('Saved', 'X', {
            duration: 4000
        });
    }
    canMoveForward(question) {
        for (let error of this.error_messages.email) {
            if (this.loginForm.get(question).hasError(error.type)
                && (this.loginForm.get(question).dirty || this.loginForm.get(question).touched)) {
                return false;
            }
        }
        return true;
    }
}
CreateContactDialogComponent.ɵfac = function CreateContactDialogComponent_Factory(t) { return new (t || CreateContactDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CreateContactDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateContactDialogComponent, selectors: [["app-create-contact-dialog"]], decls: 71, vars: 17, consts: [[1, "stepper", "mat-elevation-z"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [4, "ngFor", "ngForOf"], ["appearance", "fill"], ["matInput", "", "placeholder", "First name", "formControlName", "fname", "required", ""], ["matInput", "", "placeholder", "Last name", "formControlName", "lname", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", ""], ["matPrefix", ""], ["type", "tel", "matInput", "", "formControlName", "cell", "placeholder", "555-555-1234", "required", ""], ["matSuffix", ""], ["matInput", "", "disabled", ""], ["align", "center"], ["mat-raised-button", "", 3, "mat-dialog-close"], ["mat-raised-button", "", 3, "mat-dialog-close", "disabled", "click"], ["class", "error-message", 4, "ngIf"], [1, "error-message"], ["mat-raised-button", "", "matStepperPrevious", ""], ["mat-raised-button", "", "matStepperNext", ""]], template: function CreateContactDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-vertical-stepper", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateContactDialogComponent_ng_template_5_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateContactDialogComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateContactDialogComponent_ng_template_12_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateContactDialogComponent_ng_container_13_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CreateContactDialogComponent_div_18_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CreateContactDialogComponent_ng_template_21_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CreateContactDialogComponent_ng_container_22_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CreateContactDialogComponent_ng_template_28_Template, 0, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CreateContactDialogComponent_ng_container_29_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "+1 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "mode_edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CreateContactDialogComponent_div_38_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CreateContactDialogComponent_ng_template_40_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Cell Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-dialog-actions", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateContactDialogComponent_Template_button_click_69_listener() { return ctx.saveForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.loginForm["fname"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.fname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.lname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canMoveForward("lname") && ctx.canMoveForward("fname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.loginForm["email"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.cell);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canMoveForward("cell") && ctx.canMoveForward("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loginForm == null ? null : ctx.loginForm.value == null ? null : ctx.loginForm.value.fname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loginForm == null ? null : ctx.loginForm.value == null ? null : ctx.loginForm.value.lname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loginForm == null ? null : ctx.loginForm.value == null ? null : ctx.loginForm.value.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loginForm == null ? null : ctx.loginForm.value == null ? null : ctx.loginForm.value.cell, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogContent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPrefix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperNext"]], styles: [".stepper[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  width: 80% !important;\n  border-radius: 30px;\n}\n\n.centerHeading[_ngcontent-%COMP%] {\n  margin: 1em;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 300px !important;\n  margin: 2em;\n}\n\n  .mat-focused .mat-form-field-label {\n  \n  color: rebeccapurple !important;\n}\n\n .mat-form-field-underline {\n  \n  background-color: rebeccapurple !important;\n}\n\n .mat-form-field-ripple {\n  \n  background-color: rebeccapurple !important;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.borderRadius[_ngcontent-%COMP%] {\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvY29udGFjdHMvY3JlYXRlLWNvbnRhY3QtZGlhbG9nL2NyZWF0ZS1jb250YWN0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmV2ZXItZm9yZ2V0LWF0ZXh0L2NvbnRhY3RzL2NyZWF0ZS1jb250YWN0LWRpYWxvZy9jcmVhdGUtY29udGFjdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL25ldmVyLWZvcmdldC1hdGV4dC9jb250YWN0cy9jcmVhdGUtY29udGFjdC1kaWFsb2cvY3JlYXRlLWNvbnRhY3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXBwZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4uY2VudGVySGVhZGluZyB7XG4gIG1hcmdpbjogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMmVtO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cbiAgY29sb3I6IHJlYmVjY2FwdXJwbGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXG4gIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmJvcmRlclJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4iLCIuc3RlcHBlciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbi5jZW50ZXJIZWFkaW5nIHtcbiAgbWFyZ2luOiAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAyZW07XG59XG5cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xuICBjb2xvcjogcmViZWNjYXB1cnBsZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGUgIWltcG9ydGFudDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xufVxuXG4uYm9yZGVyUmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateContactDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-contact-dialog',
                templateUrl: './create-contact-dialog.component.html',
                styleUrls: ['./create-contact-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: _utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/never-forget-atext/contacts/create-contact/create-contact.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/never-forget-atext/contacts/create-contact/create-contact.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CreateContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateContactComponent", function() { return CreateContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/services/neverForgetAText/contact.service */ "./src/app/utilities/services/neverForgetAText/contact.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");












function CreateContactComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Contact Name");
} }
function CreateContactComponent_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r102.message, " ");
} }
function CreateContactComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateContactComponent_ng_container_5_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r102 = ctx.$implicit;
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r92.loginForm.get("fname").hasError(error_r102.type) && (ctx_r92.loginForm.get("fname").dirty || ctx_r92.loginForm.get("fname").touched));
} }
function CreateContactComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Last Name");
} }
function CreateContactComponent_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r105.message, " ");
} }
function CreateContactComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateContactComponent_ng_container_12_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r105 = ctx.$implicit;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.loginForm.get("lname").hasError(error_r105.type) && (ctx_r94.loginForm.get("lname").dirty || ctx_r94.loginForm.get("lname").touched));
} }
function CreateContactComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateContactComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Contact Info");
} }
function CreateContactComponent_ng_container_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r108.message, " ");
} }
function CreateContactComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateContactComponent_ng_container_21_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r108 = ctx.$implicit;
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r97.loginForm.get("email").hasError(error_r108.type) && (ctx_r97.loginForm.get("email").dirty || ctx_r97.loginForm.get("email").touched));
} }
function CreateContactComponent_ng_template_27_Template(rf, ctx) { }
function CreateContactComponent_ng_container_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r111.message, " ");
} }
function CreateContactComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateContactComponent_ng_container_28_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r111 = ctx.$implicit;
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r99.loginForm.get("cell").hasError(error_r111.type) && (ctx_r99.loginForm.get("cell").dirty || ctx_r99.loginForm.get("cell").touched));
} }
function CreateContactComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateContactComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Review Info");
} }
class CreateContactComponent {
    constructor(snackBar, contactService, router, formBuilder) {
        this.snackBar = snackBar;
        this.contactService = contactService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.error_messages = {
            'fname': [
                { type: 'required', message: 'First/Last Name is required.' },
            ],
            'lname': [
                { type: 'required', message: 'Last Name is required.' }
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'minlength', message: 'Email length.' },
                { type: 'maxlength', message: 'Email length.' },
                { type: 'email', message: 'Please enter a valid email address.' },
            ],
            'cell': [
                { type: 'required', message: 'Cell number is required.' },
                { type: 'minlength', message: 'Invalid cell number.' },
                { type: 'maxlength', message: 'Invalid cell number.' }
            ],
        };
        this.loginForm = this.formBuilder.group({
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
            ])),
            cell: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)
            ]))
        });
    }
    ngOnInit() {
    }
    getCurrentUser() {
        this.userID = sessionStorage.id;
    }
    saveForm() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        let formData = new FormData();
        formData.append('fname', (_c = (_b = (_a = this) === null || _a === void 0 ? void 0 : _a.loginForm) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.fname);
        formData.append('lname', (_f = (_e = (_d = this) === null || _d === void 0 ? void 0 : _d.loginForm) === null || _e === void 0 ? void 0 : _e.value) === null || _f === void 0 ? void 0 : _f.lname);
        formData.append('cell', (_j = (_h = (_g = this) === null || _g === void 0 ? void 0 : _g.loginForm) === null || _h === void 0 ? void 0 : _h.value) === null || _j === void 0 ? void 0 : _j.email);
        formData.append('email', (_m = (_l = (_k = this) === null || _k === void 0 ? void 0 : _k.loginForm) === null || _l === void 0 ? void 0 : _l.value) === null || _m === void 0 ? void 0 : _m.cell);
        formData.append('userID', (_o = this) === null || _o === void 0 ? void 0 : _o.userID);
        let contactID = false;
        if (typeof this.contactToEdit === 'object') {
            contactID = this.contactToEdit.id;
        }
        this.contactService.saveContact(formData, contactID);
        this.snackBar.open('Saved', 'X', {
            duration: 4000
        });
        // this.router.navigate(['']);
    }
    canMoveForward(question) {
        for (let error of this.error_messages.email) {
            if (this.loginForm.get(question).hasError(error.type)
                && (this.loginForm.get(question).dirty || this.loginForm.get(question).touched)) {
                return false;
            }
        }
        return true;
    }
}
CreateContactComponent.ɵfac = function CreateContactComponent_Factory(t) { return new (t || CreateContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CreateContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateContactComponent, selectors: [["app-create-contact"]], inputs: { contactToEdit: "contactToEdit" }, decls: 66, vars: 17, consts: [[1, "stepper", "mat-elevation-z"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [4, "ngFor", "ngForOf"], ["appearance", "fill"], ["matInput", "", "placeholder", "First name", "formControlName", "fname", "required", ""], ["matInput", "", "placeholder", "Last name", "formControlName", "lname", "required", ""], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "cell", "required", ""], ["matInput", "", "disabled", ""], ["mat-raised-button", "", "matStepperPrevious", ""], ["mat-raised-button", "", 3, "disabled", "click"], ["class", "error-message", 4, "ngIf"], [1, "error-message"], ["mat-raised-button", "", "matStepperNext", ""]], template: function CreateContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-vertical-stepper", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateContactComponent_ng_template_4_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreateContactComponent_ng_container_5_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CreateContactComponent_ng_template_11_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateContactComponent_ng_container_12_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateContactComponent_div_17_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CreateContactComponent_ng_template_20_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CreateContactComponent_ng_container_21_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CreateContactComponent_ng_template_27_Template, 0, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CreateContactComponent_ng_container_28_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CreateContactComponent_div_33_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, CreateContactComponent_ng_template_35_Template, 1, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Cell Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateContactComponent_Template_button_click_64_listener() { return ctx.saveForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Sign up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.loginForm["fname"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.fname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.lname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canMoveForward("lname") && ctx.canMoveForward("fname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.loginForm["email"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.cell);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canMoveForward("cell") && ctx.canMoveForward("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loginForm == null ? null : ctx.loginForm.value == null ? null : ctx.loginForm.value.fname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loginForm == null ? null : ctx.loginForm.value == null ? null : ctx.loginForm.value.lname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loginForm == null ? null : ctx.loginForm.value == null ? null : ctx.loginForm.value.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loginForm == null ? null : ctx.loginForm.value == null ? null : ctx.loginForm.value.cell, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperNext"]], styles: [".stepper[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  width: 80% !important;\n  border-radius: 30px;\n}\n\n.centerHeading[_ngcontent-%COMP%] {\n  margin: 1em;\n  text-align: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 300px !important;\n  margin: 2em;\n}\n\n  .mat-focused .mat-form-field-label {\n  \n  color: rebeccapurple !important;\n}\n\n .mat-form-field-underline {\n  \n  background-color: rebeccapurple !important;\n}\n\n .mat-form-field-ripple {\n  \n  background-color: rebeccapurple !important;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.borderRadius[_ngcontent-%COMP%] {\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvY29udGFjdHMvY3JlYXRlLWNvbnRhY3QvY3JlYXRlLWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25ldmVyLWZvcmdldC1hdGV4dC9jb250YWN0cy9jcmVhdGUtY29udGFjdC9jcmVhdGUtY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtFQUNBLDBDQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbmV2ZXItZm9yZ2V0LWF0ZXh0L2NvbnRhY3RzL2NyZWF0ZS1jb250YWN0L2NyZWF0ZS1jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXBwZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4uY2VudGVySGVhZGluZyB7XG4gIG1hcmdpbjogMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMmVtO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cbiAgY29sb3I6IHJlYmVjY2FwdXJwbGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXG4gIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWJlY2NhcHVycGxlICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmJvcmRlclJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4iLCIuc3RlcHBlciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbi5jZW50ZXJIZWFkaW5nIHtcbiAgbWFyZ2luOiAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAyZW07XG59XG5cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwqL1xuICBjb2xvcjogcmViZWNjYXB1cnBsZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGUgIWltcG9ydGFudDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xufVxuXG4uYm9yZGVyUmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-contact',
                templateUrl: './create-contact.component.html',
                styleUrls: ['./create-contact.component.scss']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: _utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { contactToEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/never-forget-atext/contacts/edit-contact-dialog/edit-contact-dialog.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/never-forget-atext/contacts/edit-contact-dialog/edit-contact-dialog.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: EditContactDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContactDialogComponent", function() { return EditContactDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utilities/services/neverForgetAText/contact.service */ "./src/app/utilities/services/neverForgetAText/contact.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");














function EditContactDialogComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r33.message, " ");
} }
function EditContactDialogComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditContactDialogComponent_ng_container_6_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r33 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r29.contact.get("fname").hasError(error_r33.type) && (ctx_r29.contact.get("fname").dirty || ctx_r29.contact.get("fname").touched));
} }
function EditContactDialogComponent_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r36.message, " ");
} }
function EditContactDialogComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditContactDialogComponent_ng_container_12_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r36 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.contact.get("lname").hasError(error_r36.type) && (ctx_r30.contact.get("lname").dirty || ctx_r30.contact.get("lname").touched));
} }
function EditContactDialogComponent_ng_container_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r39.message, " ");
} }
function EditContactDialogComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditContactDialogComponent_ng_container_22_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r39 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.contact.get("cell").hasError(error_r39.type) && (ctx_r31.contact.get("cell").dirty || ctx_r31.contact.get("cell").touched));
} }
function EditContactDialogComponent_ng_container_28_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", error_r42.message, " ");
} }
function EditContactDialogComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditContactDialogComponent_ng_container_28_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const error_r42 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.contact.get("email").hasError(error_r42.type) && (ctx_r32.contact.get("email").dirty || ctx_r32.contact.get("email").touched));
} }
class EditContactDialogComponent {
    constructor(contactToEditData, formBuilder, contactService, snackBar, router) {
        this.contactToEditData = contactToEditData;
        this.formBuilder = formBuilder;
        this.contactService = contactService;
        this.snackBar = snackBar;
        this.router = router;
        this.error_messages = {
            'fname': [
                { type: 'required', message: 'First/Last Name is required.' },
            ],
            'lname': [
                { type: 'required', message: 'Last Name is required.' }
            ],
            'cell': [
                { type: 'required', message: 'Cell is required.' },
                { type: 'minlength', message: 'Please enter real cell number.' },
                { type: 'maxlength', message: 'Please enter real cell number' },
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'minlength', message: 'Email length.' },
                { type: 'maxlength', message: 'Email length.' },
                { type: 'email', message: 'please enter a valid email address.' },
            ],
        };
        this.contact = this.formBuilder.group({
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            cell: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(9),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(9),
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ])),
        });
    }
    ngOnInit() {
        this.setProfile();
    }
    setProfile() {
        var _a, _b, _c, _d;
        this.contact['fname'] = (_a = this.contactToEditData['contact']['fname'], (_a !== null && _a !== void 0 ? _a : ''));
        this.contact['lname'] = (_b = this.contactToEditData['contact']['lname'], (_b !== null && _b !== void 0 ? _b : ''));
        this.contact['email'] = (_c = this.contactToEditData['contact']['email'], (_c !== null && _c !== void 0 ? _c : ''));
        this.contact['cell'] = (_d = this.contactToEditData['contact']['cell'], (_d !== null && _d !== void 0 ? _d : ''));
    }
    saveContact() {
        var _a;
        const formData = new FormData();
        formData.append('fname', this.contact.value.fname);
        formData.append('lname', this.contact.value.lname);
        formData.append('email', this.contact.value.email);
        formData.append('cell', this.contact.value.cell);
        formData.append('userID', sessionStorage.id);
        this.contactService.saveContact(formData, (_a = this.contactToEditData['contact']['id'], (_a !== null && _a !== void 0 ? _a : '')));
        this.snackBar.open('Saved', 'X', {
            duration: 4000
        });
        this.router.navigate(['contacts']);
    }
}
EditContactDialogComponent.ɵfac = function EditContactDialogComponent_Factory(t) { return new (t || EditContactDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
EditContactDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditContactDialogComponent, selectors: [["app-edit-contact-dialog"]], decls: 38, vars: 16, consts: [[1, "form"], [3, "formGroup"], ["appearance", "fill", 1, "line-width"], ["matInput", "", "placeholder", "First name", "formControlName", "fname", "required", "", 3, "ngModel", "value", "ngModelChange"], [4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Last name", "formControlName", "lname", "required", "", 3, "ngModel", "value", "ngModelChange"], ["matPrefix", ""], ["required", "", "type", "tel", "matInput", "", "formControlName", "cell", "placeholder", "555-555-1234", 3, "ngModel", "value", "ngModelChange"], ["matSuffix", ""], ["matInput", "", "placeholder", "ex. hunsakerjacoby@gmail.com", "formControlName", "email", "required", "", 3, "ngModel", "value", "ngModelChange"], ["align", "center"], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close"], ["mat-raised-button", "", "color", "primary", 3, "mat-dialog-close", "click"], ["class", "error-message", 4, "ngIf"], [1, "error-message"]], template: function EditContactDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditContactDialogComponent_Template_input_ngModelChange_5_listener($event) { return (ctx.contact["fname"] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditContactDialogComponent_ng_container_6_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditContactDialogComponent_Template_input_ngModelChange_11_listener($event) { return (ctx.contact["lname"] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EditContactDialogComponent_ng_container_12_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Telephone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "+1 \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditContactDialogComponent_Template_input_ngModelChange_19_listener($event) { return (ctx.contact["cell"] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "mode_edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditContactDialogComponent_ng_container_22_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditContactDialogComponent_Template_input_ngModelChange_27_listener($event) { return (ctx.contact["email"] = $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, EditContactDialogComponent_ng_container_28_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-dialog-actions", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditContactDialogComponent_Template_button_click_34_listener() { return ctx.saveContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact["fname"])("value", ctx.contact["fname"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.fname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact["lname"])("value", ctx.contact["lname"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.lname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact["cell"])("value", ctx.contact["cell"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact["email"])("value", ctx.contact["email"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.error_messages.email);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatPrefix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: [".centerInputs[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.line-width[_ngcontent-%COMP%] {\n  min-width: 300px;\n  width: auto;\n}\n\n.form[_ngcontent-%COMP%] {\n  text-align: center;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvY29udGFjdHMvZWRpdC1jb250YWN0LWRpYWxvZy9lZGl0LWNvbnRhY3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvY29udGFjdHMvZWRpdC1jb250YWN0LWRpYWxvZy9lZGl0LWNvbnRhY3QtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbmV2ZXItZm9yZ2V0LWF0ZXh0L2NvbnRhY3RzL2VkaXQtY29udGFjdC1kaWFsb2cvZWRpdC1jb250YWN0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJJbnB1dHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5saW5lLXdpZHRoIHtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5mb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuIiwiLmNlbnRlcklucHV0cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxpbmUtd2lkdGgge1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLmZvcm0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditContactDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-contact-dialog',
                templateUrl: './edit-contact-dialog.component.html',
                styleUrls: ['./edit-contact-dialog.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/never-forget-atext/contacts/user-contacts/user-contacts.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/never-forget-atext/contacts/user-contacts/user-contacts.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UserContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContactsComponent", function() { return UserContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _edit_contact_dialog_edit_contact_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../edit-contact-dialog/edit-contact-dialog.component */ "./src/app/never-forget-atext/contacts/edit-contact-dialog/edit-contact-dialog.component.ts");
/* harmony import */ var _create_contact_dialog_create_contact_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-contact-dialog/create-contact-dialog.component */ "./src/app/never-forget-atext/contacts/create-contact-dialog/create-contact-dialog.component.ts");
/* harmony import */ var _utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities/services/neverForgetAText/contact.service */ "./src/app/utilities/services/neverForgetAText/contact.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");














function UserContactsComponent_ng_container_7_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r77.columnsToDisplayNames[column_r76], " ");
} }
function UserContactsComponent_ng_container_7_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r80 = ctx.$implicit;
    const column_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", contact_r80[column_r76], " ");
} }
function UserContactsComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserContactsComponent_ng_container_7_th_1_Template, 2, 1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserContactsComponent_ng_container_7_td_2_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("matColumnDef", column_r76);
} }
const _c0 = function (a0) { return { contact: a0 }; };
const _c1 = function () { return ["/contactEvents"]; };
const _c2 = function (a0) { return { "cid": a0 }; };
function UserContactsComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " event ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r82 = ctx.$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("colspan", ctx_r70.columnsToDisplay.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@detailExpand", contact_r82 == ctx_r70.expandedContact ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r74)("matMenuTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, contact_r82));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", (contact_r82 == null ? null : contact_r82.fname) ? contact_r82 == null ? null : contact_r82.fname : "", " ", (contact_r82 == null ? null : contact_r82.lname) ? contact_r82 == null ? null : contact_r82.lname : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (contact_r82 == null ? null : contact_r82.email) ? contact_r82 == null ? null : contact_r82.email : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (contact_r82 == null ? null : contact_r82.cell) ? contact_r82 == null ? null : contact_r82.cell : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c2, contact_r82 == null ? null : contact_r82.id));
} }
function UserContactsComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 25);
} }
function UserContactsComponent_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserContactsComponent_tr_11_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r85); const contact_r83 = ctx.$implicit; const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r84.expandedContact = ctx_r84.expandedContact === contact_r83 ? null : contact_r83; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r83 = ctx.$implicit;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("example-expanded-row", ctx_r72.expandedContact === contact_r83);
} }
function UserContactsComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 27);
} }
function UserContactsComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserContactsComponent_ng_template_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89); const contact_r87 = ctx.contact; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r88.openEditContactDialog(contact_r87); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Delete Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c3 = function () { return ["expandedDetail"]; };
class UserContactsComponent {
    constructor(contactService, router, dialog) {
        this.contactService = contactService;
        this.router = router;
        this.dialog = dialog;
        this.columnsToDisplay = ['fname', 'cell'];
        this.columnsToDisplayNames = {
            'fname': 'Name',
            'cell': 'Cell',
        };
    }
    ngOnInit() {
        this.getUserContacts();
    }
    getUserContacts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.userContacts = yield this.contactService.getUserContacts(sessionStorage.id);
        });
    }
    openEditContactDialog(contact) {
        const dialogRef = this.dialog.open(_edit_contact_dialog_edit_contact_dialog_component__WEBPACK_IMPORTED_MODULE_3__["EditContactDialogComponent"], {
            maxHeight: '90%',
            maxWidth: '90%',
            minHeight: '50%',
            minWidth: '50%',
            height: 'auto',
            width: 'auto',
            disableClose: true,
            hasBackdrop: true,
            data: {
                contact: contact
            }
        });
    }
    openCreateContactDialog() {
        const dialogRef = this.dialog.open(_create_contact_dialog_create_contact_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CreateContactDialogComponent"], {
            maxHeight: '90%',
            maxWidth: '90%',
            minHeight: '50%',
            minWidth: '50%',
            height: 'auto',
            width: 'auto',
            disableClose: true,
            hasBackdrop: true,
        });
    }
}
UserContactsComponent.ɵfac = function UserContactsComponent_Factory(t) { return new (t || UserContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
UserContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserContactsComponent, selectors: [["app-user-contacts"]], decls: 16, vars: 6, consts: [[1, "container"], [1, "tableDiv"], ["mat-raised-button", "", "color", "primary", 1, "buttonMargin", 3, "click"], ["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z1", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", "class", "borderRadius", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], ["contactMenu", "matMenu"], ["matMenuContent", ""], [3, "matColumnDef"], ["mat-header-cell", "", "class", "headerCell borderRadius", 4, "matHeaderCellDef"], ["mat-header-cell", "", 1, "headerCell", "borderRadius"], ["mat-cell", "", 1, "borderRadius"], [1, "example-element-detail"], [1, "example-element-diagram"], [1, "example-element-position"], ["mat-icon-button", "", 3, "matMenuTriggerFor", "matMenuTriggerData"], [1, "example-element-name"], [1, "example-element-weight"], [1, "example-element-description"], ["mat-raised-button", "", "mat-icon-button", "", 3, "routerLink", "queryParams"], [1, "example-element-description-attribution"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", ""]], template: function UserContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserContactsComponent_Template_button_click_2_listener() { return ctx.openCreateContactDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " add_circle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Create Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UserContactsComponent_ng_container_7_Template, 3, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, UserContactsComponent_td_9_Template, 17, 15, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, UserContactsComponent_tr_10_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UserContactsComponent_tr_11_Template, 1, 2, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UserContactsComponent_tr_12_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-menu", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UserContactsComponent_ng_template_15_Template, 4, 0, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.userContacts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c3));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"]], styles: [".container[_ngcontent-%COMP%] {\n  background: url('contacts.jpg') no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  -webkit-filter: brightness(85%);\n          filter: brightness(85%);\n}\n\ntable[_ngcontent-%COMP%] {\n  border-spacing: 0;\n  background-color: #212121 !important;\n  border-radius: 30px;\n  width: auto;\n  max-width: 100%;\n}\n\n.tableDiv[_ngcontent-%COMP%] {\n  height: 58vh;\n  display: grid;\n  place-items: center;\n}\n\n.headerCell[_ngcontent-%COMP%] {\n  color: white !important;\n  font-size: 28px;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n  color: white !important;\n  font-size: 20px;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  font-size: 20px;\n  overflow: hidden;\n  display: flex;\n  color: white !important;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  margin-left: auto;\n  text-align: right;\n  padding: 16px;\n  color: white !important;\n}\n\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  color: white !important;\n}\n\n.borderRadius[_ngcontent-%COMP%] {\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvY29udGFjdHMvdXNlci1jb250YWN0cy91c2VyLWNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvY29udGFjdHMvdXNlci1jb250YWN0cy91c2VyLWNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkRBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvY29udGFjdHMvdXNlci1jb250YWN0cy91c2VyLWNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHVybCgnc3JjL2Fzc2V0cy9pbWcvY29udGFjdHMuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjEgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnRhYmxlRGl2IHtcbiAgaGVpZ2h0OiA1OHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyQ2VsbCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcbiAgb3BhY2l0eTogMC41O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlclJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4iLCIuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwic3JjL2Fzc2V0cy9pbWcvY29udGFjdHMuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi50YWJsZURpdiB7XG4gIGhlaWdodDogNTh2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlckNlbGwge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiAxNnB4O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXJSYWRpdXMge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-contacts',
                templateUrl: './user-contacts.component.html',
                styleUrls: ['./user-contacts.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('detailExpand', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0px', minHeight: '0' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
            }]
    }], function () { return [{ type: _utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/never-forget-atext/events/contact-events/contact-events.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/never-forget-atext/events/contact-events/contact-events.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ContactEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEventsComponent", function() { return ContactEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utilities_services_neverForgetAText_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/services/neverForgetAText/events.service */ "./src/app/utilities/services/neverForgetAText/events.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");








function ContactEventsComponent_table_8_tr_7_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function ContactEventsComponent_table_8_tr_7_Template_tr_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r118); const trigger_r116 = ctx.$implicit; const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r117.routeToEdit(trigger_r116 == null ? null : trigger_r116.eventID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactEventsComponent_table_8_tr_7_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r118); const trigger_r116 = ctx.$implicit; const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r119.deleteEvent(trigger_r116 == null ? null : trigger_r116.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trigger_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](trigger_r116 == null ? null : trigger_r116.event == null ? null : trigger_r116.event.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](trigger_r116 == null ? null : trigger_r116.date);
} }
function ContactEventsComponent_table_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ContactEventsComponent_table_8_tr_7_Template, 9, 2, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r114.triggers);
} }
const _c0 = function () { return ["/newEvent"]; };
const _c1 = function (a0) { return { "cid": a0 }; };
class ContactEventsComponent {
    constructor(eventsService, router) {
        this.eventsService = eventsService;
        this.router = router;
        this.triggers = [];
        const queryString = window.location.search;
        const urlParamOne = new URLSearchParams(queryString);
        this.contactID = urlParamOne.get('cid');
    }
    ngOnInit() {
        this.getContactEvents();
    }
    getContactEvents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.triggers = yield this.eventsService.getContactEvents(this.contactID);
        });
    }
    routeToEdit(eventID) {
        this.router.navigate(['editEvent'], { queryParams: { 'evID': eventID } });
    }
    deleteEvent(triggerID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.eventsService.deleteEvent(triggerID);
            location.reload();
        });
    }
}
ContactEventsComponent.ɵfac = function ContactEventsComponent_Factory(t) { return new (t || ContactEventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ContactEventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactEventsComponent, selectors: [["app-contact-events"]], decls: 9, vars: 6, consts: [["href", "https://fonts.googleapis.com/css2?family=Almarai&family=Krona+One&display=swap", "rel", "stylesheet"], ["id", "container-bild"], ["src", "assets/img/eventsBackground.jpg", "id", "img-bild"], ["mat-raised-button", "", 3, "routerLink", "queryParams"], ["class", "mat-elevation-z4", 4, "ngIf"], [1, "mat-elevation-z4"], ["class", "element-row", 3, "dblclick", 4, "ngFor", "ngForOf"], [1, "element-row", 3, "dblclick"], ["mat-raised-button", "", "mat-icon-button", "", 3, "click"]], template: function ContactEventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Create new event ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ContactEventsComponent_table_8_Template, 8, 1, "table", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, ctx.contactID));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.triggers == null ? null : ctx.triggers.length);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["table[_ngcontent-%COMP%] {\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin: 150px auto 7em;\n  background-color: #212121 !important;\n  border-radius: 30px;\n}\n\ntr.element-row[_ngcontent-%COMP%]:hover {\n  background: #9561E2;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 17px;\n  letter-spacing: 2px;\n}\n\ntd[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 20px;\n  color: white;\n}\n\n#container-bild[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n\n\n#img-bild[_ngcontent-%COMP%] {\n  z-index: -1;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  -webkit-filter: brightness(100%);\n          filter: brightness(100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvZXZlbnRzL2NvbnRhY3QtZXZlbnRzL2NvbnRhY3QtZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvZXZlbnRzL2NvbnRhY3QtZXZlbnRzL2NvbnRhY3QtZXZlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUEsOEJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL25ldmVyLWZvcmdldC1hdGV4dC9ldmVudHMvY29udGFjdC1ldmVudHMvY29udGFjdC1ldmVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBtYXJnaW46IDE1MHB4IGF1dG8gN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbnRyLmVsZW1lbnQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzk1NjFFMjtcbn1cblxudGgge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbnRkIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxudGgsIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jY29udGFpbmVyLWJpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi8qIHBpY3R1cmUgaW4gbWFpbi1jb250YWluZXIgKi9cbiNpbWctYmlsZCB7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xufVxuIiwidGFibGUge1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiAxNTBweCBhdXRvIDdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG50ci5lbGVtZW50LXJvdzpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM5NTYxRTI7XG59XG5cbnRoIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG50ZCB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbnRoLCB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI2NvbnRhaW5lci1iaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBwaWN0dXJlIGluIG1haW4tY29udGFpbmVyICovXG4jaW1nLWJpbGQge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactEventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contact-events',
                templateUrl: './contact-events.component.html',
                styleUrls: ['./contact-events.component.scss']
            }]
    }], function () { return [{ type: _utilities_services_neverForgetAText_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/never-forget-atext/events/default-events/default-events.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/never-forget-atext/events/default-events/default-events.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DefaultEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultEventsComponent", function() { return DefaultEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utilities_services_neverForgetAText_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/services/neverForgetAText/events.service */ "./src/app/utilities/services/neverForgetAText/events.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function DefaultEventsComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function DefaultEventsComponent_tr_6_Template_tr_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const event_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.routeToEdit(event_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r1.trigger.date);
} }
class DefaultEventsComponent {
    constructor(eventsService, router) {
        this.eventsService = eventsService;
        this.router = router;
    }
    ngOnInit() {
        this.getDefaultEvents();
    }
    getDefaultEvents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.events = yield this.eventsService.getDefaultEvents();
        });
    }
    routeToEdit(eventID) {
        this.router.navigate(['editEvent'], { queryParams: { 'evID': eventID } });
    }
}
DefaultEventsComponent.ɵfac = function DefaultEventsComponent_Factory(t) { return new (t || DefaultEventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DefaultEventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DefaultEventsComponent, selectors: [["app-default-events"]], decls: 7, vars: 1, consts: [[1, "mat-elevation-z4"], ["class", "element-row", 3, "dblclick", 4, "ngFor", "ngForOf"], [1, "element-row", 3, "dblclick"]], template: function DefaultEventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DefaultEventsComponent_tr_6_Template, 5, 2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.events);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["table[_ngcontent-%COMP%] {\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin-bottom: 7em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\ntr.element-row[_ngcontent-%COMP%]:hover {\n  background: #9561E2;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 17px;\n  letter-spacing: 2px;\n}\n\ntd[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvZXZlbnRzL2RlZmF1bHQtZXZlbnRzL2RlZmF1bHQtZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvZXZlbnRzL2RlZmF1bHQtZXZlbnRzL2RlZmF1bHQtZXZlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbmV2ZXItZm9yZ2V0LWF0ZXh0L2V2ZW50cy9kZWZhdWx0LWV2ZW50cy9kZWZhdWx0LWV2ZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbi1ib3R0b206IDdlbTtcbiAgbWFyZ2luLWxlZnQ6YXV0bztcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG59XG5cbnRyLmVsZW1lbnQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzk1NjFFMjtcbn1cblxudGgge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbnRkIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxudGgsIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMjBweDtcbn1cbiIsInRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbi1ib3R0b206IDdlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxudHIuZWxlbWVudC1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjOTU2MUUyO1xufVxuXG50aCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxudGQge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG50aCwgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultEventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-default-events',
                templateUrl: './default-events.component.html',
                styleUrls: ['./default-events.component.scss']
            }]
    }], function () { return [{ type: _utilities_services_neverForgetAText_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/never-forget-atext/events/edit-events/edit-events.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/never-forget-atext/events/edit-events/edit-events.component.ts ***!
  \********************************************************************************/
/*! exports provided: EditEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEventsComponent", function() { return EditEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utilities_services_neverForgetAText_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/services/neverForgetAText/events.service */ "./src/app/utilities/services/neverForgetAText/events.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event-form/event-form.component */ "./src/app/never-forget-atext/events/event-form/event-form.component.ts");






function EditEventsComponent_app_event_form_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-event-form", 1);
} if (rf & 2) {
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("eventToEdit", ctx_r120.eventToEdit);
} }
class EditEventsComponent {
    constructor(eventsService) {
        this.eventsService = eventsService;
        const queryString = window.location.search;
        const urlParamOne = new URLSearchParams(queryString);
        this.eventID = urlParamOne.get('evID');
    }
    ngOnInit() {
        this.getEvent(this.eventID);
    }
    getEvent(eventID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.eventToEdit = yield this.eventsService.getEvent(eventID);
        });
    }
}
EditEventsComponent.ɵfac = function EditEventsComponent_Factory(t) { return new (t || EditEventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"])); };
EditEventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditEventsComponent, selectors: [["app-edit-events"]], decls: 1, vars: 1, consts: [[3, "eventToEdit", 4, "ngIf"], [3, "eventToEdit"]], template: function EditEventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EditEventsComponent_app_event_form_0_Template, 1, 1, "app-event-form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.eventToEdit);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_4__["EventFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldmVyLWZvcmdldC1hdGV4dC9ldmVudHMvZWRpdC1ldmVudHMvZWRpdC1ldmVudHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditEventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-edit-events',
                templateUrl: './edit-events.component.html',
                styleUrls: ['./edit-events.component.scss']
            }]
    }], function () { return [{ type: _utilities_services_neverForgetAText_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/never-forget-atext/events/event-form/event-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/never-forget-atext/events/event-form/event-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: EventFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFormComponent", function() { return EventFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _utilities_services_neverForgetAText_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/services/neverForgetAText/events.service */ "./src/app/utilities/services/neverForgetAText/events.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");














function EventFormComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eventRepeatType_r126 = ctx.$implicit;
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r125.typeEventRepeat ? ctx_r125.typeEventRepeat : eventRepeatType_r126.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eventRepeatType_r126.viewValue);
} }
class EventFormComponent {
    constructor(snackBar, eventsService, router, matNativeDateModule) {
        this.snackBar = snackBar;
        this.eventsService = eventsService;
        this.router = router;
        this.matNativeDateModule = matNativeDateModule;
        this.eventRepeatTypes = [
            { value: 1, viewValue: 'Day' },
            { value: 2, viewValue: 'Week' },
            { value: 3, viewValue: 'Month' },
            { value: 4, viewValue: '30 Days' },
            { value: 5, viewValue: 'Year' },
        ];
        const queryString = window.location.search;
        const urlParamOne = new URLSearchParams(queryString);
        this.contactID = urlParamOne.get('cid');
    }
    ngOnInit() {
        this.editOrNew();
    }
    editOrNew() {
        if (this.eventToEdit) {
            this.eventName = this.eventToEdit.name ? this.eventToEdit.name : '';
            this.eventBody = this.eventToEdit.body ? this.eventToEdit.body : '';
            this.eventDate = this.eventToEdit.trigger.date ? this.eventToEdit.trigger.date : '';
            this.typeEventRepeat = this.eventToEdit.repeat_type ? this.eventToEdit.repeat_type : '';
        }
    }
    getCurrentUser() {
        this.userID = sessionStorage.id;
    }
    saveForm() {
        this.getCurrentUser();
        if (!this.eventName) {
            alert('Event name required');
        }
        if (!this.eventDate) {
            alert('Event date required');
        }
        if (!this.eventBody) {
            alert('Event body required');
        }
        else {
            let formData = new FormData();
            formData.append('name', this.eventName ? this.eventName : '');
            formData.append('body', this.eventBody ? this.eventBody : '');
            formData.append('date', this.eventDate ? this.eventDate : '');
            formData.append('contactID', this.contactID ? this.contactID : '');
            formData.append('userID', this.userID);
            formData.append('repeat_type', this.typeEventRepeat ? this.typeEventRepeat : '');
            let eventID = false;
            let masterID = '0';
            if (typeof this.eventToEdit === 'object') {
                eventID = this.eventToEdit.id;
                if (this.eventToEdit.id === masterID) {
                    eventID = false;
                }
            }
            this.eventsService.saveEvent(formData, eventID);
            this.snackBar.open('Saved', 'X', {
                duration: 4000
            });
            this.router.navigate(['UserEvents']);
        }
    }
}
EventFormComponent.ɵfac = function EventFormComponent_Factory(t) { return new (t || EventFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"])); };
EventFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventFormComponent, selectors: [["app-event-form"]], inputs: { eventToEdit: "eventToEdit" }, decls: 28, vars: 7, consts: [[1, "margin-top"], [1, "line-width"], ["matInput", "", "required", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "required", "", 3, "ngModel", "matDatepicker", "ngModelChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"]], template: function EventFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Event Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventFormComponent_Template_input_ngModelChange_4_listener($event) { return ctx.eventName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Choose a date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventFormComponent_Template_input_ngModelChange_9_listener($event) { return ctx.eventDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-datepicker-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-datepicker", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventFormComponent_Template_textarea_ngModelChange_17_listener($event) { return ctx.eventBody = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Repeat Every:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventFormComponent_Template_mat_select_ngModelChange_22_listener($event) { return ctx.typeEventRepeat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EventFormComponent_mat_option_23_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventFormComponent_Template_button_click_25_listener() { return ctx.saveForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.eventName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.eventDate)("matDatepicker", _r124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.eventBody);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.typeEventRepeat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.eventRepeatTypes);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatOption"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 30em;\n}\n\ndiv[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 15em;\n  width: 30em;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvZXZlbnRzL2V2ZW50LWZvcm0vZXZlbnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmV2ZXItZm9yZ2V0LWF0ZXh0L2V2ZW50cy9ldmVudC1mb3JtL2V2ZW50LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL25ldmVyLWZvcmdldC1hdGV4dC9ldmVudHMvZXZlbnQtZm9ybS9ldmVudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMzBlbTtcbn1cblxuZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZXh0YXJlYSB7XG4gIGhlaWdodDogMTVlbTtcbiAgd2lkdGg6IDMwZW07XG59XG5cbi5tYXJnaW4tdG9wIHtcbiAgbWFyZ2luLXRvcDogN2VtO1xufVxuIiwibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMzBlbTtcbn1cblxuZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZXh0YXJlYSB7XG4gIGhlaWdodDogMTVlbTtcbiAgd2lkdGg6IDMwZW07XG59XG5cbi5tYXJnaW4tdG9wIHtcbiAgbWFyZ2luLXRvcDogN2VtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-form',
                templateUrl: './event-form.component.html',
                styleUrls: ['./event-form.component.scss']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }, { type: _utilities_services_neverForgetAText_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"] }]; }, { eventToEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/never-forget-atext/events/new-event/new-event.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/never-forget-atext/events/new-event/new-event.component.ts ***!
  \****************************************************************************/
/*! exports provided: NewEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEventComponent", function() { return NewEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event-form/event-form.component */ "./src/app/never-forget-atext/events/event-form/event-form.component.ts");



class NewEventComponent {
    constructor() {
        const queryString = window.location.search;
        const urlParamOne = new URLSearchParams(queryString);
        this.contactID = urlParamOne.get('cid');
    }
    ngOnInit() {
    }
}
NewEventComponent.ɵfac = function NewEventComponent_Factory(t) { return new (t || NewEventComponent)(); };
NewEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewEventComponent, selectors: [["app-new-event"]], decls: 1, vars: 0, template: function NewEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-event-form");
    } }, directives: [_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_1__["EventFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldmVyLWZvcmdldC1hdGV4dC9ldmVudHMvbmV3LWV2ZW50L25ldy1ldmVudC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-event',
                templateUrl: './new-event.component.html',
                styleUrls: ['./new-event.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/never-forget-atext/events/user-events/user-events.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/never-forget-atext/events/user-events/user-events.component.ts ***!
  \********************************************************************************/
/*! exports provided: UserEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEventsComponent", function() { return UserEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utilities_services_neverForgetAText_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/services/neverForgetAText/events.service */ "./src/app/utilities/services/neverForgetAText/events.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function UserEventsComponent_table_6_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r123.id ? event_r123.id : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r123.name ? event_r123.name : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r123.body ? event_r123.body : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r123.userID ? event_r123.userID : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](event_r123.trigger.date ? event_r123.trigger.date : "");
} }
function UserEventsComponent_table_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "useriD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UserEventsComponent_table_6_tr_12_Template, 11, 5, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r121.events);
} }
class UserEventsComponent {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    ngOnInit() {
        this.getAllActiveUserEvents();
    }
    getAllActiveUserEvents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.events = yield this.eventsService.getAllActiveUserEvents(sessionStorage.id);
        });
    }
}
UserEventsComponent.ɵfac = function UserEventsComponent_Factory(t) { return new (t || UserEventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"])); };
UserEventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserEventsComponent, selectors: [["app-user-events"]], decls: 7, vars: 1, consts: [["href", "https://fonts.googleapis.com/css2?family=Almarai&family=Krona+One&display=swap", "rel", "stylesheet"], ["id", "container-bild"], ["src", "assets/img/eventsBackground.jpg", "id", "img-bild"], [2, "background-color", "white"], [4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function UserEventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UserEventsComponent_table_6_Template, 13, 1, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.events);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["table[_ngcontent-%COMP%] {\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin-bottom: 7em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#container-bild[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n\n\n#img-bild[_ngcontent-%COMP%] {\n  z-index: -1;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  -webkit-filter: brightness(65%);\n          filter: brightness(65%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvZXZlbnRzL3VzZXItZXZlbnRzL3VzZXItZXZlbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvZXZlbnRzL3VzZXItZXZlbnRzL3VzZXItZXZlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQSw4QkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbmV2ZXItZm9yZ2V0LWF0ZXh0L2V2ZW50cy91c2VyLWV2ZW50cy91c2VyLWV2ZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbi1ib3R0b206IDdlbTtcbiAgbWFyZ2luLWxlZnQ6YXV0bztcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG59XG5cbiNjb250YWluZXItYmlsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLyogcGljdHVyZSBpbiBtYWluLWNvbnRhaW5lciAqL1xuI2ltZy1iaWxkIHtcbiAgei1pbmRleDogLTE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoNjUlKTtcbn1cbiIsInRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbi1ib3R0b206IDdlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuI2NvbnRhaW5lci1iaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBwaWN0dXJlIGluIG1haW4tY29udGFpbmVyICovXG4jaW1nLWJpbGQge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg2NSUpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserEventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-events',
                templateUrl: './user-events.component.html',
                styleUrls: ['./user-events.component.scss']
            }]
    }], function () { return [{ type: _utilities_services_neverForgetAText_events_service__WEBPACK_IMPORTED_MODULE_2__["EventsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/never-forget-atext/messages/messages.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/never-forget-atext/messages/messages.component.ts ***!
  \*******************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/services/neverForgetAText/contact.service */ "./src/app/utilities/services/neverForgetAText/contact.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");













function MessagesComponent_header_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
    const _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _r177 == null ? null : _r177.selectedOptions == null ? null : _r177.selectedOptions.selected[0] == null ? null : _r177.selectedOptions.selected[0].value == null ? null : _r177.selectedOptions.selected[0].value.fname, " ", _r177 == null ? null : _r177.selectedOptions == null ? null : _r177.selectedOptions.selected[0] == null ? null : _r177.selectedOptions.selected[0].value == null ? null : _r177.selectedOptions.selected[0].value.lname, " ");
} }
function MessagesComponent_mat_list_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r181 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", user_r181)("selected", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", user_r181 == null ? null : user_r181.fname, " ", user_r181 == null ? null : user_r181.lname, " ");
} }
function MessagesComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sent_trigger_r182 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", sent_trigger_r182.event.body, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", sent_trigger_r182.event.created_at, " ");
} }
class MessagesComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.checked = false;
        this.disabled = false;
        this.color = 'primary';
        this.panelOpenState = false;
    }
    ngOnInit() {
        this.getContactsWithMessages();
    }
    getContactsWithMessages() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.usersAndMessages = yield this.contactService.getContactsWithMessages(sessionStorage.id);
        });
    }
    getSentTriggers(contact) {
        var _a, _b;
        if (((_b = (_a = contact) === null || _a === void 0 ? void 0 : _a.sent_triggers) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            return contact.sent_triggers;
        }
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 32, vars: 8, consts: [["href", "https://fonts.googleapis.com/css2?family=Almarai&family=Krona+One&display=swap", "rel", "stylesheet"], ["id", "container-bild"], ["src", "assets/img/contacts.jpg", "id", "img-bild"], ["id", "page", 1, "mat-elevation-z4"], ["class", "center", 4, "ngIf"], [1, "center", "messagesHeader"], ["mat-raised-button", ""], [1, "example-margin", 3, "color", "checked", "disabled", "ngModel", "ngModelChange"], ["matInput", "", "type", "text", "name", "search", "autocomplete", "off", "placeholder", "ex. pizza", "disabled", "", 1, "form-control"], [1, "contactNames", "contact", 3, "multiple"], ["contacts", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "center"], [4, "ngFor", "ngForOf"], ["contactMenu", "matMenu"], ["mat-menu-item", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "headerContactSelectedName"], [3, "value", "selected"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MessagesComponent_header_8_Template, 6, 3, "header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Bubble ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-slide-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MessagesComponent_Template_mat_slide_toggle_ngModelChange_13_listener($event) { return ctx.checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-selection-list", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, MessagesComponent_mat_list_option_23_Template, 2, 4, "mat-list-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "main", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MessagesComponent_div_25_Template, 6, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-menu", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Edit Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Delete Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r177 == null ? null : _r177.selectedOptions == null ? null : _r177.selectedOptions.selected[0] == null ? null : _r177.selectedOptions.selected[0].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.color)("checked", ctx.checked)("disabled", ctx.disabled)("ngModel", ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.usersAndMessages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getSentTriggers(_r177.selectedOptions.selected[0] == null ? null : _r177.selectedOptions.selected[0].value));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListOption"]], styles: ["#page[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 150px;\n  display: grid;\n  grid-template-areas: \"nav head\" \"nav  main\" \"nav  main\";\n  grid-template-rows: 50px 1fr 30px;\n  grid-template-columns: 250px 1fr;\n  width: 80%;\n  height: auto;\n  min-height: 600px;\n  background-color: whitesmoke;\n}\n\n#container-bild[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n\n\n#img-bild[_ngcontent-%COMP%] {\n  z-index: -1;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  -webkit-filter: brightness(65%);\n          filter: brightness(65%);\n}\n\n#page[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  grid-area: head;\n  border-bottom: grey solid 1px;\n  margin-top: 8px;\n}\n\n#page[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%] {\n  grid-area: nav;\n  margin-left: 2px;\n  border-right: grey solid 1px;\n}\n\n#page[_ngcontent-%COMP%]    > main[_ngcontent-%COMP%] {\n  grid-area: main;\n  margin-left: 25px;\n  margin-top: 50px;\n  margin-right: 25px;\n}\n\n.messagesHeader[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n}\n\n.contactNames[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 14px;\n  margin-right: 5px;\n}\n\n.contact[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  width: 100%;\n}\n\n.headerContactSelectedName[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25ldmVyLWZvcmdldC1hdGV4dC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1REFBQTtFQUdBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0EsOEJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7QUNGRjs7QURNQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSEY7O0FETUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvbmV2ZXItZm9yZ2V0LWF0ZXh0L21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2Uge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJuYXYgaGVhZFwiXG4gICAgICAgICAgICAgICAgICAgICAgIFwibmF2ICBtYWluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYgIG1haW5cIjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmciAzMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuXG4jY29udGFpbmVyLWJpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi8qIHBpY3R1cmUgaW4gbWFpbi1jb250YWluZXIgKi9cbiNpbWctYmlsZCB7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDY1JSk7XG59XG5cblxuI3BhZ2UgPiBoZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWQ7XG4gIGJvcmRlci1ib3R0b206IGdyZXkgc29saWQgMXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbiNwYWdlID4gbmF2IHtcbiAgZ3JpZC1hcmVhOiBuYXY7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIGJvcmRlci1yaWdodDogZ3JleSBzb2xpZCAxcHg7XG59XG5cbiNwYWdlID4gbWFpbiB7XG4gIGdyaWQtYXJlYTogbWFpbjtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLm1lc3NhZ2VzSGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb250YWN0TmFtZXMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY29udGFjdCB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXJDb250YWN0U2VsZWN0ZWROYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4iLCIjcGFnZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm5hdiBoZWFkXCIgXCJuYXYgIG1haW5cIiBcIm5hdiAgbWFpblwiO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyIDMwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4jY29udGFpbmVyLWJpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi8qIHBpY3R1cmUgaW4gbWFpbi1jb250YWluZXIgKi9cbiNpbWctYmlsZCB7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDY1JSk7XG59XG5cbiNwYWdlID4gaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkO1xuICBib3JkZXItYm90dG9tOiBncmV5IHNvbGlkIDFweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4jcGFnZSA+IG5hdiB7XG4gIGdyaWQtYXJlYTogbmF2O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBib3JkZXItcmlnaHQ6IGdyZXkgc29saWQgMXB4O1xufVxuXG4jcGFnZSA+IG1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi5tZXNzYWdlc0hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY29udGFjdE5hbWVzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvbnRhY3Qge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyQ29udGFjdFNlbGVjdGVkTmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-messages',
                templateUrl: './messages.component.html',
                styleUrls: ['./messages.component.scss']
            }]
    }], function () { return [{ type: _utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/never-forget-atext/messages/sent-trigger-bubble-style/sent-trigger-bubble-style.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/never-forget-atext/messages/sent-trigger-bubble-style/sent-trigger-bubble-style.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SentTriggerBubbleStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentTriggerBubbleStyleComponent", function() { return SentTriggerBubbleStyleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/services/neverForgetAText/contact.service */ "./src/app/utilities/services/neverForgetAText/contact.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function SentTriggerBubbleStyleComponent_header_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
    const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _r138 == null ? null : _r138.selectedOptions == null ? null : _r138.selectedOptions.selected[0] == null ? null : _r138.selectedOptions.selected[0].value == null ? null : _r138.selectedOptions.selected[0].value.fname, " ", _r138 == null ? null : _r138.selectedOptions == null ? null : _r138.selectedOptions.selected[0] == null ? null : _r138.selectedOptions.selected[0].value == null ? null : _r138.selectedOptions.selected[0].value.lname, " ");
} }
function SentTriggerBubbleStyleComponent_mat_list_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r142 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", user_r142)("selected", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", user_r142 == null ? null : user_r142.fname, " ", user_r142 == null ? null : user_r142.lname, " ");
} }
function SentTriggerBubbleStyleComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
} }
class SentTriggerBubbleStyleComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.panelOpenState = false;
    }
    ngOnInit() {
        this.getContactsWithMessages();
    }
    getContactsWithMessages() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.usersAndMessages = yield this.contactService.getContactsWithMessages(sessionStorage.id);
        });
    }
}
SentTriggerBubbleStyleComponent.ɵfac = function SentTriggerBubbleStyleComponent_Factory(t) { return new (t || SentTriggerBubbleStyleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"])); };
SentTriggerBubbleStyleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SentTriggerBubbleStyleComponent, selectors: [["app-sent-trigger-bubble-style"]], decls: 27, vars: 4, consts: [["href", "https://fonts.googleapis.com/css2?family=Almarai&family=Krona+One&display=swap", "rel", "stylesheet"], ["id", "container-bild"], ["src", "assets/img/contacts.jpg", "id", "img-bild"], ["id", "page", 1, "mat-elevation-z4"], ["class", "center", 4, "ngIf"], [1, "center", "messagesHeader"], ["matInput", "", "type", "text", "name", "search", "autocomplete", "off", "placeholder", "ex. pizza", "disabled", "", 1, "form-control"], [1, "contactNames", "contact", 3, "multiple"], ["contacts", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "center"], [4, "ngFor", "ngForOf"], ["contactMenu", "matMenu"], ["mat-menu-item", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "headerContactSelectedName"], [3, "value", "selected"]], template: function SentTriggerBubbleStyleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SentTriggerBubbleStyleComponent_header_7_Template, 6, 3, "header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-selection-list", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SentTriggerBubbleStyleComponent_mat_list_option_18_Template, 2, 4, "mat-list-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "main", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SentTriggerBubbleStyleComponent_div_20_Template, 1, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-menu", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Edit Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Delete Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r138 == null ? null : _r138.selectedOptions == null ? null : _r138.selectedOptions.selected[0] == null ? null : _r138.selectedOptions.selected[0].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.usersAndMessages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r138.selectedOptions.selected[0] == null ? null : _r138.selectedOptions.selected[0].value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListOption"]], styles: ["#page[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 150px;\n  display: grid;\n  grid-template-areas: \"nav head\" \"nav  main\" \"nav  main\";\n  grid-template-rows: 50px 1fr 30px;\n  grid-template-columns: 250px 1fr;\n  width: 80%;\n  height: calc(100vh - 127px);\n  overflow: hidden;\n}\n\n#container-bild[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n\n\n#img-bild[_ngcontent-%COMP%] {\n  z-index: -1;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  -webkit-filter: brightness(45%);\n          filter: brightness(45%);\n}\n\n#page[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  grid-area: head;\n  border-bottom: grey solid 1px;\n  margin-top: 8px;\n}\n\n#page[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%] {\n  grid-area: nav;\n  margin-left: 2px;\n  border-right: grey solid 1px;\n}\n\n#page[_ngcontent-%COMP%]    > main[_ngcontent-%COMP%] {\n  grid-area: main;\n  margin-left: 25px;\n  margin-top: 50px;\n  margin-right: 25px;\n}\n\n.messagesHeader[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n}\n\n.contactNames[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 14px;\n  margin-right: 5px;\n}\n\n.contact[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  width: 100%;\n}\n\n.headerContactSelectedName[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvbWVzc2FnZXMvc2VudC10cmlnZ2VyLWJ1YmJsZS1zdHlsZS9zZW50LXRyaWdnZXItYnViYmxlLXN0eWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvbWVzc2FnZXMvc2VudC10cmlnZ2VyLWJ1YmJsZS1zdHlsZS9zZW50LXRyaWdnZXItYnViYmxlLXN0eWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVEQUFBO0VBR0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBREtBLDhCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FDRkY7O0FETUE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0hGOztBRE1BO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL25ldmVyLWZvcmdldC1hdGV4dC9tZXNzYWdlcy9zZW50LXRyaWdnZXItYnViYmxlLXN0eWxlL3NlbnQtdHJpZ2dlci1idWJibGUtc3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm5hdiBoZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYgIG1haW5cIlxuICAgICAgICAgICAgICAgICAgICAgICBcIm5hdiAgbWFpblwiO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyIDMwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjdweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuI2NvbnRhaW5lci1iaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBwaWN0dXJlIGluIG1haW4tY29udGFpbmVyICovXG4jaW1nLWJpbGQge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg0NSUpO1xufVxuXG5cbiNwYWdlID4gaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkO1xuICBib3JkZXItYm90dG9tOiBncmV5IHNvbGlkIDFweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4jcGFnZSA+IG5hdiB7XG4gIGdyaWQtYXJlYTogbmF2O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBib3JkZXItcmlnaHQ6IGdyZXkgc29saWQgMXB4O1xufVxuXG4jcGFnZSA+IG1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi5tZXNzYWdlc0hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY29udGFjdE5hbWVzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvbnRhY3Qge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyQ29udGFjdFNlbGVjdGVkTmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuIiwiI3BhZ2Uge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJuYXYgaGVhZFwiIFwibmF2ICBtYWluXCIgXCJuYXYgIG1haW5cIjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmciAzMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTI3cHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jY29udGFpbmVyLWJpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi8qIHBpY3R1cmUgaW4gbWFpbi1jb250YWluZXIgKi9cbiNpbWctYmlsZCB7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDQ1JSk7XG59XG5cbiNwYWdlID4gaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkO1xuICBib3JkZXItYm90dG9tOiBncmV5IHNvbGlkIDFweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4jcGFnZSA+IG5hdiB7XG4gIGdyaWQtYXJlYTogbmF2O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBib3JkZXItcmlnaHQ6IGdyZXkgc29saWQgMXB4O1xufVxuXG4jcGFnZSA+IG1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi5tZXNzYWdlc0hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY29udGFjdE5hbWVzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvbnRhY3Qge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyQ29udGFjdFNlbGVjdGVkTmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SentTriggerBubbleStyleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-sent-trigger-bubble-style',
                templateUrl: './sent-trigger-bubble-style.component.html',
                styleUrls: ['./sent-trigger-bubble-style.component.scss']
            }]
    }], function () { return [{ type: _utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/never-forget-atext/messages/sent-trigger-selection-list-style/sent-trigger-selection-list-style.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/never-forget-atext/messages/sent-trigger-selection-list-style/sent-trigger-selection-list-style.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: SentTriggerSelectionListStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentTriggerSelectionListStyleComponent", function() { return SentTriggerSelectionListStyleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utilities/services/neverForgetAText/contact.service */ "./src/app/utilities/services/neverForgetAText/contact.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");












function SentTriggerSelectionListStyleComponent_header_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _r128 == null ? null : _r128.selectedOptions == null ? null : _r128.selectedOptions.selected[0] == null ? null : _r128.selectedOptions.selected[0].value == null ? null : _r128.selectedOptions.selected[0].value.fname, " ", _r128 == null ? null : _r128.selectedOptions == null ? null : _r128.selectedOptions.selected[0] == null ? null : _r128.selectedOptions.selected[0].value == null ? null : _r128.selectedOptions.selected[0].value.lname, " ");
} }
function SentTriggerSelectionListStyleComponent_mat_list_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r132 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", user_r132)("selected", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", user_r132 == null ? null : user_r132.fname, " ", user_r132 == null ? null : user_r132.lname, " ");
} }
function SentTriggerSelectionListStyleComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-accordion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-expansion-panel", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("opened", function SentTriggerSelectionListStyleComponent_div_14_Template_mat_expansion_panel_opened_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r135); const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r134.panelOpenState = true; })("closed", function SentTriggerSelectionListStyleComponent_div_14_Template_mat_expansion_panel_closed_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r135); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r136.panelOpenState = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-panel-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sent_trigger_r133 = ctx.$implicit;
    const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sent_trigger_r133 == null ? null : sent_trigger_r133.event == null ? null : sent_trigger_r133.event.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r130.fixDate(sent_trigger_r133 == null ? null : sent_trigger_r133.created_at), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sent_trigger_r133 == null ? null : sent_trigger_r133.event == null ? null : sent_trigger_r133.event.body);
} }
class SentTriggerSelectionListStyleComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.panelOpenState = false;
    }
    ngOnInit() {
        this.getContactsWithMessages();
    }
    getContactsWithMessages() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.usersAndMessages = yield this.contactService.getContactsWithMessages(sessionStorage.id);
            console.log(this.usersAndMessages);
        });
    }
    fixDate(epochTime) {
        let month = new Date(epochTime).getMonth();
        let day = new Date(epochTime).getDay();
        let year = new Date(epochTime).getFullYear();
        return month + '-' + day + '-' + year;
    }
}
SentTriggerSelectionListStyleComponent.ɵfac = function SentTriggerSelectionListStyleComponent_Factory(t) { return new (t || SentTriggerSelectionListStyleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"])); };
SentTriggerSelectionListStyleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SentTriggerSelectionListStyleComponent, selectors: [["app-sent-trigger-selection-list-style"]], decls: 21, vars: 4, consts: [["id", "page", 1, "mat-elevation-z4"], ["class", "center", 4, "ngIf"], [1, "center", "messagesHeader"], ["matInput", "", "type", "text", "name", "search", "autocomplete", "off", "placeholder", "ex. pizza", "disabled", "", 1, "form-control"], [1, "contactNames", "contact", 3, "multiple"], ["contacts", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "center"], [4, "ngFor", "ngForOf"], ["contactMenu", "matMenu"], ["mat-menu-item", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "headerContactSelectedName"], [3, "value", "selected"], [3, "opened", "closed"]], template: function SentTriggerSelectionListStyleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SentTriggerSelectionListStyleComponent_header_1_Template, 6, 3, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-selection-list", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SentTriggerSelectionListStyleComponent_mat_list_option_12_Template, 2, 4, "mat-list-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "main", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SentTriggerSelectionListStyleComponent_div_14_Template, 10, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-menu", null, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Edit Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Delete Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r128 == null ? null : _r128.selectedOptions == null ? null : _r128.selectedOptions.selected[0] == null ? null : _r128.selectedOptions.selected[0].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.usersAndMessages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r128 == null ? null : _r128.selectedOptions == null ? null : _r128.selectedOptions.selected[0] == null ? null : _r128.selectedOptions.selected[0].value == null ? null : _r128.selectedOptions.selected[0].value.sent_triggers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListOption"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelDescription"]], styles: ["#page[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 150px;\n  display: grid;\n  grid-template-areas: \"nav head\" \"nav  main\" \"nav  main\";\n  grid-template-rows: 50px 1fr 30px;\n  grid-template-columns: 250px 1fr;\n  width: 80%;\n  height: calc(100vh - 127px);\n  overflow: hidden;\n}\n\n#page[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  grid-area: head;\n  border-bottom: grey solid 1px;\n  margin-top: 8px;\n}\n\n#page[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%] {\n  grid-area: nav;\n  margin-left: 2px;\n  border-right: grey solid 1px;\n}\n\n#page[_ngcontent-%COMP%]    > main[_ngcontent-%COMP%] {\n  grid-area: main;\n  margin-left: 25px;\n  margin-top: 50px;\n  margin-right: 25px;\n}\n\n.messagesHeader[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n}\n\n.contactNames[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 14px;\n  margin-right: 5px;\n}\n\n.contact[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  width: 100%;\n}\n\n.headerContactSelectedName[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n#container-bild[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n\n\n#img-bild[_ngcontent-%COMP%] {\n  z-index: -1;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  -webkit-filter: brightness(45%);\n          filter: brightness(45%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvbWVzc2FnZXMvc2VudC10cmlnZ2VyLXNlbGVjdGlvbi1saXN0LXN0eWxlL3NlbnQtdHJpZ2dlci1zZWxlY3Rpb24tbGlzdC1zdHlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmV2ZXItZm9yZ2V0LWF0ZXh0L21lc3NhZ2VzL3NlbnQtdHJpZ2dlci1zZWxlY3Rpb24tbGlzdC1zdHlsZS9zZW50LXRyaWdnZXItc2VsZWN0aW9uLWxpc3Qtc3R5bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdURBQUE7RUFHQSxpQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQSw4QkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvbmV2ZXItZm9yZ2V0LWF0ZXh0L21lc3NhZ2VzL3NlbnQtdHJpZ2dlci1zZWxlY3Rpb24tbGlzdC1zdHlsZS9zZW50LXRyaWdnZXItc2VsZWN0aW9uLWxpc3Qtc3R5bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm5hdiBoZWFkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYgIG1haW5cIlxuICAgICAgICAgICAgICAgICAgICAgICBcIm5hdiAgbWFpblwiO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyIDMwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjdweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNwYWdlID4gaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkO1xuICBib3JkZXItYm90dG9tOiBncmV5IHNvbGlkIDFweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4jcGFnZSA+IG5hdiB7XG4gIGdyaWQtYXJlYTogbmF2O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBib3JkZXItcmlnaHQ6IGdyZXkgc29saWQgMXB4O1xufVxuXG4jcGFnZSA+IG1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi5tZXNzYWdlc0hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY29udGFjdE5hbWVzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvbnRhY3Qge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyQ29udGFjdFNlbGVjdGVkTmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2NvbnRhaW5lci1iaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBwaWN0dXJlIGluIG1haW4tY29udGFpbmVyICovXG4jaW1nLWJpbGQge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg0NSUpO1xufVxuXG4iLCIjcGFnZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDE1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm5hdiBoZWFkXCIgXCJuYXYgIG1haW5cIiBcIm5hdiAgbWFpblwiO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyIDMwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjdweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNwYWdlID4gaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkO1xuICBib3JkZXItYm90dG9tOiBncmV5IHNvbGlkIDFweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4jcGFnZSA+IG5hdiB7XG4gIGdyaWQtYXJlYTogbmF2O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBib3JkZXItcmlnaHQ6IGdyZXkgc29saWQgMXB4O1xufVxuXG4jcGFnZSA+IG1haW4ge1xuICBncmlkLWFyZWE6IG1haW47XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi5tZXNzYWdlc0hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY29udGFjdE5hbWVzIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvbnRhY3Qge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyQ29udGFjdFNlbGVjdGVkTmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2NvbnRhaW5lci1iaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBwaWN0dXJlIGluIG1haW4tY29udGFpbmVyICovXG4jaW1nLWJpbGQge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg0NSUpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SentTriggerSelectionListStyleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-sent-trigger-selection-list-style',
                templateUrl: './sent-trigger-selection-list-style.component.html',
                styleUrls: ['./sent-trigger-selection-list-style.component.scss']
            }]
    }], function () { return [{ type: _utilities_services_neverForgetAText_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/never-forget-atext/never-forget-atext-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/never-forget-atext/never-forget-atext-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: NeverForgetATextRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeverForgetATextRoutingModule", function() { return NeverForgetATextRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _never_forget_atext_never_forget_atext_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./never-forget-atext/never-forget-atext.component */ "./src/app/never-forget-atext/never-forget-atext/never-forget-atext.component.ts");
/* harmony import */ var _contacts_user_contacts_user_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts/user-contacts/user-contacts.component */ "./src/app/never-forget-atext/contacts/user-contacts/user-contacts.component.ts");
/* harmony import */ var _contacts_create_contact_create_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts/create-contact/create-contact.component */ "./src/app/never-forget-atext/contacts/create-contact/create-contact.component.ts");
/* harmony import */ var _events_contact_events_contact_events_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./events/contact-events/contact-events.component */ "./src/app/never-forget-atext/events/contact-events/contact-events.component.ts");
/* harmony import */ var _events_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./events/new-event/new-event.component */ "./src/app/never-forget-atext/events/new-event/new-event.component.ts");
/* harmony import */ var _events_edit_events_edit_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events/edit-events/edit-events.component */ "./src/app/never-forget-atext/events/edit-events/edit-events.component.ts");
/* harmony import */ var _events_default_events_default_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events/default-events/default-events.component */ "./src/app/never-forget-atext/events/default-events/default-events.component.ts");
/* harmony import */ var _events_user_events_user_events_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events/user-events/user-events.component */ "./src/app/never-forget-atext/events/user-events/user-events.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/never-forget-atext/messages/messages.component.ts");













const routes = [
    {
        path: '',
        component: _never_forget_atext_never_forget_atext_component__WEBPACK_IMPORTED_MODULE_2__["NeverForgetATextComponent"]
    },
    {
        path: 'contacts',
        component: _contacts_user_contacts_user_contacts_component__WEBPACK_IMPORTED_MODULE_3__["UserContactsComponent"]
    },
    {
        path: 'createContact',
        component: _contacts_create_contact_create_contact_component__WEBPACK_IMPORTED_MODULE_4__["CreateContactComponent"]
    },
    {
        path: 'contactEvents',
        component: _events_contact_events_contact_events_component__WEBPACK_IMPORTED_MODULE_5__["ContactEventsComponent"]
    },
    {
        path: 'newEvent',
        component: _events_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_6__["NewEventComponent"]
    },
    {
        path: 'editEvent',
        component: _events_edit_events_edit_events_component__WEBPACK_IMPORTED_MODULE_7__["EditEventsComponent"]
    },
    {
        path: 'default',
        component: _events_default_events_default_events_component__WEBPACK_IMPORTED_MODULE_8__["DefaultEventsComponent"]
    },
    {
        path: 'UserEvents',
        component: _events_user_events_user_events_component__WEBPACK_IMPORTED_MODULE_9__["UserEventsComponent"]
    },
    {
        path: 'messages',
        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__["MessagesComponent"]
    }
];
class NeverForgetATextRoutingModule {
}
NeverForgetATextRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NeverForgetATextRoutingModule });
NeverForgetATextRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NeverForgetATextRoutingModule_Factory(t) { return new (t || NeverForgetATextRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NeverForgetATextRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NeverForgetATextRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/never-forget-atext/never-forget-atext.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/never-forget-atext/never-forget-atext.module.ts ***!
  \*****************************************************************/
/*! exports provided: NeverForgetATextModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeverForgetATextModule", function() { return NeverForgetATextModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _never_forget_atext_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./never-forget-atext-routing.module */ "./src/app/never-forget-atext/never-forget-atext-routing.module.ts");
/* harmony import */ var _never_forget_atext_never_forget_atext_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./never-forget-atext/never-forget-atext.component */ "./src/app/never-forget-atext/never-forget-atext/never-forget-atext.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _contacts_user_contacts_user_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts/user-contacts/user-contacts.component */ "./src/app/never-forget-atext/contacts/user-contacts/user-contacts.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _contacts_create_contact_create_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contacts/create-contact/create-contact.component */ "./src/app/never-forget-atext/contacts/create-contact/create-contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _contacts_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contacts/contact-form/contact-form.component */ "./src/app/never-forget-atext/contacts/contact-form/contact-form.component.ts");
/* harmony import */ var _events_edit_events_edit_events_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./events/edit-events/edit-events.component */ "./src/app/never-forget-atext/events/edit-events/edit-events.component.ts");
/* harmony import */ var _events_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./events/new-event/new-event.component */ "./src/app/never-forget-atext/events/new-event/new-event.component.ts");
/* harmony import */ var _events_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./events/event-form/event-form.component */ "./src/app/never-forget-atext/events/event-form/event-form.component.ts");
/* harmony import */ var _events_contact_events_contact_events_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./events/contact-events/contact-events.component */ "./src/app/never-forget-atext/events/contact-events/contact-events.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _events_user_events_user_events_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./events/user-events/user-events.component */ "./src/app/never-forget-atext/events/user-events/user-events.component.ts");
/* harmony import */ var _events_default_events_default_events_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./events/default-events/default-events.component */ "./src/app/never-forget-atext/events/default-events/default-events.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _messages_sent_trigger_selection_list_style_sent_trigger_selection_list_style_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./messages/sent-trigger-selection-list-style/sent-trigger-selection-list-style.component */ "./src/app/never-forget-atext/messages/sent-trigger-selection-list-style/sent-trigger-selection-list-style.component.ts");
/* harmony import */ var _messages_sent_trigger_bubble_style_sent_trigger_bubble_style_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./messages/sent-trigger-bubble-style/sent-trigger-bubble-style.component */ "./src/app/never-forget-atext/messages/sent-trigger-bubble-style/sent-trigger-bubble-style.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _contacts_edit_contact_dialog_edit_contact_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./contacts/edit-contact-dialog/edit-contact-dialog.component */ "./src/app/never-forget-atext/contacts/edit-contact-dialog/edit-contact-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _contacts_create_contact_dialog_create_contact_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./contacts/create-contact-dialog/create-contact-dialog.component */ "./src/app/never-forget-atext/contacts/create-contact-dialog/create-contact-dialog.component.ts");































class NeverForgetATextModule {
}
NeverForgetATextModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NeverForgetATextModule });
NeverForgetATextModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NeverForgetATextModule_Factory(t) { return new (t || NeverForgetATextModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _never_forget_atext_routing_module__WEBPACK_IMPORTED_MODULE_2__["NeverForgetATextRoutingModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NeverForgetATextModule, { declarations: [_never_forget_atext_never_forget_atext_component__WEBPACK_IMPORTED_MODULE_3__["NeverForgetATextComponent"],
        _contacts_user_contacts_user_contacts_component__WEBPACK_IMPORTED_MODULE_5__["UserContactsComponent"],
        _contacts_create_contact_create_contact_component__WEBPACK_IMPORTED_MODULE_9__["CreateContactComponent"],
        _contacts_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_11__["ContactFormComponent"],
        _events_edit_events_edit_events_component__WEBPACK_IMPORTED_MODULE_12__["EditEventsComponent"],
        _events_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_13__["NewEventComponent"],
        _events_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_14__["EventFormComponent"],
        _events_contact_events_contact_events_component__WEBPACK_IMPORTED_MODULE_15__["ContactEventsComponent"],
        _events_user_events_user_events_component__WEBPACK_IMPORTED_MODULE_17__["UserEventsComponent"],
        _events_default_events_default_events_component__WEBPACK_IMPORTED_MODULE_18__["DefaultEventsComponent"],
        _messages_sent_trigger_bubble_style_sent_trigger_bubble_style_component__WEBPACK_IMPORTED_MODULE_24__["SentTriggerBubbleStyleComponent"],
        _messages_sent_trigger_selection_list_style_sent_trigger_selection_list_style_component__WEBPACK_IMPORTED_MODULE_23__["SentTriggerSelectionListStyleComponent"],
        _contacts_edit_contact_dialog_edit_contact_dialog_component__WEBPACK_IMPORTED_MODULE_27__["EditContactDialogComponent"],
        _contacts_create_contact_dialog_create_contact_dialog_component__WEBPACK_IMPORTED_MODULE_29__["CreateContactDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _never_forget_atext_routing_module__WEBPACK_IMPORTED_MODULE_2__["NeverForgetATextRoutingModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"]], exports: [_messages_sent_trigger_bubble_style_sent_trigger_bubble_style_component__WEBPACK_IMPORTED_MODULE_24__["SentTriggerBubbleStyleComponent"],
        _messages_sent_trigger_selection_list_style_sent_trigger_selection_list_style_component__WEBPACK_IMPORTED_MODULE_23__["SentTriggerSelectionListStyleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NeverForgetATextModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _never_forget_atext_never_forget_atext_component__WEBPACK_IMPORTED_MODULE_3__["NeverForgetATextComponent"],
                    _contacts_user_contacts_user_contacts_component__WEBPACK_IMPORTED_MODULE_5__["UserContactsComponent"],
                    _contacts_create_contact_create_contact_component__WEBPACK_IMPORTED_MODULE_9__["CreateContactComponent"],
                    _contacts_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_11__["ContactFormComponent"],
                    _events_edit_events_edit_events_component__WEBPACK_IMPORTED_MODULE_12__["EditEventsComponent"],
                    _events_new_event_new_event_component__WEBPACK_IMPORTED_MODULE_13__["NewEventComponent"],
                    _events_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_14__["EventFormComponent"],
                    _events_contact_events_contact_events_component__WEBPACK_IMPORTED_MODULE_15__["ContactEventsComponent"],
                    _events_user_events_user_events_component__WEBPACK_IMPORTED_MODULE_17__["UserEventsComponent"],
                    _events_default_events_default_events_component__WEBPACK_IMPORTED_MODULE_18__["DefaultEventsComponent"],
                    _messages_sent_trigger_bubble_style_sent_trigger_bubble_style_component__WEBPACK_IMPORTED_MODULE_24__["SentTriggerBubbleStyleComponent"],
                    _messages_sent_trigger_selection_list_style_sent_trigger_selection_list_style_component__WEBPACK_IMPORTED_MODULE_23__["SentTriggerSelectionListStyleComponent"],
                    _contacts_edit_contact_dialog_edit_contact_dialog_component__WEBPACK_IMPORTED_MODULE_27__["EditContactDialogComponent"],
                    _contacts_create_contact_dialog_create_contact_dialog_component__WEBPACK_IMPORTED_MODULE_29__["CreateContactDialogComponent"],
                ],
                exports: [
                    _messages_sent_trigger_bubble_style_sent_trigger_bubble_style_component__WEBPACK_IMPORTED_MODULE_24__["SentTriggerBubbleStyleComponent"],
                    _messages_sent_trigger_selection_list_style_sent_trigger_selection_list_style_component__WEBPACK_IMPORTED_MODULE_23__["SentTriggerSelectionListStyleComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _never_forget_atext_routing_module__WEBPACK_IMPORTED_MODULE_2__["NeverForgetATextRoutingModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/never-forget-atext/never-forget-atext/never-forget-atext.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/never-forget-atext/never-forget-atext/never-forget-atext.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NeverForgetATextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeverForgetATextComponent", function() { return NeverForgetATextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NeverForgetATextComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NeverForgetATextComponent.ɵfac = function NeverForgetATextComponent_Factory(t) { return new (t || NeverForgetATextComponent)(); };
NeverForgetATextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NeverForgetATextComponent, selectors: [["app-never-forget-atext"]], decls: 13, vars: 2, consts: [["href", "https://fonts.googleapis.com/css2?family=Almarai&family=Krona+One&display=swap", "rel", "stylesheet"], ["id", "container-bild"], ["src", "assets/img/backgroundPhoto.jpeg", "id", "img-bild"], [1, "header", "verticalAlign"], [1, "header"], [3, "routerLink"]], template: function NeverForgetATextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Never Forget A Text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Contacts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Messages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/messages");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["#container-bild[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n\n\n#img-bild[_ngcontent-%COMP%] {\n  z-index: -1;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  -webkit-filter: brightness(65%);\n          filter: brightness(65%);\n}\n\n.header[_ngcontent-%COMP%] {\n  font-family: \"Krona One\", sans-serif;\n  letter-spacing: 1px;\n  font-weight: bold;\n  font-size: 65px;\n  color: white;\n  text-align: center !important;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 1px 25px;\n  font-family: \"Almarai\", sans-serif;\n  margin: 0.1em;\n  text-align: center !important;\n  color: white;\n  background-color: transparent;\n  font-size: 20px;\n  border: 1px solid white;\n}\n\n.verticalAlign[_ngcontent-%COMP%] {\n  padding-top: 200px;\n}\n\n.buttonTopMargin[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9uZXZlci1mb3JnZXQtYXRleHQvbmV2ZXItZm9yZ2V0LWF0ZXh0L25ldmVyLWZvcmdldC1hdGV4dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbmV2ZXItZm9yZ2V0LWF0ZXh0L25ldmVyLWZvcmdldC1hdGV4dC9uZXZlci1mb3JnZXQtYXRleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBLDhCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL25ldmVyLWZvcmdldC1hdGV4dC9uZXZlci1mb3JnZXQtYXRleHQvbmV2ZXItZm9yZ2V0LWF0ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lci1iaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBwaWN0dXJlIGluIG1haW4tY29udGFpbmVyICovXG4jaW1nLWJpbGQge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg2NSUpO1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6ICdLcm9uYSBPbmUnLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA2NXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAxcHggMjVweDtcbiAgZm9udC1mYW1pbHk6ICdBbG1hcmFpJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAuMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLnZlcnRpY2FsQWxpZ24ge1xuICBwYWRkaW5nLXRvcDogMjAwcHg7XG59XG5cbi5idXR0b25Ub3BNYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuIiwiI2NvbnRhaW5lci1iaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBwaWN0dXJlIGluIG1haW4tY29udGFpbmVyICovXG4jaW1nLWJpbGQge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg2NSUpO1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiS3JvbmEgT25lXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDY1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFweCAyNXB4O1xuICBmb250LWZhbWlseTogXCJBbG1hcmFpXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMC4xZW07XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4udmVydGljYWxBbGlnbiB7XG4gIHBhZGRpbmctdG9wOiAyMDBweDtcbn1cblxuLmJ1dHRvblRvcE1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NeverForgetATextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-never-forget-atext',
                templateUrl: './never-forget-atext.component.html',
                styleUrls: ['./never-forget-atext.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");



class PortfolioComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 15, vars: 0, consts: [["href", "https://fonts.googleapis.com/css2?family=Almarai&family=Krona+One&display=swap", "rel", "stylesheet"], ["id", "container-bild"], ["src", "assets/img/portfolioBackground.jpg", "id", "img-bild"], [1, "header", "verticalAlign"], [1, "header"], [1, "buttonTopMargin"], ["mat-raised-button", "", "disabled", "", 2, "color", "white"], [2, "font-size", "10px"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " PortFolio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "*Never Forget A Text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " *Button is disabled until ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " site is published. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], styles: ["#container-bild[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n\n\n#img-bild[_ngcontent-%COMP%] {\n  z-index: -1;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  -webkit-filter: brightness(30%);\n          filter: brightness(30%);\n}\n\n.header[_ngcontent-%COMP%] {\n  font-family: \"Krona One\", sans-serif;\n  letter-spacing: 1px;\n  font-weight: bold;\n  font-size: 65px;\n  color: white;\n  text-align: center !important;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 1px 25px;\n  font-family: \"Almarai\", sans-serif;\n  margin: 0.1em;\n  text-align: center !important;\n  color: white;\n  background-color: transparent;\n  font-size: 20px;\n  border: 1px solid white;\n}\n\n.verticalAlign[_ngcontent-%COMP%] {\n  padding-top: 200px;\n}\n\n.buttonTopMargin[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQSw4QkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lci1iaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBwaWN0dXJlIGluIG1haW4tY29udGFpbmVyICovXG4jaW1nLWJpbGQge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygzMCUpO1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6ICdLcm9uYSBPbmUnLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA2NXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAxcHggMjVweDtcbiAgZm9udC1mYW1pbHk6ICdBbG1hcmFpJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAuMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLnZlcnRpY2FsQWxpZ24ge1xuICBwYWRkaW5nLXRvcDogMjAwcHg7XG59XG5cbi5idXR0b25Ub3BNYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuIiwiI2NvbnRhaW5lci1iaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBwaWN0dXJlIGluIG1haW4tY29udGFpbmVyICovXG4jaW1nLWJpbGQge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygzMCUpO1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiS3JvbmEgT25lXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDY1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFweCAyNXB4O1xuICBmb250LWZhbWlseTogXCJBbG1hcmFpXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMC4xZW07XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4udmVydGljYWxBbGlnbiB7XG4gIHBhZGRpbmctdG9wOiAyMDBweDtcbn1cblxuLmJ1dHRvblRvcE1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["account"]; };
const _c1 = function () { return ["messagesSettings"]; };
class ProfileComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 15, vars: 4, consts: [["href", "https://fonts.googleapis.com/css2?family=Almarai&family=Krona+One&display=swap", "rel", "stylesheet"], ["id", "container-bild"], ["src", "assets/img/settings.jpeg", "id", "img-bild"], [1, "header", "verticalAlign"], [1, "header"], [3, "routerLink"], [1, "buttonTopMargin"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Messages Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["#container-bild[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n\n\n#img-bild[_ngcontent-%COMP%] {\n  z-index: -1;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  -webkit-filter: brightness(55%);\n          filter: brightness(55%);\n}\n\n.header[_ngcontent-%COMP%] {\n  font-family: \"Krona One\", sans-serif;\n  letter-spacing: 1px;\n  font-weight: bold;\n  font-size: 65px;\n  color: white;\n  text-align: center !important;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 1px 25px;\n  font-family: \"Almarai\", sans-serif;\n  text-align: center !important;\n  color: white;\n  background-color: transparent;\n  font-size: 20px;\n  border: 1px solid white;\n}\n\n.verticalAlign[_ngcontent-%COMP%] {\n  padding-top: 200px;\n}\n\n.buttonTopMargin[_ngcontent-%COMP%] {\n  margin-top: -30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBLDhCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FER0E7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyLWJpbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi8qIHBpY3R1cmUgaW4gbWFpbi1jb250YWluZXIgKi9cbiNpbWctYmlsZCB7XG4gIHotaW5kZXg6IC0xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDU1JSk7XG59XG5cblxuLmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiAnS3JvbmEgT25lJywgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogMXB4IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiAnQWxtYXJhaScsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4udmVydGljYWxBbGlnbiB7XG4gIHBhZGRpbmctdG9wOiAyMDBweDtcbn1cblxuLmJ1dHRvblRvcE1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuIiwiI2NvbnRhaW5lci1iaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBwaWN0dXJlIGluIG1haW4tY29udGFpbmVyICovXG4jaW1nLWJpbGQge1xuICB6LWluZGV4OiAtMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg1NSUpO1xufVxuXG4uaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiS3JvbmEgT25lXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDY1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDFweCAyNXB4O1xuICBmb250LWZhbWlseTogXCJBbG1hcmFpXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4udmVydGljYWxBbGlnbiB7XG4gIHBhZGRpbmctdG9wOiAyMDBweDtcbn1cblxuLmJ1dHRvblRvcE1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ResumeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 0, vars: 0, template: function ResumeComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/send-sms/send-sms.component.ts":
/*!************************************************!*\
  !*** ./src/app/send-sms/send-sms.component.ts ***!
  \************************************************/
/*! exports provided: SendSmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendSmsComponent", function() { return SendSmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utilities_services_neverForgetAText_send_sms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/services/neverForgetAText/send-sms.service */ "./src/app/utilities/services/neverForgetAText/send-sms.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







class SendSmsComponent {
    constructor(sendSmsService) {
        this.sendSmsService = sendSmsService;
    }
    ngOnInit() {
    }
    sendSms() {
        let formData = new FormData();
        formData.append('message', this.message ? this.message : '');
        formData.append('contactReceivingCell', this.whoToNum ? this.whoToNum : '');
        this.sendSmsService.sendSMS(formData);
    }
}
SendSmsComponent.ɵfac = function SendSmsComponent_Factory(t) { return new (t || SendSmsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utilities_services_neverForgetAText_send_sms_service__WEBPACK_IMPORTED_MODULE_1__["SendSmsService"])); };
SendSmsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SendSmsComponent, selectors: [["app-send-sms"]], decls: 14, vars: 2, consts: [["appearance", "outline", 1, "message"], ["matInput", "", 1, "full-height", 3, "ngModel", "ngModelChange"], ["appearance", "outline", 1, "numberWidth"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "mat-icon-button", "", 3, "click"]], template: function SendSmsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Send SMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SendSmsComponent_Template_textarea_ngModelChange_6_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Who getin it");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SendSmsComponent_Template_textarea_ngModelChange_11_listener($event) { return ctx.whoToNum = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SendSmsComponent_Template_button_click_12_listener() { return ctx.sendSms(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.whoToNum);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["div[_ngcontent-%COMP%], button[_ngcontent-%COMP%], h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.message[_ngcontent-%COMP%] {\n  width: 35vw;\n}\n\n.full-height[_ngcontent-%COMP%] {\n  height: 300px !important;\n}\n\n.mat-form-fieldColor[_ngcontent-%COMP%] {\n  border-color: black;\n}\n\n.numberWidth[_ngcontent-%COMP%] {\n  width: 25vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2phY29ieS9wcm9qZWN0cy9wZXJzb25hbC1kZXYtc2V0dXAvbmV2ZXJGb3JnZXRBVGV4dC9hcHAvc3JjL2FwcC9zZW5kLXNtcy9zZW5kLXNtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VuZC1zbXMvc2VuZC1zbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zZW5kLXNtcy9zZW5kLXNtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiwgYnV0dG9uLCBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lc3NhZ2Uge1xuICB3aWR0aDogMzV2dztcbn1cblxuLmZ1bGwtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWZvcm0tZmllbGRDb2xvciB7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbi5udW1iZXJXaWR0aCB7XG4gIHdpZHRoOiAyNXZ3O1xufVxuIiwiZGl2LCBidXR0b24sIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWVzc2FnZSB7XG4gIHdpZHRoOiAzNXZ3O1xufVxuXG4uZnVsbC1oZWlnaHQge1xuICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtZm9ybS1maWVsZENvbG9yIHtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbn1cblxuLm51bWJlcldpZHRoIHtcbiAgd2lkdGg6IDI1dnc7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendSmsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-send-sms',
                templateUrl: './send-sms.component.html',
                styleUrls: ['./send-sms.component.scss']
            }]
    }], function () { return [{ type: _utilities_services_neverForgetAText_send_sms_service__WEBPACK_IMPORTED_MODULE_1__["SendSmsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/utilities/services/neverForgetAText/auth.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/utilities/services/neverForgetAText/auth.service.ts ***!
  \*********************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    saveUser(body) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/auth/register`;
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response)).toPromise();
    }
    userLogin(body) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/auth/userLogin`;
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response.user)).toPromise();
    }
    checkIfEmailUsed(email) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/auth/checkIfEmailUsed`;
        return this.http.get(url, email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response.email)).toPromise();
    }
    approvePasswordChange(oldPassword, userID) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/auth/approvePasswordChange/${oldPassword}/${userID}`;
        return this.http.get(url, oldPassword).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response)).toPromise();
    }
    getToken() {
        return this.token;
    }
    canActivate() {
        if (sessionStorage.getItem('id') == null) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/utilities/services/neverForgetAText/contact.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/utilities/services/neverForgetAText/contact.service.ts ***!
  \************************************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class ContactService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    saveContact(body, contactID) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/contact`;
        if (contactID) {
            url += '/' + contactID;
        }
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response)).toPromise();
    }
    getUserContacts(userID) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/contact/getUserContacts/${userID}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response.userContacts)).toPromise();
    }
    getContact(contactID) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/contact/getContact/${contactID}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response.contact)).toPromise();
    }
    getContactsWithMessages(userID) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/contact/getContactsWithMessages/${userID}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response.contacts)).toPromise();
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/utilities/services/neverForgetAText/events.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/utilities/services/neverForgetAText/events.service.ts ***!
  \***********************************************************************/
/*! exports provided: EventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsService", function() { return EventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class EventsService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    saveEvent(body, eventID) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/event/saveEvent`;
        if (eventID) {
            url += '/' + eventID;
        }
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response)).toPromise();
    }
    getAllActiveUserEvents(userID) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/event/getAllActiveUserEvents/${userID}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response)).toPromise();
    }
    getContactEvents(contactID) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/event/getContactEvents/${contactID}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response)).toPromise();
    }
    deleteEvent(triggerID) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/event/deleteEvent/${triggerID}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response)).toPromise();
    }
    getDefaultEvents() {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/event/getDefaultEvents`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response.events)).toPromise();
    }
    getEvent(eventID) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/event/getEvent/${eventID}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response.event)).toPromise();
    }
    getEventRepeatTypes() {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/event/getEventRepeatTypes`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response)).toPromise();
    }
}
EventsService.ɵfac = function EventsService_Factory(t) { return new (t || EventsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EventsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventsService, factory: EventsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/utilities/services/neverForgetAText/send-sms.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/utilities/services/neverForgetAText/send-sms.service.ts ***!
  \*************************************************************************/
/*! exports provided: SendSmsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendSmsService", function() { return SendSmsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class SendSmsService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    sendSMS(body) {
        let url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}/sendSMS`;
        return this.http.post(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response)).toPromise();
    }
}
SendSmsService.ɵfac = function SendSmsService_Factory(t) { return new (t || SendSmsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SendSmsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SendSmsService, factory: SendSmsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SendSmsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://neverforgetatext.test/api'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jacoby/projects/personal-dev-setup/neverForgetAText/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map