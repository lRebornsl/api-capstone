import heartIcon from '../assets/poke_heart_icon.png';
import {
  addPokeImg, addPokeName, addPopupPokeData, addPopupPokeComment, addPokeLike,
} from './handlePokeAPI.js';

export const renderPokemon = () => {
  for (let i = 1; i <= 21; i += 1) {
    const container = document.querySelector('.pokeCards');
    const card = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const descCont = document.createElement('div');
    const name = document.createElement('h3');
    const likeCont = document.createElement('div');
    const likeImg = document.createElement('img');
    const likeCount = document.createElement('p');
    const buttonCont = document.createElement('div');
    const commentButton = document.createElement('button');

    // Show pokemon GIF
    card.classList.add('card');
    card.id = i;
    imgCont.classList.add('pokeImg', 'flex');
    img.classList.add('img');
    imgCont.appendChild(img);
    card.append(imgCont);

    // Create pokemon description and likes
    descCont.classList.add('descCont', 'flex');
    name.classList.add('name');
    descCont.append(name);
    likeCont.classList.add('likeCont');
    likeImg.classList.add('likeBtn');
    likeImg.src = heartIcon;
    likeCont.append(likeImg);
    likeCount.classList.add('likeCount');
    likeCount.innerText = '0';
    likeCont.append(likeCount);
    descCont.append(likeCont);
    card.append(descCont);

    // Create comment button
    buttonCont.classList.add('buttonCont');
    commentButton.classList.add('commentBtn');
    commentButton.innerText = 'Comments';
    buttonCont.append(commentButton);
    card.append(buttonCont);

    container.appendChild(card);
  }
  addPokeLike();
  addPokeImg();
  addPokeName();
};

export const popupPokemon = (id) => {
  const cardPop = document.createElement('div');
  const divBut = document.createElement('div');
  const butClose = document.createElement('button');
  const imgDiv = document.createElement('div');
  const img = document.createElement('img');
  const nameCont = document.createElement('div');
  const text = document.createElement('h1');
  const des = document.createElement('div');
  const beItem = document.createElement('p');
  const ptItem = document.createElement('p');
  const pwItem = document.createElement('p');
  const phItem = document.createElement('p');
  const divTitleCom = document.createElement('div');
  const divComm = document.createElement('div');
  const formDiv = document.createElement('div');
  const form = document.createElement('form');
  const formTitle = document.createElement('h3');
  const userInput = document.createElement('input');
  const commInput = document.createElement('textarea');
  const br1 = document.createElement('br');
  const br2 = document.createElement('br');
  const subInput = document.createElement('input');
  const blur = document.createElement('div');

  cardPop.id = id;
  cardPop.classList.add('cardPop');
  document.body.appendChild(cardPop);

  divBut.classList.add('close', 'flex');
  cardPop.appendChild(divBut);
  butClose.classList.add('closeBtn');
  butClose.innerText = 'X';
  divBut.appendChild(butClose);

  imgDiv.classList.add('popupPokeImg', 'flex');
  cardPop.appendChild(imgDiv);
  img.classList.add('popupImg');

  imgDiv.appendChild(img);

  nameCont.classList.add('nameCont');
  text.classList.add('popupName');
  nameCont.append(text);
  cardPop.appendChild(nameCont);

  des.classList.add('description', 'grid');
  beItem.classList.add('beItem');
  ptItem.classList.add('ptItem');
  pwItem.classList.add('pwItem');
  phItem.classList.add('phItem');
  des.append(beItem);
  des.append(ptItem);
  des.append(pwItem);
  des.append(phItem);
  cardPop.appendChild(des);

  // Coments title and counter
  divTitleCom.className = 'titleComment';
  cardPop.appendChild(divTitleCom);

  // display comments
  divComm.className = 'comments';
  cardPop.appendChild(divComm);

  // comments form
  formDiv.className = 'formContainer';
  form.className = 'form';
  formTitle.textContent = 'Add a comment';
  userInput.placeholder = 'Your name';
  userInput.className = 'user';
  userInput.required = 'true';
  commInput.placeholder = 'Your insights';
  commInput.className = 'comment';
  commInput.required = 'true';
  subInput.className = 'submit';
  subInput.type = 'submit';
  subInput.value = ' Comment ';
  form.append(formTitle, userInput, br1, commInput, br2, subInput);
  formDiv.appendChild(form);
  cardPop.appendChild(formDiv);

  blur.classList.add('blur');
  document.body.appendChild(blur);

  addPopupPokeData();
  addPopupPokeComment();
};
