/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apiClient */ \"./src/services/apiClient.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_apiClient__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_5__]);\n([_services_apiClient__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(undefined, \"@nextauth.token\");\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n    } catch  {\n        console.log(\"erro ao deslogar\");\n    }\n}\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"@nextauth.token\": token } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)();\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/me\").then((response)=>{\n                const { id, name, email } = response.data;\n                setUser({\n                    id,\n                    name,\n                    email\n                });\n            }).catch(()=>{\n                signOut();\n            });\n        }\n    }, []);\n    async function signIn({ email, password }) {\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/session\", {\n                email,\n                password\n            });\n            // console.log(response.data)\n            const { id, name, token } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(undefined, \"@nextauth.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            setUser({\n                id,\n                name,\n                email\n            });\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers[\"Authorization\"] = `Bearer ${token}`;\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"Logado com sucesso\");\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n        } catch (erro) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Erro ao acessar!\");\n            console.log(\"Erro ao acessar: \", erro);\n        }\n    }\n    async function signUp({ name, email, password }) {\n        try {\n            const reponse = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/users\", {\n                name,\n                email,\n                password\n            });\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"Conta criada\");\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n        } catch (erro) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Erro ao cadastrar!\");\n            console.log(\"Erro ao cadastrar: \", erro);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn,\n            signOut,\n            signUp\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\temp\\\\pizzaria\\\\frontend\\\\src\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 130,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNFO0FBRTFCO0FBRXFCO0FBQ2hDO0FBRU07QUErQmhDLE1BQU1TLDRCQUFjVCxvREFBYUEsQ0FBQyxDQUFDLEdBQXNCO0FBRXpELFNBQVNVO0lBQ1osSUFBSTtRQUNBTixzREFBYUEsQ0FBQ08sV0FBVztRQUN6QkosdURBQVcsQ0FBQztJQUNoQixFQUFDLE9BQUs7UUFDRk0sUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0FBQ0o7QUFFTyxTQUFTQyxhQUFhLEVBQUNDLFFBQVEsRUFBb0I7SUFDdEQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdqQiwrQ0FBUUE7SUFDaEMsTUFBTWtCLGtCQUFrQixDQUFDLENBQUNGO0lBRTFCZixnREFBU0EsQ0FBQztRQUVOLE1BQU0sRUFBQyxtQkFBbUJrQixLQUFLLEVBQUMsR0FBR2QscURBQVlBO1FBRS9DLElBQUljLE9BQU07WUFDTmpCLG9EQUFHQSxDQUFDa0IsR0FBRyxDQUFDLE9BQU9DLElBQUksQ0FBQ0MsQ0FBQUE7Z0JBQ2hCLE1BQU0sRUFBRUMsRUFBRSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHSCxTQUFTSSxJQUFJO2dCQUV6Q1QsUUFBUTtvQkFDSk07b0JBQ0FDO29CQUNBQztnQkFDSjtZQUVKLEdBQ0NFLEtBQUssQ0FBQztnQkFDSGxCO1lBQ0o7UUFDSjtJQUdKLEdBQUcsRUFBRTtJQUVMLGVBQWVtQixPQUFPLEVBQUVILEtBQUssRUFBRUksUUFBUSxFQUFlO1FBQ2xELElBQUk7WUFDQSxNQUFNUCxXQUFXLE1BQU1wQixvREFBR0EsQ0FBQzRCLElBQUksQ0FBQyxZQUFXO2dCQUN2Q0w7Z0JBQ0FJO1lBQ0o7WUFDQSw2QkFBNkI7WUFFN0IsTUFBTSxFQUFDTixFQUFFLEVBQUVDLElBQUksRUFBRUwsS0FBSyxFQUFDLEdBQUdHLFNBQVNJLElBQUk7WUFFdkN0QixrREFBU0EsQ0FBQ00sV0FBVyxtQkFBbUJTLE9BQU87Z0JBQzNDWSxRQUFRLEtBQUssS0FBSyxLQUFLO2dCQUN2QkMsTUFBTTtZQUNWO1lBRUFmLFFBQVE7Z0JBQ0pNO2dCQUNBQztnQkFDQUM7WUFDSjtZQUVBdkIsb0RBQUdBLENBQUMrQixRQUFRLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLE9BQU8sRUFBRWYsTUFBTSxDQUFDO1lBRXpEWixpREFBS0EsQ0FBQzRCLE9BQU8sQ0FBQztZQUVkN0IsdURBQVcsQ0FBQztRQUVoQixFQUFFLE9BQU84QixNQUFNO1lBQ1g3QixpREFBS0EsQ0FBQzhCLEtBQUssQ0FBQztZQUNaekIsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQnVCO1FBQ3JDO0lBQ0o7SUFFQSxlQUFlRSxPQUFPLEVBQUVkLElBQUksRUFBRUMsS0FBSyxFQUFFSSxRQUFRLEVBQWM7UUFDdkQsSUFBSTtZQUVBLE1BQU1VLFVBQVUsTUFBTXJDLG9EQUFHQSxDQUFDNEIsSUFBSSxDQUFDLFVBQVU7Z0JBQ3JDTjtnQkFDQUM7Z0JBQ0FJO1lBQ0o7WUFFQXRCLGlEQUFLQSxDQUFDNEIsT0FBTyxDQUFDO1lBRWQ3Qix1REFBVyxDQUFDO1FBRWhCLEVBQUUsT0FBTzhCLE1BQU07WUFDWDdCLGlEQUFLQSxDQUFDOEIsS0FBSyxDQUFDO1lBQ1p6QixRQUFRQyxHQUFHLENBQUMsdUJBQXVCdUI7UUFDdkM7SUFDSjtJQUVBLHFCQUNJLDhEQUFDNUIsWUFBWWdDLFFBQVE7UUFBQ0MsT0FBTztZQUFFekI7WUFBTUU7WUFBaUJVO1lBQVFuQjtZQUFTNkI7UUFBTztrQkFDekV2Qjs7Ozs7O0FBR2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb250ZXh0cy9BdXRoQ29udGV4dC50c3g/MWZhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlDbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IGRlc3Ryb3lDb29raWUsIHNldENvb2tpZSwgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG50eXBlIEF1dGhDb250ZXh0RGF0YSA9IHtcclxuICAgIHVzZXI6IFVzZXJQcm9wcztcclxuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxuICAgIHNpZ25JbjogKGNyZWRlbnRpYWw6IFNpZ25JblByb3BzKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgc2lnbk91dDogKCkgPT4gdm9pZDtcclxuICAgIHNpZ25VcDogKGNyZWRlbnRpYWw6IFNpZ25VcFByb3BzKSA9PiBQcm9taXNlPHZvaWQ+O1xyXG59XHJcblxyXG50eXBlIFVzZXJQcm9wcyA9IHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIFNpZ25JblByb3BzID0ge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgU2lnblVwUHJvcHMgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBBdXRoUHJvdmlkZXJQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KCl7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnQG5leHRhdXRoLnRva2VuJylcclxuICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9Y2F0Y2h7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvIGFvIGRlc2xvZ2FyXCIpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoe2NoaWxkcmVufTogQXV0aFByb3ZpZGVyUHJvcHMpe1xyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlclByb3BzPigpO1xyXG4gICAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gISF1c2VyO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsnQG5leHRhdXRoLnRva2VuJzogdG9rZW59ID0gcGFyc2VDb29raWVzKCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbil7XHJcbiAgICAgICAgICAgIGFwaS5nZXQoJy9tZScpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgZW1haWwgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzaWduT3V0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9LCBbXSlcclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2lnbkluKHsgZW1haWwsIHBhc3N3b3JkIH06IFNpZ25JblByb3BzKXtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvc2Vzc2lvbicse1xyXG4gICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxyXG5cclxuICAgICAgICAgICAgY29uc3Qge2lkLCBuYW1lLCB0b2tlbn0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ0BuZXh0YXV0aC50b2tlbicsIHRva2VuLCB7XHJcbiAgICAgICAgICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLCAvL2V4cGlyYXIgZW0gdW0gbcOqc1xyXG4gICAgICAgICAgICAgICAgcGF0aDogXCIvXCJcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YFxyXG5cclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnTG9nYWRvIGNvbSBzdWNlc3NvJylcclxuXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJylcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJybykge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcignRXJybyBhbyBhY2Vzc2FyIScpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJybyBhbyBhY2Vzc2FyOiBcIiwgZXJybylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2lnblVwKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkfTogU2lnblVwUHJvcHMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvdXNlcnMnLCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnQ29udGEgY3JpYWRhJylcclxuXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJybykge1xyXG4gICAgICAgICAgICB0b2FzdC5lcnJvcignRXJybyBhbyBjYWRhc3RyYXIhJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvIGFvIGNhZGFzdHJhcjogXCIsIGVycm8pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBzaWduSW4sIHNpZ25PdXQsIHNpZ25VcCB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXBpIiwiZGVzdHJveUNvb2tpZSIsInNldENvb2tpZSIsInBhcnNlQ29va2llcyIsIlJvdXRlciIsInRvYXN0IiwiQXV0aENvbnRleHQiLCJzaWduT3V0IiwidW5kZWZpbmVkIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiaXNBdXRoZW50aWNhdGVkIiwidG9rZW4iLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJpZCIsIm5hbWUiLCJlbWFpbCIsImRhdGEiLCJjYXRjaCIsInNpZ25JbiIsInBhc3N3b3JkIiwicG9zdCIsIm1heEFnZSIsInBhdGgiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJzdWNjZXNzIiwiZXJybyIsImVycm9yIiwic2lnblVwIiwicmVwb25zZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__]);\n([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\temp\\\\pizzaria\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            \";\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {\n                autoClose: 3000\n            }, void 0, false, {\n                fileName: \"C:\\\\temp\\\\pizzaria\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\temp\\\\pizzaria\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUVhO0FBQ0Q7QUFFUTtBQUV2RCxTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzdDLHFCQUNFLDhEQUFDSCwrREFBWUE7OzBCQUNYLDhEQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7WUFBSTswQkFDNUIsOERBQUNKLDBEQUFjQTtnQkFBQ0ssV0FBVzs7Ozs7Ozs7Ozs7O0FBR2pDO0FBRUEsaUVBQWVILEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uLy4uL3N0eWxlcy9nbG9iYWxzLnNjc3NcIjtcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcblxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRzL0F1dGhDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEF1dGhQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG4gICAgICA8VG9hc3RDb250YWluZXIgYXV0b0Nsb3NlPXszMDAwfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcCJdLCJuYW1lcyI6WyJUb2FzdENvbnRhaW5lciIsIkF1dGhQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImF1dG9DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupApiClient: () => (/* binding */ setupApiClient)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _errors_AuthTokenError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/AuthTokenError */ \"./src/services/errors/AuthTokenError.ts\");\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction setupApiClient(ctx = undefined) {\n    let cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(ctx);\n    const api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n        baseURL: \"http://localhost:3333\",\n        headers: {\n            Authorization: `Bearer: ${cookies[\"@nextauth.token\"]}`\n        }\n    });\n    api.interceptors.response.use((response)=>{\n        return response;\n    }, (error)=>{\n        if (error.response?.status === 401) {\n            if (true) {\n                (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.signOut)();\n            } else {}\n        }\n        return Promise.reject(error);\n    });\n    return api;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNEO0FBQ2tCO0FBR1A7QUFFM0MsU0FBU0ksZUFBZUMsTUFBTUMsU0FBUztJQUMxQyxJQUFJQyxVQUFVTixxREFBWUEsQ0FBQ0k7SUFFM0IsTUFBTUcsTUFBTVIsb0RBQVksQ0FBQztRQUNyQlUsU0FBUztRQUNUQyxTQUFRO1lBQ0pDLGVBQWUsQ0FBQyxRQUFRLEVBQUVMLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFEO0lBQ0o7SUFFQUMsSUFBSUssWUFBWSxDQUFDQyxRQUFRLENBQUNDLEdBQUcsQ0FBQ0QsQ0FBQUE7UUFDMUIsT0FBT0E7SUFDWCxHQUFHLENBQUNFO1FBQ0EsSUFBR0EsTUFBTUYsUUFBUSxFQUFFRyxXQUFXLEtBQUk7WUFFOUIsSUFBRyxJQUEyQlgsRUFBQztnQkFDM0JILDhEQUFPQTtZQUNYLE9BQUssRUFFSjtRQUNMO1FBRUEsT0FBT2UsUUFBUUMsTUFBTSxDQUFDSDtJQUUxQjtJQUVBLE9BQU9SO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zZXJ2aWNlcy9hcGkudHM/OTU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHtBeGlvc0Vycm9yfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHsgQXV0aFRva2VuRXJyb3IgfSBmcm9tIFwiLi9lcnJvcnMvQXV0aFRva2VuRXJyb3JcIjtcclxuaW1wb3J0IHsgZXJyb3IgfSBmcm9tIFwiY29uc29sZVwiO1xyXG5cclxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gXCIuLi9jb250ZXh0cy9BdXRoQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwQXBpQ2xpZW50KGN0eCA9IHVuZGVmaW5lZCl7XHJcbiAgICBsZXQgY29va2llcyA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cclxuICAgIGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMycsXHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXI6ICR7Y29va2llc1snQG5leHRhdXRoLnRva2VuJ119YFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgYXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0sIChlcnJvcjogQXhpb3NFcnJvcikgPT4ge1xyXG4gICAgICAgIGlmKGVycm9yLnJlc3BvbnNlPy5zdGF0dXMgPT09IDQwMSl7XHJcblxyXG4gICAgICAgICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgc2lnbk91dCgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQXV0aFRva2VuRXJyb3IoKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGFwaTtcclxufSJdLCJuYW1lcyI6WyJheGlvcyIsInBhcnNlQ29va2llcyIsIkF1dGhUb2tlbkVycm9yIiwic2lnbk91dCIsInNldHVwQXBpQ2xpZW50IiwiY3R4IiwidW5kZWZpbmVkIiwiY29va2llcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJzdGF0dXMiLCJQcm9taXNlIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/apiClient.ts":
/*!***********************************!*\
  !*** ./src/services/apiClient.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/services/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);\n_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = (0,_api__WEBPACK_IMPORTED_MODULE_0__.setupApiClient)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpQ2xpZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBRWhDLE1BQU1DLE1BQU1ELG9EQUFjQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2VydmljZXMvYXBpQ2xpZW50LnRzPzdkMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0dXBBcGlDbGllbnQgfSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBzZXR1cEFwaUNsaWVudCgpOyJdLCJuYW1lcyI6WyJzZXR1cEFwaUNsaWVudCIsImFwaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/apiClient.ts\n");

/***/ }),

/***/ "./src/services/errors/AuthTokenError.ts":
/*!***********************************************!*\
  !*** ./src/services/errors/AuthTokenError.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthTokenError: () => (/* binding */ AuthTokenError)\n/* harmony export */ });\nclass AuthTokenError extends Error {\n    constructor(){\n        super(\"Error with authentication token\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZXJyb3JzL0F1dGhUb2tlbkVycm9yLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSx1QkFBdUJDO0lBQ2hDQyxhQUFhO1FBQ1QsS0FBSyxDQUFDO0lBQ1Y7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NlcnZpY2VzL2Vycm9ycy9BdXRoVG9rZW5FcnJvci50cz8yM2ViIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBdXRoVG9rZW5FcnJvciBleHRlbmRzIEVycm9ye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcignRXJyb3Igd2l0aCBhdXRoZW50aWNhdGlvbiB0b2tlbicpXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQXV0aFRva2VuRXJyb3IiLCJFcnJvciIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/errors/AuthTokenError.ts\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();