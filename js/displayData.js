function showDropDownData(arr) {
  for (var i = 0; i < arr.length; i++)
    if (Array.isArray(arr[i])) showDropDownData(arr[i]);
    else {
      const selectList = document.querySelector("#selectList");
      const nodes = arr.map((arr) => {
        const option = document.createElement("option");
        option.textContent = arr;
        return option;
      });

      selectList.append(...nodes);
    }
}
export { showDropDownData };
