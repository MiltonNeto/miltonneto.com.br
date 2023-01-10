"use strict";
exports.__esModule = true;
var Hero_1 = require("./Hero");
var Header_1 = require("./Header");
var Footer_1 = require("./Footer");
function MainContainer(_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(Header_1["default"], null),
        React.createElement(Hero_1["default"], null),
        children,
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = MainContainer;
