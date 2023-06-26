// file header 1440px
const liItem = (desc) => {
  const ul = document.querySelector('.navBar');
  const uLi = document.createElement('li');
  uLi.className = 'navItem';
  ul.appendChild(uLi);
  const tagA = document.createElement('a');
  tagA.href = '#';
  tagA.textContent = `${desc}`;
  uLi.appendChild(tagA);
};

const header = () => {
  const header = document.createElement('header');
  header.className = 'header';
  document.body.appendChild(header);

  const container = document.querySelector('.header');
  const box = document.createElement('div');
  box.classList = 'container';
  container.appendChild(box);

  const logo = document.createElement('img');
  logo.className = 'logo';
  logo.alt = 'pokemon logo';
  box.appendChild(logo);

  const uList = document.createElement('ul');
  uList.className = 'navBar';
  box.appendChild(uList);

  liItem('Pokemon');
  liItem('Locations');
  liItem('Items');
};

export default header;
