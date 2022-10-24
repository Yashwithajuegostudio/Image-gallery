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
function slideShow() {
  const images = document.querySelectorAll(".slide .image-conatiner ");
  const mainImage = document.getElementById("main-image");
  const prev = document.querySelectorAll(".previous");
  const next = document.querySelectorAll(".next");
  for (let i = 0; i < next.length; i++) {
    next[i].addEventListener("click", showComment, false);
  }
  for (let i = 0; i < prev.length; i++) {
    prev[i].addEventListener("click", showback, false);
  }

  for (let j = 0; j < images.length; j++) {
    images[j].addEventListener("click", (e) => {
      console.log("clicked");
      images.forEach((element) => {
        element.classList.remove("active");
      });
      mainImage.src = e.target.src;
      e.target.classList.add("active");
    });
  }
}
function showComment() {
  console.log("hi");
}
function showback() {
  console.log("hello");
}
export { showDropDown, removeAllChildNodes, removeSingleChildNode, slideShow };
