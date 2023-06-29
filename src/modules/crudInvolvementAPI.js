const axios = require('axios').default;

const appId = '19ZJvuqHVwq8iUHpGDJZ';
const urlLikes = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
const urlCommentsPOST = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`;

export const postPokemonLikeId = async (id) => {
  await axios.post(urlLikes, { item_id: id });
};

export const getPokemonLikeId = async () => {
  const results = await axios.get(urlLikes)
    .catch((error) => {
      if (error.response) {
        const arr = { data: [{ item_id: '', likes: 0 }] };
        return arr;
      }
      return null;
    });
  return results.data;
};

export const postPokemonComment = (id, username, comment) => {
  axios.post(urlCommentsPOST, { item_id: id, username, comment });
};

export const getPokemonComment = (id) => {
  const urlCommentsGET = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${id}`;
  const results = axios.get(urlCommentsGET)
    .catch((error) => {
      if (error.response) {
        const arr = { data: [{ comment: '', creation_date: '', username: 'whitout comments' }] };
        return arr;
      }
      return null;
    });
  return results;
};
