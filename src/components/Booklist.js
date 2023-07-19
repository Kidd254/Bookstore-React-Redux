import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { getBooksFromApi } from '../redux/books/booksSlice';
import styles from '../Styles/BooksList.css';

function BooksList() {
  const { bookList } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksFromApi);
  });
  return (
    <ul className={styles.bookList}>
      {
        bookList.map((item) => (
          <Book
            key={item.item_id}
            bookData={item}
          />
        ))
      }
    </ul>
  );
}

export default BooksList;
