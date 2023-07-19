import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { displayNewBook, getBooksFromApi } from '../redux/books/booksSlice';

function NewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    e.preventDefault();
    setAuthor(e.target.value);
  };
  return (
    <>
      <h4>ADD NEW BOOK</h4>
      <form
        className="form-container"
        onSubmit={async (e) => {
          e.preventDefault();
          await dispatch(displayNewBook({ title, author }));
          await dispatch(getBooksFromApi());
        }}
      >
        <input
          type="text"
          placeholder="Book title"
          className="input-text"
          value={title}
          onChange={(e) => { handleTitle(e); }}
        />
        <input
          type="text"
          placeholder="Author name"
          className="input-text"
          value={author}
          onChange={(e) => { handleAuthor(e); }}
        />
        <button className="input-submit" type="submit">
          Add Book
        </button>
      </form>
    </>
  );
}

export default NewBook;
