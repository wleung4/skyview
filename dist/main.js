/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/airport.js":
/*!************************!*\
  !*** ./src/airport.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAirportICAO: function() { return /* binding */ getAirportICAO; }\n/* harmony export */ });\nconst getAirportICAO = async airportName => {\n  // \"country_code\",\"region_name\",\"iata\",\"icao\",\"airport\",\"latitude\",\"longitude\"\n  const airports = [];\n  const res = await fetch('../iata-icao.csv');\n  const data = await res.text();\n  const rows = data.split('\\n').slice(1);\n  rows.forEach(ele => {\n    const row = ele.split(\",\");\n    const country_code = row[0].slice(1, row[0].length - 1);\n    const region_name = row[1].slice(1, row[1].length - 1);\n    const iata = row[2].slice(1, row[2].length - 1);\n    const icao = row[3].slice(1, row[3].length - 1);\n    const airport = row[4].slice(1, row[4].length - 1);\n    const latitude = row[5].slice(1, row[5].length - 1);\n    const longitude = row[6].slice(1, row[6].length - 2);\n    airports.push({\n      airport: airport,\n      country_code: country_code,\n      region_name: region_name,\n      iata: iata,\n      icao: icao,\n      latitude: latitude,\n      longitude: longitude\n    });\n  });\n\n  // transform array of objects into single object where keys is the airport name\n  const airportObj = airports.reduce((obj, item) => Object.assign(obj, {\n    [item.airport]: item\n  }, {}));\n  console.log(airportObj[airportName].icao); // search for airport using airport name key, can key into\n};\n\n//getAirportICAO(\"Oakland International Airport\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWlycG9ydC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsY0FBYyxHQUFHLE1BQU9DLFdBQVcsSUFBSztFQUNwRDtFQUNBLE1BQU1DLFFBQVEsR0FBRyxFQUFFO0VBQ25CLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7RUFDM0MsTUFBTUMsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFDN0IsTUFBTUMsSUFBSSxHQUFHRixJQUFJLENBQUNHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUV0Q0YsSUFBSSxDQUFDRyxPQUFPLENBQUVDLEdBQUcsSUFBRztJQUNuQixNQUFNQyxHQUFHLEdBQUdELEdBQUcsQ0FBQ0gsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxQixNQUFNSyxZQUFZLEdBQUdELEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0gsS0FBSyxDQUFDLENBQUMsRUFBRUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELE1BQU1DLFdBQVcsR0FBR0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDSCxLQUFLLENBQUMsQ0FBQyxFQUFFRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNFLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdEQsTUFBTUUsSUFBSSxHQUFHSixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNILEtBQUssQ0FBQyxDQUFDLEVBQUVHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMvQyxNQUFNRyxJQUFJLEdBQUdMLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0gsS0FBSyxDQUFDLENBQUMsRUFBRUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLE1BQU1JLE9BQU8sR0FBR04sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDSCxLQUFLLENBQUMsQ0FBQyxFQUFFRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNFLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEQsTUFBTUssUUFBUSxHQUFHUCxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNILEtBQUssQ0FBQyxDQUFDLEVBQUVHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNuRCxNQUFNTSxTQUFTLEdBQUdSLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0gsS0FBSyxDQUFDLENBQUMsRUFBRUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BEWixRQUFRLENBQUNtQixJQUFJLENBQUM7TUFBQ0gsT0FBTyxFQUFFQSxPQUFPO01BQUNMLFlBQVksRUFBRUEsWUFBWTtNQUFFRSxXQUFXLEVBQUVBLFdBQVc7TUFBRUMsSUFBSSxFQUFFQSxJQUFJO01BQy9GQyxJQUFJLEVBQUVBLElBQUk7TUFBRUUsUUFBUSxFQUFFQSxRQUFRO01BQUVDLFNBQVMsRUFBRUE7SUFBUyxDQUFDLENBQUM7RUFDeEQsQ0FBQyxDQUFDOztFQUVGO0VBQ0EsTUFBTUUsVUFBVSxHQUFHcEIsUUFBUSxDQUFDcUIsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRUMsSUFBSSxLQUFLQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0gsR0FBRyxFQUFFO0lBQUMsQ0FBQ0MsSUFBSSxDQUFDUCxPQUFPLEdBQUVPO0VBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDaEdHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxVQUFVLENBQUNyQixXQUFXLENBQUMsQ0FBQ2dCLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDNUMsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3NreXZpZXcvLi9zcmMvYWlycG9ydC5qcz8xZDYwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRBaXJwb3J0SUNBTyA9IGFzeW5jIChhaXJwb3J0TmFtZSkgPT4ge1xuXHQvLyBcImNvdW50cnlfY29kZVwiLFwicmVnaW9uX25hbWVcIixcImlhdGFcIixcImljYW9cIixcImFpcnBvcnRcIixcImxhdGl0dWRlXCIsXCJsb25naXR1ZGVcIlxuXHRjb25zdCBhaXJwb3J0cyA9IFtdO1xuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnLi4vaWF0YS1pY2FvLmNzdicpO1xuXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLnRleHQoKTtcblx0Y29uc3Qgcm93cyA9IGRhdGEuc3BsaXQoJ1xcbicpLnNsaWNlKDEpO1xuXG5cdHJvd3MuZm9yRWFjaCgoZWxlKT0+e1xuXHRcdGNvbnN0IHJvdyA9IGVsZS5zcGxpdChcIixcIik7XG5cdFx0Y29uc3QgY291bnRyeV9jb2RlID0gcm93WzBdLnNsaWNlKDEsIHJvd1swXS5sZW5ndGggLSAxKTtcblx0XHRjb25zdCByZWdpb25fbmFtZSA9IHJvd1sxXS5zbGljZSgxLCByb3dbMV0ubGVuZ3RoIC0gMSk7XG5cdFx0Y29uc3QgaWF0YSA9IHJvd1syXS5zbGljZSgxLCByb3dbMl0ubGVuZ3RoIC0gMSk7XG5cdFx0Y29uc3QgaWNhbyA9IHJvd1szXS5zbGljZSgxLCByb3dbM10ubGVuZ3RoIC0gMSk7XG5cdFx0Y29uc3QgYWlycG9ydCA9IHJvd1s0XS5zbGljZSgxLCByb3dbNF0ubGVuZ3RoIC0gMSk7XG5cdFx0Y29uc3QgbGF0aXR1ZGUgPSByb3dbNV0uc2xpY2UoMSwgcm93WzVdLmxlbmd0aCAtIDEpO1xuXHRcdGNvbnN0IGxvbmdpdHVkZSA9IHJvd1s2XS5zbGljZSgxLCByb3dbNl0ubGVuZ3RoIC0gMik7XG5cdFx0YWlycG9ydHMucHVzaCh7YWlycG9ydDogYWlycG9ydCxjb3VudHJ5X2NvZGU6IGNvdW50cnlfY29kZSwgcmVnaW9uX25hbWU6IHJlZ2lvbl9uYW1lLCBpYXRhOiBpYXRhLCBcblx0XHRcdGljYW86IGljYW8sIGxhdGl0dWRlOiBsYXRpdHVkZSwgbG9uZ2l0dWRlOiBsb25naXR1ZGV9KTtcblx0fSlcblxuXHQvLyB0cmFuc2Zvcm0gYXJyYXkgb2Ygb2JqZWN0cyBpbnRvIHNpbmdsZSBvYmplY3Qgd2hlcmUga2V5cyBpcyB0aGUgYWlycG9ydCBuYW1lXG5cdGNvbnN0IGFpcnBvcnRPYmogPSBhaXJwb3J0cy5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4gT2JqZWN0LmFzc2lnbihvYmosIHtbaXRlbS5haXJwb3J0XTppdGVtfSwge30pKTtcblx0Y29uc29sZS5sb2coYWlycG9ydE9ialthaXJwb3J0TmFtZV0uaWNhbyk7IC8vIHNlYXJjaCBmb3IgYWlycG9ydCB1c2luZyBhaXJwb3J0IG5hbWUga2V5LCBjYW4ga2V5IGludG9cbn1cblxuLy9nZXRBaXJwb3J0SUNBTyhcIk9ha2xhbmQgSW50ZXJuYXRpb25hbCBBaXJwb3J0XCIpO1xuXG5cblxuIl0sIm5hbWVzIjpbImdldEFpcnBvcnRJQ0FPIiwiYWlycG9ydE5hbWUiLCJhaXJwb3J0cyIsInJlcyIsImZldGNoIiwiZGF0YSIsInRleHQiLCJyb3dzIiwic3BsaXQiLCJzbGljZSIsImZvckVhY2giLCJlbGUiLCJyb3ciLCJjb3VudHJ5X2NvZGUiLCJsZW5ndGgiLCJyZWdpb25fbmFtZSIsImlhdGEiLCJpY2FvIiwiYWlycG9ydCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwicHVzaCIsImFpcnBvcnRPYmoiLCJyZWR1Y2UiLCJvYmoiLCJpdGVtIiwiT2JqZWN0IiwiYXNzaWduIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/airport.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _airport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airport.js */ \"./src/airport.js\");\n\nconst searchForm = document.getElementById(\"search-form\");\nconst searchValue = document.getElementById(\"search\");\nsearchForm.addEventListener(\"submit\", async e => {\n  e.preventDefault();\n  const value = searchValue.value;\n  const icao = await (0,_airport_js__WEBPACK_IMPORTED_MODULE_0__.getAirportICAO)(value);\n  console.log(icao);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBOEM7QUFFOUMsTUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFDekQsTUFBTUMsV0FBVyxHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFFckRGLFVBQVUsQ0FBQ0ksZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQU1DLENBQUMsSUFBSztFQUNqREEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUNsQixNQUFNQyxLQUFLLEdBQUdKLFdBQVcsQ0FBQ0ksS0FBSztFQUMvQixNQUFNQyxJQUFJLEdBQUcsTUFBTVQsMkRBQWMsQ0FBQ1EsS0FBSyxDQUFDO0VBQ3hDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO0FBQ2xCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NreXZpZXcvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBaXJwb3J0SUNBTyB9IGZyb20gJy4vYWlycG9ydC5qcyc7XG5cbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1mb3JtXCIpO1xuY29uc3Qgc2VhcmNoVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcblxuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jKGUpID0+IHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCB2YWx1ZSA9IHNlYXJjaFZhbHVlLnZhbHVlO1xuXHRjb25zdCBpY2FvID0gYXdhaXQgZ2V0QWlycG9ydElDQU8odmFsdWUpO1xuXHRjb25zb2xlLmxvZyhpY2FvKTtcbn0pOyJdLCJuYW1lcyI6WyJnZXRBaXJwb3J0SUNBTyIsInNlYXJjaEZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VhcmNoVmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJpY2FvIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za3l2aWV3Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;