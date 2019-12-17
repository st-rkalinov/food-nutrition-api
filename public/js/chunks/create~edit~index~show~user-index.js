(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create~edit~index~show~user-index"],{

/***/ "./resources/js/classes/Alert.js":
/*!***************************************!*\
  !*** ./resources/js/classes/Alert.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Alerts_AlertCreateData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alerts/AlertCreateData */ "./resources/js/classes/Alerts/AlertCreateData.js");
/* harmony import */ var _Alerts_AlertUpdateData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Alerts/AlertUpdateData */ "./resources/js/classes/Alerts/AlertUpdateData.js");
/* harmony import */ var _Alerts_AlertIndexData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Alerts/AlertIndexData */ "./resources/js/classes/Alerts/AlertIndexData.js");
/* harmony import */ var _Alerts_AlertDeleteData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Alerts/AlertDeleteData */ "./resources/js/classes/Alerts/AlertDeleteData.js");
/* harmony import */ var _Alerts_AlertShowData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Alerts/AlertShowData */ "./resources/js/classes/Alerts/AlertShowData.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Alert =
/*#__PURE__*/
function () {
  function Alert(action) {
    _classCallCheck(this, Alert);

    this.swal = sweetalert__WEBPACK_IMPORTED_MODULE_0___default.a;
    this.alert = null;
    this.action = action;
    this.swalData = {
      text: 'There is a problem in our system please try again later !',
      button: true,
      icon: 'error',
      title: 'Error'
    };
  }

  _createClass(Alert, [{
    key: "chooseAlertHandler",
    value: function chooseAlertHandler(status) {
      switch (this.action) {
        case 'create':
          this.alert = new _Alerts_AlertCreateData__WEBPACK_IMPORTED_MODULE_1__["default"](status);
          break;

        case 'update':
          this.alert = new _Alerts_AlertUpdateData__WEBPACK_IMPORTED_MODULE_2__["default"](status);
          break;

        case 'index':
          this.alert = new _Alerts_AlertIndexData__WEBPACK_IMPORTED_MODULE_3__["default"](status);
          break;

        case 'delete':
          this.alert = new _Alerts_AlertDeleteData__WEBPACK_IMPORTED_MODULE_4__["default"](status);
          break;

        case 'show':
          this.alert = new _Alerts_AlertShowData__WEBPACK_IMPORTED_MODULE_5__["default"](status);
      }
    }
  }, {
    key: "show",
    value: function show(status) {
      this.chooseAlertHandler(status);
      this.swalData = this.alert.getData() ? this.alert.getData() : this.swalData;
      return this.swal(this.swalData);
    }
  }]);

  return Alert;
}();

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ "./resources/js/classes/Alerts/AlertCreateData.js":
/*!********************************************************!*\
  !*** ./resources/js/classes/Alerts/AlertCreateData.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AlertCreateData =
/*#__PURE__*/
function () {
  function AlertCreateData(status) {
    _classCallCheck(this, AlertCreateData);

    this.status = status;
    this.data = null;
  }

  _createClass(AlertCreateData, [{
    key: "makeData",
    value: function makeData() {
      switch (this.status) {
        case 201:
          this.data = {
            text: 'The food was added successfully',
            buttons: [true, 'Go to the food page'],
            icon: 'success',
            title: 'Success'
          };
          break;

        case 422:
          this.data = {
            text: 'There is a problem with the data you entered !',
            buttons: true,
            icon: 'error',
            title: 'Error'
          };
          break;

        case 401:
          this.data = {
            text: 'You are unauthorized !',
            buttons: true,
            icon: 'error',
            title: 'Error'
          };
          break;

        case 403:
          this.data = {
            text: 'Access Forbidden',
            button: true,
            icon: 'error',
            title: 'Error'
          };
          break;

        case 404:
          this.data = {
            text: 'Page not found',
            button: true,
            icon: 'error',
            title: 'Error'
          };
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      this.makeData();
      return this.data;
    }
  }]);

  return AlertCreateData;
}();

/* harmony default export */ __webpack_exports__["default"] = (AlertCreateData);

/***/ }),

/***/ "./resources/js/classes/Alerts/AlertDeleteData.js":
/*!********************************************************!*\
  !*** ./resources/js/classes/Alerts/AlertDeleteData.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AlertDeleteData =
/*#__PURE__*/
function () {
  function AlertDeleteData(status) {
    _classCallCheck(this, AlertDeleteData);

    this.status = status;
    this.data = null;
  }

  _createClass(AlertDeleteData, [{
    key: "makeData",
    value: function makeData() {
      switch (this.status) {
        case 204:
          this.data = {
            text: 'The food was deleted successfully',
            button: true,
            icon: 'success',
            title: 'Success'
          };
          break;

        case 401:
          this.data = {
            text: 'You are unauthorized !',
            buttons: true,
            icon: 'error',
            title: 'Error'
          };
          break;

        case 403:
          this.data = {
            text: 'You don\'t have the rights to delete that food !',
            button: true,
            icon: 'error',
            title: 'Error'
          };
          break;

        case 404:
          this.data = {
            text: 'Page not found',
            button: true,
            icon: 'error',
            title: 'Error'
          };
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      this.makeData();
      return this.data;
    }
  }]);

  return AlertDeleteData;
}();

/* harmony default export */ __webpack_exports__["default"] = (AlertDeleteData);

/***/ }),

