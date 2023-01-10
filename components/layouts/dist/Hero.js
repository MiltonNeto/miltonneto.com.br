"use strict";
exports.__esModule = true;
var Hero_module_scss_1 = require("../../styles/scss/components/layouts/Hero.module.scss");
var reactstrap_1 = require("reactstrap");
function Hero() {
    return (React.createElement("div", { className: Hero_module_scss_1["default"].greetings },
        React.createElement(reactstrap_1.Container, null,
            React.createElement("h1", null, "Oi, muito prazer. Eu sou Milton Neto!"),
            React.createElement("h2", { className: Hero_module_scss_1["default"].subline },
                "Sou designer e mentor de experi\u00EAncias e interfaces, ou se preferir UX e UI",
                React.createElement("br", null),
                "fique a vontade, aproveite esse nosso bate-papo."))));
}
exports["default"] = Hero;
