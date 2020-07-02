"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useDidMount(callback) {
    if (callback === void 0) { callback = function () { }; }
    react_1.useEffect(function () {
        callback();
    }, []);
}
exports.default = useDidMount;
//# sourceMappingURL=useDidMount.js.map