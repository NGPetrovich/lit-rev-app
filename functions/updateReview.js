const axios = require("axios");
require("dotenv").config();
const { UPDATE_REVIEW } = require("./utils/reviewQueries.js");
const sendQuery = require("./utils/sendQuery.js");
const formattedResponse = require("./utils/formattedResponse");

exports.handler = async (event) => {
  // if (event.httpMethod !== "PUT") {
  //   return formattedResponse(405, { err: "Method not supported" });
  // }

  const { name, url, description, _id: id, archived } = JSON.parse(event.body);
  const variables = { name, url, description, id, archived };

  try {
    const { updateReview: updatedReview } = await sendQuery(
      UPDATE_REVIEW,
      variables
    );

    return formattedResponse(200, updatedReview);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: "something went wrong" });
  }
};
