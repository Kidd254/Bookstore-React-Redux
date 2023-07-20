import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { displayNewBook, getBooksFromApi } from '../redux/books/booksSlice';
import styles from '../styles/NewBook.module.css';

function NewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <>
      <div className={styles.formTitle}>ADD NEW BOOK</div>
      <form
        className={styles.formContainer}
        onSubmit={async (e) => {
          e.preventDefault();
          await dispatch(displayNewBook({ title, author }));
          await dispatch(getBooksFromApi());
        }}
      >
        <input
          type="text"
          placeholder="Book title"
          className={styles.input1}
          value={title}
          onChange={(e) => handleTitle(e)}
        />
        <input
          type="text"
          placeholder="Author name"
          className={styles.input}
          value={author}
          onChange={(e) => handleAuthor(e)}
        />
        <button className={styles.primaryBtnBig} type="submit">
          Add Book
        </button>
      </form>
    </>
  );
}

export default NewBook;
