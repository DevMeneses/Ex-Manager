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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"signOut\": () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_apiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apiClient */ \"./src/services/apiClient.ts\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_apiClient__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__]);\n([_services_apiClient__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(undefined, \"@nextauth.token\");\n        next_router__WEBPACK_IMPORTED_MODULE_5___default().push(\"/\");\n    } catch  {\n        console.log(\"Erro ao deslogar\");\n    }\n}\nfunction AuthProvider({ children  }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"@nextauth.token\": token  } = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)();\n        if (token) {\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.get(\"/me\").then((response)=>{\n                const { id , name , email  } = response.data;\n                setUser({\n                    id,\n                    name,\n                    email\n                });\n            }).catch(()=>{\n                signOut();\n            });\n        }\n    }, []);\n    async function signIn({ email , password  }) {\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/session\", {\n                email,\n                password\n            });\n            const { id , name , token  } = response.data;\n            (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, \"@nextauth.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\"\n            });\n            setUser({\n                id,\n                name,\n                email\n            });\n            //Passar para proximas requisições nosso token\n            _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.defaults.headers.Authorization = `Bearer ${token}`;\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.info(\"Logado com sucesso\");\n            next_router__WEBPACK_IMPORTED_MODULE_5___default().push(\"/dashboard\");\n        } catch (err) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Erro ao Acessar!\");\n            console.log(\"ERRO AO ACESSAR \", err);\n        }\n    }\n    async function signUp({ name , email , password  }) {\n        try {\n            const response = await _services_apiClient__WEBPACK_IMPORTED_MODULE_2__.api.post(\"/users\", {\n                name,\n                email,\n                password\n            });\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Conta criada com sucesso!\");\n            next_router__WEBPACK_IMPORTED_MODULE_5___default().push(\"/\");\n        } catch (err) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Erro ao cadastrar!\");\n            console.log(\"Erro ao cadastrar \", err);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn,\n            signOut,\n            signUp\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dev\\\\Desktop\\\\Ex-Manager\\\\Ex\\\\frontend\\\\src\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 125,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNFO0FBRTFCO0FBRUw7QUFFMEI7QUFDaEM7QUErQjFCLE1BQU1TLDRCQUFjVCxvREFBYUEsQ0FBQyxDQUFDLEdBQXNCO0FBRXpELFNBQVNVLFVBQVU7SUFDeEIsSUFBSTtRQUNGTCxzREFBYUEsQ0FBQ00sV0FBVztRQUN6QkgsdURBQVcsQ0FBQztJQUNkLEVBQUUsT0FBTTtRQUNOSyxRQUFRQyxHQUFHLENBQUM7SUFDZDtBQUNGLENBQUM7QUFFTSxTQUFTQyxhQUFhLEVBQUVDLFNBQVEsRUFBcUIsRUFBRTtJQUM1RCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2pCLCtDQUFRQTtJQUNoQyxNQUFNa0Isa0JBQWtCLENBQUMsQ0FBQ0Y7SUFFMUJmLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNLEVBQUUsbUJBQW1Ca0IsTUFBSyxFQUFFLEdBQUdiLHFEQUFZQTtRQUVqRCxJQUFJYSxPQUFPO1lBQ1RqQix3REFDTSxDQUFDLE9BQ0ptQixJQUFJLENBQUMsQ0FBQ0MsV0FBYTtnQkFDbEIsTUFBTSxFQUFFQyxHQUFFLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdILFNBQVNJLElBQUk7Z0JBRXpDVCxRQUFRO29CQUNOTTtvQkFDQUM7b0JBQ0FDO2dCQUNGO1lBQ0YsR0FDQ0UsS0FBSyxDQUFDLElBQU07Z0JBQ1hsQjtZQUNGO1FBQ0osQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLGVBQWVtQixPQUFPLEVBQUVILE1BQUssRUFBRUksU0FBUSxFQUFlLEVBQUU7UUFDdEQsSUFBSTtZQUNGLE1BQU1QLFdBQVcsTUFBTXBCLHlEQUFRLENBQUMsWUFBWTtnQkFDMUN1QjtnQkFDQUk7WUFDRjtZQUVBLE1BQU0sRUFBRU4sR0FBRSxFQUFFQyxLQUFJLEVBQUVMLE1BQUssRUFBRSxHQUFHRyxTQUFTSSxJQUFJO1lBRXpDckIsa0RBQVNBLENBQUNLLFdBQVcsbUJBQW1CUyxPQUFPO2dCQUM3Q1ksUUFBUSxLQUFLLEtBQUssS0FBSztnQkFDdkJDLE1BQU07WUFDUjtZQUVBZixRQUFRO2dCQUNOTTtnQkFDQUM7Z0JBQ0FDO1lBQ0Y7WUFFQSw4Q0FBOEM7WUFDOUN2QixtRkFBcUMsR0FBRyxDQUFDLE9BQU8sRUFBRWlCLE1BQU0sQ0FBQztZQUV6RGhCLHNEQUFVLENBQUM7WUFFWEksdURBQVcsQ0FBQztRQUNkLEVBQUUsT0FBTzZCLEtBQUs7WUFDWmpDLHVEQUFXLENBQUM7WUFDWlMsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQnVCO1FBQ2xDO0lBQ0Y7SUFFQSxlQUFlRSxPQUFPLEVBQUVkLEtBQUksRUFBRUMsTUFBSyxFQUFFSSxTQUFRLEVBQWUsRUFBRTtRQUM1RCxJQUFJO1lBQ0YsTUFBTVAsV0FBVyxNQUFNcEIseURBQVEsQ0FBQyxVQUFVO2dCQUN4Q3NCO2dCQUNBQztnQkFDQUk7WUFDRjtZQUVBMUIseURBQWEsQ0FBQztZQUVkSSx1REFBVyxDQUFDO1FBQ2QsRUFBRSxPQUFPNkIsS0FBSztZQUNaakMsdURBQVcsQ0FBQztZQUNaUyxRQUFRQyxHQUFHLENBQUMsc0JBQXNCdUI7UUFDcEM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDNUIsWUFBWWdDLFFBQVE7UUFDbkJDLE9BQU87WUFBRXpCO1lBQU1FO1lBQWlCVTtZQUFRbkI7WUFBUzZCO1FBQU87a0JBRXZEdkI7Ozs7OztBQUdQLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb250ZXh0cy9BdXRoQ29udGV4dC50c3g/MWZhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IGFwaSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hcGlDbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcblxyXG5pbXBvcnQgeyBkZXN0cm95Q29va2llLCBzZXRDb29raWUsIHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG50eXBlIEF1dGhDb250ZXh0RGF0YSA9IHtcclxuICB1c2VyOiBVc2VyUHJvcHM7XHJcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG4gIHNpZ25JbjogKGNyZWRlbnRpYWxzOiBTaWduSW5Qcm9wcykgPT4gUHJvbWlzZTx2b2lkPjtcclxuICBzaWduT3V0OiAoKSA9PiB2b2lkO1xyXG4gIHNpZ25VcDogKGNyZWRlbnRpYWxzOiBTaWduVXBQcm9wcykgPT4gUHJvbWlzZTx2b2lkPjtcclxufTtcclxuXHJcbnR5cGUgVXNlclByb3BzID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbn07XHJcblxyXG50eXBlIFNpZ25JblByb3BzID0ge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufTtcclxuXHJcbnR5cGUgU2lnblVwUHJvcHMgPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufTtcclxuXHJcbnR5cGUgQXV0aFByb3ZpZGVyUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgXCJAbmV4dGF1dGgudG9rZW5cIik7XHJcbiAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfSBjYXRjaCB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVycm8gYW8gZGVzbG9nYXJcIik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogQXV0aFByb3ZpZGVyUHJvcHMpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyUHJvcHM+KCk7XHJcbiAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gISF1c2VyO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBcIkBuZXh0YXV0aC50b2tlblwiOiB0b2tlbiB9ID0gcGFyc2VDb29raWVzKCk7XHJcblxyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIGFwaVxyXG4gICAgICAgIC5nZXQoXCIvbWVcIilcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIGVtYWlsIH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBzaWduT3V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduSW4oeyBlbWFpbCwgcGFzc3dvcmQgfTogU2lnbkluUHJvcHMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvc2Vzc2lvblwiLCB7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgeyBpZCwgbmFtZSwgdG9rZW4gfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICBzZXRDb29raWUodW5kZWZpbmVkLCBcIkBuZXh0YXV0aC50b2tlblwiLCB0b2tlbiwge1xyXG4gICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsIC8vRXhwaXJhciBlbSB1bSBtw6pzXHJcbiAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvL1Bhc3NhciBwYXJhIHByb3hpbWFzIHJlcXVpc2nDp8O1ZXMgbm9zc28gdG9rZW5cclxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke3Rva2VufWA7XHJcblxyXG4gICAgICB0b2FzdC5pbmZvKFwiTG9nYWRvIGNvbSBzdWNlc3NvXCIpO1xyXG5cclxuICAgICAgUm91dGVyLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiRXJybyBhbyBBY2Vzc2FyIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJFUlJPIEFPIEFDRVNTQVIgXCIsIGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduVXAoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfTogU2lnblVwUHJvcHMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoXCIvdXNlcnNcIiwge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdG9hc3Quc3VjY2VzcyhcIkNvbnRhIGNyaWFkYSBjb20gc3VjZXNzbyFcIik7XHJcblxyXG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvIGFvIGNhZGFzdHJhciFcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJybyBhbyBjYWRhc3RyYXIgXCIsIGVycik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgc2lnbkluLCBzaWduT3V0LCBzaWduVXAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhcGkiLCJ0b2FzdCIsImRlc3Ryb3lDb29raWUiLCJzZXRDb29raWUiLCJwYXJzZUNvb2tpZXMiLCJSb3V0ZXIiLCJBdXRoQ29udGV4dCIsInNpZ25PdXQiLCJ1bmRlZmluZWQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ0b2tlbiIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImlkIiwibmFtZSIsImVtYWlsIiwiZGF0YSIsImNhdGNoIiwic2lnbkluIiwicGFzc3dvcmQiLCJwb3N0IiwibWF4QWdlIiwicGF0aCIsImRlZmF1bHRzIiwiaGVhZGVycyIsImluZm8iLCJlcnIiLCJlcnJvciIsInNpZ25VcCIsInN1Y2Nlc3MiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _src_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__]);\n([react_toastify__WEBPACK_IMPORTED_MODULE_2__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_4__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dev\\\\Desktop\\\\Ex-Manager\\\\Ex\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {\n                autoClose: 3000\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dev\\\\Desktop\\\\Ex-Manager\\\\Ex\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dev\\\\Desktop\\\\Ex-Manager\\\\Ex\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUVTO0FBQ0Q7QUFFUTtBQUV4QyxTQUFTRSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDOUQscUJBQ0UsOERBQUNILCtEQUFZQTs7MEJBQ1gsOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OzswQkFDeEIsOERBQUNKLDBEQUFjQTtnQkFBQ0ssV0FBVzs7Ozs7Ozs7Ozs7O0FBR2pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uLy4uL3NyYy9zdHlsZXMvZ2xvYmFscy5zY3NzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvQXV0aENvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPFRvYXN0Q29udGFpbmVyIGF1dG9DbG9zZT17MzAwMH0gLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJUb2FzdENvbnRhaW5lciIsIkF1dGhQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImF1dG9DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupAPIClient\": () => (/* binding */ setupAPIClient)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _errors_AuthTokenErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/AuthTokenErrors */ \"./src/services/errors/AuthTokenErrors.ts\");\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction setupAPIClient(ctx = undefined) {\n    let cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(ctx);\n    const api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n        baseURL: \"http://localhost:3333\",\n        headers: {\n            Authorization: `Bearer ${cookies[\"@nextauth.token\"]}`\n        }\n    });\n    api.interceptors.response.use((response)=>{\n        return response;\n    }, (error)=>{\n        if (error.response.status === 401) {\n            // Qualquer erro 401 (Não autorizado) devemos deslogar o usuario\n            if (true) {\n                // Chamar a função para deslogar o usuario\n                (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.signOut)();\n            } else {}\n        }\n        return Promise.reject(error);\n    });\n    return api;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQztBQUNIO0FBQ29CO0FBRVQ7QUFFM0MsU0FBU0ksZUFBZUMsTUFBTUMsU0FBUyxFQUFFO0lBQzlDLElBQUlDLFVBQVVOLHFEQUFZQSxDQUFDSTtJQUUzQixNQUFNRyxNQUFNUixvREFBWSxDQUFDO1FBQ3ZCVSxTQUFTO1FBQ1RDLFNBQVM7WUFDUEMsZUFBZSxDQUFDLE9BQU8sRUFBRUwsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdkQ7SUFDRjtJQUVBQyxJQUFJSyxZQUFZLENBQUNDLFFBQVEsQ0FBQ0MsR0FBRyxDQUMzQixDQUFDRCxXQUFhO1FBQ1osT0FBT0E7SUFDVCxHQUNBLENBQUNFLFFBQXNCO1FBQ3JCLElBQUlBLE1BQU1GLFFBQVEsQ0FBQ0csTUFBTSxLQUFLLEtBQUs7WUFDakMsZ0VBQWdFO1lBQ2hFLElBQUksSUFBMkJYLEVBQUU7Z0JBQy9CLDBDQUEwQztnQkFDMUNILDhEQUFPQTtZQUNULE9BQU8sRUFFTjtRQUNILENBQUM7UUFFRCxPQUFPZSxRQUFRQyxNQUFNLENBQUNIO0lBQ3hCO0lBRUYsT0FBT1I7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2VydmljZXMvYXBpLnRzPzk1NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zLCB7IEF4aW9zRXJyb3IgfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHsgQXV0aFRva2VuRXJyb3JzIH0gZnJvbSBcIi4vZXJyb3JzL0F1dGhUb2tlbkVycm9yc1wiO1xyXG5cclxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gXCIuLi9jb250ZXh0cy9BdXRoQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwQVBJQ2xpZW50KGN0eCA9IHVuZGVmaW5lZCkge1xyXG4gIGxldCBjb29raWVzID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblxyXG4gIGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzMzM1wiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llc1tcIkBuZXh0YXV0aC50b2tlblwiXX1gLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgYXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXHJcbiAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSxcclxuICAgIChlcnJvcjogQXhpb3NFcnJvcikgPT4ge1xyXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAvLyBRdWFscXVlciBlcnJvIDQwMSAoTsOjbyBhdXRvcml6YWRvKSBkZXZlbW9zIGRlc2xvZ2FyIG8gdXN1YXJpb1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIC8vIENoYW1hciBhIGZ1bsOnw6NvIHBhcmEgZGVzbG9nYXIgbyB1c3VhcmlvXHJcbiAgICAgICAgICBzaWduT3V0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQXV0aFRva2VuRXJyb3JzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuICApO1xyXG4gIHJldHVybiBhcGk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwicGFyc2VDb29raWVzIiwiQXV0aFRva2VuRXJyb3JzIiwic2lnbk91dCIsInNldHVwQVBJQ2xpZW50IiwiY3R4IiwidW5kZWZpbmVkIiwiY29va2llcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJzdGF0dXMiLCJQcm9taXNlIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/apiClient.ts":
/*!***********************************!*\
  !*** ./src/services/apiClient.ts ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/services/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);\n_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = (0,_api__WEBPACK_IMPORTED_MODULE_0__.setupAPIClient)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpQ2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBRWhDLE1BQU1DLE1BQU1ELG9EQUFjQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc2VydmljZXMvYXBpQ2xpZW50LnRzPzdkMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0dXBBUElDbGllbnQgfSBmcm9tIFwiLi9hcGlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBzZXR1cEFQSUNsaWVudCgpO1xyXG4iXSwibmFtZXMiOlsic2V0dXBBUElDbGllbnQiLCJhcGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/apiClient.ts\n");

/***/ }),

/***/ "./src/services/errors/AuthTokenErrors.ts":
/*!************************************************!*\
  !*** ./src/services/errors/AuthTokenErrors.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthTokenErrors\": () => (/* binding */ AuthTokenErrors)\n/* harmony export */ });\nclass AuthTokenErrors extends Error {\n    constructor(){\n        super(\"Error with authentication token.\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZXJyb3JzL0F1dGhUb2tlbkVycm9ycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsd0JBQXdCQztJQUNuQ0MsYUFBYztRQUNaLEtBQUssQ0FBQztJQUNSO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3NlcnZpY2VzL2Vycm9ycy9BdXRoVG9rZW5FcnJvcnMudHM/ZGI2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXV0aFRva2VuRXJyb3JzIGV4dGVuZHMgRXJyb3Ige1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJFcnJvciB3aXRoIGF1dGhlbnRpY2F0aW9uIHRva2VuLlwiKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkF1dGhUb2tlbkVycm9ycyIsIkVycm9yIiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/errors/AuthTokenErrors.ts\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.scss":
/*!*********************************!*\
  !*** ./src/styles/globals.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();