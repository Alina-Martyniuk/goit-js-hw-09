!function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),r=document.querySelector("body");function o(t){t.setAttribute("disabled","disabled")}function c(t){t.removeAttribute("disabled")}e.addEventListener("click",(function(){return o(e),c(n),t=setInterval((function(){return r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(){o(n),c(e),clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.18f02e35.js.map
