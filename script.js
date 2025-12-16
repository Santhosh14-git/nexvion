const codeText = `
import { build, deploy } from "nexvion-core";

const services = [
  "Web Development",
  "UI/UX Design",
  "SEO Optimization"
];

function startProject(client) {
  if (!client.idea) return "Define Requirements";
  build(client.idea);
  deploy("production");
}

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



