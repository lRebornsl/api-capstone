const axios = require('axios').default;

const appId = '19ZJvuqHVwq8iUHpGDJZ';
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

export const postPokemonLikeId = (id) => {
  axios.post(url, { item_id: id });
};

export default postPokemonLikeId;