import { getApiCall } from "./apiHelper";
import {
  showDropDown,
  removeAllChildNodes,
  removeSingleChildNode,
  images,
  showSliderChanges,
  maincontainer,
  breedImageContainer,
} from "./helper";
import { dogBreedNameUrl } from "./constant";
getApiCall(dogBreedNameUrl, displayBreedName);
let previousIndex = 0;

function displayBreedName(data) {
  const breedNameArray = Object.keys(data.message).filter(
    (key) => key.length > 0
  );
  showDropDownData(breedNameArray);
}
// display drop down
showDropDown();
// slider changes
// showSliderChanges();
// display Image data
function getBreedImageApiData(breedName) {
  const dogBreedImageUrl = `https://dog.ceo/api/breed/${breedName}/images`;
  getApiCall(dogBreedImageUrl, displayImageData);
}

function displayImageData(data) {
  const breedImageArray = Object.values(data.message).filter(
    (value) => value.length > 0
  );

  if (!maincontainer.hasChildNodes()) {
    const mainImage = document.createElement("img");
    mainImage.src = breedImageArray[0];
    mainImage.id = "main-dog-image";
    maincontainer.appendChild(mainImage);
  }
  if (!breedImageContainer.hasChildNodes()) {
    const nodes = breedImageArray.map((breedImageList, i) => {
      const dogBreedImageConatiner = document.createElement("div");
      const dogBreedImage = document.createElement("img");
      dogBreedImage.className = "dog-image";
      dogBreedImage.onclick = (e) => {
        let value = activateImageConatiner(i, e);
        console.log("index", value);
        showSliderChanges(value);
      };
      dogBreedImageConatiner.className = "image-conatiner";
      dogBreedImage.src = breedImageList;
      if (dogBreedImage.src === breedImageArray[0]) {
        dogBreedImage.className = "dog-image active";
      }
      dogBreedImageConatiner.appendChild(dogBreedImage);
      dogImageArray = dogBreedImage;

      return dogBreedImageConatiner;
    });

    breedImageContainer.append(...nodes);
  }
}
function activateImageConatiner(imageCurrentIndex, e) {
  if (imageCurrentIndex !== previousIndex) {
    images[previousIndex].classList.remove("active");
    previousIndex = imageCurrentIndex;
    e.target.classList.add("active");
    let mainConatinerImage = maincontainer.firstChild;
    mainConatinerImage.src = images[previousIndex].src;
    console.log(previousIndex, images[previousIndex]);
    return previousIndex;
  } else {
    console.log("previous index", previousIndex);
    e.target.classList.remove("active");
    return previousIndex;
  }
}

function showDropDownData(dogBreedNameList) {
  const nodes = dogBreedNameList.map((dogBreedNameList) => {
    const option = document.createElement("option");
    option.className = "selectCustom-option";
    option.textContent = dogBreedNameList;
    option.addEventListener("click", () => {
      if (
        maincontainer.hasChildNodes() ||
        breedImageContainer.hasChildNodes()
      ) {
        removeSingleChildNode(maincontainer);
        removeAllChildNodes(breedImageContainer);
      }
      getBreedImageApiData(option.value);
    });
    return option;
  });

  selectList.append(...nodes);
}
export { breedImageArray };
