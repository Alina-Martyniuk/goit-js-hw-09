const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),r=document.querySelector("body");let d;e.addEventListener("click",(function(){return e.setAttribute("disabled","disabled"),t.removeAttribute("disabled"),d=setInterval((()=>r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`),1e3),d})),t.addEventListener("click",(function(){t.setAttribute("disabled","disabled"),e.removeAttribute("disabled"),clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.f9b1541e.js.map