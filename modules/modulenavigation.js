const documentquerySelector = document.querySelector('#nav-add-new-a').addEventListener('click', (e) => {
  e.preventDefault();
  const addNew = document.querySelector('#add-new');
  addNew.classList.remove('hiden');

  const list = document.querySelector('#list');
  list.classList.add('hiden');

  const contact = document.querySelector('#contact');
  contact.classList.add('hiden');
});

const documentquerySelector2 = document.querySelector('#nav-list-a').addEventListener('click', (e) => {
  e.preventDefault();
  const list = document.querySelector('#list');
  list.classList.remove('hiden');

  const addNew = document.querySelector('#add-new');
  addNew.classList.add('hiden');

  const contact = document.querySelector('#contact');
  contact.classList.add('hiden');
});

const documentquerySelector3 = document.querySelector('#nav-contact-a').addEventListener(('click'), (e) => {
  e.preventDefault();
  const contact = document.querySelector('#contact');
  contact.classList.remove('hiden');

  const addNew = document.querySelector('#add-new');
  addNew.classList.add('hiden');

  const list = document.querySelector('#list');
  list.classList.add('hiden');
});
export { documentquerySelector, documentquerySelector2, documentquerySelector3 };