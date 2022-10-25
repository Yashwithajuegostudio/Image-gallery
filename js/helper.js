const prev = document.getElementsByClassName("prev");
const next = document.getElementsByClassName("next");
const images = document.getElementsByClassName("dog-image");
const mainImage = document.getElementById("main-image");
let currentIndex = 0;

for (let prevBtn of prev) {
  prevBtn.addEventListener("click", function onClick() {
    if (currentIndex === images.length - 1) {
      prevBtn.classList.add("enabled");
      prev[0].classList.add("enabled");
      images[currentIndex].classList.remove("active");
      images[currentIndex - 1].classList.add("active");
    }
    for (let i = currentIndex; i <= images.length - 1; i++) {
      if (currentIndex === 1) {
        prevBtn.classList.remove("enabled");
        prev[0].classList.remove("enabled");
      }
      currentIndex = i;
      images[currentIndex].classList.remove("active");
      if (
        currentIndex - 1 !== currentIndex &&
        currentIndex - 1 < images.length - 1 &&
        currentIndex > 0
      ) {
        let child = mainImage.firstChild;
        child.src = images[currentIndex - 1].src;
        images[currentIndex - 1].classList.add("active");
        currentIndex--;
        break;
      }
    }
  });
}

for (let nextBtn of next) {
  nextBtn.addEventListener("click", function onClick() {
    if (currentIndex + 1 == images.length - 1) {
      nextBtn.classList.add("disabled");
      next[0].classList.add("disabled");
    }
    for (let i = currentIndex; i <= images.length - 1; i++) {
      if (currentIndex == 0) {
        nextBtn.classList.remove("disabled");
        next[0].classList.remove("disabled");
      }
      currentIndex = i;
      images[currentIndex].classList.remove("active");
      if (
        currentIndex + 1 !== currentIndex &&
        currentIndex + 1 < images.length
      ) {
        let child = mainImage.firstChild;
        child.src = images[currentIndex + 1].src;
        images[currentIndex + 1].classList.add("active");
        currentIndex++;
        break;
      }
    }
  });
}

function showDropDown() {
  const customSelectBtn = document.getElementsByClassName("selectCustom")[0];
  const customSelectDefaultValue = customSelectBtn.children[0];
  const customSelectOptions = customSelectBtn.children[1];

  // Toggle select on label click
  customSelectDefaultValue.addEventListener("click", () => {
    Array.from(customSelectOptions.children).forEach(function (option) {
      option.addEventListener("click", (e) => {
        customSelectDefaultValue.textContent = e.target.textContent;

        customSelectBtn.classList.remove("isActive");
      });
    });
    customSelectBtn.classList.toggle("isActive");
  });
  // close the custom select when clicking outside.
  document.addEventListener("click", (e) => {
    const didClickedOutside = !customSelectBtn.contains(e.target);
    if (didClickedOutside) {
      customSelectBtn.classList.remove("isActive");
    }
  });
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    currentIndex = 0;
    for (let prevBtn of prev) {
      if (prevBtn.classList.contains("enabled")) {
        prevBtn.classList.add("disabled");
      } else {
        prevBtn.classList.remove("disabled");
      }
    }
    for (let nextBtn of next) {
      if (nextBtn.classList.contains("disabled")) {
        nextBtn.classList.add("enabled");
      } else {
        nextBtn.classList.remove("enabled");
      }
    }
    parent.removeChild(parent.firstChild);
  }
}

function removeSingleChildNode(parent) {
  const child = parent.lastChild;
  parent.removeChild(child);
}

export {
  showDropDown,
  removeAllChildNodes,
  removeSingleChildNode,
  currentIndex,
  images,
};
