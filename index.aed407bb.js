document.querySelectorAll("form input").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id);var r=e.name.charAt(0).toUpperCase()+e.name.slice(1);t.textContent=r,e.placeholder=r,e.parentNode.insertBefore(t,e)});
//# sourceMappingURL=index.aed407bb.js.map
