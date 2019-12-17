(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/InputTextField.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/InputTextField.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "InputTextField",
  props: ['name', 'placeholder', 'defaultValue', 'dataValue', 'errors', 'label', 'classes'],
  data: function data() {
    return {
      value: this.defaultValue ? this.defaultValue : this.dataValue
    };
  },
  methods: {
    updateField: function updateField() {
      this.$emit('update:field', this.value);
    }
  },
  watch: {
    dataValue: function dataValue(val) {
      this.value = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/FoodsCreate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/FoodsCreate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/Form */ "./resources/js/classes/Form.js");
/* harmony import */ var _InputTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../InputTextField */ "./resources/js/components/InputTextField.vue");
/* harmony import */ var _classes_ResponseHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/ResponseHandler */ "./resources/js/classes/ResponseHandler.js");
/* harmony import */ var _data_foodResourceData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/foodResourceData */ "./resources/js/data/foodResourceData.js");
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
  name: "FoodsCreate",
  components: {
    InputTextField: _InputTextField__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      foodData: _data_foodResourceData__WEBPACK_IMPORTED_MODULE_3__["foodResourceData"],
      foodDataDefValues: _data_foodResourceData__WEBPACK_IMPORTED_MODULE_3__["defValues"],
      form: null,
      responseHandler: new _classes_ResponseHandler__WEBPACK_IMPORTED_MODULE_2__["default"](this.$router, 'create')
    };
  },
  created: function created() {
    this.form = new _classes_Form__WEBPACK_IMPORTED_MODULE_0__["default"](this.foodDataDefValues);
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.submit('/api/foods').then(function (response) {
        _this.responseHandler.handle(response.status, response.data.data.food_id);

        _this.form.reset();
      })["catch"](function (error) {
        var response = error.response;

        _this.responseHandler.handle(response.status);

        if (error.response.status === 422) {
          _this.form.error.setErrors(response.data.errors);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/InputTextField.vue?vue&type=template&id=1476acce&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/InputTextField.vue?vue&type=template&id=1476acce&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "border-b border-b-2 pt-16 relative", class: _vm.classes },
    [
      _c(
        "label",
        {
          staticClass: "text-blue-400 font-bold absolute top-1/3",
          attrs: { for: _vm.name }
        },
        [
          _vm._v(_vm._s(_vm.label) + "\n        "),
          _vm.errors.hasError(_vm.name)
            ? _c("span", { staticClass: "pl-12 text-red-600 text-sm" }, [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.errors.getError(_vm.name)) +
                    "\n        "
                )
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.value,
            expression: "value"
          }
        ],
        staticClass: "py-2 focus:outline-none w-full",
        attrs: {
          type: "text",
          name: _vm.name,
          id: _vm.name,
          placeholder: _vm.placeholder
        },
        domProps: { value: _vm.value },
        on: {
          input: [
            function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.value = $event.target.value
            },
            function($event) {
              _vm.updateField()
              _vm.errors.clearError(_vm.name)
            }
          ]
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/FoodsCreate.vue?vue&type=template&id=092d8835&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/FoodsCreate.vue?vue&type=template&id=092d8835&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    _c(
      "form",
      {
        staticClass: "-mt-8",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit($event)
          }
        }
      },
      [
        _c("InputTextField", {
          attrs: {
            name: "name",
            placeholder: _vm.foodData.name.placeholder,
            label: _vm.foodData.name.label,
            defaultValue: _vm.foodData.name.defValue,
            dataValue: _vm.form.data.name,
            errors: _vm.form.error
          },
          on: {
            "update:field": function($event) {
              _vm.form.data.name = $event
            }
          }
        }),
        _vm._v(" "),
        _c("InputTextField", {
          attrs: {
            name: "brand",
            placeholder: _vm.foodData.brand.placeholder,
            label: _vm.foodData.brand.label,
            "default-value": _vm.foodData.brand.defValue,
            dataValue: _vm.form.data.brand,
            errors: _vm.form.error
          },
          on: {
            "update:field": function($event) {
              _vm.form.data.brand = $event
            }
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex justify-between flex-wrap sm:flex-col lg:flex-row flex-col"
          },
          [
            _c("InputTextField", {
              attrs: {
                name: "serving",
                placeholder: _vm.foodData.serving.placeholder,
                label: _vm.foodData.serving.label,
                "default-value": _vm.foodData.serving.defValue,
                dataValue: _vm.form.data.serving,
                errors: _vm.form.error,
                classes: "sm:w-full lg:w-1/2 w-full"
              },
              on: {
                "update:field": function($event) {
                  _vm.form.data.serving = $event
                }
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "border-b border-b-2 relative pt-16 sm:w-full lg:w-1/2 w-full"
              },
              [
                _c(
                  "label",
                  {
                    staticClass: "text-blue-400 font-bold absolute top-1/3",
                    attrs: { for: "unit" }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.foodData.unit.label) +
                        "\n\n                    "
                    ),
                    _vm.form.error.hasError("unit")
                      ? _c(
                          "span",
                          { staticClass: "pl-12 text-red-600 text-sm" },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.form.error.getError("unit")) +
                                "\n                    "
                            )
                          ]
                        )
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.data.unit,
                        expression: "form.data.unit"
                      }
                    ],
                    staticClass:
                      "focus:outline-none py-3 pr-8 text-gray-500 -ml-1 -mt-1 w-full",
                    attrs: { name: "unit", id: "unit" },
                    on: {
                      change: [
                        function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.form.data,
                            "unit",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                        function($event) {
                          return _vm.form.error.clearError("unit")
                        }
                      ]
                    }
                  },
                  [
                    _c("option", { attrs: { value: "gram" } }, [
                      _vm._v("Gram")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "milliliter" } }, [
                      _vm._v("Milliliter")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "kilogram" } }, [
                      _vm._v("Kilogram")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "liter" } }, [
                      _vm._v("Liter")
                    ])
                  ]
                )
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("InputTextField", {
          attrs: {
            name: "calories",
            placeholder: _vm.foodData.calories.placeholder,
            label: _vm.foodData.calories.label,
            "default-value": _vm.foodData.calories.defValue,
            dataValue: _vm.form.data.calories,
            errors: _vm.form.error
          },
          on: {
            "update:field": function($event) {
              _vm.form.data.calories = $event
            }
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "flex justify-between sm:flex-col lg:flex-row flex-col"
          },
          [
            _c("InputTextField", {
              attrs: {
                name: "fat",
                placeholder: _vm.foodData.fat.placeholder,
                label: _vm.foodData.fat.label,
                "default-value": _vm.foodData.fat.defValue,
                dataValue: _vm.form.data.fat,
                errors: _vm.form.error,
                classes: "sm:w-full lg:w-1/2 w-full"
              },
              on: {
                "update:field": function($event) {
                  _vm.form.data.fat = $event
                }
              }
            }),
            _vm._v(" "),
            _c("InputTextField", {
              attrs: {
                name: "fat_satured",
                placeholder: _vm.foodData.fat_satured.placeholder,
                label: _vm.foodData.fat_satured.label,
                "default-value": _vm.foodData.fat_satured.defValue,
                dataValue: _vm.form.data.fat_satured,
                errors: _vm.form.error,
                classes: "sm:w-full lg:w-1/2 w-full"
              },
              on: {
                "update:field": function($event) {
                  _vm.form.data.fat_satured = $event
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("InputTextField", {
          attrs: {
            name: "cholesterol",
            placeholder: _vm.foodData.cholesterol.placeholder,
            label: _vm.foodData.cholesterol.label,
            "default-value": _vm.foodData.cholesterol.defValue,
            dataValue: _vm.form.data.cholesterol,
            errors: _vm.form.error
          },
          on: {
            "update:field": function($event) {
              _vm.form.data.cholesterol = $event
            }
          }
        }),
        _vm._v(" "),
        _c("InputTextField", {
          attrs: {
            name: "salt",
            placeholder: _vm.foodData.salt.placeholder,
            label: _vm.foodData.salt.label,
            "default-value": _vm.foodData.salt.defValue,
            dataValue: _vm.form.data.salt,
            errors: _vm.form.error
          },
          on: {
            "update:field": function($event) {
              _vm.form.data.salt = $event
            }
          }
        }),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "flex justify-between sm:flex-col lg:flex-row flex-col"
          },
          [
            _c("InputTextField", {
              attrs: {
                name: "carbohydrates",
                placeholder: _vm.foodData.carbohydrates.placeholder,
                label: _vm.foodData.carbohydrates.label,
                "default-value": _vm.foodData.carbohydrates.defValue,
                dataValue: _vm.form.data.carbohydrates,
                errors: _vm.form.error,
                classes: "sm:w-full lg:w-1/3 w-full"
              },
              on: {
                "update:field": function($event) {
                  _vm.form.data.carbohydrates = $event
                }
              }
            }),
            _vm._v(" "),
            _c("InputTextField", {
              attrs: {
                name: "carbohydrates_fiber",
                placeholder: _vm.foodData.carbohydrates_fiber.placeholder,
                label: _vm.foodData.carbohydrates_fiber.label,
                "default-value": _vm.foodData.carbohydrates_fiber.defValue,
                dataValue: _vm.form.data.carbohydrates_fiber,
                errors: _vm.form.error,
                classes: "sm:w-full lg:w-1/3 w-full"
              },
              on: {
                "update:field": function($event) {
                  _vm.form.data.carbohydrates_fiber = $event
                }
              }
            }),
            _vm._v(" "),
            _c("InputTextField", {
              attrs: {
                name: "carbohydrates_sugars",
                placeholder: _vm.foodData.carbohydrates_sugars.placeholder,
                label: _vm.foodData.carbohydrates_sugars.label,
                "default-value": _vm.foodData.carbohydrates_sugars.defValue,
                dataValue: _vm.form.data.carbohydrates_sugars,
                errors: _vm.form.error,
                classes: "sm:w-full lg:w-1/3 w-full"
              },
              on: {
                "update:field": function($event) {
                  _vm.form.data.carbohydrates_sugars = $event
                }
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("InputTextField", {
          attrs: {
            name: "protein",
            placeholder: _vm.foodData.protein.placeholder,
            label: _vm.foodData.protein.label,
            "default-value": _vm.foodData.protein.defValue,
            dataValue: _vm.form.data.protein,
            errors: _vm.form.error
          },
          on: {
            "update:field": function($event) {
              _vm.form.data.protein = $event
            }
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "pt-8 mt-16 text-right" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.data.public,
                expression: "form.data.public"
              }
            ],
            attrs: { type: "checkbox", name: "public", id: "public" },
            domProps: {
              checked: Array.isArray(_vm.form.data.public)
                ? _vm._i(_vm.form.data.public, null) > -1
                : _vm.form.data.public
            },
            on: {
              change: [
                function($event) {
                  var $$a = _vm.form.data.public,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 &&
                        _vm.$set(_vm.form.data, "public", $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        _vm.$set(
                          _vm.form.data,
                          "public",
                          $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                        )
                    }
                  } else {
                    _vm.$set(_vm.form.data, "public", $$c)
                  }
                },
                function($event) {
                  return _vm.form.error.clearError("public")
                }
              ]
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "text-blue-400 font-bold pl-3",
              attrs: { for: "public" }
            },
            [_vm._v(_vm._s(_vm.foodData.public.label))]
          ),
          _vm._v(" "),
          _vm.form.error.hasError("public")
            ? _c("span", { staticClass: "text-red-600 text-sm block" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.form.error.getError("public")) +
                    "\n            "
                )
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex justify-end py-16 px-10" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-danger mr-5",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.$router.back()
                }
              }
            },
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-success", attrs: { type: "submit" } },
            [_vm._v("Create\n            ")]
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/classes/Form.js":
/*!**************************************!*\
  !*** ./resources/js/classes/Form.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormError */ "./resources/js/classes/FormError.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Form =
/*#__PURE__*/
function () {
  function Form(data) {
    _classCallCheck(this, Form);

    this.originalData = data;
    this.data = {};
    this.error = new _FormError__WEBPACK_IMPORTED_MODULE_0__["default"](data);

    for (var field in data) {
      if (data.hasOwnProperty(field)) {
        this.data[field] = data[field];
      }
    }
  }

  _createClass(Form, [{
    key: "submit",
    value: function submit(path) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'post';
      return axios[method](path, this.data);
    }
  }, {
    key: "reset",
    value: function reset() {
      for (var originalField in this.originalData) {
        if (this.data.hasOwnProperty(originalField) && this.originalData.hasOwnProperty(originalField)) {
          this.data[originalField] = this.originalData[originalField];
        }
      }
    }
  }]);

  return Form;
}();

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./resources/js/classes/FormError.js":
/*!*******************************************!*\
  !*** ./resources/js/classes/FormError.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormError =
/*#__PURE__*/
function () {
  function FormError(fields) {
    _classCallCheck(this, FormError);

    for (var field in fields) {
      if (fields.hasOwnProperty(field)) {
        this[field] = null;
      }
    }
  }

  _createClass(FormError, [{
    key: "setErrors",
    value: function setErrors(errorFields) {
      for (var field in errorFields) {
        if (errorFields.hasOwnProperty(field)) {
          this[field] = errorFields[field][0];
        }
      }
    }
  }, {
    key: "hasError",
    value: function hasError(fieldName) {
      return !(!this.hasOwnProperty(fieldName) || this[fieldName] === null);
    }
  }, {
    key: "getError",
    value: function getError(fieldName) {
      if (this[fieldName]) {
        return this[fieldName];
      }
    }
  }, {
    key: "clearError",
    value: function clearError(fieldName) {
      if (this[fieldName]) {
        this[fieldName] = null;
      }
    }
  }]);

  return FormError;
}();

/* harmony default export */ __webpack_exports__["default"] = (FormError);

/***/ }),

/***/ "./resources/js/components/InputTextField.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/InputTextField.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputTextField_vue_vue_type_template_id_1476acce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputTextField.vue?vue&type=template&id=1476acce&scoped=true& */ "./resources/js/components/InputTextField.vue?vue&type=template&id=1476acce&scoped=true&");
/* harmony import */ var _InputTextField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputTextField.vue?vue&type=script&lang=js& */ "./resources/js/components/InputTextField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputTextField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputTextField_vue_vue_type_template_id_1476acce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputTextField_vue_vue_type_template_id_1476acce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1476acce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/InputTextField.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/InputTextField.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/InputTextField.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTextField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./InputTextField.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/InputTextField.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTextField_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/InputTextField.vue?vue&type=template&id=1476acce&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/InputTextField.vue?vue&type=template&id=1476acce&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTextField_vue_vue_type_template_id_1476acce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./InputTextField.vue?vue&type=template&id=1476acce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/InputTextField.vue?vue&type=template&id=1476acce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTextField_vue_vue_type_template_id_1476acce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputTextField_vue_vue_type_template_id_1476acce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/views/FoodsCreate.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/views/FoodsCreate.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FoodsCreate_vue_vue_type_template_id_092d8835_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FoodsCreate.vue?vue&type=template&id=092d8835&scoped=true& */ "./resources/js/components/views/FoodsCreate.vue?vue&type=template&id=092d8835&scoped=true&");
/* harmony import */ var _FoodsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FoodsCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/views/FoodsCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FoodsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FoodsCreate_vue_vue_type_template_id_092d8835_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FoodsCreate_vue_vue_type_template_id_092d8835_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "092d8835",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/FoodsCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/FoodsCreate.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/views/FoodsCreate.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FoodsCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/FoodsCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/FoodsCreate.vue?vue&type=template&id=092d8835&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/views/FoodsCreate.vue?vue&type=template&id=092d8835&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodsCreate_vue_vue_type_template_id_092d8835_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FoodsCreate.vue?vue&type=template&id=092d8835&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/FoodsCreate.vue?vue&type=template&id=092d8835&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodsCreate_vue_vue_type_template_id_092d8835_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodsCreate_vue_vue_type_template_id_092d8835_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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