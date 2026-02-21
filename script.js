//your JS code here. If required.
const form = document.getElementById('book-form');
const bookList = document.getElementById('book-list');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  if (!title || !author || !isbn) return;

  const row = document.createElement('tr');
  row.innerHTML =
    '<td>' + escapeHtml(title) + '</td>' +
    '<td>' + escapeHtml(author) + '</td>' +
    '<td>' + escapeHtml(isbn) + '</td>' +
    '<td><button type="button" class="delete">Clear</button></td>';

  row.querySelector('.delete').addEventListener('click', function () {
    row.remove();
  });

  bookList.appendChild(row);

  titleInput.value = '';
  authorInput.value = '';
  isbnInput.value = '';
  titleInput.focus();
});

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
