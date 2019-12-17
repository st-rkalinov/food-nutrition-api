(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index~user-index"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FoodsList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FoodsList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Paginator */ "./resources/js/classes/Paginator.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination */ "./resources/js/components/Pagination.vue");
/* harmony import */ var _classes_ResponseHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/ResponseHandler */ "./resources/js/classes/ResponseHandler.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
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
  name: "FoodsList",
  props: ['endpoint', 'user_id'],
  components: {
    ErrorPage: function ErrorPage() {
      return __webpack_require__.e(/*! import() | error-page */ "error-page").then(__webpack_require__.bind(null, /*! ./ErrorPage */ "./resources/js/components/ErrorPage.vue"));
    },
    Pagination: _Pagination__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      data: null,
      isLoading: true,
      hasData: true,
      defaultPage: 1,
      paginator: null,
      responseHandler: new _classes_ResponseHandler__WEBPACK_IMPORTED_MODULE_2__["default"](this.$router, 'index')
    };
  },
  computed: {
    endpointForAxios: function endpointForAxios() {
      return '/api' + this.endpoint;
    }
  },
  watch: {
    $route: function $route(to, from) {
      if (Object.keys(to.query).length === 0) {
        this.goToPage(this.defaultPage, true);
      }
    }
  },
  methods: {
    goToPage: function goToPage(page) {
      var _this = this;

      var firstRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!firstRequest && this.paginator.getCurrent() === page) {
        return;
      }

      if (page !== parseInt(page) && isNaN(page)) {
        page = this.defaultPage;
      }

      if (this.$route.query.page !== page) {
        this.$router.push({
          path: this.endpoint,
          query: {
            page: page
          }
        });
      }

      axios.get(this.endpointForAxios, {
        params: {
          page: page
        }
      }).then(function (response) {
        _this.isLoading = false;
        _this.data = response.data;

        if (_this.data.data.length === 0) {
          _this.hasData = false;
          return;
        }

        _this.hasData = true;

        if (firstRequest) {
          _this.paginator = new _classes_Paginator__WEBPACK_IMPORTED_MODULE_0__["default"](_this.data.meta);
          return;
        }

        _this.paginator.setMeta(response.data.meta);

        _this.paginator.getLinks();
      })["catch"](function (error) {
        _this.responseHandler.handle(error.response.status).then(function () {
          _this.isLoading = true;
          _this.hasData = false;
        });
      });
    },
    del: function del(endPoint) {
      var _this2 = this;

      sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
        title: 'Are you sure ?',
        text: 'Once deleted, the item can\'t be restored !',
        buttons: [true, 'Yes'],
        icon: 'warning',
        dangerMode: true
      }).then(function (clickedButton) {
        if (!clickedButton) {
          return;
        }

        var responseHandler = new _classes_ResponseHandler__WEBPACK_IMPORTED_MODULE_2__["default"](_this2.$router, 'delete');
        axios["delete"](endPoint).then(function (response) {
          responseHandler.handle(response.status);
        })["catch"](function (error) {
          responseHandler.handle(error.response.status);
        });
      });
    },
    itemNumber: function itemNumber(key) {
      return (this.paginator.getCurrent() - 1) * this.paginator.perPage() + key + 1;
    }
  },
  mounted: function mounted() {
    if (this.$route.query.page) {
      this.goToPage(this.$route.query.page, true);
    } else {
      this.goToPage(this.defaultPage, true);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pagination.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pagination.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
  name: "Pagination",
  props: {
    paginator: {
      type: Object,
      required: true
    }
  },
  computed: {
    showMostFirstPage: function showMostFirstPage() {
      return this.paginator.getCurrent() - this.paginator.linksCount >= 1;
    },
    showMostLastPage: function showMostLastPage() {
      return this.paginator.getCurrent() + this.paginator.linksCount - 1 < this.paginator.last();
    }
  },
  methods: {
    changePage: function changePage(page) {
      this.$emit('change:page', page);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FoodsList.vue?vue&type=template&id=769d1ab8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FoodsList.vue?vue&type=template&id=769d1ab8&scoped=true& ***!
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
    _vm.isLoading
      ? _c(
          "div",
          { staticClass: "flex justify-center items-center h-screen" },
          [
            _c("img", {
              staticClass: "block w-50 h-50",
              attrs: { src: __webpack_require__(/*! ../../images/25.gif */ "./resources/images/25.gif"), alt: "" }
            })
          ]
        )
      : !_vm.isLoading && _vm.hasData
      ? _c(
          "div",
          { staticClass: "sm:text-sm lg:text-base text-sm" },
          [
            _c("div", { staticClass: "py-3" }, [
              _c("p", { staticClass: "text-gray-400" }, [
                _vm._v("Results: " + _vm._s(_vm.data.meta.total))
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "h-128" }, [
              _c(
                "table",
                {
                  staticClass:
                    "w-full border-collapse overflow-hidden border-blue-400 rounded-lg shadow-2xl"
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.data.data, function(item, key) {
                      return _c(
                        "tr",
                        {
                          key: item.data.id,
                          staticClass: "text-center  hover:bg-gray-100"
                        },
                        [
                          _c(
                            "td",
                            { staticClass: "py-2 hidden sm:table-cell" },
                            [_vm._v(_vm._s(_vm.itemNumber(key)))]
                          ),
                          _vm._v(" "),
                          _c("td", { staticClass: "py-2 border-l" }, [
                            _vm._v(_vm._s(item.data.name))
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "py-2 border-l" }, [
                            _vm._v(_vm._s(item.data.calories))
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "py-2 border-l hidden sm:table-cell"
                            },
                            [_vm._v(_vm._s(item.data.serving))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "py-2 border-l hidden sm:table-cell"
                            },
                            [_vm._v(_vm._s(item.data.unit))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass:
                                "py-2 flex justify-between items-center border-l"
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "w-1/3 hover:shadow",
                                  attrs: {
                                    to: {
                                      name: "food",
                                      params: { id: item.data.food_id }
                                    },
                                    title: "See"
                                  }
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "mx-auto",
                                      attrs: {
                                        width: "20px",
                                        height: "30px",
                                        viewBox: "0 0 100 100",
                                        version: "1.1",
                                        xmlns: "http://www.w3.org/2000/svg"
                                      }
                                    },
                                    [
                                      _c(
                                        "g",
                                        {
                                          attrs: {
                                            stroke: "none",
                                            "stroke-width": "1",
                                            fill: "none",
                                            "fill-rule": "evenodd",
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round"
                                          }
                                        },
                                        [
                                          _c(
                                            "g",
                                            {
                                              attrs: {
                                                transform:
                                                  "translate(2.000000, 16.000000)",
                                                stroke: "#2E86DE",
                                                "stroke-width": "4"
                                              }
                                            },
                                            [
                                              _c("path", {
                                                attrs: {
                                                  d:
                                                    "M48,67.2 C81.8971875,67.2 96,33.3512347 96,33.3512347 C96,33.3512347 81.0140625,-3.02379073e-15 48,0 C14.9859375,3.02379073e-15 0,33.3512347 0,33.3512347 C0,33.3512347 14.1028125,67.2 48,67.2 Z",
                                                  id: "Layer-1"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("circle", {
                                                attrs: {
                                                  id: "Layer-2",
                                                  cx: "48",
                                                  cy: "33.6",
                                                  r: "21.12"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("path", {
                                                attrs: {
                                                  d:
                                                    "M57.0803498,14.5262074 C53.013568,15.2280273 49.92,18.7727429 49.92,23.04 C49.92,27.8117402 53.7882598,31.68 58.56,31.68 C62.8272571,31.68 66.3719727,28.586432 67.0737926,24.5196502 C68.3856474,27.2703493 69.12,30.349416 69.12,33.6 C69.12,45.2642539 59.6642539,54.72 48,54.72 C36.3357461,54.72 26.88,45.2642539 26.88,33.6 C26.88,21.9357461 36.3357461,12.48 48,12.48 C51.250584,12.48 54.3296507,13.2143526 57.0803498,14.5262074 Z",
                                                  id: "Layer-3"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              item.data.owner_id === _vm.user_id
                                ? _c(
                                    "router-link",
                                    {
                                      staticClass: "w-1/3 hover:shadow",
                                      attrs: {
                                        to: {
                                          name: "edit",
                                          params: { id: item.data.food_id }
                                        },
                                        title: "Edit"
                                      }
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "mx-auto",
                                          attrs: {
                                            width: "20px",
                                            height: "30px",
                                            viewBox: "0 0 100 100",
                                            version: "1.1",
                                            xmlns: "http://www.w3.org/2000/svg"
                                          }
                                        },
                                        [
                                          _c(
                                            "g",
                                            {
                                              attrs: {
                                                stroke: "none",
                                                "stroke-width": "1",
                                                fill: "none",
                                                "fill-rule": "evenodd",
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round"
                                              }
                                            },
                                            [
                                              _c(
                                                "g",
                                                {
                                                  attrs: {
                                                    transform:
                                                      "translate(2.000000, 2.000000)",
                                                    stroke: "#2E86DE",
                                                    "stroke-width": "4"
                                                  }
                                                },
                                                [
                                                  _c("path", {
                                                    attrs: {
                                                      d:
                                                        "M56.5106952,10.5464071 C60.8135865,11.5200327 64.8423906,13.2161538 68.4628809,15.5005439 L76.8618891,8.97963811 L87.0203619,19.1381109 L80.4994561,27.5371191 C82.7838462,31.1576094 84.4799673,35.1864135 85.4535929,39.4893048 L96,40.816875 L96,55.183125 L85.4535929,56.5106952 C84.4799673,60.8135865 82.7838462,64.8423906 80.4994561,68.4628809 L87.0203619,76.8618891 L76.8618891,87.0203619 L68.4628809,80.4994561 C64.8423906,82.7838462 60.8135865,84.4799673 56.5106952,85.4535929 L55.183125,96 L40.816875,96 L39.4893048,85.4535929 C35.1864135,84.4799673 31.1576094,82.7838462 27.5371191,80.4994561 L19.1381109,87.0203619 L8.97963811,76.8618891 L15.5005439,68.4628809 C13.2161538,64.8423906 11.5200327,60.8135865 10.5464071,56.5106952 L0,55.183125 L0,40.816875 L10.5464071,39.4893048 C11.5200327,35.1864135 13.2161538,31.1576094 15.5005439,27.5371191 L8.97963811,19.1381109 L19.1381109,8.97963811 L27.5371191,15.5005439 C31.1576094,13.2161538 35.1864135,11.5200327 39.4893048,10.5464071 L40.816875,0 L55.183125,0 L56.5106952,10.5464071 Z",
                                                      id: "Layer-1"
                                                    }
                                                  }),
                                                  _vm._v(" "),
                                                  _c("circle", {
                                                    attrs: {
                                                      id: "Layer-2",
                                                      cx: "48",
                                                      cy: "48",
                                                      r: "14.4"
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              item.data.owner_id === _vm.user_id
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "w-1/3 hover:shadow",
                                      attrs: { href: "#", title: "Delete" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.del(item.links.self)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "mx-auto",
                                          attrs: {
                                            width: "20px",
                                            height: "30px",
                                            viewBox: "1 1 511.99999 511.99999",
                                            xmlns: "http://www.w3.org/2000/svg"
                                          }
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              d:
                                                "m496 256c0 132.546875-107.453125 240-240 240s-240-107.453125-240-240 107.453125-240 240-240 240 107.453125 240 240zm0 0",
                                              fill: "#bddbff"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "g",
                                            { attrs: { fill: "#3d9ae2" } },
                                            [
                                              _c("path", {
                                                attrs: {
                                                  d:
                                                    "m256 0c-141.382812 0-256 114.617188-256 256s114.617188 256 256 256 256-114.617188 256-256c-.167969-141.316406-114.683594-255.832031-256-256zm0 480c-123.710938 0-224-100.289062-224-224s100.289062-224 224-224 224 100.289062 224 224c-.132812 123.65625-100.34375 223.867188-224 224zm0 0"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("path", {
                                                attrs: {
                                                  d:
                                                    "m380.449219 131.550781c-6.25-6.246093-16.378907-6.246093-22.625 0l-101.824219 101.824219-101.824219-101.824219c-6.136719-6.355469-16.269531-6.53125-22.625-.390625-6.355469 6.136719-6.53125 16.265625-.394531 22.621094.128906.132812.261719.265625.394531.394531l101.824219 101.824219-101.824219 101.824219c-6.355469 6.136719-6.53125 16.269531-.390625 22.625 6.136719 6.355469 16.265625 6.53125 22.621094.394531.132812-.128906.265625-.261719.394531-.394531l101.824219-101.824219 101.824219 101.824219c6.355469 6.136719 16.484375 5.960937 22.625-.394531 5.988281-6.199219 5.988281-16.03125 0-22.230469l-101.824219-101.824219 101.824219-101.824219c6.246093-6.246093 6.246093-16.375 0-22.625zm0 0"
                                                }
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ]
                      )
                    }),
                    0
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("Pagination", {
              attrs: { paginator: this.paginator },
              on: {
                "change:page": function($event) {
                  return _vm.goToPage($event)
                }
              }
            })
          ],
          1
        )
      : !_vm.hasData
      ? _c("div", [_c("ErrorPage", { attrs: { text: "No Data Found" } })], 1)
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "bg-blue-400" }, [
        _c("th", { staticClass: "py-5 w-1/12 hidden sm:table-cell" }, [
          _vm._v("#")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "py-5 w-1/2 sm:w-2/6" }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { staticClass: "py-5 sm:w-1/6" }, [_vm._v("Calories")]),
        _vm._v(" "),
        _c("th", { staticClass: "py-5 w-1/12 hidden sm:table-cell" }, [
          _vm._v("Serving")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "py-5 w-2/12 hidden sm:table-cell" }, [
          _vm._v("Unit")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "py-5 w-auto" }, [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _vm.paginator.last() > 1
    ? _c(
        "div",
        {
          staticClass: "sm:py-12 sm:px-12 md:px-20 lg:px-24 xl:p-32 py-12 px-0"
        },
        [
          _c(
            "ul",
            {
              staticClass:
                "flex sm:justify-center justify-between bg-white list-reset rounded shadow-lg"
            },
            [
              _c("li", [
                _vm.paginator.isFirst()
                  ? _c(
                      "button",
                      {
                        staticClass:
                          "h-full rounded-full border-2 border-gray-200 px-4 py-3 focus:outline-none",
                        class: { "cursor-not-allowed": _vm.paginator.isFirst() }
                      },
                      [_vm._v("<\n            ")]
                    )
                  : _c(
                      "button",
                      {
                        staticClass:
                          "font-bold h-full hover:bg-blue-100 px-4 py-3 rounded-full border-2 border-gray-200 focus:outline-none",
                        on: {
                          click: function($event) {
                            _vm.changePage(_vm.paginator.getCurrent() - 1)
                          }
                        }
                      },
                      [_vm._v("\n                <\n            ")]
                    )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "sm:w-1/2 w-3/4" }, [
                _c(
                  "ul",
                  { staticClass: "flex justify-center h-full" },
                  [
                    _vm.showMostFirstPage
                      ? _c("li", { staticClass: "h-full" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "h-full hover:text-gray-800 text-gray-400 px-4 py-3 focus:outline-none",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.changePage(1)
                                }
                              }
                            },
                            [_vm._v("1 ...\n                    ")]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.paginator.getLinks(), function(page) {
                      return _c(
                        "li",
                        {
                          staticClass: "border-r border-grey-light h-full",
                          class: {
                            "bg-blue-400": _vm.paginator.isCurrent(page),
                            "hover:bg-blue-100": !_vm.paginator.isCurrent(page),
                            "border-l border-grey-light": page === 1
                          }
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass:
                                "px-4 py-3 h-full focus:outline-none",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.changePage(page)
                                }
                              }
                            },
                            [_vm._v(_vm._s(page) + "\n                    ")]
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _vm.showMostLastPage
                      ? _c("li", { staticClass: "h-full" }, [
                          _c(
                            "button",
                            {
                              staticClass:
                                "h-full hover:text-gray-800 text-gray-400 px-4 py-3 focus:outline-none",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  _vm.changePage(_vm.paginator.last())
                                }
                              }
                            },
                            [
                              _vm._v(
                                "... " +
                                  _vm._s(_vm.paginator.last()) +
                                  "\n                    "
                              )
                            ]
                          )
                        ])
                      : _vm._e()
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _vm.paginator.isLast()
                  ? _c(
                      "button",
                      {
                        staticClass:
                          "px-4 py-3 h-full rounded-full border-2 border-gray-200 focus:outline-none",
                        class: { "cursor-not-allowed": _vm.paginator.isLast() }
                      },
                      [_vm._v(" >\n            ")]
                    )
                  : _c(
                      "button",
                      {
                        staticClass:
                          "font-bold h-full hover:bg-blue-100 px-4 py-3 rounded-full border-2 border-gray-200 focus:outline-none",
                        on: {
                          click: function($event) {
                            _vm.changePage(_vm.paginator.getCurrent() + 1)
                          }
                        }
                      },
                      [_vm._v("\n                >\n            ")]
                    )
              ])
            ]
          )
        ]
      )
    : _vm._e()
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

/***/ "./resources/js/classes/Paginator.js":
/*!*******************************************!*\
  !*** ./resources/js/classes/Paginator.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Paginator =
/*#__PURE__*/
function () {
  function Paginator(page_meta) {
    _classCallCheck(this, Paginator);

    this.meta = page_meta;
    this.linksCount = 4;
  }

  _createClass(Paginator, [{
    key: "linksRange",
    value: function linksRange(from, to) {
      var arr = [];

      for (var i = from; i <= to; i++) {
        arr.push(i);
      }

      return arr;
    }
  }, {
    key: "makeLinks",
    value: function makeLinks() {
      var _this = this;

      var links = null;
      links = this.linksRange(1, this.linksCount);

      if (this.getCurrent() - this.linksCount >= 1) {
        links = this.linksRange(this.getCurrent(), this.getCurrent() + this.linksCount - 1);
      }

      links = links.filter(function (link) {
        return link <= _this.last();
      });

      if (links.length < this.linksCount && this.last() > this.linksCount) {
        links = this.linksRange(this.last() - this.linksCount + 1, this.last());
      }

      return links;
    }
  }, {
    key: "getLinks",
    value: function getLinks() {
      return this.makeLinks();
    }
  }, {
    key: "getCurrent",
    value: function getCurrent() {
      return this.meta.current_page;
    }
  }, {
    key: "isCurrent",
    value: function isCurrent(page) {
      return this.getCurrent() === page;
    }
  }, {
    key: "total",
    value: function total() {
      return this.meta.total;
    }
  }, {
    key: "perPage",
    value: function perPage() {
      return this.meta.per_page;
    }
  }, {
    key: "last",
    value: function last() {
      return this.meta.last_page;
    }
  }, {
    key: "setMeta",
    value: function setMeta(meta) {
      this.meta = meta;
    }
  }, {
    key: "isFirst",
    value: function isFirst() {
      return this.getCurrent() === 1;
    }
  }, {
    key: "isLast",
    value: function isLast() {
      return this.getCurrent() === this.last();
    }
  }]);

  return Paginator;
}();

/* harmony default export */ __webpack_exports__["default"] = (Paginator);

/***/ }),

/***/ "./resources/js/components/FoodsList.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/FoodsList.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FoodsList_vue_vue_type_template_id_769d1ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FoodsList.vue?vue&type=template&id=769d1ab8&scoped=true& */ "./resources/js/components/FoodsList.vue?vue&type=template&id=769d1ab8&scoped=true&");
/* harmony import */ var _FoodsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FoodsList.vue?vue&type=script&lang=js& */ "./resources/js/components/FoodsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FoodsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FoodsList_vue_vue_type_template_id_769d1ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FoodsList_vue_vue_type_template_id_769d1ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "769d1ab8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FoodsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FoodsList.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/FoodsList.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FoodsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FoodsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FoodsList.vue?vue&type=template&id=769d1ab8&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/FoodsList.vue?vue&type=template&id=769d1ab8&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodsList_vue_vue_type_template_id_769d1ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FoodsList.vue?vue&type=template&id=769d1ab8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FoodsList.vue?vue&type=template&id=769d1ab8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodsList_vue_vue_type_template_id_769d1ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FoodsList_vue_vue_type_template_id_769d1ab8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Pagination.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Pagination.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination_vue_vue_type_template_id_d7acf176_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=d7acf176&scoped=true& */ "./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176&scoped=true&");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js& */ "./resources/js/components/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pagination_vue_vue_type_template_id_d7acf176_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pagination_vue_vue_type_template_id_d7acf176_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d7acf176",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pagination.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pagination.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Pagination.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pagination.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_d7acf176_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Pagination.vue?vue&type=template&id=d7acf176&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Pagination.vue?vue&type=template&id=d7acf176&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_d7acf176_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pagination_vue_vue_type_template_id_d7acf176_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);