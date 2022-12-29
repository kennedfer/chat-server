import axios from "axios";
import fs from "fs";

export const getMessagesJson = async () => {
  let messagesObj;

  //MAKE ENVIROMENT VARIABLE
  await axios
    .get("https://api.jsonbin.io/v3/b/63addd4301a72b59f23bdb75/1")
    .then(function (response) {
      messagesObj = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return messagesObj.record;
};

export const postMessagejson = async (requestBody) => {
  const config = {
    headers: {
      "content-type": "application/json",
      "X-Master-Key":
        "$2b$10$HsyvwxdxpxbSeGNBElK9jeti8KAhscS4w34erHfLrK0edDcPda7Re",
      "X-Bin-Versioning": "false",
    },
  };
  const url = "https://api.jsonbin.io/v3/b/63addd4301a72b59f23bdb75";

  var oldMessagess = await getMessagesJson();
  oldMessagess.messages.push(requestBody);

  axios
    .put(url, oldMessagess, config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err.response));
};
// async function build(){
// console.log(await getMessagesJson());
// }

// build()
