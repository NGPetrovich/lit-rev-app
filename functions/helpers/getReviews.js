const { table } = require("./airtable");
const formattedResponse = require("./formattedResponse");
module.exports = async (event) => {
  // TODO: get courses
  try {
    const reviews = await table.select().firstPage();
    const formattedReviews = reviews.map((review) => ({
      id: review.id,
      ...review.fields,
    }));
    return formattedResponse(200, formattedReviews);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, {
      msg: "Wow! Seems like something fucked up.",
    });
  }
};
