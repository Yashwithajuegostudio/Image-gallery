import {
  findElementByClassName,
  querySelector,
  currentIndexValue,
  activeClass,
  checkActiveClass,
  selectCustomAttribute,
} from "./constant";

const previousButtons = findElementByClassName("prev");
const nextButtons = findElementByClassName("next");
export const images = findElementByClassName("dog-image");
export const mainContainer = querySelector("#main-image");
export const breedImageContainer = querySelector("#image-container");
export const selectList = querySelector("#selectList");

// slider buttons Functionality
export function showSliderChanges(updateCurrentIndex = currentIndexValue) {
  let currentIndex = updateCurrentIndex;
  // previous button functionality
  for (let prevBtn of previousButtons) {
    prevBtn.addEventListener("click", function onClick() {
      removeActiveClass(images);
      let slideCount = images.length - 1;
      images[currentIndex].classList.remove(activeClass);
      let nextImage;
      currentIndex === slideCount
        ? (nextImage = 0)
        : (nextImage = currentIndex - 1);

      moveSlides(nextImage);
      currentIndex = nextImage;
    });
  }
  // next button functionality
  for (let nextBtn of nextButtons) {
    nextBtn.addEventListener("click", function onClick() {
      removeActiveClass(images);
      let slideCount = images.length - 1;
      images[currentIndex].classList.remove(activeClass);
      let nextImage;
      currentIndex === slideCount
        ? (nextImage = 0)
        : (nextImage = currentIndex + 1);
      moveSlides(nextImage);
      currentIndex = nextImage;
    });
  }
}
// remove active class
export function removeActiveClass(dogImages) {
  for (let image of dogImages) {
    image.classList.remove(activeClass);
  }
}
// toggle slides functionality
function moveSlides(nextImage) {
  images[nextImage].classList.add(activeClass);
  let mainContainerImage = mainContainer.firstChild;
  mainContainerImage.src = images[nextImage].src;
}
// drop down functionality
export function showDropDown() {
  const customSelectBtn = document.getElementsByClassName(
    selectCustomAttribute.title
  )[0];
  const customSelectDefaultValue = customSelectBtn.children[0];
  const customSelectOptions = customSelectBtn.children[1];

  // Toggle select on label click
  customSelectDefaultValue.addEventListener("click", () => {
    Array.from(customSelectOptions.children).forEach(function (option) {
      option.addEventListener("click", (e) => {
        customSelectDefaultValue.textContent = e.target.textContent;
        customSelectBtn.classList.remove(checkActiveClass);
      });
    });
    customSelectBtn.classList.toggle(checkActiveClass);
  });
  // close the custom select when clicking outside.
  document.addEventListener("click", (e) => {
    const didClickedOutside = !customSelectBtn.contains(e.target);
    if (didClickedOutside) {
      customSelectBtn.classList.remove(checkActiveClass);
    }
  });
}

export function removeAllChildNodes(parent) {
  if (parent.firstChild) {
    const child = parent.lastChild;
    parent.removeChild(child);
  }
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
