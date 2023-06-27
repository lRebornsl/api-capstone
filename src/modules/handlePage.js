import getPokemon from './crudPokeAPI.js';
import heartIcon from '../assets/poke_heart_icon.png';

export const popup = async (pokeData, pokeImg, pokeName) => {
  let type = pokeData.data.types;
  type = type.map((item) => item.type.name).join(', ');

  const cardPop = document.createElement('div');
  cardPop.id = 'cardPop';
  document.body.appendChild(cardPop);

  const divBut = document.createElement('div');
  divBut.className = 'close';
  cardPop.appendChild(divBut);
  const butClose = document.createElement('button');
  butClose.innerText = 'X';
  butClose.addEventListener('click', () => {
    const divClose = document.getElementById('cardPop');
    divClose.remove();
  });
  divBut.appendChild(butClose);

  const imgDiv = document.createElement('div');
  imgDiv.className = 'img';
  cardPop.appendChild(imgDiv);

  const img = document.createElement('img');
  img.src = pokeImg;
  imgDiv.appendChild(img);

  const text = document.createElement('h1');
  text.textContent = `${pokeName}`;
  cardPop.appendChild(text);

  const des = document.createElement('div');
  des.className = 'description';
  let item = document.createElement('p');
  item.textContent = `Base experience: ${pokeData.data.base_experience}`;
  des.appendChild(item);
  item = document.createElement('p');
  item.textContent = `Pokemon type: ${type}`;
  des.appendChild(item);
  item = document.createElement('p');
  item.textContent = `Pokemon weight: ${pokeData.data.weight}`;
  des.appendChild(item);
  item = document.createElement('p');
  item.textContent = `Pokemon height: ${pokeData.data.height}`;
  des.appendChild(item);
  cardPop.appendChild(des);
};

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
    commentButton.addEventListener('click', () => {
      popup(pokeData, pokeImg, pokeName);
    });
    buttonCont.append(commentButton);
    card.append(buttonCont);

    container.appendChild(card);
  }
};
