import Book from './modulebook.js';

class listBooks {
  static getBooks() {
    let books = [];
    if (localStorage.getItem('books') != null) { books = JSON.parse(localStorage.getItem('books')); }
    return books;
  }

  static addBook(book) {
    const books = listBooks.getBooks();
    const arr = Array.from(books);
    arr.push(book);
    localStorage.setItem('books', JSON.stringify(arr));
    this.addBookDOM(book);
  }

  static addBookDOM(book) {
    const newBook = document.createElement('tr');
    newBook.setAttribute('class', 'book');
    document.querySelector('#list-books').append(newBook);

    const title = document.createElement('td');
    title.setAttribute('class', 'title');
    const txtTitle = document.createTextNode(book.title);
    title.appendChild(txtTitle);
    newBook.appendChild(title);

    const by = document.createElement('td');
    by.setAttribute('class', 'by');
    const txtby = document.createTextNode('by');
    by.appendChild(txtby);
    newBook.appendChild(by);

    const author = document.createElement('td');
    author.setAttribute('class', 'author');
    const txtAuthor = document.createTextNode(book.author);
    author.appendChild(txtAuthor);
    newBook.appendChild(author);

    const btn = document.createElement('button');
    btn.setAttribute('class', 'btn-remove');
    const txtName = document.createTextNode('Remove');
    btn.appendChild(txtName);
    newBook.appendChild(btn);
  }

  static removeBook(target) {
    // Remove LocalStorage
    const x = target;
    const books = listBooks.getBooks();
    const t = x.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
    const author = target.previousElementSibling.previousElementSibling.textContent;
    const res = books.filter((books) => books.title !== t && books.author !== author);
    localStorage.setItem('books', JSON.stringify(res));
    // Remove DOM
    target.parentElement.remove();
  }
}

export { Book, listBooks };