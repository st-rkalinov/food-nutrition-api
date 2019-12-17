(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["show"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ErrorPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ErrorPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ErrorPage",
  props: ['text']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/FoodsShow.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/FoodsShow.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ErrorPage */ "./resources/js/components/ErrorPage.vue");
/* harmony import */ var _classes_ResponseHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/ResponseHandler */ "./resources/js/classes/ResponseHandler.js");
/* harmony import */ var _data_foodResourceData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/foodResourceData */ "./resources/js/data/foodResourceData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FoodsShow",
  components: {
    ErrorPage: _ErrorPage__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      data: null,
      isLoading: true,
      hasErrors: false,
      responseHandler: null,
      dataFieldsNames: _data_foodResourceData__WEBPACK_IMPORTED_MODULE_2__["labels"]
    };
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    if (to.params.id !== from.params.id) {
      this.getFood(to.params.id);
      next();
    }
  },
  methods: {
    del: function del() {
      var _this = this;

      this.responseHandler = new _classes_ResponseHandler__WEBPACK_IMPORTED_MODULE_1__["default"](this.$router, 'delete');
      axios["delete"](this.data.links.self).then(function (response) {
        _this.responseHandler.handle(response.status);
      })["catch"](function (error) {
        _this.responseHandler.handle(error.response.status);
      });
    },
    getFood: function getFood() {
      var _this2 = this;

      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$route.params.id;
      axios.get('/api/foods/' + id).then(function (response) {
        _this2.data = response.data;
        _this2.isLoading = false;
      })["catch"](function (error) {
        _this2.hasErrors = true;
        _this2.responseHandler = new _classes_ResponseHandler__WEBPACK_IMPORTED_MODULE_1__["default"](_this2.$router, 'show');

        _this2.responseHandler.handle(error.response.status);
      })["finally"](function () {
        _this2.isLoading = false;
      });
    },
    castFieldData: function castFieldData(fieldData) {
      var casted = fieldData;

      switch (fieldData) {
        case false:
          casted = 'No';
          break;

        case true:
          casted = 'Yes';
          break;
      }

      return casted;
    }
  },
  mounted: function mounted() {
    this.getFood();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ErrorPage.vue?vue&type=template&id=2bc5db5c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ErrorPage.vue?vue&type=template&id=2bc5db5c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("img", {
      staticClass: "w-32 h-32 mx-auto my-0",
      attrs: { src: __webpack_require__(/*! ../../images/sad-face.png */ "./resources/images/sad-face.png"), alt: "Sad face" }
    }),
    _vm._v(" "),
    _vm.text
      ? _c(
          "h1",
          { staticClass: "text-4xl text-center font-bold py-10 text-blue-400" },
          [_vm._v(_vm._s(_vm.text))]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "flex justify-around flex-wrap p-10" }, [
      _c(
        "button",
        {
          staticClass:
            "p-3 rounded-full border-2 border-blue-400 text-blue-400 hover:text-white hover:bg-blue-400 hover:font-bold",
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.$router.push({ name: "home" })
            }
          }
        },
        [_vm._v("\n            Go to home page\n        ")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/FoodsShow.vue?vue&type=template&id=68550df6&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/FoodsShow.vue?vue&type=template&id=68550df6&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.isLoading
      ? _c(
          "div",
          { staticClass: "flex justify-center items-center h-screen" },
          [
            _c("img", {
              staticClass: "block w-50 h-50",
              attrs: { src: __webpack_require__(/*! ../../../images/25.gif */ "./resources/images/25.gif"), alt: "" }
            })
          ]
        )
      : !_vm.isLoading && !_vm.hasErrors
      ? _c(
          "div",
          [
            _c("div", { staticClass: "pb-10" }, [
              this.$parent.user.id === _vm.data.data.owner_id
                ? _c(
                    "div",
                    { staticClass: "flex flex-end pt-4 justify-end" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-success mr-5",
                          attrs: {
                            to: {
                              name: "edit",
                              params: { id: _vm.data.data.food_id }
                            }
                          }
                        },
                        [_vm._v("\n                    Edit\n                ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-danger",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.del()
                            }
                          }
                        },
                        [_vm._v("Delete")]
                      )
                    ],
                    1
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm._l(this.dataFieldsNames, function(item, key) {
              return _c(
                "div",
                {
                  key: item.name,
                  staticClass:
                    "flex justify-start items-center py-3 border-b border-gray-300"
                },
                [
                  _c("p", { staticClass: "text-xl text-blue-400 font-bold" }, [
                    _vm._v(_vm._s(item) + ": ")
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "pl-5 text-xl" }, [
                    _vm._v(_vm._s(_vm.castFieldData(_vm.data.data[key])))
                  ])
                ]
              )
            }),
            _vm._v(" "),
            _c("div", { staticClass: "p-5 text-right" }, [
              _c(
                "a",
                {
                  staticClass: "btn btn-primary",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.$router.back()
                    }
                  }
                },
                [_vm._v("Go Back")]
              )
            ])
          ],
          2
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/images/25.gif":
/*!*********************************!*\
  !*** ./resources/images/25.gif ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/25.gif?8d59b5187c5e36c24d417832eb54e8c9";

/***/ }),