/***/ "./resources/js/classes/Alerts/AlertIndexData.js":
/*!*******************************************************!*\
  !*** ./resources/js/classes/Alerts/AlertIndexData.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AlertIndexData =
/*#__PURE__*/
function () {
  function AlertIndexData(status) {
    _classCallCheck(this, AlertIndexData);

    this.status = status;
    this.data = null;
  }

  _createClass(AlertIndexData, [{
    key: "makeData",
    value: function makeData() {
      switch (this.status) {
        case 401:
          this.data = {
            text: 'You are unauthorized !',
            button: true,
            icon: 'error',
            title: 'Error'
          };
          break;

        case 403:
          this.data = {
            text: 'Access Forbidden',
            button: true,
            icon: 'error',
            title: 'Error'
          };
          break;

        case 404:
          this.data = {
            text: 'Page not found',
            button: true,
            icon: 'error',
            title: 'Error'
          };
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      this.makeData();
      return this.data;
    }
  }]);

  return AlertIndexData;
}();

/* harmony default export */ __webpack_exports__["default"] = (AlertIndexData);

/***/ }),

/***/ "./resources/js/classes/Alerts/AlertShowData.js":
/*!******************************************************!*\
  !*** ./resources/js/classes/Alerts/AlertShowData.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AlertShowData =
/*#__PURE__*/
function () {
  function AlertShowData(status) {
    _classCallCheck(this, AlertShowData);

    this.status = status;
    this.data = null;
  }

  _createClass(AlertShowData, [{
    key: "makeData",
    value: function makeData() {
      switch (this.status) {
        case 401:
          this.data = {
            text: 'You are unauthorized !',
            button: true,
            icon: 'error',
            title: 'Error'
          };
          break;

        case 403:
          this.data = {
            text: 'Access Forbidden',
            button: true,
            icon: 'error',
            title: 'Error'
          };
          break;

        case 404:
          this.data = {
            text: 'Page not found',
            button: true,
            icon: 'error',
            title: 'Error'
          };
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      this.makeData();
      return this.data;
    }
  }]);

  return AlertShowData;
}();

/* harmony default export */ __webpack_exports__["default"] = (AlertShowData);

/***/ }),

/***/ "./resources/js/classes/Alerts/AlertUpdateData.js":
/*!********************************************************!*\
  !*** ./resources/js/classes/Alerts/AlertUpdateData.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AlertUpdateData =
/*#__PURE__*/
function () {
  function AlertUpdateData(status) {
    _classCallCheck(this, AlertUpdateData);

    this.status = status;
    this.data = null;
  }

  _createClass(AlertUpdateData, [{
    key: "makeData",
    value: function makeData() {
      switch (this.status) {
        case 200:
          this.data = {
            text: 'The food was edited successfully',
            buttons: [true, 'Go to the food page'],
            icon: 'success',
            title: 'Success'
          };
          break;

        case 422:
          this.data = {
            text: 'There is a problem with the data you entered !',
            button: true,
            icon: 'error',
            title: 'Error'
          };
          break;

        case 401:
          this.data = {
            text: 'You are unauthorized !',
            buttons: true,
            icon: 'error',
            title: 'Error'
          };
          break;

        case 403:
          this.data = {
            text: 'You don\'t have the rights to edit that food !',
            button: true,
            icon: 'error',
            title: 'Error'
          };
          break;

        case 404:
          this.data = {
            text: 'Page not found',
            button: true,
            icon: 'error',
            title: 'Error'
          };
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      this.makeData();
      return this.data;
    }
  }]);

  return AlertUpdateData;
}();

/* harmony default export */ __webpack_exports__["default"] = (AlertUpdateData);

/***/ }),

