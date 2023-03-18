"use strict";
exports.__esModule = true;
var Resume_module_scss_1 = require("../../styles/scss/components/sections/Resume.module.scss");
var reactstrap_1 = require("reactstrap");
var image_1 = require("next/image");
function SectionResume() {
    return (React.createElement(reactstrap_1.Container, null,
        React.createElement("section", { id: "resume" },
            React.createElement("h3", { className: "sectionTitle" },
                React.createElement(image_1["default"], { src: "/images/icones/location-color.png", width: "48", height: "48", alt: "sectionIcon", className: "sectionTitleIcon" }),
                React.createElement("span", null, "Por onde eu j\u00E1 passei")),
            React.createElement(reactstrap_1.Row, null,
                React.createElement("ul", { className: Resume_module_scss_1["default"].resumeList },
                    React.createElement(reactstrap_1.Col, { xxl: "6" },
                        React.createElement("li", { className: Resume_module_scss_1["default"].resumeListItem },
                            React.createElement("div", { className: Resume_module_scss_1["default"].box },
                                React.createElement(image_1["default"], { src: '/images/logos/sass.jpg', width: '30', height: '30', alt: "Universidade Unisul" }),
                                React.createElement("div", { className: Resume_module_scss_1["default"].boxRight },
                                    React.createElement("h5", null, "Nome da empresa"),
                                    React.createElement("span", { className: "date" }, "M\u00EAs XXXX - Atual "))),
                            React.createElement("ul", { className: Resume_module_scss_1["default"].tasks },
                                React.createElement("li", null, "Condu\u00E7\u00E3o de entrevistas e testes com usu\u00E1rios de plataformas"),
                                React.createElement("li", null, "Desenvolvimento prot\u00F3tipos naveg\u00E1veis de alta e baixa fidelidade (Figma, XD e Sketch)"),
                                React.createElement("li", null, "An\u00E1lise de jornadas de usu\u00E1rios, melhoria cont\u00EDnua de produtos legados, planejamento e desenvolvimento de novas funcionalidades e produtos"),
                                React.createElement("li", null, "Desenvolvimento de estrat\u00E9gia de atua\u00E7\u00E3o em atendimento de produtos de clientes internacionais"),
                                React.createElement("li", null, "Atua\u00E7\u00E3o no laborat\u00F3rio de inova\u00E7\u00E3o dedicado")))))))));
}
exports["default"] = SectionResume;
