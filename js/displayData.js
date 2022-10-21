import { getBreedImageApiData } from "./dogBreed";

function showDropDownData(arr) {
  for (var i = 0; i < arr.length; i++)
    if (Array.isArray(arr[i])) {
      showDropDownData(arr[i]);
    } else {
      const selectList = document.querySelector("#selectList");
      const nodes = arr.map((arr, i) => {
        const option = document.createElement("option");
        option.className = "option-value";
        option.textContent = arr;
        option.addEventListener("click", () => {
          getBreedImageApiData(option.value);
        });
        return option;
      });

      selectList.append(...nodes);
    }
}
export { showDropDownData };
