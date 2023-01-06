"use strict";
exports.__esModule = true;
var reactstrap_1 = require("reactstrap");
var image_1 = require("next/image");
function SectionWhatIDo() {
    return (React.createElement(reactstrap_1.Container, null,
        React.createElement("section", { id: "WhatIDo" },
            React.createElement("h3", { className: "sectionTitle" },
                React.createElement(image_1["default"], { src: "/images/icones/plan-color.png", width: "48", height: "48", alt: "O que eu fa\u00E7o", className: "sectionTitleIcon" }),
                React.createElement("span", null, "O que eu fa\u00E7o")),
            React.createElement(reactstrap_1.Row, { className: "subcontent" },
                React.createElement("h4", { className: "subtitle" },
                    React.createElement(image_1["default"], { src: "/images/icones/portfolio-color.png", width: "35", height: "35", alt: "Conhe\u00E7a meus trabalhos" }),
                    React.createElement("span", null, "Meu portfolio")),
                React.createElement("div", { className: "cards" },
                    React.createElement("div", { className: "card" },
                        React.createElement("img", { alt: "card Image" }),
                        React.createElement("ul", { className: "cardSkills" },
                            React.createElement("li", null, "Skill 1"),
                            React.createElement("li", null, "Skill 2"),
                            React.createElement("li", null, "Skill 3")),
                        React.createElement("div", { className: "cardAction" }, "Conhe\u00E7a o Projeto")))),
            React.createElement(reactstrap_1.Row, { className: "subcontent" },
                React.createElement("h4", { className: "subtitle" },
                    React.createElement(image_1["default"], { src: "/images/icones/article-color.png", width: "35", height: "35", alt: "Conhe\u00E7a meus trabalhos" }),
                    React.createElement("span", null, "Artigos")),
                React.createElement("div", { className: "cards" },
                    React.createElement("div", { className: "card" },
                        React.createElement("div", { className: "cardText" }),
                        React.createElement("h6", null, "T\u00EDtulo do cart\u00E3o"),
                        React.createElement("p", null, "Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.")),
                    React.createElement("div", { className: "cardAction" }, "Leia o artigo completo"))))));
}
exports["default"] = SectionWhatIDo;
