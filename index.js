module.exports = {
  useDrupalJSONAPI: async (options) => {
    let includeString;

    if (options.include) {
      includeString = "?include=";
      options.include.forEach((fieldToInclude) => {
        includeString += fieldToInclude;
      });
    }

    // Fetch the data
    let response = await fetch(
      `${options.baseURL}/${options.apiBase || "jsonapi"}/node/${
        options.collection
      }${includeString}${options.sort ? "&sort=" + options.sort : ""}`
    );

    // check if request was successful
    if (response.status === 200) {
      let data = await response.json();
      return data;
    }
    if (response.status === 404) {
      return { error: "Could not locate the requested information." };
    } else {
      return {
        error: "Uh oh! Something went wrong, please double check your options.",
      };
    }
  },
};
