import getPokemon from './crudPokeAPI.js';
import heartIcon from '../assets/poke_heart_icon.png';

export const renderPokemon = async () => {
  for (let i = 1; i <= 21; i += 1) {
    // eslint-disable-next-line
    const pokeData = await getPokemon(i);
    const pokeImg = pokeData.data.sprites.versions['generation-v']['black-white'].animated.front_default;
    const pokeName = pokeData.data.name[0].toUpperCase() + pokeData.data.name.substring(1);
    const container = document.querySelector('.pokeCards');
    const card = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const descCont = document.createElement('div');
    const likeCont = document.createElement('div');
    const likeImg = document.createElement('img');
    const likeCount = document.createElement('p');
    const buttonCont = document.createElement('div');
    const commentButton = document.createElement('button');

    // Show pokemon GIF
    card.classList.add('card');
    imgCont.classList.add('pokeImg', 'flex');
    img.src = pokeImg;
    imgCont.appendChild(img);
    card.append(imgCont);

    // Create pokemon description and likes
    descCont.classList.add('descCont', 'flex');
    descCont.innerHTML = `<h3>${pokeName}</h3>`;
    likeCont.classList.add('likeCont');
    likeImg.src = heartIcon;
    likeCont.append(likeImg);
    likeCount.innerText = '1';
    likeCont.append(likeCount);
    descCont.append(likeCont);
    card.append(descCont);

    // Create comment button
    buttonCont.classList.add('buttonCont');
    commentButton.innerText = 'Comment';
    buttonCont.append(commentButton);
    card.append(buttonCont);

    container.appendChild(card);
  }
};

export default renderPokemon;