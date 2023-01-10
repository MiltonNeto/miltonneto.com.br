"use strict";
exports.__esModule = true;
var Header_module_scss_1 = require("../../styles/scss/components/layouts/Header.module.scss");
var image_1 = require("next/image");
var link_1 = require("next/link");
function Header() {
    return (React.createElement("header", null,
        React.createElement("nav", { className: Header_module_scss_1["default"].mainNavigation },
            React.createElement(link_1["default"], { href: '/', className: Header_module_scss_1["default"].homeLink },
                React.createElement(image_1["default"], { src: '/images/logo-milton.svg', width: "30", height: "67", alt: "Milton Neto | UX UI Designer" })),
            React.createElement("ul", { className: Header_module_scss_1["default"].linkList },
                React.createElement("li", { className: Header_module_scss_1["default"].linkListItem },
                    React.createElement("a", { href: "#ItsMe" }, "Quem sou eu")),
                React.createElement("li", { className: Header_module_scss_1["default"].linkListItem },
                    React.createElement("a", { href: "#WhatIDo" }, "O que eu fa\u00E7o")),
                React.createElement("li", { className: Header_module_scss_1["default"].linkListItem },
                    React.createElement("a", { href: "#HowTo" }, "Como eu fa\u00E7o")),
                React.createElement("li", { className: Header_module_scss_1["default"].linkListItem },
                    React.createElement("a", { href: "#Resume" }, "Por onde eu passei")),
                React.createElement("li", { className: Header_module_scss_1["default"].linkListItem },
                    React.createElement("a", { href: "#TalkToMe" }, "Fale comigo"))))));
}
exports["default"] = Header;
