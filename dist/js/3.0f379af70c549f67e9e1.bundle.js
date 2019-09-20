(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{915:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(911);\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlusCircleOutline", function() { return _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["a"]; });\n\n\n\n//# sourceURL=webpack:///./antdIcon.js?')},917:function(module,exports,__webpack_require__){eval('var map = {\n\t"./zh-cn": 912,\n\t"./zh-cn.js": 912\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error("Cannot find module \'" + req + "\'");\n\t\te.code = \'MODULE_NOT_FOUND\';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = 917;\n\n//# sourceURL=webpack:///./node_modules/moment/locale_sync_(zh-cn(\\.js)?')},919:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(0);\nvar react_default = /*#__PURE__*/__webpack_require__.n(react);\n\n// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 23 modules\nvar es = __webpack_require__(61);\n\n// EXTERNAL MODULE: ./node_modules/antd/lib/input/index.js\nvar input = __webpack_require__(916);\nvar input_default = /*#__PURE__*/__webpack_require__.n(input);\n\n// EXTERNAL MODULE: ./node_modules/antd/lib/input/style/index.js\nvar style = __webpack_require__(913);\n\n// EXTERNAL MODULE: ./node_modules/antd/lib/button/index.js\nvar lib_button = __webpack_require__(95);\nvar button_default = /*#__PURE__*/__webpack_require__.n(lib_button);\n\n// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/index.js\nvar button_style = __webpack_require__(94);\n\n// EXTERNAL MODULE: ./node_modules/antd/lib/icon/index.js\nvar icon = __webpack_require__(24);\nvar icon_default = /*#__PURE__*/__webpack_require__.n(icon);\n\n// EXTERNAL MODULE: ./node_modules/antd/lib/icon/style/index.js\nvar icon_style = __webpack_require__(914);\n\n// EXTERNAL MODULE: ./src/redux/constants/index.tsx + 1 modules\nvar constants = __webpack_require__(23);\n\n// CONCATENATED MODULE: ./src/redux/actions/index.tsx\n\nlet nextTodoId = 0;\nconst addTodo = (text) => ({\n    type: constants["a" /* ADD_TODO */],\n    id: nextTodoId++,\n    text\n});\nconst addTodoAsync = (text) => (dispatch) => {\n    setTimeout(() => {\n        dispatch(addTodo(text));\n    }, 1000);\n};\nconst setVisibilityFilter = (filter) => ({\n    type: constants["b" /* SET_VISIBILITY_FILTER */],\n    filter\n});\nconst actions_toggleTodo = (id) => ({\n    type: constants["c" /* TOGGLE_TODO */],\n    id\n});\n\n// CONCATENATED MODULE: ./src/pages/AddTodo.tsx\n\n\n\n\n\n\n\n\n\nconst AddTodo = ({ dispatch }) => {\n    const [text, setText] = Object(react["useState"])("");\n    const textChange = (e) => {\n        setText(e.target.value);\n    };\n    const formSubmit = (e) => {\n        e.preventDefault();\n        dispatch(addTodo(text));\n        setText("");\n    };\n    const addTodoAsyncCb = () => {\n        dispatch(addTodoAsync(text));\n        setText("");\n    };\n    return (react_default.a.createElement("div", null,\n        react_default.a.createElement("form", { onSubmit: formSubmit },\n            react_default.a.createElement(icon_default.a, { type: "plus-circle" }),\n            react_default.a.createElement(input_default.a, { value: text, onChange: textChange }),\n            react_default.a.createElement(button_default.a, { onClick: formSubmit }, "add"),\n            react_default.a.createElement(button_default.a, { onClick: addTodoAsyncCb }, "add async"))));\n};\n/* harmony default export */ var pages_AddTodo = (Object(es["b" /* connect */])()(AddTodo));\n\n// CONCATENATED MODULE: ./src/components/Todo.tsx\n\nconst Todo = ({ onClick, completed, text }) => (react_default.a.createElement("li", { onClick: onClick, style: {\n        textDecoration: completed ? "line-through" : "none"\n    } }, text));\n/* harmony default export */ var components_Todo = (Todo);\n\n// CONCATENATED MODULE: ./src/components/TodoList.tsx\n\n\nconst TodoList = ({ todos, toggleTodo }) => {\n    const setToggle = (id) => {\n        toggleTodo(id);\n    };\n    return (react_default.a.createElement("ul", null, todos.map((i) => (react_default.a.createElement(components_Todo, Object.assign({ onClick: () => setToggle(i.id), key: i.id }, i))))));\n};\n/* harmony default export */ var components_TodoList = (TodoList);\n\n// CONCATENATED MODULE: ./src/pages/VisibleTodoList.tsx\n\n\n\n\nconst getVisibleTodos = (todos, filter) => {\n    switch (filter) {\n        case constants["d" /* VisibilityFilters */].SHOW_ALL:\n            return todos;\n        case constants["d" /* VisibilityFilters */].SHOW_COMPLETED:\n            console.log(todos.filter((t) => t.completed));\n            return todos.filter((t) => t.completed);\n        case constants["d" /* VisibilityFilters */].SHOW_ACTIVE:\n            console.log(todos.filter((t) => !t.completed));\n            return todos.filter((t) => !t.completed);\n        default:\n            throw new Error("Unknown filter: " + filter);\n    }\n};\nconst mapStateToProps = (state) => ({\n    todos: getVisibleTodos(state.todos, state.visibilityFilter)\n});\nconst mapDispatchToProps = (dispatch) => ({\n    toggleTodo: (id) => dispatch(actions_toggleTodo(id))\n});\n/* harmony default export */ var VisibleTodoList = (Object(es["b" /* connect */])(mapStateToProps, mapDispatchToProps)(components_TodoList));\n\n// CONCATENATED MODULE: ./src/components/Link.tsx\n\n\n\nconst Link = ({ active, children, onClick }) => (react_default.a.createElement(button_default.a, { onClick: onClick, disabled: active, style: {\n        marginLeft: "4px"\n    } }, children));\n/* harmony default export */ var components_Link = (Link);\n\n// CONCATENATED MODULE: ./src/pages/FilterLink.tsx\n\n\n\nconst FilterLink_mapStateToProps = (state, ownProps) => ({\n    active: ownProps.filter === state.visibilityFilter\n});\nconst FilterLink_mapDispatchToProps = (dispatch, ownProps) => ({\n    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))\n});\n/* harmony default export */ var FilterLink = (Object(es["b" /* connect */])(FilterLink_mapStateToProps, FilterLink_mapDispatchToProps)(components_Link));\n\n// CONCATENATED MODULE: ./src/components/Footer.tsx\n\n\n\nconst Footer = () => (react_default.a.createElement("div", null,\n    react_default.a.createElement("span", null, "Show: "),\n    react_default.a.createElement(FilterLink, { filter: constants["d" /* VisibilityFilters */].SHOW_ALL }, "All"),\n    react_default.a.createElement(FilterLink, { filter: constants["d" /* VisibilityFilters */].SHOW_ACTIVE }, "Active"),\n    react_default.a.createElement(FilterLink, { filter: constants["d" /* VisibilityFilters */].SHOW_COMPLETED }, "Completed")));\n/* harmony default export */ var components_Footer = (Footer);\n\n// CONCATENATED MODULE: ./src/pages/Home.tsx\n\n\n\n\nconst Home = () => {\n    return (react_default.a.createElement(react_default.a.Fragment, null,\n        react_default.a.createElement(pages_AddTodo, null),\n        react_default.a.createElement(VisibleTodoList, null),\n        react_default.a.createElement(components_Footer, null)));\n};\n/* harmony default export */ var pages_Home = __webpack_exports__["default"] = (Home);\n\n\n//# sourceURL=webpack:///./src/pages/Home.tsx_+_8_modules?')}}]);