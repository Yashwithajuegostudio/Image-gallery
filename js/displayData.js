import { getApiCall } from "./apiHelper";
import {
  showDropDown,
  removeAllChildNodes,
  removeSingleChildNode,
  slideShow,
} from "./helper";

const dogBreedNameUrl = "https://dog.ceo/api/breeds/list/all";
const getData = (data) => {
  displayBreedName(data);
};
getApiCall(dogBreedNameUrl, getData);

function displayBreedName(data) {
  const breedNameArray = [];
  Object.keys(data.message).forEach((key) => {
    if (data.message[key].length > 0) {
      breedNameArray.push(key);
    }
  });
  showDropDownData(breedNameArray);
}
// display drop down
showDropDown();
slideShow();
function getBreedImageApiData(breedName) {
  const dogBreedImageUrl = `https://dog.ceo/api/breed/${breedName}/images`;
  const getData = (data) => {
    displayImageData(data);
  };
  getApiCall(dogBreedImageUrl, getData);
}

function displayImageData(data) {
  const breedImageArray = [];
  Object.values(data.message).forEach((value) => {
    breedImageArray.push(value);
  });

  const maincontainer = document.querySelector("#main-image");
  const selectList = document.querySelector("#image-conatiner");

  if (!maincontainer.hasChildNodes()) {
    const mainImage = document.createElement("img");
    mainImage.src = breedImageArray[0];
    mainImage.id = "main-image";
    maincontainer.appendChild(mainImage);
  }
  if (!selectList.hasChildNodes()) {
    const nodes = breedImageArray.map((breedImageList, i) => {
      const dogBreedImageConatiner = document.createElement("div");
      const dogBreedImage = document.createElement("img");
      dogBreedImageConatiner.className = "image-conatiner";
      dogBreedImage.src = breedImageList;
      if (dogBreedImage.src === breedImageArray[0]) {
        dogBreedImage.className = "active";
      }
      dogBreedImageConatiner.appendChild(dogBreedImage);
      return dogBreedImageConatiner;
    });
    selectList.append(...nodes);
  }
}
function showDropDownData(dogBreedNameList) {
  for (let i = 0; i < dogBreedNameList.length; i++)
    if (Array.isArray(dogBreedNameList[i])) {
      showDropDownData(dogBreedNameList[i]);
    } else {
      const selectList = document.querySelector("#selectList");
      const nodes = dogBreedNameList.map((dogBreedNameList) => {
        const option = document.createElement("option");
        option.className = "selectCustom-option";
        option.textContent = dogBreedNameList;
        option.addEventListener("click", () => {
          const maincontainer = document.querySelector("#main-image");
          const selectList = document.querySelector("#image-conatiner");
          if (maincontainer.hasChildNodes() || selectList.hasChildNodes()) {
            removeSingleChildNode(maincontainer);
            removeAllChildNodes(selectList);
          }
          getBreedImageApiData(option.value);
        });
        return option;
      });

      selectList.append(...nodes);
    }
}

export { showDropDown };
