import { getApiCall } from "./apiHelper";
import {
  showDropDown,
  removeAllChildNodes,
  removeSingleChildNode,
} from "./helper";
import { dogBreedNameUrl } from "./constant";
const getData = (data) => {
  displayBreedName(data);
};
getApiCall(dogBreedNameUrl, getData);

function displayBreedName(data) {
  const breedNameArray = Object.keys(data.message).filter(
    (key) => key.length > 0
  );
  showDropDownData(breedNameArray);
}
// display drop down
showDropDown();
// display Image data
function getBreedImageApiData(breedName) {
  const dogBreedImageUrl = `https://dog.ceo/api/breed/${breedName}/images`;
  const getData = (data) => {
    displayImageData(data);
  };
  getApiCall(dogBreedImageUrl, getData);
}

function displayImageData(data) {
  const breedImageArray = Object.values(data.message).filter(
    (value) => value.length > 0
    // {
    //   return value;
    // }
  );
  const maincontainer = document.querySelector("#main-image");
  const breedImageContainer = document.querySelector("#image-conatiner");

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
      dogBreedImageConatiner.className = "image-conatiner";
      dogBreedImage.src = breedImageList;
      if (dogBreedImage.src === breedImageArray[0]) {
        dogBreedImage.className = "dog-image active";
      }
      dogBreedImageConatiner.appendChild(dogBreedImage);
      return dogBreedImageConatiner;
    });

    breedImageContainer.append(...nodes);
  }
}
function showDropDownData(dogBreedNameList) {
  const selectList = document.querySelector("#selectList");
  const nodes = dogBreedNameList.map((dogBreedNameList) => {
    const option = document.createElement("option");
    option.className = "selectCustom-option";
    option.textContent = dogBreedNameList;
    option.addEventListener("click", () => {
      const maincontainer = document.querySelector("#main-image");
      const breedImageContainer = document.querySelector("#image-conatiner");
      if (
        maincontainer.hasChildNodes() ||
        breedImageContainer.hasChildNodes()
      ) {
        removeSingleChildNode(maincontainer);
        removeAllChildNodes(breedImageContainer);
      }
      getBreedImageApiData(option.value);
      const dog = document.getElementsByClassName("dog-image");
      console.log(dog.length);
      console.log(dog);
      for (let i = 0; i < dog.length; i++) {
        console.log(dog[i]);
      }
    });
    return option;
  });

  selectList.append(...nodes);
}
export { breedImageArray };
