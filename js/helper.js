import { findElementByClassName, querySlecetor } from "./constant";

const previous = findElementByClassName("prev");
const next = findElementByClassName("next");
const images = findElementByClassName("dog-image");
const maincontainer = querySlecetor("#main-image");
const breedImageContainer = querySlecetor("#image-conatiner");
const selectList = querySlecetor("#selectList");

function showSliderChanges(updateCurrentIndex = 0) {
  let currentIndex = 0;
  console.log("previous value", updateCurrentIndex);
  currentIndex = updateCurrentIndex;

  for (let prevBtn of previous) {
    prevBtn.addEventListener("click", function onClick() {
      console.log("prev currentIndex", currentIndex);

      if (currentIndex === images.length - 1) {
        prevBtn.classList.add("enabled");
        previous[0].classList.add("enabled");
        images[currentIndex].classList.remove("active");
        images[currentIndex - 1].classList.add("active");
      }
      for (let i = currentIndex; i <= images.length - 1; i++) {
        console.log("bhbdsewbdfhsw", currentIndex);
        if (currentIndex === 1) {
          prevBtn.classList.remove("enabled");
          previous[0].classList.remove("enabled");
        }

        currentIndex = i;

        if (images[currentIndex].classList.contains("active")) {
          images[currentIndex - 1].classList.remove("active");
        }
        if (currentIndex == 0) {
          images[currentIndex - 1].classList.remove("active");
        }

        if (
          currentIndex - 1 !== currentIndex &&
          currentIndex - 1 < images.length - 1 &&
          currentIndex > 0
        ) {
          let mainConatinerImage = maincontainer.firstChild;
          mainConatinerImage.src = images[currentIndex - 1].src;

          images[currentIndex - 1].classList.add("active");

          console.log(images[currentIndex - 1]);
          currentIndex--;
          console.log("decremeneted index", currentIndex);
          break;
        }
      }
    });
  }

  for (let nextBtn of next) {
    nextBtn.addEventListener("click", function onClick() {
      console.log("next currentIndex", currentIndex);
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
        if (images[currentIndex].classList.contains("active")) {
          images[currentIndex].classList.remove("active");
        }

        if (
          currentIndex + 1 !== currentIndex &&
          currentIndex + 1 < images.length
        ) {
          let mainConatinerImage = maincontainer.firstChild;
          mainConatinerImage.src = images[currentIndex + 1].src;
          images[currentIndex + 1].classList.add("active");
          currentIndex++;
          break;
        }
      }
    });
  }
}
let currentPage = 1;
const paginationLimit = 10;
const pageCount = 5;
// disable and enable button
const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};
const handleActivePageNumber = () => {
  document.querySelectorAll("#image-conatiner").forEach((img) => {
    img.classList.remove("active");
    const pageIndex = Number(img.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      img.classList.add("active");
    }
  });
};
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
    for (let prevBtn of previous) {
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
  images,
  currentIndex,
  mainDogImageContainer,
  updateCurrentIndex,
  showSliderChanges,
  maincontainer,
  breedImageContainer,
  selectList,
};
