const mainContainer = document.getElementById("root");

class ReactElement {
  constructor(type, attributes = {}, childrens = "") {
    this.type = type;
    this.attributes = attributes;
    this.childrens = childrens;
  }
  cre(mainContainer) {
    const domElement = document.createElement(this.type);

    for (const attri in this.attributes) {
      domElement.setAttribute(attri, this.attributes[attri]);
    }
    domElement.textContent = this.childrens;
    mainContainer.appendChild(domElement);
  }
}

const myelement = new ReactElement(
  "p",
  { style: "color :rgb(209, 169, 160); font-size : 50px", class: "firstpara" },
  " i am a child"
);

const atag = new ReactElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click me"
);
myelement.cre(mainContainer);
atag.cre(mainContainer);
