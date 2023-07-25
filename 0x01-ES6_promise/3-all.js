import { uploadPhoto, createUser } from "./utils";

function handleProfileSignup() {
  const promises = Promise.all([uploadPhoto(), createUser()]);

  promises.then(
    (data) => {
      console.log(data[0].body, data[1].firstName, data[1].lastName);
    },
    () => {
      console.log("Signup system offline");
    }
  );
}

export default handleProfileSignup;
