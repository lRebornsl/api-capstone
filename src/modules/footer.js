const footer = () => {
  const footer = document.createElement('footer');
  const container = document.createElement('div');

  footer.classList.add('footer', 'p-fix');
  container.classList.add('container');
  container.innerHTML = '<p>Created By Anthony Vásquez and Andrés Zamorano CC License</p>';
  footer.appendChild(container);
  document.body.appendChild(footer);
};

export default footer;