import { getApiCall } from "./apiHelper";
import {
  showDropDown,
  removeAllChildNodes,
  images,
  showSliderChanges,
  mainContainer,
  breedImageContainer,
  removeActiveClass,
} from "./helper";
import {
  activeClass,
  imageAttribute,
  imageContainerAttribute,
  optionAttribute,
  dogBreedNameList,
  dogBreedImages,
} from "./constant";
getApiCall(dogBreedNameList, displayBreedName);
let previousIndex = 0;

// call API to fetch Select list data
function displayBreedName(data) {
  const breedNameArray = Object.keys(data.message).filter(
    (key) => key.length > 0
  );
  showDropDownData(breedNameArray);
}
// display drop down
showDropDown();
// slider changes
showSliderChanges();
// call API to fetch Image data
function getBreedImageApiData(breedName) {
  getApiCall(
    dogBreedImages.replace(`breed/`, `breed/${breedName}/`),
    displayImageData
  );
}
// display breed name in select option list
function displayImageData(data) {
  const breedImageArray = Object.values(data.message).filter(
    (value) => value.length > 0
  );
  if (!mainContainer.hasChildNodes()) {
    const mainImage = document.createElement(imageAttribute.title);
    mainImage.src = breedImageArray[0];
    mainImage.id = imageContainerAttribute.id;
    mainContainer.appendChild(mainImage);
  }
  if (!breedImageContainer.hasChildNodes()) {
    const nodes = breedImageArray.map((breedImageList, i) => {
      const dogBreedImageContainer = document.createElement(
        imageContainerAttribute.title
      );
      const dogBreedImage = document.createElement(imageAttribute.title);
      dogBreedImage.className = imageAttribute.className;
      dogBreedImage.id = imageAttribute.id;
      dogBreedImage.onclick = (e) => {
        let imageCurrentIndex = activateImageContainer(i, e);
        showSliderChanges(imageCurrentIndex);
      };
      dogBreedImageContainer.className = imageContainerAttribute.className;
      dogBreedImage.src = breedImageList;
      if (dogBreedImage.src === breedImageArray[0]) {
        dogBreedImage.className = imageAttribute.activeImage;
      }
      dogBreedImageContainer.appendChild(dogBreedImage);
      dogImageArray = dogBreedImage;

      return dogBreedImageContainer;
    });

    breedImageContainer.append(...nodes);
  }
}
// Add active class for the Clicked image
function activateImageContainer(imageCurrentIndex, e) {
  if (imageCurrentIndex !== previousIndex) {
    removeActiveClass(images);
    images[previousIndex].classList.remove(activeClass);
    previousIndex = imageCurrentIndex;
    e.target.classList.add(activeClass);
    let mainContainerImage = mainContainer.firstChild;
    mainContainerImage.src = images[previousIndex].src;
    return previousIndex;
  } else {
    removeActiveClass(images);
    return previousIndex;
  }
}
// display dropdown select list
function showDropDownData(dogBreedNameList) {
  const nodes = dogBreedNameList.map((dogBreedNameList) => {
    const option = document.createElement(optionAttribute.title);
    option.className = optionAttribute.className;
    option.textContent = dogBreedNameList;
    option.addEventListener("click", () => {
      if (
        mainContainer.hasChildNodes() ||
        breedImageContainer.hasChildNodes()
      ) {
        removeAllChildNodes(mainContainer);
        removeAllChildNodes(breedImageContainer);
      }
      getBreedImageApiData(option.value);
    });
    return option;
  });

  selectList.append(...nodes);
}
export { breedImageArray };