/***/ "./resources/js/classes/ResponseEndpoints/ResponseCreateEndpoint.js":
/*!**************************************************************************!*\
  !*** ./resources/js/classes/ResponseEndpoints/ResponseCreateEndpoint.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResponseCreateEndpoint =
/*#__PURE__*/
function () {
  function ResponseCreateEndpoint(status, additionalEndpointData) {
    _classCallCheck(this, ResponseCreateEndpoint);

    this.status = status;
    this.additonalEndpointData = additionalEndpointData;
    this.endpoint = false;
  }

  _createClass(ResponseCreateEndpoint, [{
    key: "chooseEndpoint",
    value: function chooseEndpoint() {
      switch (this.status) {
        case 201:
        case 403:
          this.endpoint = '/foods/';
          break;

        case 422:
          this.endpoint = false;
          break;

        case 401:
          this.endpoint = '/logout';
          break;
      }
    }
  }, {
    key: "getEndpoint",
    value: function getEndpoint() {
      this.chooseEndpoint();
      return this.additonalEndpointData === '' ? this.endpoint : this.endpoint + this.additonalEndpointData;
    }
  }]);

  return ResponseCreateEndpoint;
}();

/* harmony default export */ __webpack_exports__["default"] = (ResponseCreateEndpoint);

/***/ }),

/***/ "./resources/js/classes/ResponseEndpoints/ResponseDeleteEndpoint.js":
/*!**************************************************************************!*\
  !*** ./resources/js/classes/ResponseEndpoints/ResponseDeleteEndpoint.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResponseDeleteEndpoint =
/*#__PURE__*/
function () {
  function ResponseDeleteEndpoint(status, additionalEndpointData) {
    _classCallCheck(this, ResponseDeleteEndpoint);

    this.status = status;
    this.additonalEndpointData = additionalEndpointData;
    this.endpoint = false;
  }

  _createClass(ResponseDeleteEndpoint, [{
    key: "chooseEndpoint",
    value: function chooseEndpoint() {
      switch (this.status) {
        case 204:
        case 403:
        case 404:
          this.endpoint = '/foods';
          break;

        case 401:
          this.endpoint = '/logout';
          break;
      }
    }
  }, {
    key: "getEndpoint",
    value: function getEndpoint() {
      this.chooseEndpoint();
      return this.additonalEndpointData === '' ? this.endpoint : this.endpoint + this.additonalEndpointData;
    }
  }]);

  return ResponseDeleteEndpoint;
}();

/* harmony default export */ __webpack_exports__["default"] = (ResponseDeleteEndpoint);

/***/ }),

/***/ "./resources/js/classes/ResponseEndpoints/ResponseIndexEndpoint.js":
/*!*************************************************************************!*\
  !*** ./resources/js/classes/ResponseEndpoints/ResponseIndexEndpoint.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResponseIndexEndpoint =
/*#__PURE__*/
function () {
  function ResponseIndexEndpoint(status, additionalEndpointData) {
    _classCallCheck(this, ResponseIndexEndpoint);

    this.status = status;
    this.additonalEndpointData = additionalEndpointData;
    this.endpoint = false;
  }

  _createClass(ResponseIndexEndpoint, [{
    key: "chooseEndpoint",
    value: function chooseEndpoint() {
      switch (this.status) {
        case 403:
        case 404:
          this.endpoint = '/';
          break;

        case 422:
          this.endpoint = false;
          break;

        case 401:
          this.endpoint = '/logout';
          break;
      }
    }
  }, {
    key: "getEndpoint",
    value: function getEndpoint() {
      this.chooseEndpoint();
      return this.additonalEndpointData === '' ? this.endpoint : this.endpoint + this.additonalEndpointData;
    }
  }]);

  return ResponseIndexEndpoint;
}();

/* harmony default export */ __webpack_exports__["default"] = (ResponseIndexEndpoint);

/***/ }),

/***/ "./resources/js/classes/ResponseEndpoints/ResponseShowEndpoint.js":
/*!************************************************************************!*\
  !*** ./resources/js/classes/ResponseEndpoints/ResponseShowEndpoint.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResponseShowEndpoint =
/*#__PURE__*/
function () {
  function ResponseShowEndpoint(status, additionalEndpointData) {
    _classCallCheck(this, ResponseShowEndpoint);

    this.status = status;
    this.additonalEndpointData = additionalEndpointData;
    this.endpoint = false;
  }

  _createClass(ResponseShowEndpoint, [{
    key: "chooseEndpoint",
    value: function chooseEndpoint() {
      switch (this.status) {
        case 401:
          this.endpoint = '/logout';
          break;

        case 403:
        case 404:
          this.endpoint = '/foods';
          break;
      }
    }
  }, {
    key: "getEndpoint",
    value: function getEndpoint() {
      this.chooseEndpoint();
      return this.additonalEndpointData === '' ? this.endpoint : this.endpoint + this.additonalEndpointData;
    }
  }]);

  return ResponseShowEndpoint;
}();

/* harmony default export */ __webpack_exports__["default"] = (ResponseShowEndpoint);

/***/ }),

