const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body");let r;function o(t){t.setAttribute("disabled","disabled")}function d(t){t.removeAttribute("disabled")}t.addEventListener("click",(function(){return o(t),d(e),r=setInterval((()=>n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`),1e3),r})),e.addEventListener("click",(function(){o(e),d(t),clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.74a4d974.js.map
