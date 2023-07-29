function handleResponseFromAPI(promise) {
  promise.then(
    (data) => {
      console.log("Got a response from the API");
      return { status: 200, body: "success" };
    },
    (err) => {
      return new Error();
    }
  );
}

export default handleResponseFromAPI;