/***/ "./resources/js/classes/ResponseEndpoints/ResponseUpdateEndpoint.js":
/*!**************************************************************************!*\
  !*** ./resources/js/classes/ResponseEndpoints/ResponseUpdateEndpoint.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ResponseUpdateEndpoint =
/*#__PURE__*/
function () {
  function ResponseUpdateEndpoint(status, additionalEndpointData) {
    _classCallCheck(this, ResponseUpdateEndpoint);

    this.status = status;
    this.additonalEndpointData = additionalEndpointData;
    this.endpoint = false;
  }

  _createClass(ResponseUpdateEndpoint, [{
    key: "chooseEndpoint",
    value: function chooseEndpoint() {
      switch (this.status) {
        case 200:
          this.endpoint = '/foods/';
          break;

        case 403:
        case 404:
          this.endpoint = '/foods';
          break;

        case 422:
          this.endpoint = false;
          break;

        case 401:
          this.endpoint = '/logout';
          break;
      }
    }
  }, {
    key: "getEndpoint",
    value: function getEndpoint() {
      this.chooseEndpoint();
      return this.additonalEndpointData === '' ? this.endpoint : this.endpoint + this.additonalEndpointData;
    }
  }]);

  return ResponseUpdateEndpoint;
}();

/* harmony default export */ __webpack_exports__["default"] = (ResponseUpdateEndpoint);

/***/ }),

/***/ "./resources/js/classes/ResponseHandler.js":
/*!*************************************************!*\
  !*** ./resources/js/classes/ResponseHandler.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResponseEndpoints_ResponseCreateEndpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResponseEndpoints/ResponseCreateEndpoint */ "./resources/js/classes/ResponseEndpoints/ResponseCreateEndpoint.js");
/* harmony import */ var _ResponseEndpoints_ResponseUpdateEndpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponseEndpoints/ResponseUpdateEndpoint */ "./resources/js/classes/ResponseEndpoints/ResponseUpdateEndpoint.js");
/* harmony import */ var _ResponseEndpoints_ResponseIndexEndpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResponseEndpoints/ResponseIndexEndpoint */ "./resources/js/classes/ResponseEndpoints/ResponseIndexEndpoint.js");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Alert */ "./resources/js/classes/Alert.js");
/* harmony import */ var _ResponseEndpoints_ResponseDeleteEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResponseEndpoints/ResponseDeleteEndpoint */ "./resources/js/classes/ResponseEndpoints/ResponseDeleteEndpoint.js");
/* harmony import */ var _ResponseEndpoints_ResponseShowEndpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResponseEndpoints/ResponseShowEndpoint */ "./resources/js/classes/ResponseEndpoints/ResponseShowEndpoint.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var ResponseHandler =
/*#__PURE__*/
function () {
  function ResponseHandler(router, action) {
    _classCallCheck(this, ResponseHandler);

    this.router = router;
    this.action = action;
    this.endpoint = null;
    this.alert = new _Alert__WEBPACK_IMPORTED_MODULE_3__["default"](action);
  }

  _createClass(ResponseHandler, [{
    key: "chooseEndpoint",
    value: function chooseEndpoint(status, additionalEndpointData) {
      switch (this.action) {
        case 'create':
          this.endpoint = new _ResponseEndpoints_ResponseCreateEndpoint__WEBPACK_IMPORTED_MODULE_0__["default"](status, additionalEndpointData);
          break;

        case 'update':
          this.endpoint = new _ResponseEndpoints_ResponseUpdateEndpoint__WEBPACK_IMPORTED_MODULE_1__["default"](status, additionalEndpointData);
          break;

        case 'index':
          this.endpoint = new _ResponseEndpoints_ResponseIndexEndpoint__WEBPACK_IMPORTED_MODULE_2__["default"](status, additionalEndpointData);
          break;

        case 'delete':
          this.endpoint = new _ResponseEndpoints_ResponseDeleteEndpoint__WEBPACK_IMPORTED_MODULE_4__["default"](status, additionalEndpointData);
          break;

        case 'show':
          this.endpoint = new _ResponseEndpoints_ResponseShowEndpoint__WEBPACK_IMPORTED_MODULE_5__["default"](status, additionalEndpointData);
      }
    }
  }, {
    key: "handle",
    value: function handle(status) {
      var _this = this;

      var additionalEndpointData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return this.alert.show(status).then(function (clickedButton) {
        if (clickedButton) {
          _this.chooseEndpoint(status, additionalEndpointData);

          var endpoint = _this.endpoint.getEndpoint();

          if (endpoint == false) {
            return;
          }

          _this.router.push(endpoint);
        }
      });
    }
  }]);

  return ResponseHandler;
}();

/* harmony default export */ __webpack_exports__["default"] = (ResponseHandler);

/***/ })

}]);