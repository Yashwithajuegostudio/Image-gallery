import { getApiCall } from "./apiHelper";
import { showDropDownData } from "./displayData";
import { showDropDown } from "./index";

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

function getBreedImageApiData(breedName) {
  const dogBreedImageUrl = `https://dog.ceo/api/breed/${breedName}/images`;
  const getData = (data) => {
    displayImageData(data);
  };
  getApiCall(dogBreedImageUrl, getData);
}

function displayImageData(data) {
  const breedImageArray = [];
  let arr = Object.entries(data.message);
}
export { getBreedImageApiData };
