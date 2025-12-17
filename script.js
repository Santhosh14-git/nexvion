const codeText = `
import { build, deploy } from "nexvion-core";

const services = ["Web Dev", "UI/UX", "SEO"];

const startProject = idea => idea && (build(idea), deploy("prod"));

startProject("Startup");
console.log("Website Live 🚀");
`;

const codeElement = document.getElementById("code");
let index = 0;

function typeCode() {
  if (index < codeText.length) {
    codeElement.textContent += codeText.charAt(index);
    index++;
    setTimeout(typeCode, 40);
  } else {
    setTimeout(() => {
      codeElement.textContent = "";
      index = 0;
      typeCode();
    }, 2000);
  }
}

typeCode();



