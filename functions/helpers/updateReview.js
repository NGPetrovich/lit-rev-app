const { table } = require("./airtable");
const formattedResponse = require("./formattedResponse");
module.exports = async (event) => {
  try {
    const { id, ...fields } = JSON.parse(event.body);
    const updatedReviews = await table.update([{ id, fields }]);
    return formattedResponse(200, updatedReviews);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, {
      msg: "Seems like PUT method fucked up.",
    });
  }
};
