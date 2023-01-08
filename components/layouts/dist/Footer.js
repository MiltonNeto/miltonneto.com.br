"use strict";
exports.__esModule = true;
var Footer_module_scss_1 = require("../../styles/scss/components/layouts/Footer.module.scss");
var reactstrap_1 = require("reactstrap");
var image_1 = require("next/image");
function Footer() {
    return (React.createElement("div", { className: Footer_module_scss_1["default"].footer },
        React.createElement(reactstrap_1.Container, null,
            React.createElement("section", { id: "TalkToMe" },
                React.createElement("h3", { className: "sectionTitle" },
                    React.createElement(image_1["default"], { src: "/images/icones/conversation-color.png", width: "48", height: "48", alt: "sectionIcon", className: "sectionTitleIcon" }),
                    React.createElement("span", null, "Fale comigo!")),
                React.createElement(reactstrap_1.Row, { className: Footer_module_scss_1["default"].footerBoxes },
                    React.createElement(reactstrap_1.Col, { xxl: "6" },
                        React.createElement("div", { className: Footer_module_scss_1["default"].box },
                            React.createElement(image_1["default"], { src: '/images/logos/sass.jpg', width: '30', height: '30', alt: "Universidade Unisul" }),
                            React.createElement("div", { className: Footer_module_scss_1["default"].boxRight },
                                React.createElement("h5", { className: Footer_module_scss_1["default"].lineTitle }, "Linkedin"),
                                React.createElement("span", { className: "Description" }, "Lead UX Designer na Dentsu World Services | Estudante de Neuroci\u00EAncia e Psicologia Aplicada")))),
                    React.createElement(reactstrap_1.Col, { xxl: "6" },
                        React.createElement("div", { className: Footer_module_scss_1["default"].box },
                            React.createElement(image_1["default"], { src: '/images/logos/sass.jpg', width: '30', height: '30', alt: "Universidade Unisul" }),
                            React.createElement("div", { className: Footer_module_scss_1["default"].boxRight },
                                React.createElement("span", { className: "Description" }, "leonardi.milton@gmail.com"))),
                        React.createElement("div", { className: Footer_module_scss_1["default"].box },
                            React.createElement(image_1["default"], { src: '/images/logos/sass.jpg', width: '30', height: '30', alt: "Universidade Unisul" }),
                            React.createElement("div", { className: Footer_module_scss_1["default"].boxRight },
                                React.createElement("span", { className: "Description" }, "+55 51 98528.5102")))))),
            React.createElement("section", { className: Footer_module_scss_1["default"].footerSignature },
                "All Rights Reserved. 2023",
                React.createElement(image_1["default"], { src: "/images/logo-milton.svg", width: "25", height: "25", alt: "Milton Neto UX Designer" })))));
}
exports["default"] = Footer;
