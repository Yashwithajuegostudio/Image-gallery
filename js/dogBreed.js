import { getApiCall } from "./apiHelper";
import { showDropDownData } from "./displayData";

const getUrl = "https://dog.ceo/api/breeds/list/all";
const getData = (data) => {
  show(data);
};
getApiCall(getUrl, getData);

function show(data) {
  const arr = Object.values(data);
  const arrayObject = Object.values(arr[0]);
  const filteredValue = arrayObject.filter((message, i) => {
    if (message.length != 0) {
      return message;
    }
  });
  showDropDownData(filteredValue);
}