/***/ "./resources/images/sad-face.png":
/*!***************************************!*\
  !*** ./resources/images/sad-face.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/sad-face.png?f3d20dd31f70a6c65c6d3bc1cc92809b";

/***/ }),

/***/ "./resources/js/components/ErrorPage.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/ErrorPage.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorPage_vue_vue_type_template_id_2bc5db5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorPage.vue?vue&type=template&id=2bc5db5c&scoped=true& */ "./resources/js/components/ErrorPage.vue?vue&type=template&id=2bc5db5c&scoped=true&");
/* harmony import */ var _ErrorPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorPage.vue?vue&type=script&lang=js& */ "./resources/js/components/ErrorPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ErrorPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ErrorPage_vue_vue_type_template_id_2bc5db5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ErrorPage_vue_vue_type_template_id_2bc5db5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2bc5db5c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ErrorPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ErrorPage.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/ErrorPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ErrorPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ErrorPage.vue?vue&type=template&id=2bc5db5c&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ErrorPage.vue?vue&type=template&id=2bc5db5c&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorPage_vue_vue_type_template_id_2bc5db5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorPage.vue?vue&type=template&id=2bc5db5c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ErrorPage.vue?vue&type=template&id=2bc5db5c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorPage_vue_vue_type_template_id_2bc5db5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorPage_vue_vue_type_template_id_2bc5db5c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/views/FoodsShow.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/views/FoodsShow.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FoodsShow_vue_vue_type_template_id_68550df6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FoodsShow.vue?vue&type=template&id=68550df6&scoped=true& */ "./resources/js/components/views/FoodsShow.vue?vue&type=template&id=68550df6&scoped=true&");
/* harmony import */ var _FoodsShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FoodsShow.vue?vue&type=script&lang=js& */ "./resources/js/components/views/FoodsShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FoodsShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FoodsShow_vue_vue_type_template_id_68550df6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FoodsShow_vue_vue_type_template_id_68550df6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "68550df6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/FoodsShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/FoodsShow.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/views/FoodsShow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodsShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FoodsShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/FoodsShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodsShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/FoodsShow.vue?vue&type=template&id=68550df6&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/views/FoodsShow.vue?vue&type=template&id=68550df6&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodsShow_vue_vue_type_template_id_68550df6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FoodsShow.vue?vue&type=template&id=68550df6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/FoodsShow.vue?vue&type=template&id=68550df6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodsShow_vue_vue_type_template_id_68550df6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodsShow_vue_vue_type_template_id_68550df6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/data/foodResourceData.js":
/*!***********************************************!*\
  !*** ./resources/js/data/foodResourceData.js ***!
  \***********************************************/
/*! exports provided: foodResourceData, defValues, labels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foodResourceData", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defValues", function() { return defValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labels", function() { return labels; });
var data = {
  name: {
    defValue: '',
    placeholder: 'Food Name',
    label: 'Name'
  },
  brand: {
    defValue: null,
    placeholder: 'Brand Name',
    label: 'Brand'
  },
  serving: {
    defValue: 0,
    placeholder: 'Serving Size',
    label: 'Serving'
  },
  unit: {
    defValue: 'gram',
    placeholder: 'Unit',
    label: 'Unit'
  },
  calories: {
    defValue: 0,
    placeholder: 'Calories',
    label: 'Calories'
  },
  fat: {
    defValue: 0,
    placeholder: 'Fat',
    label: 'Fat'
  },
  fat_satured: {
    defValue: 0,
    placeholder: 'Satured Fat',
    label: 'Satured Fat'
  },
  cholesterol: {
    defValue: 0,
    placeholder: 'Cholesterol',
    label: 'Cholesterol'
  },
  salt: {
    defValue: 0,
    placeholder: 'Salt',
    label: 'Salt'
  },
  carbohydrates: {
    defValue: 0,
    placeholder: 'Carbohydrates',
    label: 'Carbohydrates'
  },
  carbohydrates_fiber: {
    defValue: 0,
    placeholder: 'Carbohydrates Fiber',
    label: 'Carbohydrates Fiber'
  },
  carbohydrates_sugars: {
    defValue: 0,
    placeholder: 'Carbohydrates Sugars',
    label: 'Carbohydrates Sugars'
  },
  protein: {
    defValue: 0,
    placeholder: 'Protein',
    label: 'Protein'
  },
  "public": {
    defValue: false,
    placeholder: null,
    label: 'Public ( can be viewed by all users )'
  }
};

var defValues = _.mapValues(data, 'defValue');

var labels = _.mapValues(data, 'label');



/***/ })

}]);