import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { getBooksFromApi } from '../redux/books/booksSlice';
import styles from '../stylesF/BooksList.module.css';

function BooksList() {
  const { bookList } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksFromApi());
  }, [dispatch]);
  return (
    <span className={styles.bookList}>
      {
        bookList.map((item) => (
          <Book
            key={item.item_id}
            bookData={item}
          />
        ))
      }
    </span>
  );
}

export default BooksList;
