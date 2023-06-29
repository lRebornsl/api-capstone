const axios = require('axios').default;

const appId = '19ZJvuqHVwq8iUHpGDJZ';
const urlLikes = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

export const postPokemonLikeId = (id) => {
  axios.post(urlLikes, { item_id: id });
};

const urlCommentsPOST = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

export const postPokemonComment = (id, username, comment) => {
  axios.post(urlCommentsPOST, { item_id: `${id}`, username: `${username}`, comment: `${comment}` });
};

export const getPokemonComment = (id) => {
  const urlCommentsGET = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=item${id}`;
  const results = axios.get(urlCommentsGET)
    .catch((error) => {
      if (error.response) {
        const arr = { data: [{ comment: '', creation_date: '', username: 'whitout comments ' }] };
        return arr;
      }
      return null;
    });
  return results;
};
