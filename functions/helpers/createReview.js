const { table } = require("./airtable");
const formattedResponse = require("./formattedResponse");
module.exports = async (event) => {
  try {
    const fields = JSON.parse(event.body);
    const createdReview = await table.create([{ fields }]);
    return formattedResponse(200, createdReview);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, {
      msg: "Seems like POST method fucked up.",
    });
  }
};
