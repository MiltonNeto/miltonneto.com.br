"use strict";
exports.__esModule = true;
var SectionItsMe_1 = require("../components/sections/SectionItsMe");
var SectionPortfolio_1 = require("../components/sections/SectionPortfolio");
var SectionHowTo_1 = require("../components/sections/SectionHowTo");
var SectionResume_1 = require("../components/sections/SectionResume");
function Home() {
    return (React.createElement("div", { id: "appBody" },
        React.createElement("main", null,
            React.createElement(SectionItsMe_1["default"], null),
            React.createElement(SectionPortfolio_1["default"], null),
            React.createElement(SectionHowTo_1["default"], null),
            React.createElement(SectionResume_1["default"], null))));
}
exports["default"] = Home;
