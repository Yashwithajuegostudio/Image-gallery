// BASE PATH
export const basePath = "https://dog.ceo/api";
// Path
export const dogBreedNameList = "/breeds/list/all";
export const dogBreedImages = "/breed/images";

export const findElementByClassName = (arg) =>
  document.getElementsByClassName(arg);
export const querySelector = (arg) => document.querySelector(arg);
export const currentIndexValue = 0;
// classNames
export const activeClass = "active";
export const checkActiveClass = "isActive";
// image Attribute
export const imageAttribute = {
  title: "img",
  className: "dog-image",
  id: "imageId",
  activeImage: "dog-image active",
};
// image container Attribute
export const imageContainerAttribute = {
  title: "div",
  id: "main-dog-image",
  className: "image-container slider",
};
export const selectCustomAttribute = {
  title: "selectCustom",
};
export const optionAttribute = {
  className: "selectCustom-option",
  title: "option",
};
