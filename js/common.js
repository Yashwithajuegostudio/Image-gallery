function showDropDown() {
  const elSelectCustom = document.getElementsByClassName("js-selectCustom")[0];
  const elSelectCustomValue = elSelectCustom.children[0];
  const elSelectCustomOptions = elSelectCustom.children[1];
  const defaultLabel = elSelectCustomValue.getAttribute("data-value");

  // Toggle select on label click
  elSelectCustomValue.addEventListener("click", () => {
    Array.from(elSelectCustomOptions.children).forEach(function (elOption) {
      elOption.addEventListener("click", (e) => {
        // Update custom select text too
        elSelectCustomValue.textContent = e.target.textContent;
        // Close select
        elSelectCustom.classList.remove("isActive");
      });
    });
    elSelectCustom.classList.toggle("isActive");
  });

  // close the custom select when clicking outside.
  document.addEventListener("click", (e) => {
    const didClickedOutside = !elSelectCustom.contains(e.target);
    if (didClickedOutside) {
      elSelectCustom.classList.remove("isActive");
    }
  });
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function removeSingleChildNode(parent) {
  const child = parent.lastChild;
  parent.removeChild(child);
}
export { showDropDown, removeAllChildNodes, removeSingleChildNode };
