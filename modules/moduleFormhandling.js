/* eslint-disable no-restricted-globals */
import { Book, listBooks } from './moduleLinkedList.js';

const addbook = document.querySelector('#form');
const addEventlist = addEventListener('submit', (e) => {
  e.preventDefault();
  const newTitle = document.querySelector('#title').value;
  const newAuthor = document.querySelector('#author').value;
  const book = new Book(newTitle, newAuthor);
  listBooks.addBook(book);
  document.getElementById('form').reset();
});

const listbooksfuction = document.querySelector('#list-books').addEventListener('click', (e) => {
  listBooks.removeBook(e.target);
});
const windowlist = window.addEventListener('load', (e) => {
  e.preventDefault();
  const list = listBooks.getBooks();
  list.forEach((book) => listBooks.addBookDOM(book));
});

export {
  addbook, addEventlist, windowlist, listbooksfuction,
};