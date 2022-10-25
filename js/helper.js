const prev = document.getElementsByClassName("prev");
const next = document.getElementsByClassName("next");
const images = document.getElementsByClassName("dog-image");
const mainImage = document.getElementById("main-image");
const dogBreedImageConatiner =
  document.getElementsByClassName("image-conatiner");
let currentIndex = 0;
// buttons functionality
for (items of dogBreedImageConatiner) {
  console.log(items);
  items.addEventListener("click", (e) => {
    images.forEach((element) => {
      element.classList.remove("active");
    });
    mainImage.src = e.target.src;
    e.target.classList.add("active");
  });
}
for (let prevBtn of prev) {
  prevBtn.addEventListener("click", function onClick() {
    if (currentIndex === images.length - 1) {
      removeActiveImage(images[currentIndex]);

      console.log(
        "prev btn current index",
        currentIndex - 1,
        images[currentIndex - 1],
        images.length - 2
      );
      currentIndex = currentIndex - 1;
      images[currentIndex - 1].classList.add("active");

      console.log("currentinsdec", currentIndex);
    }
    for (let i = currentIndex; i < images.length - 1; i++) {
      console.log(currentIndex);
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
  if (currentIndex === images.length - 1) {
    prevBtn.classList.add("disabled");
    prev[0].classList.add("disabled");
  }
}
function removeActiveImage(array) {
  array.classList.remove("active");
}
for (let nextBtn of next) {
  nextBtn.addEventListener("click", function onClick() {
    if (currentIndex === images.length - 2) {
      console.log(
        "next btn current index",
        currentIndex,
        images[currentIndex],
        images.length - 2
      );
    }
    for (let i = currentIndex; i < images.length - 1; i++) {
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
    if (currentIndex == images.length - 1) {
      nextBtn.classList.add("disabled");
      next[0].classList.add("disabled");
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
}
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    currentIndex = 0;
    parent.removeChild(parent.firstChild);
  }
}

function removeSingleChildNode(parent) {
  const child = parent.lastChild;
  parent.removeChild(child);
}

export { showDropDown, removeAllChildNodes, removeSingleChildNode };
