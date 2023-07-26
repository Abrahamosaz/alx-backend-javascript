function handleResponseFromAPI(promise) {
  promise
    .then(() => ({ status: 200, body: "success" }))
    .then(() => ({ status: 200, body: "success" }))
    .then(() => ({ status: 200, body: "success" }))
    .catch((err) => new Error());
  console.log("Got a response from the API");
}

export default handleResponseFromAPI;
