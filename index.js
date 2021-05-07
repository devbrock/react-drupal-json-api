module.exports = {
  useDrupalJSONAPI: async (options) => {
    let {
      baseURL = "",
      collection = "",
      include = [],
      sortBy = "",
      apiBase = "jsonapi",
    } = options;

    if (include.length !== 0) {
      if (include.length === 1) {
        include = `?include=${include}`;
      } else {
        let tempString = "";
        include.forEach((element, index) => {
          if (index !== 0) {
            tempString += `.${element}`;
          }
        });
        include = `?include=${include[0] + tempString}`;
      }
    }

    let filters = `${include}${sortBy !== "" ? `&sort=${sortBy}` : ""}`;
    if (include.length === 0 && sortBy !== "") {
      filters = `?sort=${sortBy}`;
    }

    let fullURL = `${baseURL}/${apiBase}${
      collection === "" ? "" : `/node/${collection}${filters}`
    }`;

    let response = await fetch(fullURL);

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
