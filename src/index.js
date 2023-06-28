import './index.scss';
import { header, main, footer } from './modules/wholePage.js';
import { renderPokemon, popupPokemon } from './modules/handlePage.js';
import { postPokemonLikeId } from './modules/crudInvolvementAPI.js';

header();
main();
renderPokemon();
footer();

const commentBtn = document.querySelectorAll('.commentBtn');
const likeBtn = document.querySelectorAll('.likeBtn');

commentBtn.forEach((item) => {
  item.addEventListener('click', () => {
    const { id } = item.parentElement.parentElement;
    popupPokemon(id);

    const btnClose = document.querySelector('.closeBtn');

    btnClose.addEventListener('click', () => {
      const divClose = document.querySelector('.cardPop');
      const blur = document.querySelector('.blur');
      divClose.remove();
      blur.remove();
    });
  });
});

likeBtn.forEach((item) => {
  item.addEventListener('click', () => {
    const { id } = item.parentElement.parentElement.parentElement;
    postPokemonLikeId(id);
  });
});