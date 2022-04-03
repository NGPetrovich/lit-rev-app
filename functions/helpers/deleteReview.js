const { table } = require("./airtable");
const formattedResponse = require("./formattedResponse");
module.exports = async (event) => {
  try {
    const { id } = JSON.parse(event.body);
    const deletedReview = await table.destroy(id);
    return formattedResponse(200, deletedReview);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, {
      msg: "Wow! Seems like DELETE method fucked up.",
    });
  }
};
