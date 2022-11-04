import { basePath } from "./constant";

export async function getApiCall(getUrl, getData) {
  await fetch(basePath + getUrl, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with the status ${response.status}`);
      }
      return response.json();
    })
    .then((data) => getData(data))
    .catch((error) => console.error(error));
}
