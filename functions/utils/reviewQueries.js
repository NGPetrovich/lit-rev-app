const GET_REVIEWS = `
  query{
    allReviews{
      data {
        _id
        name
        url
        description
        archived
      }
    }
  }`;

const CREATE_REVIEW = `
  mutation($name: String!, $url: String!, $description: String!) {
    createReview( data: { name: $name, url: $url, description: $description, archived: false}) {
      _id
      name
      url
      description
      archived
    }
  }
`;

const UPDATE_REVIEW = `
  mutation($id: ID!, $archived: Boolean!, $name: String!, $url: String!, $description: String!) {
    updateReview( id:$id, data: { name:$name, url: $url, description: $description, archived: $archived}) {
      _id
      name
      url
      description
      archived
    }
  }
`;

const DELETE_REVIEW = `
  mutation($id: ID!) {
    deleteReview( id: $id ) {
      _id
    }
  }
`;

module.exports = {
  GET_REVIEWS,
  CREATE_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
};
